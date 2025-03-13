//book data

//image 
//state board image 
import standard1img from './EduImg/standard1img.jpg'
import standard2img from './EduImg/standard2img.png'
import standard3img from './EduImg/standard3img.png'
import standard4img from './EduImg/standard4img.png'
import standard5img from './EduImg/standard5img.avif'


//state board pdf 
//standard 1
//team 1 
import tamilstd1term1 from './EduPdf/stateBoardpdf/std1Team1/std1team1Tamil.pdf'
import Engstd1term1 from './EduPdf/stateBoardpdf/std1Team1/std1team1english.pdf'
import Evsstd1term1 from './EduPdf/stateBoardpdf/std1Team1/Evsstd1Team1.pdf'
//team 2
import std1term2tamil from './EduPdf/stateBoardpdf/std1Team2/std1team2tamil.pdf'
import std1term2eng from './EduPdf/stateBoardpdf/std1Team2/std1team2english.pdf'
import std1term2evs from './EduPdf/stateBoardpdf/std1Team2//std1team2evs.pdf'
//term 3
import std1term3tamil from './EduPdf/stateBoardpdf//Std1Team3/stdterm3tamil.pdf'
import std1term3engilsh from './EduPdf/stateBoardpdf//Std1Team3/std1term3engilsh.pdf'
import std1term3Evs from './EduPdf/stateBoardpdf//Std1Team3/std1term3Evs.pdf'









import t1St1pdf from './EduPdf/stateBoardpdf/std1Team1/std1team1Tamil.pdf'

const BookData = () => {
const book =[
 // 📚 state Board Books
//standard 1
 //std 1Term
{ board: "state-board", standard: "1st-standard",term: "Term 1", image: standard1img, name: "Tamil", path:tamilstd1term1 },
    { board: "state-board", standard: "1st-standard",term: "Term 1", image: standard1img, name: "English ", path: Engstd1term1 },
     { board: "state-board", standard: "1st-standard",term: "Term 1", image: standard1img, name: "EVS", path: Evsstd1term1 },
    // { board: "state-board", standard: "1st-standard",term: "Term 1", image: standard1img, name: "Maths", path: EvsStd1term1 },

    //std 1term 2
    { board: "state-board", standard: "1st-standard",term: "Term 2", image: standard1img, name: "Tamil", path: std1term2tamil },
    { board: "state-board", standard: "1st-standard",term: "Term 2", image: standard1img, name: "English", path: std1term2eng },
    { board: "state-board", standard: "1st-standard",term: "Term 2", image: standard1img, name: "EVS", path: std1term2evs },
    // { board: "state-board", standard: "1st-standard",term: "Term 2", image: standard1img, name: "EVS", path: std1term2evs },

    //std 1term 3
    { board: "state-board", standard: "1st-standard",term: "Term 3", image: standard1img, name: "Tamil", path: std1term3tamil },
    { board: "state-board", standard: "1st-standard",term: "Term 3", image: standard1img, name: "English ", path: std1term3engilsh  },
    { board: "state-board", standard: "1st-standard",term: "Term 3", image: standard1img, name: "Environmental Science", path:std1term3Evs  },
    // { board: "state-board", standard: "1st-standard",term: "Term 3", image: standard1img, name: "maths", path: t1St1pdf },

//standard 2
//term 1
{ board: "state-board", standard: "2nd-standard",term: "Term 1", image: standard2img, name: "Math Book", path: t1St1pdf },
    { board: "state-board", standard: "2nd-standard",term: "Term 1", image: standard2img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "2nd-standard",term: "Term 1", image: standard2img, name: "Social Studies", path: t1St1pdf },
    //term 2
    { board: "state-board", standard: "2nd-standard",term: "Term 2", image: standard2img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "2nd-standard",term: "Term 2", image: standard2img, name: "Social Studies", path: t1St1pdf },
    { board: "state-board", standard: "2nd-standard",term: "Term 2", image: standard2img, name: "Social Studies", path: t1St1pdf },
    //term 3
    { board: "state-board", standard: "2nd-standard",term: "Term 3", image: standard2img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "2nd-standard",term: "Term 3", image: standard2img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "2nd-standard",term: "Term 3", image: standard2img, name: "Science Book", path: t1St1pdf },

//standard 3 
    //Term
    { board: "state-board", standard: "3rd-standard",term: "Term 1", image:standard3img, name: "Math Book", path: t1St1pdf },
    { board: "state-board", standard: "3rd-standard",term: "Term 1", image:standard3img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "3rd-standard",term: "Term 1", image:standard3img, name: "Social Studies", path: t1St1pdf },
    //Term 2
    { board: "state-board", standard: "3rd-standard",term: "Term 2", image:standard3img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "3rd-standard",term: "Term 2", image:standard3img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "3rd-standard",term: "Term 2", image:standard3img, name: "Science Book", path: t1St1pdf },
    //Term 3
    { board: "state-board", standard: "3rd-standard",term: "Term 3", image:standard3img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "3rd-standard",term: "Term 3", image:standard3img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "3rd-standard",term: "Term 3", image:standard3img, name: "Science Book", path: t1St1pdf },
//standard 4
    //Term
    { board: "state-board", standard: "4th-standard",term: "Term 1", image: standard4img, name: "Math Book", path: t1St1pdf },
    { board: "state-board", standard: "4th-standard",term: "Term 1", image: standard4img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "4th-standard",term: "Term 1", image: standard4img, name: "Social Studies", path: t1St1pdf },
    //Term 2
    { board: "state-board", standard: "4th-standard",term: "Term 2", image: standard4img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "4th-standard",term: "Term 2", image: standard4img, name: "Social Studies", path: t1St1pdf },
    { board: "state-board", standard: "4th-standard",term: "Term 2", image: standard4img, name: "Social Studies", path: t1St1pdf },

    //Term 3
    { board: "state-board", standard: "4th-standard",term: "Term 3", image: standard4img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "4th-standard",term: "Term 3", image: standard4img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "4th-standard",term: "Term 3", image: standard4img, name: "Science Book", path: t1St1pdf },
//standard 5
    //Term
    { board: "state-board", standard: "5th-standard",term: "Term 1", image: standard5img, name: "Math Book", path: t1St1pdf },
    { board: "state-board", standard: "5th-standard",term: "Term 1", image: standard5img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "5th-standard",term: "Term 1", image: standard5img, name: "Social Studies", path: t1St1pdf },
    //Term 2
    { board: "state-board", standard: "5th-standard",term: "Term 2", image: standard5img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "5th-standard",term: "Term 2", image: standard5img, name: "Social Studies", path: t1St1pdf },
    //Term 3
    { board: "state-board", standard: "5th-standard",term: "Term 3", image: standard5img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "5th-standard",term: "Term 3", image: standard5img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "5th-standard",term: "Term 3", image: standard5img, name: "Science Book", path: t1St1pdf },
//standard 6 
    //Term
    { board: "state-board", standard: "6th-standard",term: "Term 1", image: standard5img, name: "Math Book", path: t1St1pdf },
    { board: "state-board", standard: "6th-standard",term: "Term 1", image: standard5img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "6th-standard",term: "Term 1", image: standard5img, name: "Social Studies", path: t1St1pdf },
    //Term 2
    { board: "state-board", standard: "6th-standard",term: "Term 2", image: standard5img, name: "Science Book", path: t1St1pdf },    
 

    // 📚 CBSE Board Books
//standard 1
    //std 1Term
    // { board: "cbse", standard: "1st-standard",term: "Term 1", image: standard1img, name: "1st Book Tamil & English", path:tamilstd1term1 },
    { board: "cbse", standard: "1st-standard",term: "Term 1", image: standard1img, name: "Maths", path: t1St1pdf },
    { board: "cbse", standard: "1st-standard",term: "Term 1", image: standard1img, name: "Science Book", path: t1St1pdf },
    //std 1Term 2
    { board: "cbse", standard: "1st-standard",term: "Term 2", image: standard1img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "1st-standard",term: "Term 2", image: standard1img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "1st-standard",term: "Term 2", image: standard1img, name: "Science Book", path: t1St1pdf },
    //std 1Term 3
    { board: "cbse", standard: "1st-standard",term: "Term 3", image: standard1img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "1st-standard",term: "Term 3", image: standard1img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "1st-standard",term: "Term 3", image: standard1img, name: "Science Book", path: t1St1pdf },
//standard 2
    //Term
    { board: "cbse", standard: "2nd-standard",term: "Term 1", image: standard2img, name: "Math Book", path: t1St1pdf },
    { board: "cbse", standard: "2nd-standard",term: "Term 1", image: standard2img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "2nd-standard",term: "Term 1", image: standard2img, name: "Social Studies", path: t1St1pdf },
    //Term 2
    { board: "cbse", standard: "2nd-standard",term: "Term 2", image: standard2img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "2nd-standard",term: "Term 2", image: standard2img, name: "Social Studies", path: t1St1pdf },
    { board: "cbse", standard: "2nd-standard",term: "Term 2", image: standard2img, name: "Social Studies", path: t1St1pdf },
    //Term 3
    { board: "cbse", standard: "2nd-standard",term: "Term 3", image: standard2img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "2nd-standard",term: "Term 3", image: standard2img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "2nd-standard",term: "Term 3", image: standard2img, name: "Science Book", path: t1St1pdf },

//standard 3 
    //Term
    { board: "cbse", standard: "3rd-standard",term: "Term 1", image:standard3img, name: "Math Book", path: t1St1pdf },
    { board: "cbse", standard: "3rd-standard",term: "Term 1", image:standard3img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "3rd-standard",term: "Term 1", image:standard3img, name: "Social Studies", path: t1St1pdf },
    //Term 2
    { board: "cbse", standard: "3rd-standard",term: "Term 2", image:standard3img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "3rd-standard",term: "Term 2", image:standard3img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "3rd-standard",term: "Term 2", image:standard3img, name: "Science Book", path: t1St1pdf },
    //Term 3
    { board: "cbse", standard: "3rd-standard",term: "Term 3", image:standard3img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "3rd-standard",term: "Term 3", image:standard3img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "3rd-standard",term: "Term 3", image:standard3img, name: "Science Book", path: t1St1pdf },
    //standard 4
    //Term
    { board: "cbse", standard: "4th-standard",term: "Term 1", image: standard4img, name: "Math Book", path: t1St1pdf },
    { board: "cbse", standard: "4th-standard",term: "Term 1", image: standard4img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "4th-standard",term: "Term 1", image: standard4img, name: "Social Studies", path: t1St1pdf },
    //Term 2
    { board: "cbse", standard: "4th-standard",term: "Term 2", image: standard4img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "4th-standard",term: "Term 2", image: standard4img, name: "Social Studies", path: t1St1pdf },
    { board: "cbse", standard: "4th-standard",term: "Term 2", image: standard4img, name: "Social Studies", path: t1St1pdf },

    //Term 3
    { board: "cbse", standard: "4th-standard",term: "Term 3", image: standard4img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "4th-standard",term: "Term 3", image: standard4img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "4th-standard",term: "Term 3", image: standard4img, name: "Science Book", path: t1St1pdf },
    //standard 5
    //Term
    { board: "cbse", standard: "5th-standard",term: "Term 1", image: standard5img, name: "Math Book", path: t1St1pdf },
    { board: "cbse", standard: "5th-standard",term: "Term 1", image: standard5img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "5th-standard",term: "Term 1", image: standard5img, name: "Social Studies", path: t1St1pdf },
    //Term 2
    { board: "cbse", standard: "5th-standard",term: "Term 2", image: standard5img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "5th-standard",term: "Term 2", image: standard5img, name: "Social Studies", path: t1St1pdf },
    //Term 3
    { board: "cbse", standard: "5th-standard",term: "Term 3", image: standard5img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "5th-standard",term: "Term 3", image: standard5img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "5th-standard",term: "Term 3", image: standard5img, name: "Science Book", path: t1St1pdf },
  ];

  return book
}
export default BookData;