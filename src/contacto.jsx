import './App';
import Navbar from './componentes';
import {ReactComponent as Instagram} from './assets/svg/instagram-icon.svg'
import Flor1, { Flor3, Flor4, Flor6, Flor7, Flor8, Flor9, Flor10, Flor11, Flor13, Flor14, Flor15, Flor16, Flor17, Flor18, Flor19, Flor20, Flor21, Flor22, Flor23, Flor24, Flor25 } from './flores';

function Contacto() {
    return(
  <div className='Main'>
        <div>
            <Navbar/>
        </div>

        <div className='contacto-container' > 
             <h1> {'Formas de contactarme'} </h1>
             <p> {'Puedes contactarme enviando un correo a'}  </p>
             <p> {'Nnelahsmelissa@gmail.com'}  </p>
             <div className='link-insta'> <a href='https://www.instagram.com/amhs_dd/'> <Instagram id='icon_insta' /> <p> {'@amhs_dd'} </p> </a> </div>
        </div>
            <div className='Flores'>
                <Flor1/>
                <Flor3/>
                <Flor4/>
                <Flor6/>
                <Flor7/>
                <Flor8/>
                <Flor9/>
                <Flor10/>
                <Flor11/>
                <Flor13/>
                <Flor14/>
                <Flor15/>
                <Flor16/>
                <Flor17/>
                <Flor18/>
                <Flor19/>
                <Flor20/>
                <Flor21/>
                <Flor22/>
                <Flor23/>
                <Flor24/>
                <Flor25/>

            </div>

  </div>

    )
}

export default Contacto;