import Menu from "./components/Menu.js";


// import Login from "./components/Login.js";
// import Footer from "./components/Footer.js";
// import Container from "./components/Container.js"
// import Counter from "./components/Counter.js";
// import Hobby from "./components/Hobby.js"

import './App.css';
// import Addition from "./components/Addition.js";
// import Angles from "./components/Angles.js";
// import StudentsAdd from "./components/StudentsAdd.js";
import Todo from "./components/Todo.js";
import { BrowserRouter, Link, Route,Routes } from "react-router-dom";
// import ApiAssign from "./components/ApiAssign.js";
// import NameProbablity from './components/NameProbablity.js';
// import Github from "./components/Github.js";
import PropsLearnLogin from './components/PropsLearnLogin.js';
// import { useState } from 'react';
import TodoDetails from "./components/TodoDetails.js";
import TodoDetailsEdit from "./components/TodoDetailsEdit.js";
import Cities from "./components/Cities.js";
import CityDetails from "./components/CityDetails.js";
import CityNews from "./components/CityNews.js";
import RefHookExample from "./components/RefHookExample.js";
import ClassBasedCounter from "./components/ClassBasedCounter.js";
// import ExampleUseEffect from "./components/ExampleUseEffect.jsx";
import RenderLoading from './components/RenderLoading.js'
import { useState } from "react";
import UseMemoHooks from "./components/UseMemoHooks.js";
import ContextApiHooks from "./components/ContextApiHooks.js";
import HeaderBar from "./components/HeaderBar.js";

import { CurrentUser, Notifications } from './components/Contexts.js';
function App() {
  const [errStatus,setErrStatus]=useState(false)
  const [show,setShow]=useState(true);
  const Login_URL="https://ascendion.com/";
  function greet()
  {
    alert("Starts your login with us");
    
  }
  const login_attempts=5;
  const err_msg={LOGIN_FAILED:"Oops Sorry! Something Bad Occured",
    LOGIN_500:"SERVER error",
  };
  let menuData=[
    {title:"Home",path:"/"},
    {title:"Todos",path:"/todo"},
    {title:"Login",path:"/login"},
    {title:"Cities",path:"/Cities"},
    {title:"RefHookExample",path:"/RefHookExample"},
    {title:"ClassBasedReact",path:"/ClassBasedCounterRoute"},
    {title:"LazyComponet",path:"/RenderLoading"},
  ];




  //for my UseMemo 21-08-2024 home assignment
  const listOfItems = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  const props = {
    first: 5, 
    second: 10, 
  };


  
  const user = { name: 'John Doe' };
  const notifications = [{ id: 1, message: 'New comment on your post' }, { id: 2, message: 'New follower' }];
  return (
    <>
    <div className="App">
      <div>
      {/* <header> */}
        {/* <Menu/>
        <Container>
          <Login/>
        </Container>
        {/* <Container/> */}
        {/* <Footer/>
        <Counter/> */} 
        {/* <Todo/> */}
        {/* <Hobby/> */}
        {/* <Addition/> */}
        {/* <Angles/> */}
        {/* <StudentsAdd/>
      </header> */}


          {/* <h1>Main Page</h1>
          <BrowserRouter>
            <Link className="firstLi" to="/todo">Todo</Link>
            <Link className="seconsLi" to="/login/lets-learn/123">Login</Link>
            <br />
            <Routes>
              <Route path="/todo" element={<Todo/>}/>
              <Route path="/login/:title/:tokenId" element={<Login/>}/>
            </Routes>
          </BrowserRouter> */}





            {/* <NameProbablity/> */}


          {/* <ApiAssign/> */}

          {/* <Github/> */}

      </div>
            show var={show} <br/>
            <select onChange={(e)=>{e.target.value=="show"?setShow(true):setShow(false)}}>
              <option value="show">Show</option>
              <option value="hide">Hide</option>
            </select>
      <h1>Main Page</h1>
          <BrowserRouter>
          {show?<Menu menuData={menuData}/>:""}
            <Link className="firstLi" to="/todo">Todo</Link>
            <Link className="seconsLi" to="/login/lets-learn/123">Login</Link>
            <Link to="/menu">Menu</Link>
            <br />
            <Routes>
              <Route path="/todo" element={<Todo/>}/>
              <Route path="/login/:title/:tokenId" element={<PropsLearnLogin 
              L_URL={Login_URL}
              login_attempts={login_attempts}
              err_msg={err_msg}
              greet={greet}
              errStatus={errStatus}
              setErrStatus={setErrStatus}
              />}/>
              <Route path="/menu" element={<Menu menuData={menuData} />}/>
              <Route path="/todo/:id" element={<TodoDetails/>}/>
              <Route path="/todo/:id/edit" element={<TodoDetailsEdit/>}/>
              


              <Route path="/cities/" element={<Cities/>}>
              <Route path=":name/" element={<CityDetails/>}>
              <Route path="news" element={<CityNews/>}/>
              </Route>
              </Route>
              <Route path="/RefHookExample" element={<RefHookExample/>}/>

              <Route path="/ClassBasedCounterRoute" element={<ClassBasedCounter/>}/>
                <Route path="/RenderLoading" element={<RenderLoading/>}/>
            </Routes>

          </BrowserRouter> 
          {/* <ExampleUseEffect/> */}
          {/* <UseMemoHooks listOfItems={listOfItems} props={props}/> */}


          {/* <ContextApiHooks/>


          <CurrentUser.Provider value={user}>
          <Notifications.Provider value={notifications}>
            <HeaderBar/>
          </Notifications.Provider>
        </CurrentUser.Provider> */}
    </div>
    
    </>
  );
}

export default App;



