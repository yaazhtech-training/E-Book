import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
 import Contact from './Components/Contact';

 import About from './Components/About';
 import AuthForm from './Components/AuthFrom';
 import Upload from './Components/Upload';

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
     
      
       <Routes>

      
        
        <Route path='/About'element={<About/>}/>
        
        <Route path='/'element={<Banner/>}/>

        

         <Route path='/upload'element={<Upload/>}/>
         <Route path='/categories'element={<Categories/>}/>

         <Route path='/Contact'element={<Contact/>}/> 
        <Route path='/Childrens'element={<Childrens/>}/>
        <Route path='/authform'element={<AuthForm/>}/>
        <Route path='/Signup'element={<Signup/>}/>
       </Routes>
      <Footer/> 
      </BrowserRouter>

      
    </div>
  );
}

export default App;
