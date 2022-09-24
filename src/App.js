
import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';

function App() {
  return (
    <>
        <Navbar title = "Navbar" Pricing ="High Pricing" features='Features'/>
        <div className='container my-3'>
        <TextFrom heading="Enter the Text"/>
        </div>
    
    </>

  );
}

export default App;
