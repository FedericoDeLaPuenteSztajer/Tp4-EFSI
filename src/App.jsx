import { useEffect, useState } from 'react';
import Formulario from './Formulario.jsx'
import Listado from './Listado.jsx'

function App() {

  const [lastId, setId] = useState(2);
  const [citas, setCitas] = useState([{ "id": 1, "mascota": "Nina", "duenio": "Martín", "fecha": "2021-08-05", "hora": "08:20", "sintomas": "Le duele la pierna" }]);

  const CrearCita = (newCita) => {
    setCitas(prev => [...prev, newCita]) // sin cambiar la anterior lista agrega el nuevo dato
  }

  const ElminarCita = (deleteById) => { 
    const newList = citas.filter((c) => c.id!=deleteById)
    setCitas(newList)
  }

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <Formulario lastId={lastId} setId={setId} CrearCita={CrearCita} />
          <Listado ListaCitas={citas} EliminarCita={ElminarCita}/>
        </div>
      </div>
    </>
  )
}

export default App
