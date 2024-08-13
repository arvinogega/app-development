// import the component structure for angular
import { Component} from "@angular/core";

// declare the use of Components in this file
@Component({
    standalone:true,
    selector: 'products',// the tag use to load the component page
    templateUrl:'./products.components.html'// loading page for 'products components'
})

export class ProductComponent{

}