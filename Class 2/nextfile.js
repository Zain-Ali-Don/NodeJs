require("dotenv").config()
let modules = require("http")

let { exec } = require("child_process")
let port_no = process.env.PORT 


modules.createServer(function(req,res){
   if(req.url === "/"){
res.writeHead(200,{'Content-Type':'text/html'})
   res.write(`<h1>Home Page</h1>
   <ul>
   <li><a href="/c">Contact Page</a></li>
   <li><a href="/a">About Page</a></li>
   <li><a href="/l">Location Page</a></li>
   </ul> 
    `
   )
   res.end()
   }
   else if(req.url === "/a"){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(`<h1>About Page</h1> 
    <ul>
   <li><a href="/">Home Page</a></li>
   <li><a href="/c">Contact Page</a></li>
   <li><a href="/l">Location Page</a></li>
   </ul> `)
    res.end()    
    }
   else if(req.url === "/c"){
   res.writeHead(200,{'Content-Type':'text/html'})
   res.write(`<h1>Contact Page</h1> 
   <ul>
   <li><a href="/">Home Page</a></li>
   <li><a href="/a">About Page</a></li>
   <li><a href="/l">Location Page</a></li>
   </ul>`)
   res.end()    
   }
   else if(req.url === "/l"){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(`<h1>Location Page</h1> 
    <ul>
   <li><a href="/c">Contact Page</a></li>
   <li><a href="/a">About Page</a></li>
   <li><a href="/">Home Page</a></li>
   </ul>`)
    res.end()    
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'})
        res.write("<h1 style='color:red'>Page Not Found</h1>")
        res.end()
    }
}).listen(port_no,()=>{
    console.log(`Server is running on port http://localhost:${port_no}`)
    let u = `http://localhost:${port_no}`;
    if(process.platform === "win32"){
       exec(`start ${u}`)
    }
})