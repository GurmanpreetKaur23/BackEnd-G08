import './App.css';
import Navigation from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
const App = () =>{
  return (
    <>
    <div>
      <Navigation />
    </div>
    <div>
      <Hero />
    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
};

export default App
