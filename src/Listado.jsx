import Cita from './Cita.jsx'

function Listado(props) {
    return (
        <div className="one-half column">
            {props.ListaCitas.map((cita) => (
                <Cita
                    id= {cita.id}
                    mascota={cita.mascota}
                    duenio={cita.duenio}
                    fecha={cita.fecha}
                    hora={cita.hora}
                    sintomas={cita.sintomas}
                    EliminarCita={props.EliminarCita}
                />
            ))}
        </div>
    )
}

export default Listado