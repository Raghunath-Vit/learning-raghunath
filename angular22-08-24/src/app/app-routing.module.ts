import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { FormsexampleComponent } from './formsexample/formsexample.component';
import { DynamicformComponent } from './dynamicform/dynamicform.component';
import { BooksComponent } from './books/books.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { AdminComponent } from './admin/admin.component';
import { AddproductComponent } from './addproduct/addproduct.component';



// const routes: Routes = [
//   { path: 'product-home', component: ProductHomeComponent },
//   { path: 'admin-page', component: AdminPageComponent },
//   { path: 'add-product', component: AddProductComponent },
//   { path: '', redirectTo: '/product-home', pathMatch: 'full' }, // Default route
//   { path: '**', redirectTo: '/product-home' } // Wildcard route for undefined paths
// ];
const routes: Routes = [
  {path:'product-home',title:"ProductHome",component:ProductpageComponent},
  {path:'admin',title:"Admin",component:AdminComponent},
  {path:'addproduct',title:"Add Product",component:AddproductComponent},
  // {path:"helloworld",title:"Hello world",component:HelloWorldComponent},
  // {
  //   path:"templateform",title:"templateform",component:FormsexampleComponent
  // },
  // {
  //   path:"dynamicform",title:"dynamicform",component:DynamicformComponent
  // },
  // {
  //   path:"books/:bookId", title:"Books",component:BooksComponent,
  //   data:{pageInfo:"Sample Book Page"},
  // },
  // {
  //   path:"",title:"ProductPage",component:ProductpageComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
