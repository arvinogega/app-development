import React from "react";
import ReactDom from 'react-dom/client';
import './index.css';
import sunset from './images/images1.jpg';
import User from './comments';
//import images
import bussines_women from './images/bussines_women.png'
import bussines_men from './images/bussines_men.png'
import student from './images/student.png'

// create content in the app using function component
const App=function(){ 
    //define a variable name
    let fullname="Arvino Gega"
    //declarw a function
    function greeting(){
        return "Good evening!"
    }
    return(
        <div>
            <h1 style={{textAlign : "center",color:"orange"}}>Welcome to React JS {fullname}</h1>
        <p>{greeting()} Let's be familiar with JSX element</p>
        <figure className="introimg">
            <img src={sunset} alt="/"/>
        </figure>
       { /* card */ }
        <section className="cardcontainer">
            <User image={bussines_women} name='Jessica' date='07/12/24' comments='Great Job'/>
            <User image={bussines_men} name='Micheal'date='07/01/24'comments='I need more Time'/>
            <User image={student} name='Ben'date='07/09/24'comments='Feeling Good'/>
        </section>
        </div>
    )
}

//rooting the app
const root=ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)