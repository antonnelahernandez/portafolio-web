import './App.css';
import './Flores.css';
import FlorA from './assets/svg/Flor1/Flor1-04.svg'
import FlorB from './assets/svg/Flor1/Flor1-02.svg'
import FlorC from './assets/svg/Flor1/Flor1-01.svg'
import FlorD from './assets/svg/Flor1/Flor1-03.svg'
import FlorSta from './assets/svg/Flor2/Flor2-static.svg'
import FlorE from './assets/svg/Flor2/Flor2-02.svg'
import FlorF from './assets/svg/Flor2/Flor2-01.svg'
import FlorSt from './assets/svg/Flor3/Flor3-static.svg'
import FlorG from './assets/svg/Flor3/Flor3-01.svg'
import FlorH from './assets/svg/Flor3/Flor3-02.svg'
import FlorI from './assets/svg/Flor3/Flor3-03.svg'
import FlorStati from './assets/svg/Flor4/Flor4-Static.svg'
import FlorJ from './assets/svg/Flor4/Flor4-01.svg'
import FlorK from './assets/svg/Flor4/Flor4-02.svg'
import FlorL from './assets/svg/Flor4/Flor4-03.svg'
import FlorM from './assets/svg/Flor4/Flor4-04.svg'


import { useState } from 'react';

function Flor1() {

        const [azul, colores] = useState(false);

        return(
        <div className='Flor1'>
           <img src={azul ? FlorB : FlorA} className={azul ? "animada": ""}
           onMouseEnter={() => colores (true)}
           onMouseLeave={() => colores (false)} />
        </div>
        );
} 
export default Flor1;



function Flor2() {

        const [azul, colores] = useState(false);

        return(
        <div className='Flor2'>
           <img src={azul ? FlorC : FlorA} className={azul ? "animada": ""}
           onMouseEnter={() => colores (true)}
           onMouseLeave={() => colores (false)} />
        </div>
        );
} 
export {Flor2};



function Flor3() {

        const [azul, colores] = useState(false);

        return(
        <div className='Flor3'>
           <img src={azul ? FlorD : FlorA} className={azul ? "animada": ""}
           onMouseEnter={() => colores (true)}
           onMouseLeave={() => colores (false)} />
        </div>
        );
} 
export {Flor3};



function Flor4() {

        const [azul, colores] = useState(false);

        return(
        <div className='Flor4'>
           <img src={azul ? FlorE : FlorSta} className={azul ? "animada": ""}
           onMouseEnter={() => colores (true)}
           onMouseLeave={() => colores (false)} />
        </div>
        );
} 
export {Flor4};



function Flor5() {

        const [azul, colores] = useState(false);

        return(
        <div className='Flor5'>
           <img src={azul ? FlorF : FlorSta} className={azul ? "animada": ""}
           onMouseEnter={() => colores (true)}
           onMouseLeave={() => colores (false)} />
        </div>
        );
} 
export {Flor5};



function Flor6() {

        const [azul, colores] = useState(false);

        return(
        <div className='Flor6'>
           <img src={azul ? FlorG : FlorSt} className={azul ? "animada": ""}
           onMouseEnter={() => colores (true)}
           onMouseLeave={() => colores (false)} />
        </div>
        );
} 
export {Flor6};



function Flor7() {

        const [azul, colores] = useState(false);

        return(
        <div className='Flor7'>
           <img src={azul ? FlorH : FlorSt} className={azul ? "animada": ""}
           onMouseEnter={() => colores (true)}
           onMouseLeave={() => colores (false)} />
        </div>
        );
} 
export {Flor7};



function Flor8() {

        const [azul, colores] = useState(false);

        return(
        <div className='Flor8'>
           <img src={azul ? FlorI : FlorSt} className={azul ? "animada": ""}
           onMouseEnter={() => colores (true)}
           onMouseLeave={() => colores (false)} />
        </div>
        );
} 
export {Flor8};



function Flor9() {

        const [azul, colores] = useState(false);

        return(
        <div className='Flor9'>
           <img src={azul ? FlorJ : FlorStati} className={azul ? "animada": ""}
           onMouseEnter={() => colores (true)}
           onMouseLeave={() => colores (false)} />
        </div>
        );
} 
export {Flor9};


function Flor10() {

        const [azul, colores] = useState(false);

        return(
        <div className='Flor10'>
           <img src={azul ? FlorK : FlorStati} className={azul ? "animada": ""}
           onMouseEnter={() => colores (true)}
           onMouseLeave={() => colores (false)} />
        </div>
        );
} 
export {Flor10};

function Flor11() {

        const [azul, colores] = useState(false);

        return(
        <div className='Flor11'>
           <img src={azul ? FlorL : FlorStati} className={azul ? "animada": ""}
           onMouseEnter={() => colores (true)}
           onMouseLeave={() => colores (false)} />
        </div>
        );
} 
export {Flor11};

function Flor12() {

        const [azul, colores] = useState(false);

        return(
        <div className='Flor12'>
           <img src={azul ? FlorM : FlorStati} className={azul ? "animada": ""}
           onMouseEnter={() => colores (true)}
           onMouseLeave={() => colores (false)} />
        </div>
        );
} 
export {Flor12};


function Flor13() {

        const [azul, colores] = useState(false);

        return(
        <div className='Flor13'>
           <img src={azul ? FlorC : FlorStati} className={azul ? "animada": ""}
           onMouseEnter={() => colores (true)}
           onMouseLeave={() => colores (false)} />
        </div>
        );
} 
export {Flor13};



function Flor14() {

        const [azul, colores] = useState(false);

        return(
        <div className='Flor14'>
           <img src={azul ? FlorC : FlorStati} className={azul ? "animada": ""}
           onMouseEnter={() => colores (true)}
           onMouseLeave={() => colores (false)} />
        </div>
        );
} 
export {Flor14};



function Flor15() {

        const [azul, colores] = useState(false);

        return(
        <div className='Flor15'>
           <img src={azul ? FlorD : FlorStati} className={azul ? "animada": ""}
           onMouseEnter={() => colores (true)}
           onMouseLeave={() => colores (false)} />
        </div>
        );
} 
export {Flor15};



function Flor16() {

        const [azul, colores] = useState(false);

        return(
        <div className='Flor16'>
           <img src={azul ? FlorE : FlorStati} className={azul ? "animada": ""}
           onMouseEnter={() => colores (true)}
           onMouseLeave={() => colores (false)} />
        </div>
        );
} 
export {Flor16};



function Flor17() {

        const [azul, colores] = useState(false);

        return(
        <div className='Flor17'>
           <img src={azul ? FlorF : FlorStati} className={azul ? "animada": ""}
           onMouseEnter={() => colores (true)}
           onMouseLeave={() => colores (false)} />
        </div>
        );
} 
export {Flor17};



function Flor18() {

        const [azul, colores] = useState(false);

        return(
        <div className='Flor18'>
           <img src={azul ? FlorG : FlorStati} className={azul ? "animada": ""}
           onMouseEnter={() => colores (true)}
           onMouseLeave={() => colores (false)} />
        </div>
        );
} 
export {Flor18};



function Flor19() {

        const [azul, colores] = useState(false);

        return(
        <div className='Flor19'>
           <img src={azul ? FlorH : FlorStati} className={azul ? "animada": ""}
           onMouseEnter={() => colores (true)}
           onMouseLeave={() => colores (false)} />
        </div>
        );
} 
export {Flor19};



function Flor20() {

        const [azul, colores] = useState(false);

        return(
        <div className='Flor20'>
           <img src={azul ? FlorI : FlorStati} className={azul ? "animada": ""}
           onMouseEnter={() => colores (true)}
           onMouseLeave={() => colores (false)} />
        </div>
        );
} 
export {Flor20};


function Flor21() {

        const [azul, colores] = useState(false);

        return(
        <div className='Flor21'>
           <img src={azul ? FlorE : FlorA} className={azul ? "animada": ""}
           onMouseEnter={() => colores (true)}
           onMouseLeave={() => colores (false)} />
        </div>
        );
} 
export {Flor21};



function Flor22() {

        const [azul, colores] = useState(false);

        return(
        <div className='Flor22'>
           <img src={azul ? FlorF : FlorStati} className={azul ? "animada": ""}
           onMouseEnter={() => colores (true)}
           onMouseLeave={() => colores (false)} />
        </div>
        );
} 
export {Flor22};



function Flor23() {

        const [azul, colores] = useState(false);

        return(
        <div className='Flor23'>
           <img src={azul ? FlorI : FlorA} className={azul ? "animada": ""}
           onMouseEnter={() => colores (true)}
           onMouseLeave={() => colores (false)} />
        </div>
        );
} 
export {Flor23};



function Flor24() {

        const [azul, colores] = useState(false);

        return(
        <div className='Flor24'>
           <img src={azul ? FlorG : FlorSta} className={azul ? "animada": ""}
           onMouseEnter={() => colores (true)}
           onMouseLeave={() => colores (false)} />
        </div>
        );
} 
export {Flor24};

function Flor25() {

        const [azul, colores] = useState(false);

        return(
        <div className='Flor25'>
           <img src={azul ? FlorF : FlorSta} className={azul ? "animada": ""}
           onMouseEnter={() => colores (true)}
           onMouseLeave={() => colores (false)} />
        </div>
        );
} 
export {Flor25};