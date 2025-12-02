import './App';
import './Flores.css';
import Navbar from './componentes';
import {ReactComponent as ASvg} from './assets/svg/A.svg'
import Flor1, {Flor2, Flor3, Flor4, Flor5, Flor6, Flor7, Flor8, Flor9, Flor10, Flor11, Flor12, Flor13, Flor14, Flor15, Flor16, Flor17, Flor18, Flor19, Flor20,  } from './flores';

function Inicio() {
    return(
        <div className='Main' > 
            <div>
               <Navbar/> 
            </div>
            <div>
                 <ASvg className='logo'/>
            </div>
            <div className='Flores'>
                <Flor1/>
                <Flor2/>
                <Flor3/>
                <Flor4/>
                <Flor5/>
                <Flor6/>
                <Flor7/>
                <Flor8/>
                <Flor9/>
                <Flor10/>
                <Flor11/>
                <Flor12/>
                <Flor13/>
                <Flor14/>
                <Flor15/>
                <Flor16/>
                <Flor17/>
                <Flor18/>
                <Flor19/>
                <Flor20/>

            </div>

        </div>

    )
}

export default Inicio;
