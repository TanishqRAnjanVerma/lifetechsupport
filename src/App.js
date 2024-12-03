
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
