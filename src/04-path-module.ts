// build and read the file paths

import path from "node:path";

// get project root directory
const projectRoot = process.cwd();
// console.log(projectRoot);

// uploads/users/42<-userid/profilepic.png consider you have the save images this directory
const userId = "42";
const fileName = "profilepic.png";

// imp->path.join creates the path string
// it will not create the folder
// it does not check whether the file exist or not 
const uploadFilePath = path.join(
    projectRoot,"uploads","users",userId,fileName

);

console.log(uploadFilePath);

// path.basename -> takes a full path and gives you only the last part 
const finalPart = path.basename(uploadFilePath);
const fileExt = path.extname(uploadFilePath);
const parentFolder = path.dirname(uploadFilePath)
console.log(finalPart,fileExt);
console.log(parentFolder);

