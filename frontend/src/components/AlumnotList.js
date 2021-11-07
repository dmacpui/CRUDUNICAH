import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
 
const AlumnoList = () => {
    const [alumnos, setAlumno] = useState([]);
 
    useEffect(() => {
        getAlumnos();
    }, []);
 
    const getAlumnos = async () => {
        const response = await axios.get('http://localhost:5000/alumnos');
        setAlumno(response.data);
    }
 
    const deleteAlumno = async (id) => {
        await axios.delete(`http://localhost:5000/alumnos/${id}`);
        getAlumnos();
    }
 
    return (
        <div>
            <Link to="/add" className="button is-primary mt-2">Agregar un Alumno</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Cuenta</th>
                        <th>Correo</th>
                        <th>Carrera</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { alumnos.map((alumno, index) => (
                        <tr key={ alumno.id }>
                            <td>{ index + 1 }</td>
                            <td>{ alumno.Nombre }</td>
                            <td>{ alumno.Cuenta }</td>
                            <td>{ alumno.Correo }</td>
                            <td>{ alumno.Carrera }</td>
                            <td>
                                <Link to={`/edit/${alumno.id}`} className="button is-small is-info">Edit</Link>&nbsp;&nbsp;
                                <button onClick={ () => deleteAlumno(alumno.id) } className="button is-small is-danger">Eliminar</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}
 
export default AlumnoList