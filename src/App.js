
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
import Contact from './Pages/Contacts/Contact';
import Gallery from './Pages/Gallery/Gallery';
import Home from './Pages/Home/Home';
import Plans from './Pages/Plans/Plans';
import NotFound from './Pages/notFoud/NotFound';
import Trainers from './Pages/Trainers/Trainers';
import Footer from './Components/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='plans' element={<Plans />} />
        <Route path='trainers' element={<Trainers />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
