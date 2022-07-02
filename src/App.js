
import './App.css';
import Navbar from './Pages/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ToDo from './Pages/ToDo';
import Calendar from './Pages/Calendar';
import CompletTasks from './Pages/CompletTasks';
import Footer from './Share/Footer';
import UpdateWork from './Pages/UpdateWork';

function App() {
  return (
    <div >
     <Navbar></Navbar>
     <Routes>
      
      <Route path='/' element={<Home></Home>}></Route>
      {/* <Route path='/home' element={<Home></Home>}></Route> */}
      <Route path='/todo' element={<ToDo></ToDo>}></Route>
      <Route path='/update/:id' element={<UpdateWork></UpdateWork>}></Route>
      <Route path='/completed' element={<CompletTasks></CompletTasks>}></Route>
      <Route path='/calendar' element={<Calendar></Calendar>}></Route>

     

    </Routes>

    <Footer></Footer>
    </div>
  );
}

export default App;
