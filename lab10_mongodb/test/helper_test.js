// import mongoose
const mongoose= require ('mongoose')

// connect to MongoDB where 'studens_list'is the name lf the database
mongoose.connect("mongodb://localhost/students_list")

//check if it is connected
mongoose.connection
// use .once to watch for mongo DB to connect the first time when the event occurred
.once('open',function(){console.log('\n---Connected to MongoDB---\n')})
//use .on to watch for error i the connection
.on('error', function(e){console.log('Error connecting'),e})

//clear all collection from 'Students'document
beforeEach(function(done){
    mongoose.connection.collections.students.drop()
    done()
})