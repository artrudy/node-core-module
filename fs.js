// const fs = require("fs");

// const fs = require("fs/promises");

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

async function createFile(filename, content) {
  try {
    await fs.watchFile(filename, content);
    console.log("File created");
  } catch (error) {
    console.log(error);
  }
}

createFile("file4.txt", "Hello world 4!");
