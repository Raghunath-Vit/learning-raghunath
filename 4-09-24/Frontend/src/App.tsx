import React from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Todo from './components/Todo/Todo';
import Counter from './components/Counter/Counter';
import ParamExample from './components/ParamExample/ParamExample';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout/>} >
          <Route index element={<Home />} />
          <Route path='/todo' element={<Todo/>} />
          <Route path='/counter' element={<Counter/>}/>
          <Route path='/param/:id' element={<ParamExample/>} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
