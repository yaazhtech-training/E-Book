import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import Signup from './Components/Signup';
import Categories from './Components/Categories';
import Childrens from './CategoryPages/Childrens';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Banner/>
      <Categories/>
      <Contact/>
       <Routes>
        <Route path='/Contact'element={<Contact/>}/>
        <Route path='/Childrens'element={<Childrens/>}/>
        <Route path='/Signup'element={<Signup/>}/>
       </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
