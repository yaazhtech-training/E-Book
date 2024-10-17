import './App.css';
import Navbar from './Components/Navbar';
<<<<<<< Updated upstream
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Contact from './Components/Contact';
import Footer from './Praveen/Footer';
=======
import Banner from './Components/Banner';
import Categories from './Components/Categories';
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
      <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/contact'element={<Contact/>}/>
       </Routes>
      
      <Footer/>
      </BrowserRouter>
      
=======
      <Navbar/>
      <Banner/>
      <Categories/>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
