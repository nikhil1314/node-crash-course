const fs=require('fs');
const path=require('path');

//craete folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err =>{
//     if(err) throw err;
//     console.log('folder created...');
// });

//write file data
// fs.writeFile(
//     path.join(__dirname,'/test','hello.txt'),
//     'hello world!',
//     err =>{
//         if (err) throw err;
//         console.log('file writeen..');
//     }
// );
//append file
// fs.appendFile(
//     path.join(__dirname,'/test','hello.txt'),
//     'i love node.js',
//     err =>{
//         if (err) throw err;
//         console.log('file writeen..');
//     }
// );
//read file
fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data)=>{
    if (err) throw err;
    console.log(data);
});
//rename
fs.rename(
    path.join(__dirname,'/test','hello.txt'),
    path.join(__dirname,'/test','hello test.txt'),err =>{
        if(err) throw err;
        console.log('file renamed...');
    
    }
);