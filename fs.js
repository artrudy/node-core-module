// const fs = require("fs");

const fs = require("fs/promises");

//write to a file

//callback version

// fs.writeFile("file1.txt", "hello world", (err) => {
//   if (err) throw err;
//   console.log("File created");
// });

//promise verion

// fs.writeFile("file2.txt", "hello world 2 ")
//   .then(() => console.log("File created"))
//   .catch((err) => console.log(err));

//Sync version

// fs.writeFileSync("file3.txt", "hello world 3");
// console.log("File created");

//Async /await

// async function createFile(filename, content) {
//   try {
//     await fs.watchFile(filename, content);
//     console.log("File created");
//   } catch (error) {
//     console.log(error);
//   }
// }

// createFile("file4.txt", "Hello world 4!");

//read file

// async function readFromFile(filename) {
//   try {
//     const data = await fs.readFile(filename, "utf-8");
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// readFromFile("file1.txt");

//delete file

// async function deleteFile(filemane) {
//   try {
//     await fs.unlink(filename);
//     console.log(`File ${filemane} was deleted.`);
//   } catch (error) {
//     console.log(error);
//   }
// }

// deleteFile("file2.txt");

// async function renameFile(oldName, newName) {
//   try {
//     await fs.rename(oldName, newName);
//     console.log(`File ${oldName} was renamed to ${newName}`);
//   } catch (error) {
//     console.log(error);
//   }
// }

// renameFile("file1.txt", "file5.txt");

//make folder

async function createDir(foldername) {
  try {
    await fs.mkdir(foldername);
    console.log(`Folder ${foldername} was created.`);
  } catch (error) {
    console.log(error);
  }
}

createDir("zx");
