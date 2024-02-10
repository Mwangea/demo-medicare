import Home from '../Pages/Home';
import Doctors from '../Pages/Doctors/Doctors';
import DoctorsDetails from '../Pages/Doctors/DoctorDetails';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Contact from '../Pages/Contact';
import Services from "../Pages/Services";


import { Routes, Route } from 'react-router-dom';



const Routers = () => {
  return <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/home" element={<Home />} />
     <Route path="/doctors" element={<Doctors />} />
     <Route path="/doctors/:id" element={<DoctorsDetails />} />
     <Route path="/login" element={<Login />} />
     <Route path="/register" element={<Signup />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="/services" element={<Services />} />



     
  </Routes>
}

export default Routers;