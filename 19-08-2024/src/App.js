// import "./App.css";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   BrowserRouter,
//   Link,
// } from "react-router-dom";
// import Category from "./Components/Category";
// import AddProducts from "./Components/AddProducts";
// import ShowDetails from "./Components/UserDetails";
// import UserDetails from "./Components/UserDetails";
// import ShowUsers from "./Components/ShowUsers";
// import AddUsers from "./Components/AddUsers";
// import AdminPage from "./Components/AdminPage";
// import OrderDetails from "./Components/OrderDetails";
// import Navbar from "./Components/Navbar";
// import CategoryPage from "./Components/CategoryPage";
// import AddCategory from "./Components/AddCategory";
// import EditCategory from "./Components/EditCategory";
// import Home from "./Components/Home";
// import ProductDetails from "./Components/ProductDetails";
// import ProductsAPI from "./Components/ProductsAPI";
// import CartPage from "./Components/CartPage";
// import RoleForm from "./Components/RoleForm";
// import ShowProducts from './Components/ShowProducts'
// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/admin/category" element={<CategoryPage />}>
//             <Route path="add" element={<AddCategory />} />
//             <Route path="edit/:id" element={<EditCategory />} />
//           </Route>
//           <Route path="/" element={<Home />} />
//           <Route path="/users" element={<UserDetails />} />
//           <Route path="/admin/category" element={<Category />} />
//           <Route path="/ShowUsers" element={<ShowUsers />}>
//             <Route path=":userId" element={<ShowUsers />}></Route>
//           </Route>
//           <Route path="/AddUsers" element={<AddUsers />} />
//           <Route path="/AdminPage" element={<AdminPage />}>
//             <Route path=":orderId" element={<OrderDetails />} />
//           </Route>
//           <Route path="/Addproducts" element={<AddProducts />} />
//           <Route path="/Home" element={<Home />}>
//             <Route path=":id" element={<ProductDetails />} />
//           </Route>
//           <Route path="/Products" element={<ProductsAPI />} />
//           <Route path="/cartPage" element={<CartPage />} />
//           <Route path="/AddRole" element={<RoleForm />} />
//           <Route path='/ShowProducts' element={<ShowProducts />}/>
//           <Route path='/ShowProducts/:id' element={<ShowProducts />}/>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;



import React, { Suspense, lazy } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import CategoryPage from "./Components/CategoryPage";
import AddCategory from "./Components/AddCategory";
import EditCategory from "./Components/EditCategory";
import Home from "./Components/Home";
import ProductDetails from "./Components/ProductDetails";
import ProductsAPI from "./Components/ProductsAPI";
import CartPage from "./Components/CartPage";
import RoleForm from "./Components/RoleForm";
import ShowProducts from './Components/ShowProducts';
import ShowUsers from "./Components/ShowUsers";
import AddUsers from "./Components/AddUsers";
import UserDetails from "./Components/UserDetails";
import AddProducts from "./Components/AddProducts";

const AdminPage = lazy(() => import("./Components/AdminPage"));
const OrderDetails = lazy(() => import("./Components/OrderDetails"));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/admin/category" element={<CategoryPage />}>
            <Route path="add" element={<AddCategory />} />
            <Route path="edit/:id" element={<EditCategory />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserDetails />} />
          <Route path="/ShowUsers" element={<ShowUsers />}>
            <Route path=":userId" element={<ShowUsers />}></Route>
          </Route>
          <Route path="/AddUsers" element={<AddUsers />} />
          <Route path="/AdminPage" element={<AdminPage />}>
            <Route path=":orderId" element={<OrderDetails />} />
          </Route>
          <Route path="/Addproducts" element={<AddProducts />} />
          <Route path="/Home" element={<Home />}>
            <Route path=":id" element={<ProductDetails />} />
          </Route>
          <Route path="/Products" element={<ProductsAPI />} />
          <Route path="/cartPage" element={<CartPage />} />
          <Route path="/AddRole" element={<RoleForm />} />
          <Route path='/ShowProducts' element={<ShowProducts />}/>
          <Route path='/ShowProducts/:id' element={<ShowProducts />}/>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
