// import fs from 'fs';
// import path from 'path';
const fs = require("fs");
const path = require("path");

const getFilesFromDir = (dir, fileTypes) => {
  const filesToReturn = [];

  const walkDir = (currentPath) => {
    const files = fs.readdirSync(currentPath);

    for (let i in files) {
      const currentFile = path.join(currentPath, files[i]);
      if (fs.statSync(currentFile).isFile() &&
        fileTypes.indexOf(path.extname(currentFile)) != -1) {
        filesToReturn.push(currentFile);
      } else if (fs.statSync(currentFile).isDirectory()) {
        walkDir(currentFile);
      }
    }
  };

  walkDir(dir);
  return filesToReturn;
}

module.exports = getFilesFromDir;