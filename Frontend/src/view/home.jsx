import { useNavigate } from "react-router-dom"

export const Home = ()=>{

  const navigate = useNavigate() 

  const salir = ()=>{
    navigate('/')
    window.localStorage.setItem('user', null)
  }

  return (
    <div className="contenedor">
       <div className="title">
         <h1> Pago Plux </h1>
         <button onClick={salir}>Salir</button>
       </div>
       <section>
         <p> <strong>Iphone 12 pro max</strong></p>
         <p> <strong>Precio: </strong>$467 </p>
         <p> Celular de muy buena calidad </p>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTw0VoDO0oaDBz8qbKnVGv7D9RdD4zmV6wtg&s" alt="" />
       </section>
       <div id="ButtonPaybox"></div>
       <button onClick={()=>navigate('/movimientos')}> Ver Movimientos </button>
   </div>
  )
}

