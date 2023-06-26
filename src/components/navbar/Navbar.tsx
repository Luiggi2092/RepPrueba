import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../../assets/sinfondo blanco.png';

import { Home, Storefront, Person, Search, Room, Instagram, Facebook, WhatsApp } from '@mui/icons-material';


const Navbar: React.FC = () => {
    return (
<nav className="navbar">
  
<div className="container">
<div className="nav-links">
 <div className="logo">
  <Link to="/">
   <img src={logo} alt="Logo de la empresa" /></Link>
</div>
   <Link to="/home">
   <Home />Home</Link>
   <Link to="/nosotros"><Person />Se parte de nosotros</Link>
   <Link to="/tienda"><Storefront />PetShop</Link>
   <Link to="/inicio-sesion"><Person />Inicio Sesión</Link>
   <Link to="/registrate"><Person />Regístrate</Link>
<div className="search-bar">
{/* Inserta aquí el código o componente para la barra de búsqueda */}
   <Search />
</div>
<div className="social-icons">
 <a href="https://www.instagram.com">
   <Instagram />
 </a>
 <a href="https://www.facebook.com">
   <Facebook />
 </a>
 <a href="https://www.whatsapp.com">
   <WhatsApp />
 </a>
 <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
  <i className="fas fa-map-marker-alt"></i>

   <Room />
 </a>
{/* Inserta aquí el código o componente para los iconos de redes sociales */}
</div>
</div>
</div>
</nav>
);
};

export default Navbar;
