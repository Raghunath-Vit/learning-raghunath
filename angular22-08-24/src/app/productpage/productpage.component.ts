import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Product {
  status: boolean;
  _id: string;
  code: string;
  name: string;
  excerpt: string;
  description:string;
  price:number;
  stock:number;
}

interface ApiResponse {
  ok: boolean;
  products: Product[];
}

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrl: './productpage.component.css'
})
export class ProductpageComponent {
    products: Product[] = [];
    constructor(private http:HttpClient){
      this.getData();
    }
    getData(){
      this.http.get<ApiResponse>("http://localhost:3000/api/v1/products/").subscribe(
        (response)=>{
          if (response.ok) {
            this.products = response.products;
            console.log(this.products);
          } else {
            console.error("Error: Response not OK");
          }
        },
        (error) => {
          console.error("Error fetching data:", error);
        }
      );
    }
}
