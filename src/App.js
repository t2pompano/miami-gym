
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
import Contact from './Pages/Contacts/Contact';
import Gallery from './Pages/Gallery/Gallery';
import Home from './Pages/Home/Home';
import Plans from './Pages/Plans/Plans';
import Trainer from './Pages/Trainer/Trainer';
import NotFound from './Pages/notFoud/NotFound';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Gallery />
      <Plans />
      <Trainer />
      <NotFound />
    </div>
  );
}

export default App;
