// import
const assert = require('assert')
const {describe,beforeEach} = require('mocha')
const Student = require('../src/students')

describe('Read the data ', function(){
    let student1, student2

    beforeEach(function(done){
        student1 = new Student({name:"Peter"})
        student2 = new Student({name:"Martha"})
        student1.save()
        student2.save()
        .then(function(){done()})
    })
it('Find all students with name Martha',async()=>{
    const students = await Student.findOne({name:"Martha"})
    console.log(students)
    console.log(students._id)
})
})