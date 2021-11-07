import { BrowserRouter, Routes , Route } from 'react-router-dom'
import AlumnoList from "./components/AlumnotList";
import AddAlumno from "./components/AddAlumno";
import EditAlumno from "./components/EditAlumno";
import CarreraList from "./components/CarreraList";
import AddCarrera from "./components/AddCarrera";
import EditCarrera from "./components/EditCarrera";
import './App.css';

 

 function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Routes>
          <Route path='/' element={<AlumnoList />}></Route>
          <Route path='/add' element={<AddAlumno />}></Route>
          <Route path='/edit/:id' element={<EditAlumno />}></Route>
          <Route path='/carrera' element={<CarreraList />}></Route>
          <Route path='/addcarrera' element={<AddCarrera />}></Route>
          <Route path='/editcarrera/:id' element={<EditCarrera />}></Route>
        </Routes>   
    </div>
    </BrowserRouter>
  );
}
 
export default App;