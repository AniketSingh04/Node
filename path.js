const path = require("path"); //importing path module

console.log(__filename);
console.log(path.basename(__filename));//returns base file name
console.log(path.dirname(__filename));//returns directory name
console.log(path.parse("/Users/aniketsingh/Desktop/NodeJs/path.js")); //returns path object
console.log(path.isAbsolute("/Users/aniketsingh/Desktop/NodeJs/path.js")); //returns true or false
console.log(path.normalize('/foo/bar//baz/asdf/quux/..')); // Returns: '/foo/bar/baz/asdf');
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')); //joins all given path segments together using the platform-specific separator as a delimiter