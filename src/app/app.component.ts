import { Component } from '@angular/core';
import { sanitizeIdentifier } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a:number=10;
  b:number=11;
  substractionResult:number;
  multiplicationResult:number;
  divisionResult:number;
  students:any;
  product:any;

  
  

  constructor(){
   
   this.students=[
     {
       studentid:13,
       studentname:'prasanna'
     },
     {
       studentid:12,
       studentname:'manvitha'
     },
     {
       studentid:15,
       studentname:'chaithra'

     }
   ]
  console.log(this.students)
  this.product={
    productid:16,
    productname:'car'
  }
console.log(this.product)

  


  }
  
}
