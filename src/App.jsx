//import './App.css'
import { useEffect, useState } from 'react';
import Formulario from './Formulario.jsx'
import Listado from './Listado.jsx'

function App() {
   
  const [lastId, setId]= useState(2);
  const [citas, setCitas] = useState([{ "id":1, "mascota": "Nina", "duenio": "Martín", "fecha": "2021-08-05", "hora": "08:20", "sintomas": "Le duele la pierna" }]);

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <Formulario />
          <Listado ListaCitas={citas}/>
        </div>
      </div>
    </>
  )
}

export default App
