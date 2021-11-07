import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
 
const CarreraList = () => {
    const [carreras, setCarrera] = useState([]);
 
    useEffect(() => {
        getCarreras();
    }, []);
 
    const getCarreras = async () => {
        const response = await axios.get('http://localhost:5000/carrera');
        setCarrera(response.data);
    }
 
    const deleteCarrera = async (id) => {
        await axios.delete(`http://localhost:5000/carrera/${id}`);
        getCarreras();
    }
 
    return (
        <div>
            <Link to="/addcarrera" className="button is-primary mt-2">Agregar una Carrera</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>ID</th>&nbsp;&nbsp;
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { carreras.map((carrera, index) => (
                        <tr key={ carrera.id }>
                            <td>{ index + 1 }</td>&nbsp;&nbsp;
                            <td>{ carrera.Nombre }</td>
                            <td>
                                &nbsp;&nbsp;&nbsp;&nbsp;<Link to={`/editcarrera/${carrera.id}`} className="button is-small is-info">Edit</Link>&nbsp;&nbsp;
                                <button onClick={ () => deleteCarrera(carrera.id) } className="button is-small is-danger">Eliminar</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
            <Link to="/" className="button is-primary mt-2">Regresar</Link>
        </div>
    )
}
 
export default CarreraList