import './App.css';
//import Login from './component/Login/Login.js';
//import Menu from './component/Menu/Menu.js';
 //import Login from './component/Login/Login.js';
// import Footer from './component/Footer/Footer.js';
// import Container from './component/Container/Container.js';
// import Counter from './component/Counter/Counter.js';
// import Calculate from './component/Calculate/Calculate.js';
// import Funcalculator from './component/Funcalculator/FunCalculator.js'
// import Student from './component/Student/Student.js'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Todo from './component/Todo/Todo.js';
//import GetAllProducts from './component/GetAllProducts/GetAllProducts.js'
//import GenderDetector from './component/GenderDetector/GenderDetector.js';
import GetAllProducts from './component/GetAllProducts/GetAllProducts.js';
//import Products from './Products.js'
//import GithubUserlist from './component/GithubUserslist/GithubUserlist.js'
import TodoDetails from './component/Todo/TodoDetails.js'
import TodoDetailsEdit from './component/Todo/TodoDetailsEdit.js';
function App() {
  // const MenuData = [
  //   {title: "Menu",path:"/menu"},
  //   {title: "Home",path:"/home"},
  //   {title: "Contact",path:"/contact"},
  //   {title: "Address",path:"/address"}
  // ]
  // const LOGIN_URL = "http://ascendion.com/login"
  // const LOGIN_ATTEMPTS  = 5;
  // function greet(){
  //   alert("Welcome! Have a great day!")
  
  return (
    <div className="App clearfix">
      <BrowserRouter>
      {/* <div className="button-container">
        <Link to="/Gender" className="button gender">Show Gender</Link>
      </div> */}
      <div className="button-container">
        <Link to="/GetAllProducts" className="button products">GetAllProducts</Link>
      </div>
      <div className='button-container'>
      <Routes>
        <Route path='/GetAllProducts' element={<GetAllProducts />}/>
      </Routes>
      </div>
      {/* <Link to="/todo">todo</Link>
        <Routes>
          <Route path='/todo' element={<Todo/>}/>
          <Route path='/todo/:id' element={<TodoDetails/>}/>
          <Route path='/todo/:id/edit' element={<TodoDetailsEdit/>}/>
      </Routes> */}
      </BrowserRouter>
      {/* <GithubUserlist /> */}
      {/* <Menu MenuData={MenuData}/> */}
    </div>
  );
}

export default App;
