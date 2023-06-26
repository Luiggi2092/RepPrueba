import React from 'react'
import style from './card.module.css'
import { useState } from "react";


interface Props {
  id: number;
  nombre: string;
  imagen: string;
  price : number;
}


const card: React.FC<Props> = ({ nombre, imagen, price }) => {

  const [contador, setContador] = useState(1);

  const incrementar = () => {
    setContador(contador + 1);
  }

  const decrementar = () => {
    setContador(contador - 1);
  }


  return (
    <div>
      <div className={style.card}>
        <img src={imagen} alt="producto" />
        <p>{nombre}</p>
        <div className={style.botones}>
          <button className={style.cant} onClick={incrementar}>+</button>
          <span className={style.cont}>{contador >= 1 ? contador : 1}</span>
          <button className={style.cant} onClick={decrementar}>-</button>
          </div>
          <span className={style.price}> S/. {price}</span>
          <button className={style.agregar}>Agregar</button>
        
      </div>
    </div>
  )


}




export default card