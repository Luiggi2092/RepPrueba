import React, { useState } from "react";
import {items} from "../../data/index"
import Cards from "../../components/Cards/Cards";
import style from "./PetShop.module.css"
import Paginado from "../../components/Paginado/Paginado";


const PetShop: React.FC = () => {


   const [pagina,setPagina] = useState<number>(1);
   const [porPagina] = useState<number>(9);
   const lastIndex= pagina * porPagina //10
    const firstIndex= lastIndex - porPagina
   const [maxPageNumberLimit,setMaxpageNumberLimit] = useState(5);
   const [minPageNumberLimit,setMinPageNumberLimit] = useState(0);

   const maximo = items.length;

   


  return (

    <div>
      <h1 className={style.titulo}>Pets Shop</h1>

      <div className={style.container}>
        <Cards firstIndex={firstIndex} lastIndex={lastIndex}  />
      </div>
      <Paginado pagina={pagina} setPagina={setPagina} maximo={maximo} 
      maxPageNumberLimit={maxPageNumberLimit}
      setMaxpageNumberLimit={setMaxpageNumberLimit}
      minPageNumberLimit={minPageNumberLimit}
      porPagina={porPagina}
      setMinPageNumberLimit={setMinPageNumberLimit}
      />
    </div>

  )


}

export default PetShop;