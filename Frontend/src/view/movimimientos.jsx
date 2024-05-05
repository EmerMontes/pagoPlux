import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";


export const Movimientos = ()=>{
    
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const fetchData = async()=>{
      try {
        const {data} = await axios.get('http://localhost:3000/movimientos')
        setData(data)
      } catch (error) {
        throw new error ('Error al traer los movimientos')
      } finally {
        setIsLoading(false)
      }
    }
   useEffect(()=>{
      fetchData()
    },[])

    const buttonBack = ()=>{
        navigate('/home')
       return window.location.reload()  
    }

  return ( <>
    <div className="back">
      <button onClick={buttonBack}> <span>🔙 </span></button>
      <h3>Movimimientos</h3>
    </div>
    <div className="movimientos">
    {isLoading  ? <p>Loanding...</p> : data.length > 0 ? (
        data.map(({idTransaccion,descripcion,bancoAdquiriente, cuotas, estado_transaccion, tipo_pago, fecha_transaccion })=>{
          return ( <div className='movimiento' key={idTransaccion}>
          <p> <strong>Fecha: </strong> {fecha_transaccion}</p> 
          <p> <strong>Descripcion:</strong> {descripcion}</p>
          <p> <strong>Banco comprador:</strong> {bancoAdquiriente}</p>
          <p> <strong>Numero de cuotas:</strong> {cuotas}</p>
          <p> <strong>Estado trasacion:</strong> {estado_transaccion}</p>
          <p> <strong>Tipo de Pago:</strong> {tipo_pago}</p>
          </div>
        )})
    ) : <p>No hay movimimientos</p>
    }
    </div>
  </>)

}