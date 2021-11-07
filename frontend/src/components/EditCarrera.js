/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

 
const EditCarrera = () => {
    const [Nombre, setNombre] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
 
    const updateCarrera = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/carrera/${id}`,{
            Nombre: Nombre
        });
        navigate("/carrera");
    }
 
    useEffect(() => {
        getCarreraById();
    }, []);
 
    const getCarreraById = async () => {
        const response = await axios.get(`http://localhost:5000/carrera/${id}`);
        setNombre(response.data.Nombre);

    }
 
    return (
        <div>
            <form onSubmit={ updateCarrera }>
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
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditCarrera