const path = require('path')

console.log(path.sep)  // it is root

const filePath = path.join('/content/', 'subfolder', 'test.txt')  // used to join path
console.log(filePath)

const base = path.basename(filePath)
console.log(base)  // last folder or file in path

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)  // show path from mount point to file.txt
