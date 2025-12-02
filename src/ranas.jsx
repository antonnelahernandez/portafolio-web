import './App';
import Navbar from './componentes';
import RanasP from './assets/img/Ranitas/ranas-publicar.jpg'
import Ranas2 from './assets/img/Ranitas/ranas-publicar-2.jpg'
import Ranas3 from './assets/img/Ranitas/ranas-publicar-3.jpg'
import Ranas4 from './assets/img/Ranitas/ranas-publicar-4.jpg'
import Ranas5 from './assets/img/Ranitas/ranas-publicar-5.jpg'
import Ranas6 from './assets/img/Ranitas/ranas-publicar-6.jpg'
import Ranas7 from './assets/img/Ranitas/ranas-publicar-7.jpg'
import Ranas8 from './assets/img/Ranitas/ranas-publicar-8.jpg'



function Ranitas() {
    return(

    <div className='Main'>
        <div>
            <Navbar/>
        </div>

         <div className='Ranitas'>
                <img src={RanasP} alt="" />
        </div>
         <div className='Ranitas'>
                <img src={Ranas2} alt="" />
         </div>
         <div className='Ranitas'>
                <img src={Ranas3} alt="" />
         </div>
         <div className='Ranitas'>
                <img src={Ranas4} alt="" />
         </div>
         <div className='Ranitas'>
                <img src={Ranas5} alt="" />
         </div>
         <div className='Ranitas'>
                <img src={Ranas6} alt="" />
         </div>
         <div className='Ranitas'>
                <img src={Ranas7} alt="" />
         </div>
         <div className='Ranitas'>
                <img src={Ranas8} alt="" />
         </div>

        <div className='info-container' > 
             <h1> {'Ranitas'} </h1>
             <p> {'Este es mi proyecto ranitas... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor tristique ex sit amet bibendum.'}  </p>
        </div>
    </div>

    )
}

export default Ranitas;   