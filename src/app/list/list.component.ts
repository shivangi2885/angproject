import { Component, Input, OnInit } from '@angular/core';
import  { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {  
     @Input() prodList:any;
     newProduct:any;

     add()
     {
       this.prodList.unshift(this.newProduct)
       localStorage.setItem('items',JSON.stringify(this.prodList))
       this.newProduct='';
     }
}
