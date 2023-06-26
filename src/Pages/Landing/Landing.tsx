import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { iconoPatita, sinFondoNegro, sinFondoBlanco, Amberlis, John, Luis, Ricardo, Matheus, Magali, Persona} from './imagenes/index'
import fondo from './imagenes/landing.jpg'
import { Link } from 'react-router-dom'
import style from './Landing.module.css'

const Landing = () => {
    const navigate = useNavigate();
    const clickHandler = () => {
       navigate("/home")
    }

    const [mostrarDescripcion1, setMostrarDescripcion1] = useState(false)
    const [mostrarDescripcion2, setMostrarDescripcion2] = useState(false)
    const handleMouseEnter1 = () => {setMostrarDescripcion1(true)}
    const handleMouseLeave1 = () => {setMostrarDescripcion1(false)}
    const handleMouseEnter2 = () => {setMostrarDescripcion2(true)}
    const handleMouseLeave2 = () => {setMostrarDescripcion2(false)}

    return (
        <div className={style.contain}>
            <div className={style.primerDiv}>
                    <img src={fondo} className={style.fondo}/>
                    <img src={sinFondoNegro} alt="logo" className={style.logo}/>
                <button onClick={clickHandler} className={style.boton}>
                    <h1>¡Haz match!</h1>
                    <h2>Con tu nueva mascota</h2>
                </button>
                    <img src={iconoPatita} alt="icono patita" className={style.icono}/>
            </div>

            <div className={style.segundoDiv}>
                <div id="circulo1" className={style.circulo1} onMouseEnter={handleMouseEnter1}onMouseLeave={handleMouseLeave1}>¿Quiénes somos?</div>
                <div id="circulo2" className={style.circulo2} onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>Nuestros servicios </div>
            </div>
            
            <div className={style.segundoDivSub}>
                {mostrarDescripcion1 && (<div id="descripción1" className={`${style.descripción} ${style.show}`}>
                    <p className={style.p}>Somos un equipo de desarrolladores comprometidos en conectar a los animales en adopción con personas que desean brindarles un hogar amoroso. Nuestra pasión por los animales nos impulsa a crear una plataforma fácil de usar y segura para facilitar la adopción y promover el bienestar de las mascotas. Estamos emocionados de tenerlos como parte de nuestra comunidad. ¡Únete a nosotros en esta maravillosa aventura!</p>
                </div>)}
                
                {mostrarDescripcion2 && (<div id="descripción2" className={`${style.descripción} ${style.show}`}>
                    <ul>
                        <li className={style.p}>Conectamos a personas interesadas en adoptar perros y gatos con organizaciones que tienen animales disponibles para adopción, facilitando un proceso sencillo y seguro.</li>
                        <li className={style.p}>Proveemos un espacio donde proveedores pueden exhibir y vender productos relacionados con el cuidado de animales, brindando a los usuarios acceso a una amplia gama de opciones para satisfacer las necesidades de sus mascotas.</li>
                        <li className={style.p}>Ofrecemos un sistema de donaciones para apoyar a las organizaciones registradas, permitiendo a las personas contribuir directamente al cuidado y bienestar de los animales necesitados.</li>
                    </ul>
                </div>)}
                </div>
                <div className={style.tercerDiv}>
                    <div className={style.tercerD}>
                        <div className={style.tercerDivSub}>
                            <h1 className={style.h1}>Grupo</h1>
                            <img src={sinFondoBlanco} alt="logo" className={style.logo}/>
                        </div>
                    </div>
                <div className={style.tercerDivSub1}>
                    <div className={style.tercerDivSub2}>    
                        <img src={Amberlis} alt="Foto Amerlis" className={style.imagen}/>
                        <img src={Magali} alt="Foto Magali" className={style.imagen}/>
                        <img src={John} alt="Foto John" className={style.imagen}/>
                        <img src={Luis} alt="Foto Luis" className={style.imagen}/>
                    </div>
                    <div className={style.tercerDivSub2}>
                        <img src={Persona} alt="Foto David" className={style.imagen}/>
                        <img src={Persona} alt="Foto Nelson" className={style.imagen}/>
                        <img src={Matheus} alt="Foto Matheus" className={style.imagen}/>
                        <img src={Ricardo} alt="Foto Ricardo" className={style.imagen}/>
                    </div> 
                </div>  
            </div>
            <div className={style.cuartoDiv}>
                    <img src={sinFondoBlanco} alt="logo" className={style.logo4} />
                <div className={style.contacto}>
                    <div className={style.h1D}>
                        <h1>Contacto</h1>   
                        <h1>¿Quieres adoptar?</h1>
                    </div>
                </div>
                <div className={style.contacto2}>
                    <div className={style.detcont}>
                        <p>Amberlis Laya</p>
                        <p>Magali Alejandra Martin</p>
                        <p>Jhon Edward Rivera Naranjo</p>
                        <p>Luis Felipe Seminario Lopez</p>
                        <p>David Perez Tiburcio </p>
                        <p>Nelson Enrique Ortega Beltrán </p>
                        <p>Matheus Alves Melo </p>
                        <p>Ricardo Dionel Diaz </p>
                    </div>
                    <div className={style.detcont}>
                        <p>+54 9 11 2278-1197</p>
                        <p>+54 9 3492 22-6051</p>
                        <p>+57 316 7064670</p>
                        <p>+51 947 133 008</p>
                        <p>+52 1 222 782 4943</p>
                        <p>+57 322 3071344</p>
                        <p>+54 9 3446 37-9556</p>
                        <p>+54 9 3888 57-2608</p>
                    </div>
                    <div className={style.contacto3}>
                        <div className={style.links}>       
                            <Link to="/inicarSesión">Inicar sesión</Link>
                            <Link to="/registrarme">Registrarme</Link>
                            <Link to="/PetShop">Productos</Link>
                            <Link to="/donar">Quiero donar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Landing