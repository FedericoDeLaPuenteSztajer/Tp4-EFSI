import Cita from './Cita.jsx'

const ListaCitas = [{ "mascota": "Nina", "duenio": "Martín", "fecha": "2021-08-05", "hora": "08:20", "sintomas": "Le duele la pierna" }]

function Listado() {
    return (
        <div className="one-half column">
            {ListaCitas.map((cita) => (
                <Cita
                    mascota={cita.mascota}
                    duenio={cita.duenio}
                    fecha={cita.fecha}
                    hora={cita.hora}
                    sintomas={cita.sintomas}
                />
            ))}
        </div>
    )
}

export default Listado