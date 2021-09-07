import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
const Form =({crearCita})=>{

   const [data, setData] = useState({mascota:'', propietario:'', fecha:'', tiempo:'', sintomas:''})
   const [error, setError]= useState(false)
    const updateData = e =>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    
    const {mascota, propietario, fecha, tiempo, sintomas} = data
    // validar formulario
    const sentData = e =>{
      e.preventDefault()
      if(mascota.trim() === '', propietario.trim() === '', fecha.trim() === '', tiempo.trim() === '', sintomas.trim() === ''){
        setError(true)
        return; // para que no se ejecuta nada adicional
      }
     // Asignamos un id
     setError(false)
     const id= uuidv4()
     //setData({...data, id}) // se está omitiendo ya que directo el id se pasa cuando lo envía
     //setData({...data, id:uuidv4()})  Sería una segunda opción

     // crear cita
     crearCita({...data, id}) // se envía el id que se necesita
    }

    return(
        <>
        <h2>Crear Cita</h2>
        <form
        onSubmit={sentData}
        >
            {error ? <p className='alerta-error'>Visualizamos campos vacíos</p>: null}
            <label>Nombre de Mascota</label>
            <input
                type='text'
                name='mascota'
                className='u-full-width'
                placeholder='Ingresar Nombre de la Mascota'
                onChange={updateData}
                mascota={mascota}
                
            />
            <label>Nombre del dueño</label>
            <input
                type='text'
                name='propietario'
                className='u-full-width'
                placeholder='Ingresar Nombre del Dueño'
                onChange={updateData}
                value={propietario}
            />
            <label>Fecha</label>
            <input
                type='date'
                name='fecha'
                className='u-full-width'
                onChange={updateData}
                value={fecha}
            />
            <label>Hora</label>
            <input
                type='time'
                name='tiempo'
                className='u-full-width'
                onChange={updateData}
                value={tiempo}
            />
            <label>Sintomas</label>
            <textarea
            name='sintomas'
            className='u-full-width'
            onChange={updateData}
            value={sintomas}
            ></textarea>
            <button
            type='submit'
            className='u-full-width button-primary'
            >
                Agregar
            </button>
        </form>
        </>
        
       
    )
}

export default Form