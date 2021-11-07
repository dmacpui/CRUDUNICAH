/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

 
const EditAlumno = () => {
    const [Nombre, setNombre] = useState('');
    const [Cuenta, setCuenta] = useState('');
    const [Correo, setCorreo] = useState('');
    const [Carrera, setCarrera] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
 
    const updateAlumno = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/alumnos/${id}`,{
            Nombre: Nombre,
            Cuenta: Cuenta,
            Correo: Correo,
            Carrera: Carrera
        });
        navigate("/");
    }
 
    useEffect(() => {
        getAlumnoById();
    }, []);
 
    const getAlumnoById = async () => {
        const response = await axios.get(`http://localhost:5000/alumnos/${id}`);
        setNombre(response.data.Nombre);
        setCuenta(response.data.Cuenta);
        setCorreo(response.data.Correo);
        setCarrera(response.data.Carrera);
    }
 
    return (
        <div>
            <form onSubmit={ updateAlumno }>
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
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditAlumno