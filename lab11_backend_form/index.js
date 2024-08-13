//import libraries,dependencies
const express =require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')

//create an app using express
const app= express()

//use the body-parse middleware to handle data sent in the body of HTTP
app.use(bodyParser.json())
//use express to server static files. Any files in the 'Public'folder will be accesible from the root URL of the web server.

app.use(express.static('public'))
// user express body-parser for parsing url-encoded request bodies (typically from HTML form)
app.use(bodyParser.urlencoded({extended:true}))

//connect to the data base using mongoose
//{useNewUrlParser:true, useUnifiedTopolohy:true} option tp make sure that uses the new Parser and new Server and Monitoring Enginee.
mongoose.connect('mongodb://localhost/userlogin',{useNewUrlParser:true, useUnifiedTopology:true})

//check connection
mongoose.connection
.once('open',function(){console.log('Connected to userlogin database')})
.on('error',function(e){console.log('Error connecting...',e)})

//posting the form
app.post('/login', async(request,response)=>{
    try{
        //get the data from index.html form
        const username=request.body.username
        const password=parseInt(request.body.password) //password is casted as an integer
        
        //testing
        console.log(`Enter username=${username} and entered password=${password}`)

//get data from database , MongoDB, and check if information, username and password matches
const user=await mongoose.connection.db.collection('users').findOne({username:username})
//check if username matches
if (!user){
    return response.send('Information does not match');
}
//check if password matches
if (username.password === password){
    console.log('Loggged in succesfully');
}
else{
    console.log('Password does not match')
}
    } 
    catch  (error){
        response.status(500).send('Internal server error'); //400 status error means internal server error
    }
})
//create checking page
app.get('/',function(request,response){
    response.redirect('index.html')
}) .listen(3000)