import Form from './Components/Form' 
import Listado from './Components/Listado' 
import './App.css';
import { useState} from 'react'

function App() {
 const [citas, setCitas] = useState([])

 const crearCita= cita =>{
   setCitas([ ...citas, cita])
   
 }
 const deleteCita = (id)=>{
    const cita= citas.filter(cita=> cita.id !== id)
    setCitas(cita)
 }
  return (
    <>
      <h1>Administrador de Pacientes</h1>
      <div className='container'>
      <div className='row'>
          <div className='one-half column'>
            <Form 
            crearCita={crearCita}
            />
          </div>
          <div className='one-half column'>
          <h1>Administra tus citas</h1>
            {citas.length === 0 ? <p className='alerta-error'>No hay Citas</p>:
            citas.map((cita)=>
            <Listado
            key={cita.id}
            cita={cita}
            deleteCita={deleteCita}
            />
            )}
            
          </div>
        </div>
      </div>
        
    </>
  );
}

export default App;
