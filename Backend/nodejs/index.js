const fs=require('fs');


// fs.writeFileSync("./ds-b.txt", "Hello World!");
// fs.writeFileSync("./abes.txt", "Hello Abes college");



// fs.readFileSync("./abes.txt", "utf-8");
// const data=fs.readFileSync("./abes.txt", "utf-8");
// console.log(data);



// fs.writeFile("./abes.txt", "Welcome to Abes college", ()=>{});

// fs.readFile("./abes.txt", "utf-8", (err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     } 
// });





// fs.writeFileSync("./a1.txt", "Hello A1 batch!");
// fs.writeFileSync("./a2.txt", "Hello A2 batch!");
// fs.writeFileSync("./a3.txt", "Hello A3 batch!");

// fs.writeFile("./a4.txt", "Hello A4 batch!", ()=>{});
// fs.writeFile("./a5.txt", "Hello A5 batch!", ()=>{});




// fs.readFileSync("./a1.txt", "utf-8");
// const data1=fs.readFileSync("./a1.txt", "utf-8");
// console.log(data1);
// fs.readFile("./a4.txt", "utf-8", (err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{   
//         console.log(data);
//     }
// }); 



// fs.appendFileSync("./a1.txt", " Welcome to A1 batch!");
// fs.appendFile("./a4.txt", " Welcome to A4 batch!", ()=>{});



// fs.cpSync("./a2.txt", "./copies/a2.txt");
// fs.cp("./a5.txt", "./copies/a5.txt", ()=>{}); 
// fs.cp("./a3.txt", "./copies/a3.txt", ()=>{});
// fs.cpSync("./copies", "./all-copies");




// fs.appendFile("./a1.txt", " Welcome to A1 batch!", (err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("File appended successfully!");
//     }
// }); 




// const os=require('os');

// console.log("system platform", os.platform());
// console.log("user info", os.userinfo());
// console.log("system uptime", os.uptime());
// console.log("system architecture", os.arch());
// console.log("system cpu info", os.cpus());
// console.log("system free memory", os.freemem());
// console.log("system total memory", os.totalmem());
// console.log("system home directory", os.homedir());
// console.log("system hostname", os.hostname());




const http=require('http');
const fs=require('fs');
const home= fs.readFileSync('./a.html');
const myserver=http.createServer((req,res)=> {
    res.end(home)
})

myserver.listen(8000,()=> console.log("server is run"));