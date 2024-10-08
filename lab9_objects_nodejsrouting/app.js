//import the http module
const http =require('http')
const fs =require('fs')

 
//create server
const server=http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html'})

// create routing using url
const url=request.url
if(url ==='/home'|| url === '/'){
    fs.createReadStream('index.html').pipe(response)
}
else if (url === '/about'){
fs.createReadStream('about.html').pipe(response)
}
else {
    fs.createReadStream('404.html').pipe(response)
}
})
// server is listenning to port 3000 
server.listen (3200,function(){
    console.log('Server is running')
})