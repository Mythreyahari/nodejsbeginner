import path from "node:path";
import fs from "node:fs";
import fsPromises from "node:fs/promises";

const Demo_Folder_path = path.join(process.cwd(), "file-system", "fs-demo");
const Sync_File_Path = path.join(Demo_Folder_path, "sync-note.txt");
const Callback_File_Path = path.join(Demo_Folder_path, "callback-note.txt");
const Promise_File_Path = path.join(Demo_Folder_path, "promise-note.txt");

type FileResult = {
  style: string;
  fileName: string;
  content: string;
  sizeInBytes: number;
};

// fs-file system
// create folders
// write files
// check file information
// delete files

// sync apis
// callback apis
// promise apis

function runCallbackExample(): Promise<FileResult> {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      Callback_File_Path,
      "created using callback fs",
      "utf-8",
      (writeError) => {
        if (writeError) {
          reject(writeError);
          return;
        }
        fs.appendFile(
          Callback_File_Path,
          " append using callback fs",
          "utf-8",
          (appendError) => {
            if (appendError) {
              reject(appendError);
              return;
            }
            fs.readFile(Callback_File_Path, "utf-8", (readError, content) => {
              if (readError) {
                reject(readError);
                return;
              }
              fs.stat(Callback_File_Path, (statError, stats) => {
                if (statError) {
                  reject(statError);
                  return;
                }

                resolve({
                  style: "Callback",
                  content,
                  sizeInBytes: stats.size,
                  fileName: path.basename(Callback_File_Path),
                });
              });
            });
          },
        );
      },
    );
  });
}

// promise apis
async function runPromiseExample(): Promise<FileResult> {
  await fsPromises.writeFile(
    Promise_File_Path,
    "created using the promise apis",
    "utf-8",
  );
  await fsPromises.appendFile(
    Promise_File_Path,
    " appended using the promise apis ",
    "utf-8",
  );
  const content = await fsPromises.readFile(Promise_File_Path, "utf-8");
  const stat = await fsPromises.stat(Promise_File_Path);

  return {
    style: "promise",
    content,
    fileName: path.basename(Promise_File_Path),
    sizeInBytes: stat.size,
  };
}

function ensureDemoFolderExist(): void {
  if (!fs.existsSync(Demo_Folder_path)) {
    fs.mkdirSync(Demo_Folder_path, { recursive: true });
  }
}

function runSyncExample(): FileResult {
  // write content to the file
  fs.writeFileSync(Sync_File_Path, "created using sync fs", "utf-8");
  fs.appendFileSync(Sync_File_Path, " append using sync fs", "utf-8");

  const content = fs.readFileSync(Sync_File_Path, "utf-8");
  const stat = fs.statSync(Sync_File_Path);

  return {
    style: "sync",
    content,
    fileName: path.basename(Sync_File_Path),
    sizeInBytes: stat.size,
  };
}

async function main(): Promise<void> {
  try {
    ensureDemoFolderExist();
    const syncResult = runSyncExample();
    const callbackResult = await runCallbackExample();
    const promiseResult = await runPromiseExample();
    console.log([syncResult, callbackResult,promiseResult]);
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown error";
    console.log("file system error", message);
  }
}

main();
