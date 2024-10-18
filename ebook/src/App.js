import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Contact from './Components/Contact';
import Footer from './Praveen/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/contact'element={<Contact/>}/>
       </Routes>
      
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
