import { Component } from '@angular/core';
import { User } from './user.model';
import { User_repository } from './repository.model';
import { FormsModule, NgForm } from '@angular/forms'; // to work with Angular from directives *ng
import { CommonModule } from '@angular/common';// to work with Angular common directive (loops, conditional, switch)*ng



@Component({
  selector: 'user',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
model:User_repository = new User_repository()
newuser:User = new User()
parsedJson:any
parsedJsonName:any
parsedJsonEmail:any
usercounter:number= this.model.getuser().length


get jsonUser(){
  return JSON.stringify(this.newuser) // convert json to java file
}
adduser(u:User){
  console.log("New user is "+ this.jsonUser)
  this.usercounter += 1
  this.model.adduser(new User(this.usercounter, this.parsedJsonName, this.parsedJsonEmail))
}
displaylog(model:any){
  console.log("New user model",model)
}

// formSubmit property  to set the submission status
formSubmit:boolean = false

// submitform()method to handle the information of the form data on submission
submitForm(form:NgForm){
this.formSubmit = true
if (form.valid){
  this.parsedJson=JSON.parse(JSON.stringify(this.newuser))
  this.parsedJsonName = this.parsedJson.username
  this.parsedJsonEmail = this.parsedJson.email
  this.adduser(this.newuser)

  this.newuser = new User()
  form.reset()
  this.formSubmit = false
}
}
}