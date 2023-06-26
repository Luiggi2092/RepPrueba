import { DogsItems } from '../../data/indexDogs';
import "./Slider.css";








const Slider:React.FC = () => {
 
  

    return (
      <div>
        <h1 className='title'>Haz Match</h1>
       {DogsItems?.map((item,index) => (
                <img key={index}src={item.image} alt={item.title} className={"gallery-item gallery-item-" + index.toString()}/>
               
            ))}  
           </div> 
     
    )


}


export default Slider;