import './App';
import Navbar from './componentes';
import Flor1, {Flor2, Flor9} from './flores';

import Flores from './assets/img/Flores/1.jpg'
import Ranas from './assets/img/Ranitas/ranas-publicar.jpg'
import Doodles from './assets/img/doodles/portada2.jpg'
import Circo from './assets/img/circo/circus.jpg'
import Ansiosa from './assets/img/ansiosa/Ansiosa.jpg'
import CMYK from './assets/img/cmyk/cmyk.jpg'

import Vinilo from './assets/img/ViniloB.jpg'
import Fanzine from './assets/img/Captura de pantalla 2025-11-11 195818.jpg'
import Revista from './assets/img/revista.jpg'
import Zoocirco from './assets/img/letrero-circo.png'
import Tipo from './assets/img/tipografo/Tipografo-1.jpg'
import Prensa from './assets/img/preprensa/taylor-swift.jpg'
import { Link } from 'react-router-dom';



function Proyectos() {
    return(
        <div className='Main'>
         <div> <Navbar/> </div>
         <div className='grid-containers'> 

            <div className='grid-items'>
                <div className='grid-items' id='Titulo'>
                    <p>Proyectos Personales</p>
                </div>
                <img src={Flores} alt="" />
            </div>

             <Link to= '/Ranas'><div className='grid-items'>
                    <img src={Ranas} alt=""/> 
                </div></Link>

            <div className='grid-items'>
                <img src={Doodles} alt="" />
            </div>
            <div className='grid-items'>
                <img src={Ansiosa} alt="" />
            </div>
            <div className='grid-items'>
                <img src={Circo} alt="" />
            </div>
            <div className='grid-items'>
                <img src={CMYK} alt="" />
            </div>
         </div>

          <div className='grid-containers'> 

            <div className='grid-items'>
                <div className='grid-items' id='Titulo'>
                    <p>Proyectos Universidad</p>
                </div>
                <img src={Vinilo} alt="" />
            </div>
            <div className='grid-items'>
                <img src={Fanzine} alt="" />
            </div>
            <div className='grid-items'>
                <img src={Revista} alt="" />
            </div>
            <div className='grid-items'>
                <img src={Prensa} alt="" />
            </div>
            <div className='grid-items'>
                <img src={Zoocirco} alt="" />
            </div>
            <div className='grid-items'>
                <img src={Tipo} alt="" />
            </div>
         </div>

         <div className='Footer'> Ya tocaste fondo...</div>

        </div>

    )
}

export default Proyectos;