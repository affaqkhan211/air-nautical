import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Expertise from './pages/expertise/Expertise';
import About from './pages/home/About';

function App() {
  return (
    <>
      <Navbar/>
      <About/>
      <Expertise/>
      <Footer/>
    </>
  );
}

export default App;
