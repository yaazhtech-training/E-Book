//book data

//image 
//state board image 
import standard1img from './EduImg/standard1img.jpg'
import standard2img from './EduImg/standard2img.png'
import standard3img from './EduImg/standard3img.png'
import standard4img from './EduImg/standard4img.png'
import standard5img from './EduImg/standard5img.avif'
import standard6img from './EduImg/std6img.webp'
import standard7img from './EduImg/std7img.webp'
import standard8img from './EduImg/std8img.webp'
import standard9img from './EduImg/std9img.avif'
import standard10img from './EduImg/std10img.webp'
import standard11img from './EduImg/std11img.webp'
import standard12img from './EduImg/std12img.jpeg'



//cbse image 
//std 1 
import std1eng from './EducbseImg/std1eng.png'
import std1maths from './EducbseImg/std1maths.png'
import std1hindi from './EducbseImg/std1hindi.png'
//std 2
import std2eng from './EducbseImg/std2eng.png'
import std2hindi from './EducbseImg/std2hindi.png'
import std2maths from './EducbseImg/std2maths.png'
//std 3
import std3eng from './EducbseImg/std3eng.png'
import std3hindi from './EducbseImg/std3hindi.png'
import std3maths from './EducbseImg/std3maths.png'
import std3yoga from './EducbseImg/std3yoga.png'
import std3art from './EducbseImg/std3art.png'
//std4
import std4eng from './EducbseImg/std4eng.png'
import std4hindi from './EducbseImg/std4hindi.png'
import std4maths from './EducbseImg/std4maths.png'
import std4evs from './EducbseImg/std4evs.png'
//std5
import std5eng from './EducbseImg/std5eng.png'
import std5hindi from './EducbseImg/std5hindi.png'
import std5maths from './EducbseImg/std5maths.png'
import std5evs from './EducbseImg/std5evs.png'


const BookData = () => {
const book =[
 // 📚 state Board Books
//standard 1
 //std 1Term
{ board: "state-board", standard: "1st-standard",term: "Term 1", image: standard1img, name: "Tamil", path:"10cwPHVUXDGsx7-RefztxSGMHU6iUZpkW" },
    { board: "state-board", standard: "1st-standard",term: "Term 1", image: standard1img, name: "English ", path: "1vA9fHBFGZhO6N5caD3_JkbCf_xDlaEdX"},
    { board: "state-board", standard: "1st-standard",term: "Term 1", image: standard1img, name: "Maths", path: "1Q1n0quqH5j5z-yIiu2yGcwRqn0n9Xtc-" },
    { board: "state-board", standard: "1st-standard",term: "Term 1", image: standard1img, name: "Environmental Science", path: "1__Yxzeac8slPAEKmXZHPkIy9TNptQ_tk"},

    //std 1term 2
    { board: "state-board", standard: "1st-standard",term: "Term 2", image: standard1img, name: "Tamil", path:"10cwPHVUXDGsx7-RefztxSGMHU6iUZpkW" },
    { board: "state-board", standard: "1st-standard",term: "Term 2", image: standard1img, name: "English", path: "1vA9fHBFGZhO6N5caD3_JkbCf_xDlaEdX" },
    { board: "state-board", standard: "1st-standard",term: "Term 2", image: standard1img, name: "Maths", path: "1Q1n0quqH5j5z-yIiu2yGcwRqn0n9Xtc-" },
    { board: "state-board", standard: "1st-standard",term: "Term 2", image: standard1img, name: "Environmental Science", path: "1__Yxzeac8slPAEKmXZHPkIy9TNptQ_tk" },

    //std 1term 3
    { board: "state-board", standard: "1st-standard",term: "Term 3", image: standard1img, name: "Tamil", path: "1Dk1t3hm674TwswQ0OhVG8rr_6NY3clZg" },
    { board: "state-board", standard: "1st-standard",term: "Term 3", image: standard1img, name: "English ", path: "1VgfB_IrKVpQs4O7nMu6tpHdaG_VGsWWn"  },
    { board: "state-board", standard: "1st-standard",term: "Term 3", image: standard1img, name: "maths", path: "1qGeadFNV5BzEu-87hoyyrPMd6KGydTsD" },
    { board: "state-board", standard: "1st-standard",term: "Term 3", image: standard1img, name: "Environmental Science", path:"1USVCC1ZixjGJWMsCRAioSwuyFUnw7OhR" },

//standard 2
//term 1
{ board: "state-board", standard: "2nd-standard",term: "Term 1", image: standard2img, name: "Tamil", path: "1s7tXVnCeDRrngYAAa9pSgOsj64sk9meo" },
    { board: "state-board", standard: "2nd-standard",term: "Term 1", image: standard2img, name: "English", path:"12eTQgwpaGbAc96gzXENXjOYoPlDUTq6_" },
    { board: "state-board", standard: "2nd-standard",term: "Term 1", image: standard2img, name: "Maths", path: "1yC5xfEND9P4Fy0bT7Evt49i_zsMnajR7" },
    { board: "state-board", standard: "2nd-standard",term: "Term 1", image: standard2img, name: "Environmental Science", path: "1n40vZCulE0dyy1QJekMtw9b5IFQrDAww" },

    //term 2
    { board: "state-board", standard: "2nd-standard",term: "Term 2", image: standard2img, name: "Tamil", path: "1Wk5sNRYfuYCRMwLRLEStwDSbywm3SzFE" },
    { board: "state-board", standard: "2nd-standard",term: "Term 2", image: standard2img, name: "Engilsh", path: "1USLcrZckRtgQh0lca9ubsgadP8wBCiPC" },
    { board: "state-board", standard: "2nd-standard",term: "Term 2", image: standard2img, name: "Maths", path: "16cWs5TYMPjiZ-I0RgtNA3kCCLjtG2HVT" },
    { board: "state-board", standard: "2nd-standard",term: "Term 2", image: standard2img, name: "Environmental Science", path: "1TNQlsZ6rCfGw6cpwjAlertjon66HYh3T" },
    //term 3
    { board: "state-board", standard: "2nd-standard",term: "Term 3", image: standard2img, name: "Tamil", path: "1FWdxjATYzPjIUtXbHW54f33UCPZ1itgy" },
    { board: "state-board", standard: "2nd-standard",term: "Term 3", image: standard2img, name: "Engilsh", path: "1jktMrfy3DPKQXoxDBcANFQOqupdjBuuW" },
    { board: "state-board", standard: "2nd-standard",term: "Term 3", image: standard2img, name: "Maths", path: "1IOIo-xvnNIVTZsk94hEofeEd3trz-R75" },
    { board: "state-board", standard: "2nd-standard",term: "Term 3", image: standard2img, name: "Environmental Science", path: "1sJw3hsmyhDit3i3Et2Ge4x6JC7gJVCsL" },

//standard 3 
    //Term 1
    { board: "state-board", standard: "3rd-standard",term: "Term 1", image:standard3img, name: "Tamil", path: "1zRB3s49OTTT8cSlotWCgRD-IwjpWF9El" },
    { board: "state-board", standard: "3rd-standard",term: "Term 1", image:standard3img, name: "English", path: "17REOa19s51-xnQFjX1b0gnI-mxC1aWOX" },
    { board: "state-board", standard: "3rd-standard",term: "Term 1", image:standard3img, name: "Maths", path: "1EpBE0pEuOv37G8UINc3AaLA7E9FEDcmr" },
    { board: "state-board", standard: "3rd-standard",term: "Term 1", image:standard3img, name: "Science", path: "1t35iHXx3AWnSQEEK2soIPl8G_KhJOOV6" },
    { board: "state-board", standard: "3rd-standard",term: "Term 1", image:standard3img, name: "Social Science", path: "1J4x6GjCzEC86AjYH9GZRls_X8_Ed8gP8" },
    //Term 2
    { board: "state-board", standard: "3rd-standard",term: "Term 2", image:standard3img, name: "Tamil", path: "1_XT6ZOr2VkQBk22dMqwW-I4wgB4hygQF" },
    { board: "state-board", standard: "3rd-standard",term: "Term 2", image:standard3img, name: "English", path: "1phqB_WfKkw5mbbU7xGBjPnC0zSJ2pwG7" },
    { board: "state-board", standard: "3rd-standard",term: "Term 2", image:standard3img, name: "Maths", path: "1xxyq-YyblQmkziEU3UF4aHPhnvVDmLJ3" },
    { board: "state-board", standard: "3rd-standard",term: "Term 2", image:standard3img, name: "Science", path: "17PC4gJk79ZVNAq3HbCkU0y8r3zdbPIKq" },
    { board: "state-board", standard: "3rd-standard",term: "Term 2", image:standard3img, name: "Social Science", path: "1GkUNNAadA6i6zBjGR5K5l_tMqLxb6xr8" },
     //Term 3
     { board: "state-board", standard: "3rd-standard",term: "Term 3", image:standard3img, name: "Tamil", path: "1lMibEqvP9bfwlLXGkA38T-GKU5BcKeGh" },
     { board: "state-board", standard: "3rd-standard",term: "Term 3", image:standard3img, name: "English", path: "1yGH7D56tRERjISMHRTBoLZNdkq2XNAem" },
     { board: "state-board", standard: "3rd-standard",term: "Term 3", image:standard3img, name: "Maths", path: "14H9FAUmlB61dJUYz88HNvVQ-O3DhqUwM" },
     { board: "state-board", standard: "3rd-standard",term: "Term 3", image:standard3img, name: "Science", path: "1u66b2dsmhDKl_Fdngu3KjSAFs-dtnE3K" },
     { board: "state-board", standard: "3rd-standard",term: "Term 3", image:standard3img, name: "Social Science", path: "1HMgfdAOndS3Q26a52MuKtEzZYDHBoSUW" },
  //standard 4
    //Term
    { board: "state-board", standard: "4th-standard",term: "Term 1", image: standard4img, name: "Tamil", path: "1gU20wmYXxPP3GL8PQA1n0SXxKs7K4HxL" },
    { board: "state-board", standard: "4th-standard",term: "Term 1", image: standard4img, name: "English", path: "1SIMhSvT2bVzmiCrlcKkfuyv5aHqNvn0o" },
    { board: "state-board", standard: "4th-standard",term: "Term 1", image: standard4img, name: "Maths", path: "1Twf2H0vgZA2R21oBklm_u51MTHr2QZw3" },
    { board: "state-board", standard: "4th-standard",term: "Term 1", image: standard4img, name: "Science", path: "1HvdFtIApXsoVMF9OiKj7PvpCqj0EzWYS" },
    { board: "state-board", standard: "4th-standard",term: "Term 1", image: standard4img, name: "Social Studies", path: "1tum5SXQUEYv_2NwyWDcxe7i6zPsTYx2u" },
    //Term 2
    { board: "state-board", standard: "4th-standard",term: "Term 2", image: standard4img, name: "Tamil", path: "1fRrlg1yuBa0My1wieMwcM_Nd0aQWKJNN" },
    { board: "state-board", standard: "4th-standard",term: "Term 2", image: standard4img, name: "English", path: "19uJaIqnNmhZILXFm2EaYsG8PpByoz0_O" },
    { board: "state-board", standard: "4th-standard",term: "Term 2", image: standard4img, name: "Maths", path: "1Yu77Kb_lb-IBbCxrePusFKc1eByWA8ze" },
    { board: "state-board", standard: "4th-standard",term: "Term 2", image: standard4img, name: "Science", path: "1Yts2KGQYbUTo27eWTuqc0XPO25_2SRHa" },
    { board: "state-board", standard: "4th-standard",term: "Term 2", image: standard4img, name: "Social Studies", path: "1VUT-nlYkdu-1Eex0_y9wWp0xN9LdpjM3" },
    //Term 3
    { board: "state-board", standard: "4th-standard",term: "Term 3", image: standard4img, name: "Tamil", path: "1xRZ6B54EmuMHf6d5LZb1Kzr2wrlkHtWs" },
    { board: "state-board", standard: "4th-standard",term: "Term 3", image: standard4img, name: "English", path: "1PEXB8650MG43daJySBPr9_e-9oqja5g1" },
    { board: "state-board", standard: "4th-standard",term: "Term 3", image: standard4img, name: "Maths", path: "1CAHRjbrSkIkfPfPwBausdKoh8IsGdKWO" },
    { board: "state-board", standard: "4th-standard",term: "Term 3", image: standard4img, name: "Science", path: "1XHl4OzjUtK1zPrj3zJlgClhRAw2QOr1i" },
    { board: "state-board", standard: "4th-standard",term: "Term 3", image: standard4img, name: "Social Studies", path: "1pkL-h64tf-8bZ80qRc9quzwDrwMkf_sv" },
//standard 5
    //Term 1
    { board: "state-board", standard: "5th-standard",term: "Term 1", image: standard5img, name: "Tamil", path: "1IEk-MKVL67_g-EI_ozWcBSbRuR4-KpC8" },
    { board: "state-board", standard: "5th-standard",term: "Term 1", image: standard5img, name: "English", path: "1YxBRR57SBwvGERcXSMgJwH2fJBwgYH71" },
    { board: "state-board", standard: "5th-standard",term: "Term 1", image: standard5img, name: "Maths", path: "1CoDDr-dO7d_X3_Ra4vN3BsBPk3yAnsGZ" },
    { board: "state-board", standard: "5th-standard",term: "Term 1", image: standard5img, name: "Science", path: "1_oR9yLs-FIsJ1AQoUq2AXxpQsknKcawR" },
    { board: "state-board", standard: "5th-standard",term: "Term 1", image: standard5img, name: "Social Studies", path: "1lgHio0dEyqQCf2BOz2OC0KZblovjAMCG" },
    //Term 2
    { board: "state-board", standard: "5th-standard",term: "Term 2", image: standard5img, name: "Tamil", path: "1DA7lUxkW34STIRe6uUd-NIsqJx_xgNS6" },
    { board: "state-board", standard: "5th-standard",term: "Term 2", image: standard5img, name: "English", path: "1kQdm23QhX0Wa7LTOICLDCh_Wsl7f2N9Z" },
    { board: "state-board", standard: "5th-standard",term: "Term 2", image: standard5img, name: "Maths", path: "13VrFJ8d98OHrJJc-aMcKBVI3mU-vcr2Q" },
    { board: "state-board", standard: "5th-standard",term: "Term 2", image: standard5img, name: "Science", path: "1NX3095w3_iR6TtqRN2yObaHdPhuJaQ83" },
    { board: "state-board", standard: "5th-standard",term: "Term 2", image: standard5img, name: "Social Studies", path: "1ne4d197jmcwckS7nQQyTIyOoWZ7Sj96B" },
    //Term 3
    { board: "state-board", standard: "5th-standard",term: "Term 3", image: standard5img, name: "Tamil", path: "1A4xXyCA3AdycUDnD4nYm1c-R62t3P548" },
    { board: "state-board", standard: "5th-standard",term: "Term 3", image: standard5img, name: "English", path: "1XW2gXDaQQB3GAdlgevI-SyTm_RjzzmbB" },
    { board: "state-board", standard: "5th-standard",term: "Term 3", image: standard5img, name: "Maths", path: "1al12YyeHK45pgTBkOXBQpV3sPRtXOP2Z" },
    { board: "state-board", standard: "5th-standard",term: "Term 3", image: standard5img, name: "Science", path: "1JBTPRWa0vyLVrMWWu7i0y5UzVXtdA8N9" },
    { board: "state-board", standard: "5th-standard",term: "Term 3", image: standard5img, name: "Social Studies", path: "1_ezn7Mu3R8S_HOsWE7Bn92CduEzBSeka" },

//standard 6
//Term 1
    { board: "state-board", standard: "6th-standard",term: "Term 1",standard6img, name: "Tamil", path: "1AGV90PuQ6boCtzuSPAO6ppUzavaWesNw" },
    { board: "state-board", standard: "6th-standard",term: "Term 1",standard6img, name: "English", path: "1Ox-Xp365dk9tcWdfXvK5rjF95yfMpjLM" },
    { board: "state-board", standard: "6th-standard",term: "Term 1",standard6img, name: "Maths", path: "1tfrVpG2kvILe94zM66NlUWX8yZ7buNbb" },
    { board: "state-board", standard: "6th-standard",term: "Term 1",standard6img, name: "Science", path: "1cmlg-hoHy_N21KiAVN8IrpIUCqCgJO0l" },
    { board: "state-board", standard: "6th-standard",term: "Term 1",standard6img, name: "Social Studies", path: "1f4Y9DGdqlr4VY8D7URIQOwVFndI-B5T9" },
    //Term 2
    { board: "state-board", standard: "6th-standard",term: "Term 2",standard6img, name: "Tamil", path: "19K9QqbhuD2tlmnOX_bYLkjUiRgc_gBiP" },
    { board: "state-board", standard: "6th-standard",term: "Term 2",standard6img, name: "English", path: "1qBKTHoLITK-L2bjTsvdl6AbT4TKJPprV" },
    { board: "state-board", standard: "6th-standard",term: "Term 2",standard6img, name: "Maths", path: "1CuiXitbpvIJTIT7IjMVooV2Y8B8aEBIS" },
    { board: "state-board", standard: "6th-standard",term: "Term 2",standard6img, name: "Science", path: "1eN7nxMtYtTNRKGX7CWXMcdUe1s9xZ3X1" },
    { board: "state-board", standard: "6th-standard",term: "Term 2",standard6img, name: "Social Studies", path: "1dfciplINKKld6nSu_25eEe6581Ra6ncC" },  
    //Term 3
    { board: "state-board", standard: "6th-standard",term: "Term 3",standard6img, name: "Tamil", path: "1McoTjFs-o8pu4sEJpNpnIaIKNE9mKQuF" },
    { board: "state-board", standard: "6th-standard",term: "Term 3",standard6img, name: "English", path: "1VRk9HgpGby8G0aTHT6OrpSPBnAkDMAtd" },
    { board: "state-board", standard: "6th-standard",term: "Term 3",standard6img, name: "Maths", path: "1_qkMm4_gae59pRFS_VgyLBjE1zN3Bv6b" },
    { board: "state-board", standard: "6th-standard",term: "Term 3",standard6img, name: "Science", path: "17vS80UocxiFT8uuN7FZfv2FgwpNkXSo0" },
    { board: "state-board", standard: "6th-standard",term: "Term 3",standard6img, name: "Social Studies", path: "1mdXudbHXcj8Ra9blhoLs1sb5FVPQnNtJ" },
//standard 7
    //Term 1
    { board: "state-board", standard: "7th-standard",term: "Term 1", image: standard7img, name: "Tamil", path: "1pkskJu1OIhu1lkXdOVt2tWUBNFcX5hvh" },
    { board: "state-board", standard: "7th-standard",term: "Term 1", image: standard7img, name: "English", path: "1pkskJu1OIhu1lkXdOVt2tWUBNFcX5hvh" },
    { board: "state-board", standard: "7th-standard",term: "Term 1", image: standard7img, name: "Maths", path: "1yNy0kVbrIO15YT8f7WL_U4JoQPLzDwKy" },
    { board: "state-board", standard: "7th-standard",term: "Term 1", image: standard7img, name: "Science", path: "1AF0A-JTL5CEiaxSHTlgrmBCfoUSXdegY" },
    { board: "state-board", standard: "7th-standard",term: "Term 1", image: standard7img, name: "Social Studies", path: "1ziqEabbX_V6tL0-Mwd0QOjVDkEmH96j_" },
    //Term 2
    { board: "state-board", standard: "7th-standard",term: "Term 2", image: standard7img, name: "Tamil", path: "1S6ej_-SNfxqDrlUtGiTfhuO3-rYuViH8" },
    { board: "state-board", standard: "7th-standard",term: "Term 2", image: standard7img, name: "English", path: "1mg0khS7NMOU3wP1YbCIePY0ukT5sk4MR" },
    { board: "state-board", standard: "7th-standard",term: "Term 2", image: standard7img, name: "Maths", path: "1IMs77vl2EzEgl47oSXa5LxD-ten4nvjn" },
    { board: "state-board", standard: "7th-standard",term: "Term 2", image: standard7img, name: "Science", path: "1-UxB01bl02NJoqiNbguM7uIGkPzxU3g4" },
    { board: "state-board", standard: "7th-standard",term: "Term 2", image: standard7img, name: "Social Studies", path: "1Pd2q8cyPr0yar299pc7oA-LPvzKFQa6r" },  
    //Term 3
    { board: "state-board", standard: "7th-standard",term: "Term 3", image: standard7img, name: "Tamil", path: "16-9YExvsfmr6RSJnXx1LB1SVmpNIynJQ" },
    { board: "state-board", standard: "7th-standard",term: "Term 3", image: standard7img, name: "English", path: "13u--zDvD1FLjU2rAOZMCz9ozMpotw0zW" },
    { board: "state-board", standard: "7th-standard",term: "Term 3", image: standard7img, name: "Maths", path: "1BFwgnl-xwYvyGBr5hS41cZm5u3ksd-Hl" },
    { board: "state-board", standard: "7th-standard",term: "Term 3", image: standard7img, name: "Science", path: "165fWgvUp8VKD2PVaM1_PbcWszbCYLEXj" },
    { board: "state-board", standard: "7th-standard",term: "Term 3", image: standard7img, name: "Social Studies", path: "1sv-GfenQKjbE9rSF6BJcRLV1Bzh-RPbQ" },
    
//standard 8
    //Genernal 
    { board: "state-board", standard: "8th-standard",term: "Term 1", image: standard8img, name: "Tamil", path: "1EcuCj97up5gafBgjx1gFQkqPBFCJ6_G5" },
    { board: "state-board", standard: "8th-standard",term: "Term 1", image: standard8img, name: "English", path: "1Uxz0krOL5gnIxZiE3Ga7Y7j9cOo6cQlm" },
    { board: "state-board", standard: "8th-standard",term: "Term 1", image: standard8img, name: "Maths", path: "1kVdXFg1aLDnmoVP5m_hBsp_O0AnKuI1g" },
    { board: "state-board", standard: "8th-standard",term: "Term 1", image: standard8img, name: "Science", path: "1WbRhk887PVbAbfs5LydwFjv8HDCd8Me_" },
    { board: "state-board", standard: "8th-standard",term: "Term 1", image: standard8img, name: "Social Studies", path: "18J5X7ToB97W-iPSaOf4don_a054bbtX6" },


//standard 9
    //Genernal 
    { board: "state-board", standard: "9th-standard",term: "Term 1", image: standard9img, name: "Tamil", path: "1Ie9nCxqTTykTerbHJi9Hdy3qaoTOIFYO" },
    { board: "state-board", standard: "9th-standard",term: "Term 1", image: standard9img, name: "English", path: "1Nb3I6zvCDh2Oa3PZpydcI3-c56s9jTLt" },
    { board: "state-board", standard: "9th-standard",term: "Term 1", image: standard9img, name: "Maths", path: "1zQT9vmbIjFBGdNaZ8krqRalrpNqlI9FZ" },
    { board: "state-board", standard: "9th-standard",term: "Term 1", image: standard9img, name: "Science", path: "1-LFNIGOHSCMxlobWlWaWcu0mdrSx2h2z" },
    { board: "state-board", standard: "9th-standard",term: "Term 1", image: standard9img, name: "Social Studies", path: "1oPDQkwAn0GTaUa9JR_vGZKXBWGpSdG1g" },

    
//standard 10
    //Genernal 
    { board: "state-board", standard: "10th-standard",term: "Term 1", image: standard10img, name: "Tamil", path: "1rfZgaWCVkiYcmsbQkD6obiceAE9Cc0WP" },
    { board: "state-board", standard: "10th-standard",term: "Term 1", image: standard10img, name: "English", path: "1upu6K18fiDNR3R0CqcAYzdCFy-Vz99DC" },
    { board: "state-board", standard: "10th-standard",term: "Term 1", image: standard10img, name: "Maths", path: "1u4jQ2jXyAvcy4ObdlRPRDh6Eq8gUqHdM" },
    { board: "state-board", standard: "10th-standard",term: "Term 1", image: standard10img, name: "Science", path: "1URdQgZ6I8twJ0MKz38OXLe8J05GxFO2W" },
    { board: "state-board", standard: "10th-standard",term: "Term 1", image: standard10img, name: "Social Studies", path: "1PV7_u8ccXB5PkkqRCL1nGd7Fj0XBmEdC" },
   
   
//standard 11
    //language
    { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Genernal-Tamil", path: "11Gb9dlfIBIMxkh2zzQbajaJjOd5jUXVD" },
    { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Advance-tamil", path: "1uYjh8gLXb_3SNdaMy0yTxSsIJ9bR5Vzn" },
    { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Gendernal-English", path: "1BnZ3SUbfuSXvd7aGpT0N-Vy3LjVnmX76" },
    { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Communicate-English", path: "10zT2WGJkSloALv_e4lS42QiEsPEhxovh" },
    { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Sanakirt", path: "1pOBEOz1kNjyl0pQwnjE_LewVpPhTy4X3" },
    { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Hindi", path: "1cubnan-SanjipnBy7yZztcF67Oug5nOK" },
    { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Arabic", path: "1p5swq5aDXH8RfBtscfEzRYR9VcNUIgP5" },
    { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Germen", path: "1zYnHWmYs-x1FAuqV32bY5WowFVor1Dhg" },
    { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "French", path: "1RnhQxmT--SfMA245J_Ep6GrfwneiBWew" },
   //genernal
   { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Zoology", path: "1j2rk7zPxaAhFnd91oEi4HVsVSOA55wDe" },
   { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Statistic", path: "1A9ywcPpbdUbyNayNzr1aVW0XgahrK8Gu" },
   { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Political Science", path: "1t4YM0NXsDiiLNArOrJln5ly69VRyR8nt" },
   { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Physics Vol-1", path: "1Gzt_3mdPS9SjPx0tsHYtcTvPHz4Icd-n" },
   { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Physics Vol-2", path: "1z8EJc7eujZRZxTVOSyohxBmzAKO18vCV" },
   { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Nutrition and Dietetion", path: "1ay1-gp9AKvLCk-SDDANtt0_3tzs8BODZ" },
   { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Micro Biology", path: "19x5HA-RI7uOTS19c2ZyKvKqNdLnquLtn" },
   { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Mathematics Vol-1", path: "1AClmS6Ci5WACcCq-aTbyLl1QFAYReK9P" },
   { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Mathematics Vol-2", path: "1ODvq4oKCHrWAtUkeYlvgo6_EiNZrpnlC" },    
   { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Home Science", path: "19Mwjop73YjfYq14nc0HBj0hJ_IR4aOIy" },
   { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "History", path: "1MJ0dvk4AeEq87IWQ-CVWMw6gauNPAIsg" },
   { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Geography", path: "1u6IttEfsRsyHvfEsnK5I_aiG7T_qeX4i" },
   { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Genderal Nursing", path: "1ZHKjnI5nC5eYzkTNAJ12bVHPcOzv1lra" },
   { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Economics", path: "1YugSLUS5BRe7sHECmMx_NKgEpAVJ2kfA" },
   { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Computer Techology", path: "1Jmc6qSiTplv7Tb3NBpVGUYCTAVZLjmZa" },
   { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Computer Science", path:"1MkbREn3mnVHT8LrZ_xtkcoUrSNoO1oXC" },
   { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Computer Application", path:" 1l06nad87YO2QCTmmyDhpskH8gdhwcnGd" },
   { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Commerce", path: "12ITOQ5aIL1ETspb-JUtsX5klvK3wrCYW" }, 
   { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Chemistry Vol-1", path: "1L0ogo2J5tZQeZtBlTOpwlmeQQ9mqx-rl" },
   { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Chemistry Vol-2", path: "1HCfLEaOhmV0l23SMPMhM1iqTsdCexBxj" },
   { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Bussiness Maths", path: "1h0IefsoD9XJiL7vQHRoYlhtjDaVxBgUi" },
   { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Botany", path: "1dUIflUo03ZzS7YEXukKdby-HYHTgpdt-" },
   { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Bio-Zology", path: "1L4Sz5jXf6qwQ-LKW2L2FmWI2whelEuP9" },
   { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Bio-Chemistry", path: "1uks_9T3P44auUjbHrVKS3oRWpl_KsBPO" },
   { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Accountancy", path: "1pXmL3u3V937LtBRM4g78xDJSGzAI0Hbx" },
   { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Bio-Botany", path: "1U_JeaFveOKic1ka7itojOjJZXJbtlLzu" },
//Manual Subject
   { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Zology Practical-Manual", path: "1ivlC8CFURomjKydRqP3B_DUC1XkBABvM" },
   { board: "state-board", standard: "11th-standard",term: "Term 1", image: standard11img, name: "Bio Zoology Practical-Manual", path: "1gPXwI4n5sWgD6h2XLtDkR-exzftdRVUK" },


//Standard 12 

 //language
 { board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Genernal-Tamil", path: "1rQDlSdtmQhRtsTVXPgm9iDkg5yWO_vFM" },
 { board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Advance Tamil", path: "1cWWb3fjbv7VTXmBtU2X0XEFTMgNyrrH2" },
 { board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Gendernal-English", path: "14dCReMC9Tg9rFRsCNZ5YiAMxY4pU6MUF" },
 { board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Communicate-English", path: "1CnpRt0YTvfNQcmhAOMfgJpnKptLQyA1Y" },
 { board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Auditing", path: "1owtEJ0UNw3YFobPIxzm_5xu6OEofcFLw" },
 
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Zoology", path: "1nUg2Ef2MmgWVoD24U6ChKLVSLP1AM5mh" },
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Statistic", path: "1GS9fdoeb-oYM-wgizQrMkcb0OtieVikY" },
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Political Science", path: "11R8QLVlfuehNXgUFvUZn_3WqrnIX1Oo-" },
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Physics Vol-1", path: "1Q93FYLg6thtPvnpTbrnX2ewM7Sks3swW" },
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Physics Vol-2", path: "1iFIjjpvKftpKNG259WTMX_f5Wnewj8yT" },
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Nutrition and Dietetion", path: "1jIehk6j9nFeFZpNsSXLsrK0C8FhNi21E" },
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Micro Biology", path: "1eQUMF7y8jCyZi5qI-9HT57dQTjDqY_V3" },
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Mathematics Vol-1", path: "1gXLC--vP6YKfK2yb4EO-HkYiRhw_qWkF" },
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Mathematics Vol-2", path: "1gkhqiRgOLul8pfUgWqCAraJVHr4Vbmlp" },    
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Home Science", path: "19Mwjop73YjfYq14nc0HBj0hJ_IR4aOIy1Vl0gXlsXZmyOclGX2TtgYD9XgTea8hiJ" },
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "History", path: "1mIT386H3pcnLBp_e0i_ppV1bYXWUqNWJ" },
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Geography", path: "1HrWF3ZeFMZV2ihN0ErQVHK_7Lu2wuZF7" },
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Genderal Nursing", path: "1hTpRAHsF3f_QAU-EMggVNxS9kFefwUI6" },
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Economics", path: "1p0vsvYa-zwl2sbRT8Myc54MQTYddLJd7" },
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Computer Techology", path: "1qLK9lmZQqajhukYHYMLuJ-VdnAxymSRN" },
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Computer Science", path:"1ud1uUi53tgwwInbITzikHBUoeIXmLSNg" },
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Computer Application", path:"1Ax1I1rkECvTvGJtoGljdfINLyd4yY0d1" },
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Commerce", path: "1gEbXqhfIxvw6P0bVEFfDBqjYqzjovJ9-" }, 
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Chemistry Vol-1", path: "117jueWtCmSenIYGRLsTATBQbLm3UeOx7" },
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Chemistry Vol-2", path: "1OQVyjL68Jn3sA9VsEgdM-dG_DD-gbzpw" },
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Botany", path: "1GS9fdoeb-oYM-wgizQrMkcb0OtieVikY" },
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Bio-Zoology", path: "1d8epe7_kVwZ1UXMlX493OAWPIlCnVzjr" },
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Bio-Chemistry", path: "1uks_9T3P44auUjbHrVKS3oRWpl_KsBPO1hxBK1xn0CRq5HmZyYKyarsCXzMhDzBTP" },
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Accountancy", path: "1mKKuGV5W7lg7iWBqCFuvLSL6UV97bQhF" },
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Bio-Botany", path: "1U_JeaFveOKic1ka7itojOjJZXJbtlLzu1NGAGZmYgMKkOHunyzZXBdsR7i1YpEpdW" },
//Manual Subject
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Textiles & Dress Desging ", path: "1hk9FdgSVbwO9C9PpXHaXuDhllz29-TwU" },
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Office Management", path: "1-ev0dYlD53xFecvEiIC4fPc5XcH97MMJ" },
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Food Service Management", path: "1nt0O98C0REjZU-WjvXJSZ97HdDiTjMJL" },
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Basic Automobile Engineering", path: "1wSyrEKI3WHKxUSftzc9LqOR38TiAx2uH" },
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Basic Mechanical Engineering", path: "1DjysddldEfJKyqExIkuEZq74aqvxMGir" },
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Basic Electronics Engineering ", path: "1irjbrpHpUlh7aQjK4eD76b0_9ivOrgyq" },
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Basic Civil Engineering", path: "1lEyJuDSwPdAXdesKPY9UZIYliIlIPJaz" },
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Auditing Pratical", path: "1fO2R5w0pcZ3PliNJQrOS5oZ7nnhtlGxL" },
{ board: "state-board", standard: "12th-standard",term: "Term 1", image: standard12img, name: "Employability Skill", path: "1bWGRHJ5MwAVDtFcj8qVGK2bffnVVM-bX" },



    // 📚 CBSE Board Books
//standard 1
 
//std 1 english
    { board: "cbse", standard: "1st-standard", image: std1eng, name: "English",term: "Term 1",chapter : "chapter-1", path:"1sOWK3DsKT1H2OTO0sbITwcFv1IniZUN9"},
    { board: "cbse", standard: "1st-standard", image: std1eng, name: "English",term: "Term 1",chapter : "chapter-2", path:"1PoCc7v8FvgzvLsMOPv0Uj4K2wJhcgAn2" },
    { board: "cbse", standard: "1st-standard", image: std1eng, name: "English",term: "Term 1",chapter : "chapter-3", path: "1ac56yZ1d_omwRxwS_UFr8eBBdfPX3wyY" },
    { board: "cbse", standard: "1st-standard", image: std1eng, name: "English",term: "Term 1",chapter : "chapter-4", path:"1RHhN_I-Nek4TcOupXHdM4EWGST9nj5-Z"},
    { board: "cbse", standard: "1st-standard", image: std1eng, name: "English",term: "Term 1",chapter : "chapter-5", path:"1XCn1M8ywsDfliH0caUoA3oXwPqV7dpHb" },
    { board: "cbse", standard: "1st-standard", image: std1eng, name: "English",term: "Term 1",chapter : "chapter-6", path: "1IRbCYNLYtSGybCOtrB4DYs6cVITCgKE3" },
    { board: "cbse", standard: "1st-standard", image: std1eng, name: "English",term: "Term 1",chapter : "chapter-7", path:"1FlGQWOIP3_CZf-PsXmPEgZm_leEsXjMD"},
    { board: "cbse", standard: "1st-standard", image: std1eng, name: "English",term: "Term 1",chapter : "chapter-8", path:"1XqFGpbQE8GUM66z_7qDiJq3-KG67_mKb" },
    { board: "cbse", standard: "1st-standard", image: std1eng, name: "English",term: "Term 1",chapter : "chapter-9", path: "1v8mQSc0ZfZ_thqbBeueC3BPMLES59qsA" },
    
    
    
//std 1 hindi 
{ board: "cbse", standard: "1st-standard", image: std1hindi, name: "Hindi",term: "Term 1",chapter : "chapter-1", path:"12KwKxnsNcI_HW1r7fdEuIX8ZfM7am7Re"},
{ board: "cbse", standard: "1st-standard", image: std1hindi, name: "Hindi",term: "Term 1",chapter : "chapter-2", path:"1iKAsbCVNK-GdsicrHsmb_siCwV-cWdMD" },
{ board: "cbse", standard: "1st-standard", image: std1hindi, name: "Hindi",term: "Term 1",chapter : "chapter-3", path: "1vkmmnkFjRo1-cOXksoaaSAanheQjYjOD" },
{ board: "cbse", standard: "1st-standard", image: std1hindi, name: "Hindi",term: "Term 1",chapter : "chapter-4", path:"1TUXFAbopVbih6KQUwvV-XlVt3JXRukdw"},
{ board: "cbse", standard: "1st-standard", image: std1hindi, name: "Hindi",term: "Term 1",chapter : "chapter-5", path:"1--0nTGWP87MGQvmxSPccYFgbBz9uk63M" },
{ board: "cbse", standard: "1st-standard", image: std1hindi, name: "Hindi",term: "Term 1",chapter : "chapter-6", path: "1Hr2EvKacS-wwN1txlfCQ6fKoMh3MM369" },
{ board: "cbse", standard: "1st-standard", image: std1hindi, name: "Hindi",term: "Term 1",chapter : "chapter-7", path:"1zMN6Q5fuHVRpWR97fKP4Gw7jkmHs6cvY"},
{ board: "cbse", standard: "1st-standard", image: std1hindi, name: "Hindi",term: "Term 1",chapter : "chapter-8", path:"1-2GfcKLFoDJi1cgpTWVqmBOSFP3AzhJ0" },
{ board: "cbse", standard: "1st-standard", image: std1hindi, name: "Hindi",term: "Term 1",chapter : "chapter-9", path: "1fU98MAwTRJfYy0Tx2oyAcKSSQRcsPwt3" },
{ board: "cbse", standard: "1st-standard", image: std1hindi, name: "Hindi",term: "Term 1",chapter : "chapter-10", path:"1hbzswmYZKj8taRHCtzIF01it7rfalX_4"},
{ board: "cbse", standard: "1st-standard", image: std1hindi, name: "Hindi",term: "Term 1",chapter : "chapter-11", path:"1qzo1IQSYxpXhQRRYzmHbWJjanyPPHnpT" },
{ board: "cbse", standard: "1st-standard", image: std1hindi, name: "Hindi",term: "Term 1",chapter : "chapter-12", path: "1I-EtfmkmzpjHGbg0U7-YL36mKLfuaKbU" },
{ board: "cbse", standard: "1st-standard", image: std1hindi, name: "Hindi",term: "Term 1",chapter : "chapter-13", path: "1cNGS2j9BzdDwl-is-6LNCkUQxYYeDCHl" },
{ board: "cbse", standard: "1st-standard", image: std1hindi, name: "Hindi",term: "Term 1",chapter : "chapter-14", path:"1uLYuPWYbib4xBmo3YH9GRvkuY5__kKqz" },
{ board: "cbse", standard: "1st-standard", image: std1hindi, name: "Hindi",term: "Term 1",chapter : "chapter-15", path: "1J5oPMTC_HqkykbuPoisSYhXZRajb6LXS" },
{ board: "cbse", standard: "1st-standard", image: std1hindi, name: "Hindi",term: "Term 1",chapter : "chapter-16", path:"1yDR04OxgHAPHLg3AzjB6vBSPzMVEizMd"},
{ board: "cbse", standard: "1st-standard", image: std1hindi, name: "Hindi",term: "Term 1",chapter : "chapter-17", path:"1FzR8zypo-Dm0nXhXHCqievNHMndd-3N0" },
{ board: "cbse", standard: "1st-standard", image: std1hindi, name: "Hindi",term: "Term 1",chapter : "chapter-18", path: "13ZxZbfnaRsu4vrxlOF8HxtCDSgR0x7Mw" },
{ board: "cbse", standard: "1st-standard", image: std1hindi, name: "Hindi",term: "Term 1",chapter : "chapter-19", path: "19cXTM0HUlLfUw58-vhzRDmfikF6r9zI-" },


//std 1 maths 
{ board: "cbse", standard: "1st-standard", image: std1maths, name: "Maths",term: "Term 1",chapter : "chapter-1", path:"11gB9CrR1wZ-IYdBAES3rIaLhK4cwH6N8"},
{ board: "cbse", standard: "1st-standard", image: std1maths, name: "Maths",term: "Term 1",chapter : "chapter-2", path:"1XzoH0xDRCDbIJYxfKRc3PG24QetCdbOZ" },
{ board: "cbse", standard: "1st-standard", image: std1maths, name: "Maths",term: "Term 1",chapter : "chapter-3", path: "1a13xBvImGMTamqhhw7bhcnlylhVHwlPy" },
{ board: "cbse", standard: "1st-standard", image: std1maths, name: "Maths",term: "Term 1",chapter : "chapter-4", path:"1noIcFxH0eV8LXRPM597-tJ6Go54YBGzv"},
{ board: "cbse", standard: "1st-standard", image: std1maths, name: "Maths",term: "Term 1",chapter : "chapter-5", path:"1E3Oc2_JfDlrcWDbI7rNtTpfBYgVXMFjd" },
{ board: "cbse", standard: "1st-standard", image: std1maths, name: "Maths",term: "Term 1",chapter : "chapter-6", path: "1qKp9VMtVYjqmOn0dNdYZW2OdOG5Whbt9" },
{ board: "cbse", standard: "1st-standard", image: std1maths, name: "Maths",term: "Term 1",chapter : "chapter-7", path:"14so5SQdJ9vxlNKVJ8F79wkjt4nBthHu4"},
{ board: "cbse", standard: "1st-standard", image: std1maths, name: "Maths",term: "Term 1",chapter : "chapter-8", path:"1OnVMwH-B9iLXX_K5XPu6jl0pTAkU-R45" },
{ board: "cbse", standard: "1st-standard", image: std1maths, name: "Maths",term: "Term 1",chapter : "chapter-9", path: "1uugCAMLczLmcX9ddAIgjUalF2C9DaBG_" },
{ board: "cbse", standard: "1st-standard", image: std1maths, name: "Maths",term: "Term 1",chapter : "chapter-10", path:"19E8ul8ULpIwQosfwgWd5Bh7-6l14rfFM"},
{ board: "cbse", standard: "1st-standard", image: std1maths, name: "Maths",term: "Term 1",chapter : "chapter-11", path:"1B3nO9CVRMOvMStmF2vDc2N-cso2PR3JU" },
{ board: "cbse", standard: "1st-standard", image: std1maths, name: "Maths",term: "Term 1",chapter : "chapter-12", path: "1slwkxZuK1NlSJcq7DWW47lPPytmzAQAD" },
{ board: "cbse", standard: "1st-standard", image: std1maths, name: "Maths",term: "Term 1",chapter : "chapter-13", path: "1H7nSUXXTcz3EI924VTwvZVEvIxRqtW8i" },


//standard 2


//std 2 english
{ board: "cbse", standard: "2nd-standard", image: std2eng, name: "English",term: "Term 1",chapter : "chapter-1", path:"1sOWK3DsKT1H2OTO0sbITwcFv1IniZUN9"},
{ board: "cbse", standard: "2nd-standard", image: std2eng, name: "English",term: "Term 1",chapter : "chapter-2", path:"1PoCc7v8FvgzvLsMOPv0Uj4K2wJhcgAn2" },
{ board: "cbse", standard: "2nd-standard", image: std2eng, name: "English",term: "Term 1",chapter : "chapter-3", path: "1ac56yZ1d_omwRxwS_UFr8eBBdfPX3wyY" },
{ board: "cbse", standard: "2nd-standard", image: std2eng, name: "English",term: "Term 1",chapter : "chapter-4", path:"1RHhN_I-Nek4TcOupXHdM4EWGST9nj5-Z"},
{ board: "cbse", standard: "2nd-standard", image: std2eng, name: "English",term: "Term 1",chapter : "chapter-5", path:"1XCn1M8ywsDfliH0caUoA3oXwPqV7dpHb" },
{ board: "cbse", standard: "2nd-standard", image: std2eng, name: "English",term: "Term 1",chapter : "chapter-6", path: "1IRbCYNLYtSGybCOtrB4DYs6cVITCgKE3" },
{ board: "cbse", standard: "2nd-standard", image: std2eng, name: "English",term: "Term 1",chapter : "chapter-7", path:"1FlGQWOIP3_CZf-PsXmPEgZm_leEsXjMD"},
{ board: "cbse", standard: "2nd-standard", image: std2eng, name: "English",term: "Term 1",chapter : "chapter-8", path:"1XqFGpbQE8GUM66z_7qDiJq3-KG67_mKb" },
{ board: "cbse", standard: "2nd-standard", image: std2eng, name: "English",term: "Term 1",chapter : "chapter-9", path: "1v8mQSc0ZfZ_thqbBeueC3BPMLES59qsA" },



//std2 hindi 
{ board: "cbse", standard: "2nd-standard", image: std2hindi, name: "Hindi",term: "Term 1",chapter : "chapter-1", path:"12KwKxnsNcI_HW1r7fdEuIX8ZfM7am7Re"},
{ board: "cbse", standard: "2nd-standard", image: std2hindi, name: "Hindi",term: "Term 1",chapter : "chapter-2", path:"1iKAsbCVNK-GdsicrHsmb_siCwV-cWdMD" },
{ board: "cbse", standard: "2nd-standard", image: std2hindi, name: "Hindi",term: "Term 1",chapter : "chapter-3", path: "1vkmmnkFjRo1-cOXksoaaSAanheQjYjOD" },
{ board: "cbse", standard: "2nd-standard", image: std2hindi, name: "Hindi",term: "Term 1",chapter : "chapter-4", path:"1TUXFAbopVbih6KQUwvV-XlVt3JXRukdw"},
{ board: "cbse", standard: "2nd-standard", image: std2hindi, name: "Hindi",term: "Term 1",chapter : "chapter-5", path:"1--0nTGWP87MGQvmxSPccYFgbBz9uk63M" },
{ board: "cbse", standard: "2nd-standard", image: std2hindi, name: "Hindi",term: "Term 1",chapter : "chapter-6", path: "1Hr2EvKacS-wwN1txlfCQ6fKoMh3MM369" },
{ board: "cbse", standard: "2nd-standard", image: std2hindi, name: "Hindi",term: "Term 1",chapter : "chapter-7", path:"1zMN6Q5fuHVRpWR97fKP4Gw7jkmHs6cvY"},
{ board: "cbse", standard: "2nd-standard", image: std2hindi, name: "Hindi",term: "Term 1",chapter : "chapter-8", path:"1-2GfcKLFoDJi1cgpTWVqmBOSFP3AzhJ0" },
{ board: "cbse", standard: "2nd-standard", image: std2hindi, name: "Hindi",term: "Term 1",chapter : "chapter-9", path: "1fU98MAwTRJfYy0Tx2oyAcKSSQRcsPwt3" },
{ board: "cbse", standard: "2nd-standard", image: std2hindi, name: "Hindi",term: "Term 1",chapter : "chapter-10", path:"1hbzswmYZKj8taRHCtzIF01it7rfalX_4"},
{ board: "cbse", standard: "2nd-standard", image: std2hindi, name: "Hindi",term: "Term 1",chapter : "chapter-11", path:"1qzo1IQSYxpXhQRRYzmHbWJjanyPPHnpT" },
{ board: "cbse", standard: "2nd-standard", image: std2hindi, name: "Hindi",term: "Term 1",chapter : "chapter-12", path: "1I-EtfmkmzpjHGbg0U7-YL36mKLfuaKbU" },
{ board: "cbse", standard: "2nd-standard", image: std2hindi, name: "Hindi",term: "Term 1",chapter : "chapter-13", path: "1cNGS2j9BzdDwl-is-6LNCkUQxYYeDCHl" },
{ board: "cbse", standard: "2nd-standard", image: std2hindi, name: "Hindi",term: "Term 1",chapter : "chapter-14", path:"1uLYuPWYbib4xBmo3YH9GRvkuY5__kKqz" },
{ board: "cbse", standard: "2nd-standard", image: std2hindi, name: "Hindi",term: "Term 1",chapter : "chapter-15", path: "1J5oPMTC_HqkykbuPoisSYhXZRajb6LXS" },
{ board: "cbse", standard: "2nd-standard", image: std2hindi, name: "Hindi",term: "Term 1",chapter : "chapter-16", path:"1yDR04OxgHAPHLg3AzjB6vBSPzMVEizMd"},
{ board: "cbse", standard: "2nd-standard", image: std2hindi, name: "Hindi",term: "Term 1",chapter : "chapter-17", path:"1FzR8zypo-Dm0nXhXHCqievNHMndd-3N0" },
{ board: "cbse", standard: "2nd-standard", image: std2hindi, name: "Hindi",term: "Term 1",chapter : "chapter-18", path: "13ZxZbfnaRsu4vrxlOF8HxtCDSgR0x7Mw" },
{ board: "cbse", standard: "2nd-standard", image: std2hindi, name: "Hindi",term: "Term 1",chapter : "chapter-19", path: "19cXTM0HUlLfUw58-vhzRDmfikF6r9zI-" },


//std 2 maths 
{ board: "cbse", standard: "2nd-standard", image: std2maths, name: "Maths",term: "Term 1",chapter : "chapter-1", path:"11gB9CrR1wZ-IYdBAES3rIaLhK4cwH6N8"},
{ board: "cbse", standard: "2nd-standard", image: std2maths, name: "Maths",term: "Term 1",chapter : "chapter-2", path:"1XzoH0xDRCDbIJYxfKRc3PG24QetCdbOZ" },
{ board: "cbse", standard: "2nd-standard", image: std2maths, name: "Maths",term: "Term 1",chapter : "chapter-3", path: "1a13xBvImGMTamqhhw7bhcnlylhVHwlPy" },
{ board: "cbse", standard: "2nd-standard", image: std2maths, name: "Maths",term: "Term 1",chapter : "chapter-4", path:"1noIcFxH0eV8LXRPM597-tJ6Go54YBGzv"},
{ board: "cbse", standard: "2nd-standard", image: std2maths, name: "Maths",term: "Term 1",chapter : "chapter-5", path:"1E3Oc2_JfDlrcWDbI7rNtTpfBYgVXMFjd" },
{ board: "cbse", standard: "2nd-standard", image: std2maths, name: "Maths",term: "Term 1",chapter : "chapter-6", path: "1qKp9VMtVYjqmOn0dNdYZW2OdOG5Whbt9" },
{ board: "cbse", standard: "2nd-standard", image: std2maths, name: "Maths",term: "Term 1",chapter : "chapter-7", path:"14so5SQdJ9vxlNKVJ8F79wkjt4nBthHu4"},
{ board: "cbse", standard: "2nd-standard", image: std2maths, name: "Maths",term: "Term 1",chapter : "chapter-8", path:"1OnVMwH-B9iLXX_K5XPu6jl0pTAkU-R45" },
{ board: "cbse", standard: "2nd-standard", image: std2maths, name: "Maths",term: "Term 1",chapter : "chapter-9", path: "1uugCAMLczLmcX9ddAIgjUalF2C9DaBG_" },
{ board: "cbse", standard: "2nd-standard", image: std2maths, name: "Maths",term: "Term 1",chapter : "chapter-10", path:"19E8ul8ULpIwQosfwgWd5Bh7-6l14rfFM"},
{ board: "cbse", standard: "2nd-standard", image: std2maths, name: "Maths",term: "Term 1",chapter : "chapter-11", path:"1B3nO9CVRMOvMStmF2vDc2N-cso2PR3JU" },
{ board: "cbse", standard: "2nd-standard", image: std2maths, name: "Maths",term: "Term 1",chapter : "chapter-12", path: "1slwkxZuK1NlSJcq7DWW47lPPytmzAQAD" },
{ board: "cbse", standard: "2nd-standard", image: std2maths, name: "Maths",term: "Term 1",chapter : "chapter-13", path: "1H7nSUXXTcz3EI924VTwvZVEvIxRqtW8i" },


//standard 3


//std 3 english
{ board: "cbse", standard: "3rd-standard", image: std3eng, name: "English",term: "Term 1",chapter : "chapter-1", path:"1F_pP-R8Kv96Aw6LYD1s3fdGm5gLFbElL"},
{ board: "cbse", standard: "3rd-standard", image: std3eng, name: "English",term: "Term 1",chapter : "chapter-2", path:"1rmQHmDVmTcTSdcP88rMYhEAmYgptPYza" },
{ board: "cbse", standard: "3rd-standard", image: std3eng, name: "English",term: "Term 1",chapter : "chapter-3", path: "1S_u48RFTPFBa-y4DLgmIltUYCaajYtq1" },
{ board: "cbse", standard: "3rd-standard", image: std3eng, name: "English",term: "Term 1",chapter : "chapter-4", path:"13wwDdF6aiPpRjDJ5bp5Rl1WxHJpbEWNi"},
{ board: "cbse", standard: "3rd-standard", image: std3eng, name: "English",term: "Term 1",chapter : "chapter-5", path:"1o0ttL1zUnESl2p647VsYiKlwDDmORz19" },
{ board: "cbse", standard: "3rd-standard", image: std3eng, name: "English",term: "Term 1",chapter : "chapter-6", path:"1HzQEXF0yltd0_FN00oCJs27sgLUYS29u" },
{ board: "cbse", standard: "3rd-standard", image: std3eng, name: "English",term: "Term 1",chapter : "chapter-7", path:"1w4Ysjxsf5TfGAWb3SN5MzVyuMVZ8AqxW"},
{ board: "cbse", standard: "3rd-standard", image: std3eng, name: "English",term: "Term 1",chapter : "chapter-8", path:"1nOn4DKqEBUGGQezhxX4F4jqge6OiPc-Y" },
{ board: "cbse", standard: "3rd-standard", image: std3eng, name: "English",term: "Term 1",chapter : "chapter-9", path: "1iA9mtd9Y-fvcvYWUJkNV-87OmGc8-603" },
{ board: "cbse", standard: "3rd-standard", image: std3eng, name: "English",term: "Term 1",chapter : "chapter-10", path:"1thQXl_6atHtX6Xb4Gg4COGlaHEuyfIrj" },
{ board: "cbse", standard: "3rd-standard", image: std3eng, name: "English",term: "Term 1",chapter : "chapter-11", path: "1GHMCOfF0WxiFOAeZRylCeGU1OJKFJf7u" },
{ board: "cbse", standard: "3rd-standard", image: std3eng, name: "English",term: "Term 1",chapter : "chapter-12", path:"15mzb1xaFOpJPmaE4GJuHxn5LGxnTdPXv"},



//std 3 hindi 
{ board: "cbse", standard: "3rd-standard", image: std3hindi, name: "Hindi",term: "Term 1",chapter : "chapter-1", path:"1JrgM1ytoUZ49WPCzMQbRFYf81J4AeVs5"},
{ board: "cbse", standard: "3rd-standard", image: std3hindi, name: "Hindi",term: "Term 1",chapter : "chapter-2", path:"1lcde4iuxonRtfM90g7K_btyhRXdBbsFA" },
{ board: "cbse", standard: "3rd-standard", image: std3hindi, name: "Hindi",term: "Term 1",chapter : "chapter-3", path: "1V1AKcTiCMQznest3CAKvOSaUfzqO6-Zq" },
{ board: "cbse", standard: "3rd-standard", image: std3hindi, name: "Hindi",term: "Term 1",chapter : "chapter-4", path:"1F8ROiePxir7be0gD1XyLoQMETQYzRJV9"},
{ board: "cbse", standard: "3rd-standard", image: std3hindi, name: "Hindi",term: "Term 1",chapter : "chapter-5", path:"1VXGKaUrDbmCisFrTjGKV4zWjrtOVRSVI" },
{ board: "cbse", standard: "3rd-standard", image: std3hindi, name: "Hindi",term: "Term 1",chapter : "chapter-6", path: "18Nep9WQ9z84h6MV-tmBdI2EZOA7l714b" },
{ board: "cbse", standard: "3rd-standard", image: std3hindi, name: "Hindi",term: "Term 1",chapter : "chapter-7", path:"1ApTGO-8R7B_77pPSBndTJd55pjRGjQIn"},
{ board: "cbse", standard: "3rd-standard", image: std3hindi, name: "Hindi",term: "Term 1",chapter : "chapter-8", path:"193FFS5kfEsjH5B0i4FWAg_5bLEmLr2FB" },
{ board: "cbse", standard: "3rd-standard", image: std3hindi, name: "Hindi",term: "Term 1",chapter : "chapter-9", path: "1TuNEsORr6lkbcg8YLse3JOBfNPk_sbr1" },
{ board: "cbse", standard: "3rd-standard", image: std3hindi, name: "Hindi",term: "Term 1",chapter : "chapter-10", path:"1jtkVnnxZKZFS0SkD4t9k2Y3RqZ5Qux8K"},
{ board: "cbse", standard: "3rd-standard", image: std3hindi, name: "Hindi",term: "Term 1",chapter : "chapter-11", path:"1SDazc5lRtxG7WIC4RBnTG5mPs07vjMK4" },
{ board: "cbse", standard: "3rd-standard", image: std3hindi, name: "Hindi",term: "Term 1",chapter : "chapter-12", path: "1ewXkb4fm4XGyvmark5Na2g5vhOzKeScA" },
{ board: "cbse", standard: "3rd-standard", image: std3hindi, name: "Hindi",term: "Term 1",chapter : "chapter-13", path: "1gHJmV6AZKyQEOo6yIsfAzfY2M0ogMBWZ" },
{ board: "cbse", standard: "3rd-standard", image: std3hindi, name: "Hindi",term: "Term 1",chapter : "chapter-14", path:"1DJCFi5ZFWhT_T75f903mU3ucaTT8kSsX" },
{ board: "cbse", standard: "3rd-standard", image: std3hindi, name: "Hindi",term: "Term 1",chapter : "chapter-15", path: "1RN_NOZ_tfP2CYQZbuqd_vFtPSmkgKzTR" },
{ board: "cbse", standard: "3rd-standard", image: std3hindi, name: "Hindi",term: "Term 1",chapter : "chapter-16", path:"14MhAOmwEEPONBeF-_SJChaNrKPt1pips"},
{ board: "cbse", standard: "3rd-standard", image: std3hindi, name: "Hindi",term: "Term 1",chapter : "chapter-17", path:"1m7NnDqYETWcxZQMfm-OGazPsAEg0Dw8p" },
{ board: "cbse", standard: "3rd-standard", image: std3hindi, name: "Hindi",term: "Term 1",chapter : "chapter-18", path: "1N2HSyDCgdSxLloWdlKmZOHl7uIbUQQS8" },


//std 3 maths 
{ board: "cbse", standard: "3rd-standard", image: std3maths, name: "Maths",term: "Term 1",chapter : "chapter-1", path:"1G23R12madldIOZ86okEgkIc0E_ile-IS"},
{ board: "cbse", standard: "3rd-standard", image: std3maths, name: "Maths",term: "Term 1",chapter : "chapter-2", path:"1zOySKho8MUH5_PpOzCuq8P2p6eh7IpMi" },
{ board: "cbse", standard: "3rd-standard", image: std3maths, name: "Maths",term: "Term 1",chapter : "chapter-3", path: "1oVO48skMe0JnBUBbx_GEkripduFh2OJo" },
{ board: "cbse", standard: "3rd-standard", image: std3maths, name: "Maths",term: "Term 1",chapter : "chapter-4", path:"1Hg5tURYPtf203gsyDuwzAIvqgPoaxVm6"},
{ board: "cbse", standard: "3rd-standard", image: std3maths, name: "Maths",term: "Term 1",chapter : "chapter-5", path:"1SzCKD34x8Vk1sacePWK_68sGE-eMq6sa" },
{ board: "cbse", standard: "3rd-standard", image: std3maths, name: "Maths",term: "Term 1",chapter : "chapter-6", path: "1--8XWMRatRGybwDJNStDeKsZ9Mrel8KN" },
{ board: "cbse", standard: "3rd-standard", image: std3maths, name: "Maths",term: "Term 1",chapter : "chapter-7", path:"1uCh-_EJbE5d0jAWKMFo2bDq7XUCyJKjX"},
{ board: "cbse", standard: "3rd-standard", image: std3maths, name: "Maths",term: "Term 1",chapter : "chapter-8", path:"1g8zXhd1REnAsjvpLhhQ7Opal_MKH38lV" },
{ board: "cbse", standard: "3rd-standard", image: std3maths, name: "Maths",term: "Term 1",chapter : "chapter-9", path: "1QWfIIi2_9-pCjcQtIODCL6SCmymBpG1g" },
{ board: "cbse", standard: "3rd-standard", image: std3maths, name: "Maths",term: "Term 1",chapter : "chapter-10", path:"1rSlPjUF52UnN_iwrmhonTZSKgEuUa2kO"},
{ board: "cbse", standard: "3rd-standard", image: std3maths, name: "Maths",term: "Term 1",chapter : "chapter-11", path:"1RR9WEmoPzQWMbii7X0tDIPyzms-UI0yz" },
{ board: "cbse", standard: "3rd-standard", image: std3maths, name: "Maths",term: "Term 1",chapter : "chapter-12", path: "1-ifj01WqVutzKefRDHrW-JfKVNLJ1KT2" },
{ board: "cbse", standard: "3rd-standard", image: std3maths, name: "Maths",term: "Term 1",chapter : "chapter-13", path: "1ixDuNb2ybGmrr0M4C4YwHn4YMf5biuAq" },
{ board: "cbse", standard: "3rd-standard", image: std3maths, name: "Maths",term: "Term 1",chapter : "chapter-14", path: "1hvfPw-qVsLz08Rtev0hn9vVCahwetsae" },

//std 3 yoga
{ board: "cbse", standard: "3rd-standard", image:std3yoga, name: "Yoga",term: "Term 1",chapter : "chapter-1", path:"1y7g8P3VNqDKuYyZExo-pQ_NZNvonqC3Z"},
{ board: "cbse", standard: "3rd-standard", image:std3yoga, name: "Yoga",term: "Term 1",chapter : "chapter-2", path:"1AVnRO_svDQPRkPogOAmenPMawkXWbgQ3" },
{ board: "cbse", standard: "3rd-standard", image:std3yoga, name: "Yoga",term: "Term 1",chapter : "chapter-3", path: "1a2SZPmSzPKuz6TIMdLAZqlXGqBaaCR64" },
{ board: "cbse", standard: "3rd-standard", image:std3yoga, name: "Yoga",term: "Term 1",chapter : "chapter-4", path:"1XN7tpronbVyTHdb3v7wNfwEkZTyh5PZy"},
{ board: "cbse", standard: "3rd-standard", image:std3yoga, name: "Yoga",term: "Term 1",chapter : "chapter-5", path:"1pPpclZL8WkvxjKdolTKwf_PiCgzY75Qk" },
{ board: "cbse", standard: "3rd-standard", image:std3yoga, name: "Yoga",term: "Term 1",chapter : "chapter-6", path: "1Ds2H4nHg6BvvscPl2d88fzO0us6_PB8F" },
{ board: "cbse", standard: "3rd-standard", image:std3yoga, name: "Yoga",term: "Term 1",chapter : "chapter-7", path:"1ZW9DhqtquXWVEL_M5HoLORSJU1Rvy4DV"},



//std3 art
{ board: "cbse", standard: "3rd-standard", image: std3art, name: "Art",term: "Term 1",chapter : "chapter-1", path:"1FPZ6ZnsO7nrRlbxXRQWkq_cuFtcz32My"},
{ board: "cbse", standard: "3rd-standard", image: std3art, name: "Art",term: "Term 1",chapter : "chapter-2", path:"1RjuACiGEM9JbUx1oMJl2oXf2cshb-md3" },
{ board: "cbse", standard: "3rd-standard", image: std3art, name: "Art",term: "Term 1",chapter : "chapter-3", path: "1GPSQeE0NZSdna36bIQX4YnYd9coEOfXE" },
{ board: "cbse", standard: "3rd-standard", image: std3art, name: "Art",term: "Term 1",chapter : "chapter-4", path:"1UDRBJEGxVjFBx6wzduNsHYGtWaQOQtMN"},
{ board: "cbse", standard: "3rd-standard", image: std3art, name: "Art",term: "Term 1",chapter : "chapter-5", path:"1ZKrzABHz4HWeR0skRfiUCsrEExat47VQ" },
{ board: "cbse", standard: "3rd-standard", image: std3art, name: "Art",term: "Term 1",chapter : "chapter-6", path: "1VGF63pQSBukjq-Lvirg5ox4yIuC4dOc5" },
{ board: "cbse", standard: "3rd-standard", image: std3art, name: "Art",term: "Term 1",chapter : "chapter-7", path:"1ld45upnoRkh2ITTRKXWAdt3mYkG5SHK-"},
{ board: "cbse", standard: "3rd-standard", image: std3art, name: "Art",term: "Term 1",chapter : "chapter-8", path:"1AMzmZxsepyA_KJvQj1bEAZOCc0k0Pfvs" },
{ board: "cbse", standard: "3rd-standard", image: std3art, name: "Art",term: "Term 1",chapter : "chapter-9", path: "1jeMYOSMh3As3zuYxDvAj3VJ7u38YLhby" },
{ board: "cbse", standard: "3rd-standard", image: std3art, name: "Art",term: "Term 1",chapter : "chapter-10", path:"1dDnw7t1MIldIzKHVyza9WE3tC87-iblP"},
{ board: "cbse", standard: "3rd-standard", image: std3art, name: "Art",term: "Term 1",chapter : "chapter-11", path:"1Uhs6zGqOk-DuLoo1BQZuXwyv4gqQfWe4" },
{ board: "cbse", standard: "3rd-standard", image: std3art, name: "Art",term: "Term 1",chapter : "chapter-12", path: "17U1aWFw_oEPgR_ax0NsUyLhBfH_Dq4MY" },
{ board: "cbse", standard: "3rd-standard", image: std3art, name: "Art",term: "Term 1",chapter : "chapter-13", path: "1IJdbvoKr46EbpCAR06-T4PxVUxZJ6J4v" },
{ board: "cbse", standard: "3rd-standard", image: std3art, name: "Art",term: "Term 1",chapter : "chapter-14", path:"1LSTvXVsOeSMa6awu7TkIW0g8Oi4Wsh8K" },
{ board: "cbse", standard: "3rd-standard", image: std3art, name: "Art",term: "Term 1",chapter : "chapter-15", path: "1RX32EoQ571K5m4MVNyUaVXYpVyw6kVqK" },
{ board: "cbse", standard: "3rd-standard", image: std3art, name: "Art",term: "Term 1",chapter : "chapter-16", path:"1BLdKBlwBu0k4FqRczi4UF-AbPJVy2RZ3"},
{ board: "cbse", standard: "3rd-standard", image: std3art, name: "Art",term: "Term 1",chapter : "chapter-17", path:"1rfKzpmHRNiJew_phMQNDNrTX4DNdEHbS" },
{ board: "cbse", standard: "3rd-standard", image: std3art, name: "Art",term: "Term 1",chapter : "chapter-18", path: "1sCdgp5pcD10ACbQaaC9jzdZ5s03vi5TM" },
{ board: "cbse", standard: "3rd-standard", image: std3art, name: "Art",term: "Term 1",chapter : "chapter-19", path: "1IEQ0bJFAe8XJbE4UQX_5jFdx6x8K39tt" },
{ board: "cbse", standard: "3rd-standard", image: std3art, name: "Art",term: "Term 1",chapter : "chapter-20", path: "1Ai__Yl9xom-NFj3dLPN51wGr1EEYBAeU" },



//standard 4

//std 4 english
{ board: "cbse", standard: "4th-standard", image: std4eng, name: "English",term: "Term 1",chapter : "chapter-1", path:"16qoOsBmY8Azpt0EAFMGnqGt4NHuE7PYp"},
{ board: "cbse", standard: "4th-standard", image: std4eng, name: "English",term: "Term 1",chapter : "chapter-2", path:"1BK9URlLRc5t5Ep93OeyPg1WSeTEK0x5j" },
{ board: "cbse", standard: "4th-standard", image: std4eng, name: "English",term: "Term 1",chapter : "chapter-3", path: "152W7u1Vqw85ZhUN6EcSkC6ttmN82Lhkk" },
{ board: "cbse", standard: "4th-standard", image: std4eng, name: "English",term: "Term 1",chapter : "chapter-4", path:"1Cog6pdyiffT1NSMwXPQbzxQPg9jAcLYn"},
{ board: "cbse", standard: "4th-standard", image: std4eng, name: "English",term: "Term 1",chapter : "chapter-5", path:"1ahBxMIjlbCniIT6W-h-iSQ883TeaK6fy" },
{ board: "cbse", standard: "4th-standard", image: std4eng, name: "English",term: "Term 1",chapter : "chapter-6", path:"1LY6u2QtAFEIu_DXtznRLUvIqN2Pgy7hf" },
{ board: "cbse", standard: "4th-standard", image: std4eng, name: "English",term: "Term 1",chapter : "chapter-7", path:"1wQiZYcm13egaoCOR-8US1VtZPibxLEHD"},
{ board: "cbse", standard: "4th-standard", image: std4eng, name: "English",term: "Term 1",chapter : "chapter-8", path:"1bdegzgOhotKjhymH9M3P520mta_9LQE8" },
{ board: "cbse", standard: "4th-standard", image: std4eng, name: "English",term: "Term 1",chapter : "chapter-9", path: "1WxWpyn3FTkqlvwj1hbbYuGycAF-6logj" },



//std 4 hindi 
{ board: "cbse", standard: "4th-standard", image: std4hindi, name: "Hindi",term: "Term 1",chapter : "chapter-1", path:"1zqM4VbHrcNjtJ4vtRbbZzqISg3CJFEiJ"},
{ board: "cbse", standard: "4th-standard", image: std4hindi, name: "Hindi",term: "Term 1",chapter : "chapter-2", path:"1TJY4xrqtsBMo7uULJsPcX7HvFC2gpw_P" },
{ board: "cbse", standard: "4th-standard", image: std4hindi, name: "Hindi",term: "Term 1",chapter : "chapter-3", path: "1T3Ee_9p7z5009uROxHxKfdekvAE_kvdO" },
{ board: "cbse", standard: "4th-standard", image: std4hindi, name: "Hindi",term: "Term 1",chapter : "chapter-4", path:"1I44nVO0UFur0hKlWz6KOo2muw90dGFzF"},
{ board: "cbse", standard: "4th-standard", image: std4hindi, name: "Hindi",term: "Term 1",chapter : "chapter-5", path:"1oJAougMgHZ6m8PYQ3vJTJ3bk94ATCTLQ" },
{ board: "cbse", standard: "4th-standard", image: std4hindi, name: "Hindi",term: "Term 1",chapter : "chapter-6", path: "1Bx-3r9eX3rZWuYoLd-yUVCwqzxnwDJE8" },
{ board: "cbse", standard: "4th-standard", image: std4hindi, name: "Hindi",term: "Term 1",chapter : "chapter-7", path:"1WB0kCrPgt5JqHs-TomuWgCYxEM-shGjM"},
{ board: "cbse", standard: "4th-standard", image: std4hindi, name: "Hindi",term: "Term 1",chapter : "chapter-8", path:"1TmWd8rOL5G9mRcsLlbvotwiJYTdlwKda" },
{ board: "cbse", standard: "4th-standard", image: std4hindi, name: "Hindi",term: "Term 1",chapter : "chapter-9", path: "1Emui67pzeLCHvNTLEEkgEPnY4GYImtD8" },
{ board: "cbse", standard: "4th-standard", image: std4hindi, name: "Hindi",term: "Term 1",chapter : "chapter-10", path:"1EhbjoXfoy0Zd3C15weyXbKnK0cJwO0lk"},
{ board: "cbse", standard: "4th-standard", image: std4hindi, name: "Hindi",term: "Term 1",chapter : "chapter-11", path:"1M5iJPZ0Bx9KMSzO1dloD9KMvZDCi-b-k" },
{ board: "cbse", standard: "4th-standard", image: std4hindi, name: "Hindi",term: "Term 1",chapter : "chapter-12", path: "1QiBEZJI2U3Vax_aT9fRPxRdJ_wkpCrCJ" },
{ board: "cbse", standard: "4th-standard", image: std4hindi, name: "Hindi",term: "Term 1",chapter : "chapter-13", path: "1MyLOvNrSUyDomHoA6mL5ae6Hp7Z55YQy" },
{ board: "cbse", standard: "4th-standard", image: std4hindi, name: "Hindi",term: "Term 1",chapter : "chapter-14", path:"1dby6dwX8Tvc757WFo-7vACSH9bj5qdlc" },


//std 4 maths 
{ board: "cbse", standard: "4th-standard", image: std4maths, name: "Maths",term: "Term 1",chapter : "chapter-1", path:"10phdSDuT5SGLj0UEblcpUH1965aiTkZ9"},
{ board: "cbse", standard: "4th-standard", image: std4maths, name: "Maths",term: "Term 1",chapter : "chapter-2", path:"14p7siUS1ccx5QK67vhoOore7uRA8X8Zz" },
{ board: "cbse", standard: "4th-standard", image: std4maths, name: "Maths",term: "Term 1",chapter : "chapter-3", path: "1eN0f8AqExDzBhvk8NeenkTR-g19-0gVW" },
{ board: "cbse", standard: "4th-standard", image: std4maths, name: "Maths",term: "Term 1",chapter : "chapter-4", path:"1Ab5Xbg0HkvrvCiHNks6gfQtzglhAShAG"},
{ board: "cbse", standard: "4th-standard", image: std4maths, name: "Maths",term: "Term 1",chapter : "chapter-5", path:"1JatjjXrtb-CuytzjvvTVtZYXskamm2zK" },
{ board: "cbse", standard: "4th-standard", image: std4maths, name: "Maths",term: "Term 1",chapter : "chapter-6", path: "16vAa_KNb6CzmK5MKhTYvVvcKNZhK4Edu" },
{ board: "cbse", standard: "4th-standard", image: std4maths, name: "Maths",term: "Term 1",chapter : "chapter-7", path:"12BbDSuZbFHT5w75Sker_CT3Z77pDZAnh"},
{ board: "cbse", standard: "4th-standard", image: std4maths, name: "Maths",term: "Term 1",chapter : "chapter-8", path:"1STWf4dg9kL6Vgs7JA0Mk3xLScO1xaM5j" },
{ board: "cbse", standard: "4th-standard", image: std4maths, name: "Maths",term: "Term 1",chapter : "chapter-9", path: "1BzN_8WORnH526LryrkM8OldNGFZoalaM" },
{ board: "cbse", standard: "4th-standard", image: std4maths, name: "Maths",term: "Term 1",chapter : "chapter-10", path:"1uh74Vq-jPzxzdYO-yR8wM3O4TBmqtNSo"},
{ board: "cbse", standard: "4th-standard", image: std4maths, name: "Maths",term: "Term 1",chapter : "chapter-11", path:"1DhYt6N8AMertYoBGfLMw2SDMV_AEV4DU" },
{ board: "cbse", standard: "4th-standard", image: std4maths, name: "Maths",term: "Term 1",chapter : "chapter-12", path: "10YW_-yP5R7sl0_hKkYUuL3WQUX_hJKmu" },
{ board: "cbse", standard: "4th-standard", image: std4maths, name: "Maths",term: "Term 1",chapter : "chapter-13", path: "1uuweUSBuaUi4k5-Em-3st1Dr902I8tM9" },
{ board: "cbse", standard: "4th-standard", image: std4maths, name: "Maths",term: "Term 1",chapter : "chapter-14", path: "1Kfc_mjZH_6M6xymxvezfbniAigjtfZST" },

//std 4 evs
{ board: "cbse", standard: "4th-standard", image: std4evs, name: "Evs",term: "Term 1",chapter : "chapter-1", path:"12DV09bNJ2tuaIBVIWN0gdgoyNP2MKgFb"},
{ board: "cbse", standard: "4th-standard", image: std4evs, name: "Evs",term: "Term 1",chapter : "chapter-2", path:"1gWqk8Qe-_FhJRdSCYSxSvzvvYmP6wlRo" },
{ board: "cbse", standard: "4th-standard", image: std4evs, name: "Evs",term: "Term 1",chapter : "chapter-3", path: "1ng2CrVa6e3IWcyhJhqYBV3a9MlWTJGv8" },
{ board: "cbse", standard: "4th-standard", image: std4evs, name: "Evs",term: "Term 1",chapter : "chapter-4", path:"14nqDtr8KmQIZzEw853UP28tpgtecLgcl"},
{ board: "cbse", standard: "4th-standard", image: std4evs, name: "Evs",term: "Term 1",chapter : "chapter-5", path:"1NBUtx-nKs4j1UemcpDNBIIM4TX4Yf0NJ" },
{ board: "cbse", standard: "4th-standard", image: std4evs, name: "Evs",term: "Term 1",chapter : "chapter-6", path: "1UxUIEsmkqq1ytwjxduj87Aeb2MroZDGq" },
{ board: "cbse", standard: "4th-standard", image: std4evs, name: "Evs",term: "Term 1",chapter : "chapter-7", path:"1l5bygKcOpWJXitLIK6cpLhPY7ApEfirR"},
{ board: "cbse", standard: "4th-standard", image: std4evs, name: "Evs",term: "Term 1",chapter : "chapter-8", path:"1MB1odW308x6H7plx62bc8UELYadFewvs"},
{ board: "cbse", standard: "4th-standard", image: std4evs, name: "Evs",term: "Term 1",chapter : "chapter-9", path:"1AFnYarmN3XN6hRXdcRHVmkZDxxifpMj2" },
{ board: "cbse", standard: "4th-standard", image: std4evs, name: "Evs",term: "Term 1",chapter : "chapter-10", path: "1IuiZaoPEu5tgMshDWotmkH3BAFHSB9JU" },
{ board: "cbse", standard: "4th-standard", image: std4evs, name: "Evs",term: "Term 1",chapter : "chapter-11", path:"1gk4a5npyiSaVh3As-9tnRnT2DMdvBhOc"},
{ board: "cbse", standard: "4th-standard", image: std4evs, name: "Evs",term: "Term 1",chapter : "chapter-12", path:"1PPO0J4j9_9lpydP6OLU7YXQWwmd4U3rK" },
{ board: "cbse", standard: "4th-standard", image: std4evs, name: "Evs",term: "Term 1",chapter : "chapter-13", path: "1uk1qK9Q9RZnkWEcQ6IfiNqp0jfRj50DN" },
{ board: "cbse", standard: "4th-standard", image: std4evs, name: "Evs",term: "Term 1",chapter : "chapter-14", path:"18UYNCMsQ-ktciKk8u78uT9IFINSUtfDg"},
{ board: "cbse", standard: "4th-standard", image: std4evs, name: "Evs",term: "Term 1",chapter : "chapter-15", path:"1mWex-ZCUMjgk5U1sLmw6s_LTl8lhXFfg"},
{ board: "cbse", standard: "4th-standard", image: std4evs, name: "Evs",term: "Term 1",chapter : "chapter-16", path:"1BN-_k5RU0SPyqI49BdnNPlQRBeX2218J" },
{ board: "cbse", standard: "4th-standard", image: std4evs, name: "Evs",term: "Term 1",chapter : "chapter-17", path: "1fJUGFLHwlfdEQ6xLtWAbmqR8K3Kf0mHv" },
{ board: "cbse", standard: "4th-standard", image: std4evs, name: "Evs",term: "Term 1",chapter : "chapter-18", path:"1w3RkenMvMiyKGPJMxCSrgoAlHbjAUbxZ"},
{ board: "cbse", standard: "4th-standard", image: std4evs, name: "Evs",term: "Term 1",chapter : "chapter-19", path:"1fJUGFLHwlfdEQ6xLtWAbmqR8K3Kf0mHv" },
{ board: "cbse", standard: "4th-standard", image: std4evs, name: "Evs",term: "Term 1",chapter : "chapter-20", path: "1Frct5RfIrg7NPlTTC0T9IHx5OeyxXtIJ" },
{ board: "cbse", standard: "4th-standard", image: std4evs, name: "Evs",term: "Term 1",chapter : "chapter-21", path:"1_2sAFWhwwtubqRS9oE_01LRMbWHwjk-U"},
{ board: "cbse", standard: "4th-standard", image: std4evs, name: "Evs",term: "Term 1",chapter : "chapter-22", path:"1BdLKUalVoubO4Zws3VbztNZUQJyEHL6x"},
{ board: "cbse", standard: "4th-standard", image: std4evs, name: "Evs",term: "Term 1",chapter : "chapter-23", path:"1GeOW2BUE17JmWxAExERarHbDHofWiWSn" },
{ board: "cbse", standard: "4th-standard", image: std4evs, name: "Evs",term: "Term 1",chapter : "chapter-24", path: "1kQY9ayjAT2fKJRpiL11Yw3C5DXcP3c6p" },
{ board: "cbse", standard: "4th-standard", image: std4evs, name: "Evs",term: "Term 1",chapter : "chapter-25", path:"1lYx3x2Zeeg1EbjZt5vQD72tj_sVe8Vso"},
{ board: "cbse", standard: "4th-standard", image: std4evs, name: "Evs",term: "Term 1",chapter : "chapter-26", path:"1yXt50f480q1l50bf6ReEjZDFR3tWMNgq" },
{ board: "cbse", standard: "4th-standard", image: std4evs, name: "Evs",term: "Term 1",chapter : "chapter-27", path: "1rxVaN9HtpbUgH7vtadJeaL4FC0u9E40A" },


//standard 5

//std 5 english
{ board: "cbse", standard: "5th-standard", image:std5eng, name: "English",term: "Term 1",chapter : "chapter-1", path:"https://drive.google.com/file/d/1vCsZtYZfD_ao8_u-AeFQqYhEMKbekfff/view?usp=drive_link"},
{ board: "cbse", standard: "5th-standard", image:std5eng, name: "English",term: "Term 1",chapter : "chapter-2", path:"https://drive.google.com/file/d/16RwMJMR5UxoUBQHNdWpFhHt0CJx6-5Xf/view?usp=drive_link" },
{ board: "cbse", standard: "5th-standard", image:std5eng, name: "English",term: "Term 1",chapter : "chapter-3", path: "https://drive.google.com/file/d/1UGv5eNaA0dyufeU_Dq_HSufdBVfGKhDK/view?usp=drive_link" },
{ board: "cbse", standard: "5th-standard", image:std5eng, name: "English",term: "Term 1",chapter : "chapter-4", path:"1Cog6pdyiffT1NSMwXPQbzxQPg9jAcLYn"},
{ board: "cbse", standard: "5th-standard", image:std5eng, name: "English",term: "Term 1",chapter : "chapter-5", path:"1ahBxMIjlbCniIT6W-h-iSQ883TeaK6fy" },
{ board: "cbse", standard: "5th-standard", image:std5eng, name: "English",term: "Term 1",chapter : "chapter-6", path:"1LY6u2QtAFEIu_DXtznRLUvIqN2Pgy7hf" },
{ board: "cbse", standard: "5th-standard", image:std5eng, name: "English",term: "Term 1",chapter : "chapter-7", path:"1wQiZYcm13egaoCOR-8US1VtZPibxLEHD"},
{ board: "cbse", standard: "5th-standard", image:std5eng, name: "English",term: "Term 1",chapter : "chapter-8", path:"1bdegzgOhotKjhymH9M3P520mta_9LQE8" },
{ board: "cbse", standard: "5th-standard", image:std5eng, name: "English",term: "Term 1",chapter : "chapter-9", path: "1WxWpyn3FTkqlvwj1hbbYuGycAF-6logj" },
{ board: "cbse", standard: "5th-standard", image:std5eng, name: "English",term: "Term 1",chapter : "chapter-10", path: "1WxWpyn3FTkqlvwj1hbbYuGycAF-6logj" },



//std 5 hindi 
{ board: "cbse", standard: "5th-standard", image: std5hindi, name: "Hindi",term: "Term 1",chapter : "chapter-1", path:"1zqM4VbHrcNjtJ4vtRbbZzqISg3CJFEiJ"},
{ board: "cbse", standard: "5th-standard", image: std5hindi, name: "Hindi",term: "Term 1",chapter : "chapter-2", path:"1TJY4xrqtsBMo7uULJsPcX7HvFC2gpw_P" },
{ board: "cbse", standard: "5th-standard", image: std5hindi, name: "Hindi",term: "Term 1",chapter : "chapter-3", path: "1T3Ee_9p7z5009uROxHxKfdekvAE_kvdO" },
{ board: "cbse", standard: "5th-standard", image: std5hindi, name: "Hindi",term: "Term 1",chapter : "chapter-4", path:"1I44nVO0UFur0hKlWz6KOo2muw90dGFzF"},
{ board: "cbse", standard: "5th-standard", image: std5hindi, name: "Hindi",term: "Term 1",chapter : "chapter-5", path:"1oJAougMgHZ6m8PYQ3vJTJ3bk94ATCTLQ" },
{ board: "cbse", standard: "5th-standard", image: std5hindi, name: "Hindi",term: "Term 1",chapter : "chapter-6", path: "1Bx-3r9eX3rZWuYoLd-yUVCwqzxnwDJE8" },
{ board: "cbse", standard: "5th-standard", image: std5hindi, name: "Hindi",term: "Term 1",chapter : "chapter-7", path:"1WB0kCrPgt5JqHs-TomuWgCYxEM-shGjM"},
{ board: "cbse", standard: "5th-standard", image: std5hindi, name: "Hindi",term: "Term 1",chapter : "chapter-8", path:"1TmWd8rOL5G9mRcsLlbvotwiJYTdlwKda" },
{ board: "cbse", standard: "5th-standard", image: std5hindi, name: "Hindi",term: "Term 1",chapter : "chapter-9", path: "1Emui67pzeLCHvNTLEEkgEPnY4GYImtD8" },
{ board: "cbse", standard: "5th-standard", image: std5hindi, name: "Hindi",term: "Term 1",chapter : "chapter-10", path:"1EhbjoXfoy0Zd3C15weyXbKnK0cJwO0lk"},
{ board: "cbse", standard: "5th-standard", image: std5hindi, name: "Hindi",term: "Term 1",chapter : "chapter-11", path:"1M5iJPZ0Bx9KMSzO1dloD9KMvZDCi-b-k" },
{ board: "cbse", standard: "5th-standard", image: std5hindi, name: "Hindi",term: "Term 1",chapter : "chapter-12", path: "1QiBEZJI2U3Vax_aT9fRPxRdJ_wkpCrCJ" },
{ board: "cbse", standard: "5th-standard", image: std5hindi, name: "Hindi",term: "Term 1",chapter : "chapter-13", path: "1MyLOvNrSUyDomHoA6mL5ae6Hp7Z55YQy" },
{ board: "cbse", standard: "5th-standard", image: std5hindi, name: "Hindi",term: "Term 1",chapter : "chapter-14", path:"1dby6dwX8Tvc757WFo-7vACSH9bj5qdlc" },


//std 5 maths 
{ board: "cbse", standard: "5th-standard", image: std5maths, name: "Maths",term: "Term 1",chapter : "chapter-1", path:"10phdSDuT5SGLj0UEblcpUH1965aiTkZ9"},
{ board: "cbse", standard: "5th-standard", image: std5maths, name: "Maths",term: "Term 1",chapter : "chapter-2", path:"14p7siUS1ccx5QK67vhoOore7uRA8X8Zz" },
{ board: "cbse", standard: "5th-standard", image: std5maths, name: "Maths",term: "Term 1",chapter : "chapter-3", path: "1eN0f8AqExDzBhvk8NeenkTR-g19-0gVW" },
{ board: "cbse", standard: "5th-standard", image: std5maths, name: "Maths",term: "Term 1",chapter : "chapter-4", path:"1Ab5Xbg0HkvrvCiHNks6gfQtzglhAShAG"},
{ board: "cbse", standard: "5th-standard", image: std5maths, name: "Maths",term: "Term 1",chapter : "chapter-5", path:"1JatjjXrtb-CuytzjvvTVtZYXskamm2zK" },
{ board: "cbse", standard: "5th-standard", image: std5maths, name: "Maths",term: "Term 1",chapter : "chapter-6", path: "16vAa_KNb6CzmK5MKhTYvVvcKNZhK4Edu" },
{ board: "cbse", standard: "5th-standard", image: std5maths, name: "Maths",term: "Term 1",chapter : "chapter-7", path:"12BbDSuZbFHT5w75Sker_CT3Z77pDZAnh"},
{ board: "cbse", standard: "5th-standard", image: std5maths, name: "Maths",term: "Term 1",chapter : "chapter-8", path:"1STWf4dg9kL6Vgs7JA0Mk3xLScO1xaM5j" },
{ board: "cbse", standard: "5th-standard", image: std5maths, name: "Maths",term: "Term 1",chapter : "chapter-9", path: "1BzN_8WORnH526LryrkM8OldNGFZoalaM" },
{ board: "cbse", standard: "5th-standard", image: std5maths, name: "Maths",term: "Term 1",chapter : "chapter-10", path:"1uh74Vq-jPzxzdYO-yR8wM3O4TBmqtNSo"},
{ board: "cbse", standard: "5th-standard", image: std5maths, name: "Maths",term: "Term 1",chapter : "chapter-11", path:"1DhYt6N8AMertYoBGfLMw2SDMV_AEV4DU" },
{ board: "cbse", standard: "5th-standard", image: std5maths, name: "Maths",term: "Term 1",chapter : "chapter-12", path: "10YW_-yP5R7sl0_hKkYUuL3WQUX_hJKmu" },
{ board: "cbse", standard: "5th-standard", image: std5maths, name: "Maths",term: "Term 1",chapter : "chapter-13", path: "1uuweUSBuaUi4k5-Em-3st1Dr902I8tM9" },
{ board: "cbse", standard: "5th-standard", image: std5maths, name: "Maths",term: "Term 1",chapter : "chapter-14", path: "1Kfc_mjZH_6M6xymxvezfbniAigjtfZST" },

//std 5 
{ board: "cbse", standard: "5th-standard", image: std5evs, name: "Evs",term: "Term 1",chapter : "chapter-1", path:"12DV09bNJ2tuaIBVIWN0gdgoyNP2MKgFb"},
{ board: "cbse", standard: "5th-standard", image: std5evs, name: "Evs",term: "Term 1",chapter : "chapter-2", path:"1gWqk8Qe-_FhJRdSCYSxSvzvvYmP6wlRo" },
{ board: "cbse", standard: "5th-standard", image: std5evs, name: "Evs",term: "Term 1",chapter : "chapter-3", path: "1ng2CrVa6e3IWcyhJhqYBV3a9MlWTJGv8" },
{ board: "cbse", standard: "5th-standard", image: std5evs, name: "Evs",term: "Term 1",chapter : "chapter-4", path:"14nqDtr8KmQIZzEw853UP28tpgtecLgcl"},
{ board: "cbse", standard: "5th-standard", image: std5evs, name: "Evs",term: "Term 1",chapter : "chapter-5", path:"1NBUtx-nKs4j1UemcpDNBIIM4TX4Yf0NJ" },
{ board: "cbse", standard: "5th-standard", image: std5evs, name: "Evs",term: "Term 1",chapter : "chapter-6", path: "1UxUIEsmkqq1ytwjxduj87Aeb2MroZDGq" },
{ board: "cbse", standard: "5th-standard", image: std5evs, name: "Evs",term: "Term 1",chapter : "chapter-7", path:"1l5bygKcOpWJXitLIK6cpLhPY7ApEfirR"},
{ board: "cbse", standard: "5th-standard", image: std5evs, name: "Evs",term: "Term 1",chapter : "chapter-8", path:"1MB1odW308x6H7plx62bc8UELYadFewvs"},
{ board: "cbse", standard: "5th-standard", image: std5evs, name: "Evs",term: "Term 1",chapter : "chapter-9", path:"1AFnYarmN3XN6hRXdcRHVmkZDxxifpMj2" },
{ board: "cbse", standard: "5th-standard", image: std5evs, name: "Evs",term: "Term 1",chapter : "chapter-10", path: "1IuiZaoPEu5tgMshDWotmkH3BAFHSB9JU" },
{ board: "cbse", standard: "5th-standard", image: std5evs, name: "Evs",term: "Term 1",chapter : "chapter-11", path:"1gk4a5npyiSaVh3As-9tnRnT2DMdvBhOc"},
{ board: "cbse", standard: "5th-standard", image: std5evs, name: "Evs",term: "Term 1",chapter : "chapter-12", path:"1PPO0J4j9_9lpydP6OLU7YXQWwmd4U3rK" },
{ board: "cbse", standard: "5th-standard", image: std5evs, name: "Evs",term: "Term 1",chapter : "chapter-13", path: "1uk1qK9Q9RZnkWEcQ6IfiNqp0jfRj50DN" },
{ board: "cbse", standard: "5th-standard", image: std5evs, name: "Evs",term: "Term 1",chapter : "chapter-14", path:"18UYNCMsQ-ktciKk8u78uT9IFINSUtfDg"},
{ board: "cbse", standard: "5th-standard", image: std5evs, name: "Evs",term: "Term 1",chapter : "chapter-15", path:"1mWex-ZCUMjgk5U1sLmw6s_LTl8lhXFfg"},
{ board: "cbse", standard: "5th-standard", image: std5evs, name: "Evs",term: "Term 1",chapter : "chapter-16", path:"1BN-_k5RU0SPyqI49BdnNPlQRBeX2218J" },
{ board: "cbse", standard: "5th-standard", image: std5evs, name: "Evs",term: "Term 1",chapter : "chapter-17", path: "1fJUGFLHwlfdEQ6xLtWAbmqR8K3Kf0mHv" },
{ board: "cbse", standard: "5th-standard", image: std5evs, name: "Evs",term: "Term 1",chapter : "chapter-18", path:"1w3RkenMvMiyKGPJMxCSrgoAlHbjAUbxZ"},
{ board: "cbse", standard: "5th-standard", image: std5evs, name: "Evs",term: "Term 1",chapter : "chapter-19", path:"1fJUGFLHwlfdEQ6xLtWAbmqR8K3Kf0mHv" },
{ board: "cbse", standard: "5th-standard", image: std5evs, name: "Evs",term: "Term 1",chapter : "chapter-20", path: "1Frct5RfIrg7NPlTTC0T9IHx5OeyxXtIJ" },
{ board: "cbse", standard: "5th-standard", image: std5evs, name: "Evs",term: "Term 1",chapter : "chapter-21", path:"1_2sAFWhwwtubqRS9oE_01LRMbWHwjk-U"},
{ board: "cbse", standard: "5th-standard", image: std5evs, name: "Evs",term: "Term 1",chapter : "chapter-22", path:"1BdLKUalVoubO4Zws3VbztNZUQJyEHL6x"},
{ board: "cbse", standard: "5th-standard", image: std5evs, name: "Evs",term: "Term 1",chapter : "chapter-23", path:"1GeOW2BUE17JmWxAExERarHbDHofWiWSn" },
{ board: "cbse", standard: "5th-standard", image: std5evs, name: "Evs",term: "Term 1",chapter : "chapter-24", path: "1kQY9ayjAT2fKJRpiL11Yw3C5DXcP3c6p" },
{ board: "cbse", standard: "5th-standard", image: std5evs, name: "Evs",term: "Term 1",chapter : "chapter-25", path:"1lYx3x2Zeeg1EbjZt5vQD72tj_sVe8Vso"},
{ board: "cbse", standard: "5th-standard", image: std5evs, name: "Evs",term: "Term 1",chapter : "chapter-26", path:"1yXt50f480q1l50bf6ReEjZDFR3tWMNgq" },
{ board: "cbse", standard: "5th-standard", image: std5evs, name: "Evs",term: "Term 1",chapter : "chapter-27", path: "1rxVaN9HtpbUgH7vtadJeaL4FC0u9E40A" },

  ];

  return book
}
export default BookData;