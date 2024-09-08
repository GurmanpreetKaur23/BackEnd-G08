import './App.css';
import Navigation from '../../01_MediumClone/src/components/Navigation';
import Hero from './src/components/Hero';
import Footer from './src/components/Footer';
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
