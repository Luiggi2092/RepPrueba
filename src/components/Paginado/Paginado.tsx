import style from './paginado.module.css'
import { useState} from "react"


interface Props {
   pagina:number;
   setPagina: (value: number) => void;
   maxPageNumberLimit:number;
   setMaxpageNumberLimit: (value:number) => void;
   minPageNumberLimit:number;
   setMinPageNumberLimit: (value:number)=> void; 
   maximo:number;
   porPagina:number;


}

const Paginado: React.FC<Props> = ({pagina,
                                    setPagina,
                                    maximo,
                                    maxPageNumberLimit,
                                    setMaxpageNumberLimit,
                                    minPageNumberLimit,
                                    setMinPageNumberLimit,
                                    porPagina
                                    }) => {
    

const [pageNumberLimit] = useState(5);


let pageNumbers=[];

for(let i=1;i<=maximo/porPagina;i++){
    pageNumbers.push(i);
}

const RendersPageItems = pageNumbers.map((number)=>{
          
    if(number < maxPageNumberLimit + 1 && number>minPageNumberLimit){        
     return (
            <li key={number}  onClick={()=>setPagina(number)} className={pagina == number ? style.active: "null"}>
            {number} 
            
            </li>
         )
       }

 })
   
    const nextPage =()=> {
        if(pagina<pageNumbers.length){
            setPagina(pagina + 1);
        

       if(pagina + 1 > maxPageNumberLimit ){
              setMaxpageNumberLimit(maxPageNumberLimit + pageNumberLimit);
              setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
       }
    }

    }
    
    const previusPage =()=> {
        if(pagina > 1){
            setPagina(pagina -1);

            if((pagina - 1)%pageNumberLimit===0){
                setMaxpageNumberLimit(maxPageNumberLimit - pageNumberLimit);
                setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
         }
        }
    }
 
    return (
        <div className={style.container}>
            <button disabled={pagina === 1 || pagina < 1 } onClick={previusPage}>Previus</button>
            {RendersPageItems}
            <button disabled={pagina === Math.ceil(maximo/porPagina) || pagina > Math.ceil(maximo/porPagina) } onClick={nextPage}>Next</button>
        </div>
    )



}
export default Paginado;
