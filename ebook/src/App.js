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
import Childrens from './Components/Childrens';
import PdfViewer from './Components/PdfViewer';
import Literature from './Components/Literature';
import SelfImprove from './Components/SelfImprove';
import ShowPdf from './Components/ShowPdf';
import History from './Components/HistoryFolder/History';
import NaamTamilarKatchi from './Components/NaamTamilar/NaamTamilarKatchi';
import Education from './Components/EducationFolder/Education';
import TeamsAndBooks from './Components/EducationFolder/TeamAndStd';
import BookData from './Components/EducationFolder/BookData';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
      <Navbar/>

       <Routes>
       
        <Route path='/About'element={<About/>}/>
        <Route path='/'element={<Banner/>}/>
         <Route path='/upload'element={<Upload/>}/>
         <Route path='/'element={<Categories/>}/>
         <Route path='/Contact'element={<Contact/>}/> 
       
        <Route path='/authform'element={<AuthForm/>}/>
        <Route path='/Signup'element={<Signup/>}/>
        <Route path='/pdf'element={<PdfViewer/>}/>

        {/* Books */}
        <Route path='/Childrens'element={<Childrens/>}/>
        <Route path='/literature'element={<Literature/>}/>
        <Route path='/self'element={<SelfImprove/>}/>
       
        <Route path='/history'element={<History/>}/>
        <Route path='/ntk'element={<NaamTamilarKatchi/>}/>
        <Route path='/show'element={<ShowPdf/>}/>


        {/* Education  */}

        <Route path='/edu'element={<Education/>}/>
        <Route path="/:board/:standard" element={<TeamsAndBooks />} />
        <Route path='/show'element={<BookData/>}/>


       
       </Routes>
      <Footer/> 
      </BrowserRouter>

      
    </div>
  );
}

export default App;
