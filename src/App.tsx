import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Landing from './Pages/Landing/Landing';
import Home from './Pages/home/Home';
import Nosotros from './Pages/nosotros/Nosotros';
import PetShop from './Pages/Tienda/PetShop';
import InicioSesion from './Pages/inicio/InicioSesion';
import Registrate from './Pages/registro/Registrate';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path = "/" element={<Landing/>}/>
                <Route path="/home" element={<Home />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/tienda" element={<PetShop />} />
                <Route path="/inicio-sesion" element={<InicioSesion />} />
                <Route path="/registrate" element={<Registrate />} />
                
            </Routes>
        </BrowserRouter>
    );
};

export default App;