/* shape */
//collect the elements
let shape = document.querySelector(".shapeDiv")
let btnsquare = document.querySelector(".btnsquare")
let btnrectangle =document.querySelector(".btnrectangle")
let btncircle = document.querySelector(".btncircle")
let displayshape=document.querySelector(".shapeDiv p")

//add a click event to each button
btnsquare.addEventListener("click", function(){
shape.className="square"
displayshape.textContent="square".toUpperCase()
})

btnrectangle.addEventListener("click",function(){
    
    shape.className="rectangle"
    displayshape.textContent="rectangle".toUpperCase()
})

btncircle.addEventListener("click",function(){

    shape.className="circle"
    displayshape.textContent="circle".toUpperCase()
})

/**
 * dropdown menu
 */
//collect the element
let menubtn=document.querySelector(".menubtn")
let collapsemenu=document.querySelector(".collapsemenu")

//add an click event to open the collapsible menu
menubtn.addEventListener("click",function(){

collapsemenu.classList.toggle("closeToOpen")

})
/*--modal window--*/
//collect the element
let card =document.querySelector(".card")
let modalwindow=document.querySelector(".modalwindow")
let closemodel=document.querySelector(".closemodel")

//add a click event to open the modal window
card.addEventListener("click",function(){
    modalwindow.syle.display="block"
})

//close the modal window by clicking on X
closemodel.addEventListener("click",function(){
    modalwindow.syle.display="none"

})
//close the modal window when the user clicks anywhere on the modal screen
window.addEventListener("click",function(event){
    if(Event.target == modalwindow)
    modalwindow.style.display = "none"
})