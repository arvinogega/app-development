import { Component } from '@angular/core';

@Component({
  selector: 'product-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
username = "Arvino"

itemname = "Pencils"

setStatus:String ="NO"

getStockStatus(){
  return this.setStatus
}
isSoldOut= false

//set button to be disable in 5 seconds
constructor(){
  setTimeout(()=>{
    this.isSoldOut= true
  }, 5000)
}

// Event Binding
onSave(){
  alert('information saved')
}
productmsg:string=""
total_in_stock = 3
total_added = 0
outStock =""
btn_out_stock= false
addProduct(){
  if (this.total_in_stock >0)
  {
  this.total_added ++
  this.total_in_stock --
  }
  else{
    this.outStock ="Item is out of stock"
    this.btn_out_stock =true
  }
}






}
