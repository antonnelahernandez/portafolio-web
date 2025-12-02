import './App';
import Navbar from './componentes';
import LogoA from './assets/Illustrator.png'
import LogoB from './assets/Photoshop.png'
import LogoC from './assets/AfterEffects.png'
import LogoD from './assets/InDesign.png'
import Yo from './assets/img/Yo.jpg'


function SobreMi() {
    return(
    <div className='Main'>
        <div>
            <Navbar/>
        </div>

        <img src={Yo} alt="retrato" id='yo'/>

        <div className='info-container' > 
             <h1> {'¡Hola!'} </h1>
             <p> {'Mi nombre es Antonnela Hernández, soy estudiante de diseño gráfico y este es mi portafolio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor tristique ex sit amet bibendum.'}  </p>
             <h2> {'Programas que manejo'} </h2>
             <div className='logos-container'>
                <img src={LogoA} alt="Logo Adobe Illustrator" />
                <img src={LogoB} alt="Logo Adobe Photoshop"/>
                <img src={LogoC} alt="Logo Adobe After Effects"/>
                <img src={LogoD} alt="Logo Adobe InDesign"/>
             </div>
        </div>
    </div>

    )
}

export default SobreMi;   