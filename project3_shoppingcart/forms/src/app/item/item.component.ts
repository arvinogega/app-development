import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'item',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
  

})
export class ItemComponent {
  itemname = "Nike Dunk Low Nature "
url1="./forms/src/app/images/nike green.webp"

  isSoldOut:boolean = false

  productmsg:string = ""
  total_in_stock = 20
  total_added:number = 0
  total_holder:number = 0
  totaltotal:number = 0
  totality:number = 0
  outStock = ""
  btn_out_stock = false
  price:number = 115
  totalprice:number = this.price * this.total_added

  getTotalAdded(){
    return this.total_added
  }

  addProduct(product:number){
    console.log("AddProduct functioned.", product)
    if(this.total_in_stock > 0){
      this.total_added = product
    }
    else{
      this.outStock = "Item is out of stock."
      this.btn_out_stock = true
    }
  }

  gettotalprice(){
    this.totalprice = this.total_added * this.price
  }

  //formValidation() property to set the validation rule
  formSubmit:boolean = false

  //submitForm() method to handle the information of the form data on submission
  submitForm(form:any){
    this.formSubmit = true
    if(this.total_in_stock < this.total_added){
      this.btn_out_stock = true
    }
    else{
      this.total_in_stock = this.total_in_stock - this.total_added
      this.totalprice = this.total_added * this.price
      this.total_holder = this.total_added
      this.totaltotal += this.total_added
      this.totality += this.totalprice
      this.btn_out_stock = false
      form.reset()
    }
  }


  
}