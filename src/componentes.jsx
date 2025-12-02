import { NavLink } from 'react-router-dom';
import './App.css';

export {MiBoton};
function MiBoton({texto, to}) {
    return (
      <NavLink to={to} className={({isActive}) => (isActive ? 'botonesActivos' : 'botones')}>{texto}</NavLink>
    );
    }


function Navbar() {
  return (
    
    <div className='grid-container' id='navbar'>
        <div className='grid-item'>
                <MiBoton texto={"inicio"} to={'/'}/>
        </div>
        <div className='grid-item'>
                <MiBoton texto={"proyectos"} to={'/Proyectos'}/>
        </div>
        <div className='grid-item'>
                <MiBoton texto={"sobre mí"} to={'/SobreMi'}/>
        </div>
        <div className='grid-item'>
                <MiBoton texto={"contacto"} to={'/Contacto'} />
        </div>
        </div>
  );
}
export default Navbar;



 