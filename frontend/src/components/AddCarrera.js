import { useState } from 'react'
import axios from "axios";
import {useNavigate} from 'react-router-dom';

 
const AddCarrera = () => {
    const [Nombre, setNombre] = useState('');

    const navigate = useNavigate();
 
    const saveCarrera = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/carrera',{
            Nombre: Nombre
        });
        navigate("/carrera");
    }
 
    return (
        <div>
            <form onSubmit={ saveCarrera }>
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
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddCarrera