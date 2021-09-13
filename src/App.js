import Form from './Components/Form' 
import Listado from './Components/Listado' 
import './App.css';
import { useState, useEffect} from 'react'

function App() {

let citasStorage = JSON.parse(localStorage.getItem('citas')) // obtiene lo que hay local storage , tiene que ser LET porque en ocasiones será un array vacío en otra  tendrá data
if(!citasStorage){
  citasStorage =[]
}

 const [citas, setCitas] = useState(citasStorage)
/* useEffect
useEffect(()=>{
  console.log('listo')
}, [citas])
 */
useEffect(()=>{ // se ejecutará la primera vez y cada vez que halla un cambios en citas
  localStorage.setItem('citas', JSON.stringify(citas)) /* Enviando al local storage */
}, [citas])

 const crearCita= cita =>{
   setCitas([ ...citas, cita])
   
 }
 const deleteCita = (id)=>{
    const cita= citas.filter(cita=> cita.id !== id)
    setCitas(cita)
 }

 const titulo = citas.length === 0 ? 'No hay Citas' : 'Administra tus citas'

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
          <h1>{titulo}</h1>
            {citas.map((cita)=>
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
