import { BrowserRouter, Routes , Route } from 'react-router-dom'
import AlumnoList from "./components/AlumnotList";
import AddAlumno from "./components/AddAlumno";
import EditAlumno from "./components/EditAlumno";
import './App.css';

 

 function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Routes>
          <Route path='/' element={<AlumnoList />}></Route>
          <Route path='/add' element={<AddAlumno />}></Route>
          <Route path='/edit/:id' element={<EditAlumno />}></Route>
        </Routes>   
    </div>
    </BrowserRouter>
  );
}
 
export default App;