import { Route, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './inicio';
import Proyectos from './proyectos';
import Contacto from './contacto';
import SobreMi from './sobre mi';
import Ranitas from './ranas';

function App() {
        return(
                <Routes>
                        <Route path='/' element={<Inicio/>} ></Route>
                        <Route path='/Proyectos' element={<Proyectos/>} ></Route>
                        <Route path='/Contacto' element={<Contacto/>} ></Route>
                        <Route path='/SobreMi' element={<SobreMi/>} ></Route>
                        <Route path='/Ranas' element={<Ranitas/>} ></Route>
                </Routes>
        )
}

export default App;
