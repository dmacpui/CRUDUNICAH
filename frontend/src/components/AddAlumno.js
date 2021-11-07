import { useState } from 'react'
import axios from "axios";
import {useNavigate} from 'react-router-dom';

 
const AddAlumno = () => {
    const [Nombre, setNombre] = useState('');
    const [Cuenta, setCuenta] = useState('');
    const [Correo, setCorreo] = useState('');
    const [Carrera, setCarrera] = useState('');
    const navigate = useNavigate();
 
    const saveAlumno = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/alumnos',{
            Nombre: Nombre,
            Cuenta: Cuenta,
            Correo: Correo,
            Carrera: Carrera

        });
        navigate("/");
    }
 
    return (
        <div>
            <form onSubmit={ saveAlumno }>
                <div className="field">
                    <label className="label">Nombre</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Nombre"
                        value={ Nombre }
                        onChange={ (e) => setNombre(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Cuenta</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Cuenta"
                        value={ Cuenta }
                        onChange={ (e) => setCuenta(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Correo</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Correo"
                        value={ Correo }
                        onChange={ (e) => setCorreo(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Carrera</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Carrera"
                        value={ Carrera }
                        onChange={ (e) => setCarrera(e.target.value) }
                    />
                 </div>   
 
                <div className="field">
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddAlumno