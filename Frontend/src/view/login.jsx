import axios from "axios";
import style from "./login.module.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


export const Login = ()=>{

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Toast =  Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password){       
      return Toast.fire({
       icon: "error",
       title: "Campos vacios"
       }); 
    }
    try {
      const response = await axios.post('http://localhost:3000/users', {
        email, password
      })  
    
      if (response.status === 200) {
        navigate('/home')
        window.localStorage.setItem('user', email+password )
        return  window.location.reload()
      } 
    } catch (error) {
        if (error.message.includes('401')) {
         Toast.fire({
          icon: "error",
          title: "Contraseña incorrecta"
          }); 
        } else if(error.message.includes('404')){
          Toast.fire({
            icon: "error",
            title: "El correo no existe en la base de datos"
          }); 
        } else{
          Toast.fire({
             icon: "error",
            title: "server error"
          });
        }
    }
  };

  return <div className={style.container}>
   <div className={style.heading}>PagoPlux Test</div>
      <form action="" className={style.form} onSubmit={handleSubmit}>
        <input required="" className={style.input} type="email" name="email" id="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>

        <input  value={password} required="" className={style.input} type="password" name="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>

        <span className={style.forgot}><a href="#">Recuperar contraseña?</a></span>

        <input className={!email || !password ? style.disabledButton : style.loginbutton} type="submit" value="Ingresar"/>        
      </form>
      <span className={style.agreement}><a href="#">Learn user licence agreement</a></span>
  </div>
}