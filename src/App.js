
import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
// import TextFrom from './components/TextForm';

function App() {
  return (
    <>
        <Navbar title = "Navbar" Pricing ="High Pricing" features='Features'/>
        <div className='container my-3'>
       <AboutUs/>
        </div>
          
    </>

  );
}

export default App;
