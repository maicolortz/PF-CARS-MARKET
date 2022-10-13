import React from 'react';

// import { Counter } from './features/counter/Counter';//ESTO ES DE REDUX TOOLKIT
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import FormRegister from './components/FormRegister.js'
import FormCar from './components/FormCar/FormCar.js'; 
import CardDetail from './components/CardDetail/CardDetail.js'
import Login from './components/Login.js'
import PageNotFound from './components/PageNotFound.js'
import EditCard from './components/EditCard.js'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>  
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/createuser' element={<FormRegister/>} />
          <Route path='/createcar' element={<FormCar/>} />
          <Route path='/edit-car/:id' element={<EditCard/>} />
          <Route path='/car/:id' element={<CardDetail/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
