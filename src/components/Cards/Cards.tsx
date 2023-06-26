import {items} from "../../data/index"
import Card from '../Card/Card';
import style from './cards.module.css'

interface Props {
    firstIndex:number;
    lastIndex:number;
 
 }


const Cards: React.FC<Props> = ({lastIndex,firstIndex}) => {

    return (
        <div className={style.container}>
            {items?.map((item, index) => (
                <Card key={index} {...item} />
            )).slice(firstIndex,lastIndex)}
        </div>
    )

}


export default Cards