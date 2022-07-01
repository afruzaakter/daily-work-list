
import './App.css';
import Navbar from './Pages/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ToDo from './Pages/ToDo';
import Calendar from './Pages/Calendar';

function App() {
  return (
    <div >
     <Navbar></Navbar>
     <Routes>
      
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/todo' element={<ToDo></ToDo>}></Route>
      <Route path='/calendar' element={<Calendar></Calendar>}></Route>

     

    </Routes>

    
    </div>
  );
}

export default App;
