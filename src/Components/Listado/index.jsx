import PropTypes from 'prop-types'

const Listado = ({cita, deleteCita}) =>{
    const {id, mascota, propietario, fecha, tiempo, sintomas}= cita
    
    return(
        <div className='cita'>
         <p>Mascota: <span>{mascota}</span></p>
         <p>Propietario: <span>{propietario}</span></p>
         <p>Fecha: <span>{fecha}</span></p>
         <p>Hora: <span>{tiempo}</span></p>
         <p>Síntomas: <span>{sintomas}</span></p>
         <p></p>
         <button className='button eliminar u-full-width' onClick={()=>deleteCita(id)}>Eliminar</button>
        </div>
    )
}

Listado.propTypes={
    cita: PropTypes.object.isRequired,
    deleteCita: PropTypes.func.isRequired
}
export default Listado