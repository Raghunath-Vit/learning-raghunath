import { Component } from '@angular/core';

@Component({
  selector: 'app-productmenu',
  templateUrl: './productmenu.component.html',
  styleUrl: './productmenu.component.css'
})
export class ProductmenuComponent {
  menu = [
    { title: 'ProductHome', path: '/product-home' },
    { title: 'AdminPage', path: '/admin' },
    { title: 'AddProduct', path: '/addproduct' }
  ];
}

