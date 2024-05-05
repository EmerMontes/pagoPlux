import { Login } from "./view/login";
import { Home } from "./view/home";
import {Route,  Routes, useNavigate} from 'react-router-dom'
import { useEffect } from "react";
import { Movimientos } from "./view/movimimientos";

const App = ()=>{

  const navigate = useNavigate();
  useEffect(()=>{
    if (window.localStorage.getItem('user') === 'null' && location.pathname !== '/' ) {
      return navigate('/')
    }
  },[navigate])
  
    return (
    <Routes>
     <Route  path='/' element={<Login/>}/>
     <Route path='/home' element={<Home/>}/>
     <Route path='/movimientos' element={<Movimientos/>}/>
    </Routes>
  )
}

export default App; 