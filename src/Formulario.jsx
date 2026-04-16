function Formulario(props) {
    const submit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const newCita = {
            "id": props.lastId, 
            "mascota": data.get("mascota"),
            "duenio": data.get("duenio"),
            "fecha": data.get("fecha"),
            "hora": data.get("hora"),
            "sintomas": data.get("sintomas")
        }

        props.setId(props.lastId+1)
        props.CrearCita(newCita)
    }

    return (
        <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <form onSubmit={submit}>
                <label>Nombre Mascota</label>
                <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" required />
                <label>Nombre Dueño</label>
                <input type="text" name="duenio" className="u-full-width" placeholder="Nombre dueño de la mascota" required />
                <label>Fecha</label>
                <input type="date" name="fecha" className="u-full-width" required />
                <label>hora</label>
                <input type="time" name="hora" className="u-full-width" required />
                <label>Sintomas</label>
                <textarea name="sintomas" className="u-full-width"></textarea>
                <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </div>
    )
}

export default Formulario