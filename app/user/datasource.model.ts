// this file is used to save each user's information i an array
import { User } from "./user.model";

export class Datasource{
    private users:User[]

    //contruct an array with difference users
    constructor(){
        this.users=new Array <User>(
            new User(1,'Arvino G', 'ag@gmail.com'),
            new User(2,'smith', 'smith@gmail.com')
           
        )
    }
    //define a getuser(method to return the array'users')
    getuser():User[]{
        return this.users
    }
}
