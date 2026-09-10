// buffers -> raw binary data
// binary data means - when you have your data stored in bytes

import { log } from "node:console";
import { buffer } from "node:stream/consumers";

// reading files
// receiving http req bodies
// working with streams
// handling pdf files,images,videos
// encrypt and hashing

const textBuffer = Buffer.from("Node");
console.log(textBuffer);
console.log(textBuffer.toString());

const engBuffer = Buffer.from("Hello");
console.log(engBuffer.length);

const fixedBuffer = Buffer.alloc(5);
console.log("it is the empty and fixed Buffer:", fixedBuffer);

fixedBuffer.write("API");
console.log("fixed buffer after write:", fixedBuffer);
console.log("fixed buffer as an text:", fixedBuffer.toString("utf-8"));

const chunks = [Buffer.from("Hello "), Buffer.from("Node "), Buffer.from("JS")];
const combineBuffer = Buffer.concat(chunks);
console.log(combineBuffer,combineBuffer.toString("utf-8"));

