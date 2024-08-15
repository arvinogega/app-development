// import assert. Assert is used to compare two Booleanvalues
const assert = require("assert")
//import student schema
const Student = require('../src/students')

// describe function to push testing though Mocha
describe("Create the first data",function(){
    it('Saved the student',function(){
       //create a new student
       const student1 = new Student({name:"Peter"})

       //read and save the student in the database. Mongo will save the new student in the database
       student1.save()

       //check if the student is not new using the .then method.
       //if the studnet is, the promise reaches the 'fullfilled' state and will proceed to create the schema for the new student.Otherwise, the promise reaches the 'rejeted' stet and will proceed to reject line 'student1.save()'
       .then(function(){
        assert(!student1.isNew)
       })
    })
})