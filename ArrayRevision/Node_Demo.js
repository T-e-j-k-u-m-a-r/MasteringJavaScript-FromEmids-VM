const path = require('path')
const os = require('os')

console.log("complete directory path :: " + __dirname);
console.log("complete filepath with filename :: " + __filename);
console.log("extension name :: " + path.extname(__filename));
console.log("filename with extension name :: " + path.basename(__filename));

console.log('**--**--**--**--**')

console.log("hostname of operating system: " + os.hostname());
console.log("platform details: " + os.platform());
console.log("operating system release details: " + os.release());
console.log("CPUS Details: " + os.cpus());
console.log('**--**--**--**--**')
for (const ele of os.cpus()) {
    console.log(ele);
}
console.log('**--**--**--**--**')
console.log("Version Details: " + os.version());