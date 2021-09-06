import {useState} from 'react'

const Form =()=>{

   const [data, setData] = useState({mascota:'', propietario:'', fecha:'', tiempo:'', sintomas:''})
    const updateData = e =>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const {mascota, propietario, fecha, tiempo, sintomas} = data
    return(
        <>
        <h2>Crear Cita</h2>
        <form>
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