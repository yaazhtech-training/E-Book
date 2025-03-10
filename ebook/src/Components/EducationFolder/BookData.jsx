//book data

//image 
//state board image 
import standard1img from './EduImg/standard1img.jpg'
import standard2img from './EduImg/standard2img.png'
import standard3img from './EduImg/standard3img.png'
import standard4img from './EduImg/standard4img.png'
import standard5img from './EduImg/standard5img.avif'



import tamilstd1team1 from './EduPdf/std1team1tamil.pdf'
import t1St1pdf from './EduPdf/std1team1tamil.pdf'

const BookData = () => {
const book =[
 // 📚 state Board Books
//standard 1
 //std 1 team 1
{ board: "state-board", standard: "1st-standard", team: "Team 1", image: standard1img, name: "1st Book Tamil & English", path:tamilstd1team1 },
    { board: "state-board", standard: "1st-standard", team: "Team 1", image: standard1img, name: "Maths", path: t1St1pdf },
    { board: "state-board", standard: "1st-standard", team: "Team 1", image: standard1img, name: "Science Book", path: t1St1pdf },
    //std 1 team 2
    { board: "state-board", standard: "1st-standard", team: "Team 2", image: standard1img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "1st-standard", team: "Team 2", image: standard1img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "1st-standard", team: "Team 2", image: standard1img, name: "Science Book", path: t1St1pdf },
    //std 1 team 3
    { board: "state-board", standard: "1st-standard", team: "Team 3", image: standard1img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "1st-standard", team: "Team 3", image: standard1img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "1st-standard", team: "Team 3", image: standard1img, name: "Science Book", path: t1St1pdf },
//standard 2
//team 1
{ board: "state-board", standard: "2nd-standard", team: "Team 1", image: standard2img, name: "Math Book", path: t1St1pdf },
    { board: "state-board", standard: "2nd-standard", team: "Team 1", image: standard2img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "2nd-standard", team: "Team 1", image: standard2img, name: "Social Studies", path: t1St1pdf },
    //team 2
    { board: "state-board", standard: "2nd-standard", team: "Team 2", image: standard2img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "2nd-standard", team: "Team 2", image: standard2img, name: "Social Studies", path: t1St1pdf },
    { board: "state-board", standard: "2nd-standard", team: "Team 2", image: standard2img, name: "Social Studies", path: t1St1pdf },
    //team 3
    { board: "state-board", standard: "2nd-standard", team: "Team 3", image: standard2img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "2nd-standard", team: "Team 3", image: standard2img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "2nd-standard", team: "Team 3", image: standard2img, name: "Science Book", path: t1St1pdf },

//standard 3 
    //team 1
    { board: "state-board", standard: "3rd-standard", team: "Team 1", image:standard3img, name: "Math Book", path: t1St1pdf },
    { board: "state-board", standard: "3rd-standard", team: "Team 1", image:standard3img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "3rd-standard", team: "Team 1", image:standard3img, name: "Social Studies", path: t1St1pdf },
    //team 2
    { board: "state-board", standard: "3rd-standard", team: "Team 2", image:standard3img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "3rd-standard", team: "Team 2", image:standard3img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "3rd-standard", team: "Team 2", image:standard3img, name: "Science Book", path: t1St1pdf },
    //team 3
    { board: "state-board", standard: "3rd-standard", team: "Team 3", image:standard3img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "3rd-standard", team: "Team 3", image:standard3img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "3rd-standard", team: "Team 3", image:standard3img, name: "Science Book", path: t1St1pdf },
//standard 4
    //team 1
    { board: "state-board", standard: "4th-standard", team: "Team 1", image: standard4img, name: "Math Book", path: t1St1pdf },
    { board: "state-board", standard: "4th-standard", team: "Team 1", image: standard4img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "4th-standard", team: "Team 1", image: standard4img, name: "Social Studies", path: t1St1pdf },
    //team 2
    { board: "state-board", standard: "4th-standard", team: "Team 2", image: standard4img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "4th-standard", team: "Team 2", image: standard4img, name: "Social Studies", path: t1St1pdf },
    { board: "state-board", standard: "4th-standard", team: "Team 2", image: standard4img, name: "Social Studies", path: t1St1pdf },

    //team 3
    { board: "state-board", standard: "4th-standard", team: "Team 3", image: standard4img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "4th-standard", team: "Team 3", image: standard4img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "4th-standard", team: "Team 3", image: standard4img, name: "Science Book", path: t1St1pdf },
//standard 5
    //team 1
    { board: "state-board", standard: "5th-standard", team: "Team 1", image: standard5img, name: "Math Book", path: t1St1pdf },
    { board: "state-board", standard: "5th-standard", team: "Team 1", image: standard5img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "5th-standard", team: "Team 1", image: standard5img, name: "Social Studies", path: t1St1pdf },
    //team 2
    { board: "state-board", standard: "5th-standard", team: "Team 2", image: standard5img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "5th-standard", team: "Team 2", image: standard5img, name: "Social Studies", path: t1St1pdf },
    //team 3
    { board: "state-board", standard: "5th-standard", team: "Team 3", image: standard5img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "5th-standard", team: "Team 3", image: standard5img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "5th-standard", team: "Team 3", image: standard5img, name: "Science Book", path: t1St1pdf },
//standard 6 
    //team 1
    { board: "state-board", standard: "6th-standard", team: "Team 1", image: standard5img, name: "Math Book", path: t1St1pdf },
    { board: "state-board", standard: "6th-standard", team: "Team 1", image: standard5img, name: "Science Book", path: t1St1pdf },
    { board: "state-board", standard: "6th-standard", team: "Team 1", image: standard5img, name: "Social Studies", path: t1St1pdf },
    //team 2
    { board: "state-board", standard: "6th-standard", team: "Team 2", image: standard5img, name: "Science Book", path: t1St1pdf },    
 

    // 📚 CBSE Board Books
//standard 1
    //std 1 team 1
    { board: "cbse", standard: "1st-standard", team: "Team 1", image: standard1img, name: "1st Book Tamil & English", path:tamilstd1team1 },
    { board: "cbse", standard: "1st-standard", team: "Team 1", image: standard1img, name: "Maths", path: t1St1pdf },
    { board: "cbse", standard: "1st-standard", team: "Team 1", image: standard1img, name: "Science Book", path: t1St1pdf },
    //std 1 team 2
    { board: "cbse", standard: "1st-standard", team: "Team 2", image: standard1img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "1st-standard", team: "Team 2", image: standard1img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "1st-standard", team: "Team 2", image: standard1img, name: "Science Book", path: t1St1pdf },
    //std 1 team 3
    { board: "cbse", standard: "1st-standard", team: "Team 3", image: standard1img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "1st-standard", team: "Team 3", image: standard1img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "1st-standard", team: "Team 3", image: standard1img, name: "Science Book", path: t1St1pdf },
//standard 2
    //team 1
    { board: "cbse", standard: "2nd-standard", team: "Team 1", image: standard2img, name: "Math Book", path: t1St1pdf },
    { board: "cbse", standard: "2nd-standard", team: "Team 1", image: standard2img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "2nd-standard", team: "Team 1", image: standard2img, name: "Social Studies", path: t1St1pdf },
    //team 2
    { board: "cbse", standard: "2nd-standard", team: "Team 2", image: standard2img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "2nd-standard", team: "Team 2", image: standard2img, name: "Social Studies", path: t1St1pdf },
    { board: "cbse", standard: "2nd-standard", team: "Team 2", image: standard2img, name: "Social Studies", path: t1St1pdf },
    //team 3
    { board: "cbse", standard: "2nd-standard", team: "Team 3", image: standard2img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "2nd-standard", team: "Team 3", image: standard2img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "2nd-standard", team: "Team 3", image: standard2img, name: "Science Book", path: t1St1pdf },

//standard 3 
    //team 1
    { board: "cbse", standard: "3rd-standard", team: "Team 1", image:standard3img, name: "Math Book", path: t1St1pdf },
    { board: "cbse", standard: "3rd-standard", team: "Team 1", image:standard3img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "3rd-standard", team: "Team 1", image:standard3img, name: "Social Studies", path: t1St1pdf },
    //team 2
    { board: "cbse", standard: "3rd-standard", team: "Team 2", image:standard3img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "3rd-standard", team: "Team 2", image:standard3img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "3rd-standard", team: "Team 2", image:standard3img, name: "Science Book", path: t1St1pdf },
    //team 3
    { board: "cbse", standard: "3rd-standard", team: "Team 3", image:standard3img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "3rd-standard", team: "Team 3", image:standard3img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "3rd-standard", team: "Team 3", image:standard3img, name: "Science Book", path: t1St1pdf },
    //standard 4
    //team 1
    { board: "cbse", standard: "4th-standard", team: "Team 1", image: standard4img, name: "Math Book", path: t1St1pdf },
    { board: "cbse", standard: "4th-standard", team: "Team 1", image: standard4img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "4th-standard", team: "Team 1", image: standard4img, name: "Social Studies", path: t1St1pdf },
    //team 2
    { board: "cbse", standard: "4th-standard", team: "Team 2", image: standard4img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "4th-standard", team: "Team 2", image: standard4img, name: "Social Studies", path: t1St1pdf },
    { board: "cbse", standard: "4th-standard", team: "Team 2", image: standard4img, name: "Social Studies", path: t1St1pdf },

    //team 3
    { board: "cbse", standard: "4th-standard", team: "Team 3", image: standard4img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "4th-standard", team: "Team 3", image: standard4img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "4th-standard", team: "Team 3", image: standard4img, name: "Science Book", path: t1St1pdf },
    //standard 5
    //team 1
    { board: "cbse", standard: "5th-standard", team: "Team 1", image: standard5img, name: "Math Book", path: t1St1pdf },
    { board: "cbse", standard: "5th-standard", team: "Team 1", image: standard5img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "5th-standard", team: "Team 1", image: standard5img, name: "Social Studies", path: t1St1pdf },
    //team 2
    { board: "cbse", standard: "5th-standard", team: "Team 2", image: standard5img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "5th-standard", team: "Team 2", image: standard5img, name: "Social Studies", path: t1St1pdf },
    //team 3
    { board: "cbse", standard: "5th-standard", team: "Team 3", image: standard5img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "5th-standard", team: "Team 3", image: standard5img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "5th-standard", team: "Team 3", image: standard5img, name: "Science Book", path: t1St1pdf },
  ];

  return book
}
export default BookData;