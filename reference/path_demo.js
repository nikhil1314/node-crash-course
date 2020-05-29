const path=require('path');

//base file name
console.log(path.basename(__filename));

//directory name
console.log(path.dirname(__filename));
//extension name
console.log(path.extname(__filename));
//craete path object
console.log(path.parse(__filename).base);
//concatinating the paths
console.log(path.join(__dirname,'test','hello.html'));