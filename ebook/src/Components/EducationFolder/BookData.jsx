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


import t1St1pdf from './EduPdf/stateBoardpdf/std1Team1/std1team1Tamil.pdf'

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
    { board: "state-board", standard: "5th-standard",term: "Term 1", image: standard4img, name: "Tamil", path: "1IEk-MKVL67_g-EI_ozWcBSbRuR4-KpC8" },
    { board: "state-board", standard: "5th-standard",term: "Term 1", image: standard4img, name: "English", path: "1YxBRR57SBwvGERcXSMgJwH2fJBwgYH71" },
    { board: "state-board", standard: "5th-standard",term: "Term 1", image: standard4img, name: "Maths", path: "1CoDDr-dO7d_X3_Ra4vN3BsBPk3yAnsGZ" },
    { board: "state-board", standard: "5th-standard",term: "Term 1", image: standard4img, name: "Science", path: "1_oR9yLs-FIsJ1AQoUq2AXxpQsknKcawR" },
    { board: "state-board", standard: "5th-standard",term: "Term 1", image: standard4img, name: "Social Studies", path: "1lgHio0dEyqQCf2BOz2OC0KZblovjAMCG" },
    //Term 2
    { board: "state-board", standard: "5th-standard",term: "Term 2", image: standard4img, name: "Tamil", path: "1DA7lUxkW34STIRe6uUd-NIsqJx_xgNS6" },
    { board: "state-board", standard: "5th-standard",term: "Term 2", image: standard4img, name: "English", path: "1kQdm23QhX0Wa7LTOICLDCh_Wsl7f2N9Z" },
    { board: "state-board", standard: "5th-standard",term: "Term 2", image: standard4img, name: "Maths", path: "13VrFJ8d98OHrJJc-aMcKBVI3mU-vcr2Q" },
    { board: "state-board", standard: "5th-standard",term: "Term 2", image: standard4img, name: "Science", path: "1NX3095w3_iR6TtqRN2yObaHdPhuJaQ83" },
    { board: "state-board", standard: "5th-standard",term: "Term 2", image: standard4img, name: "Social Studies", path: "1ne4d197jmcwckS7nQQyTIyOoWZ7Sj96B" },
    //Term 3
    { board: "state-board", standard: "5th-standard",term: "Term 3", image: standard4img, name: "Tamil", path: "1A4xXyCA3AdycUDnD4nYm1c-R62t3P548" },
    { board: "state-board", standard: "5th-standard",term: "Term 3", image: standard4img, name: "English", path: "1XW2gXDaQQB3GAdlgevI-SyTm_RjzzmbB" },
    { board: "state-board", standard: "5th-standard",term: "Term 3", image: standard4img, name: "Maths", path: "1al12YyeHK45pgTBkOXBQpV3sPRtXOP2Z" },
    { board: "state-board", standard: "5th-standard",term: "Term 3", image: standard4img, name: "Science", path: "1JBTPRWa0vyLVrMWWu7i0y5UzVXtdA8N9" },
    { board: "state-board", standard: "5th-standard",term: "Term 3", image: standard4img, name: "Social Studies", path: "1_ezn7Mu3R8S_HOsWE7Bn92CduEzBSeka" },

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
    //std 1Term
    // { board: "cbse", standard: "1st-standard",term: "Term 1", ima ge: standard1img, name: "1st Book Tamil & English", path:tamilstd1term1 },
    { board: "cbse", standard: "1st-standard", image: standard1img, name: "Maths",term: "Term 1",chapter : "chapter-1", path:"11gB9CrR1wZ-IYdBAES3rIaLhK4cwH6N8"},
    { board: "cbse", standard: "1st-standard", image: standard1img, name: "Maths",term: "Term 1",chapter : "chapter-2", path:"1XzoH0xDRCDbIJYxfKRc3PG24QetCdbOZ" },
    { board: "cbse", standard: "1st-standard", image: standard1img, name: "Maths",term: "Term 1",chapter : "chapter-3", path: "1a13xBvImGMTamqhhw7bhcnlylhVHwlPy" },
    { board: "cbse", standard: "1st-standard", image: standard1img, name: "Maths",term: "Term 1",chapter : "chapter-4", path:"1noIcFxH0eV8LXRPM597-tJ6Go54YBGzv"},
    { board: "cbse", standard: "1st-standard", image: standard1img, name: "Maths",term: "Term 1",chapter : "chapter-5", path:"1E3Oc2_JfDlrcWDbI7rNtTpfBYgVXMFjd" },
    { board: "cbse", standard: "1st-standard", image: standard1img, name: "Maths",term: "Term 1",chapter : "chapter-6", path: "1qKp9VMtVYjqmOn0dNdYZW2OdOG5Whbt9" },
    { board: "cbse", standard: "1st-standard", image: standard1img, name: "Maths",term: "Term 1",chapter : "chapter-7", path:"14so5SQdJ9vxlNKVJ8F79wkjt4nBthHu4"},
    { board: "cbse", standard: "1st-standard", image: standard1img, name: "Maths",term: "Term 1",chapter : "chapter-8", path:"1OnVMwH-B9iLXX_K5XPu6jl0pTAkU-R45" },
    { board: "cbse", standard: "1st-standard", image: standard1img, name: "Maths",term: "Term 1",chapter : "chapter-9", path: "1uugCAMLczLmcX9ddAIgjUalF2C9DaBG_" },
    { board: "cbse", standard: "1st-standard", image: standard1img, name: "Maths",term: "Term 1",chapter : "chapter-10", path:"19E8ul8ULpIwQosfwgWd5Bh7-6l14rfFM"},
    { board: "cbse", standard: "1st-standard", image: standard1img, name: "Maths",term: "Term 1",chapter : "chapter-11", path:"1B3nO9CVRMOvMStmF2vDc2N-cso2PR3JU" },
    { board: "cbse", standard: "1st-standard", image: standard1img, name: "Maths",term: "Term 1",chapter : "chapter-12", path: "1slwkxZuK1NlSJcq7DWW47lPPytmzAQAD" },
    { board: "cbse", standard: "1st-standard", image: standard1img, name: "Maths",term: "Term 1",chapter : "chapter-13", path: "1H7nSUXXTcz3EI924VTwvZVEvIxRqtW8i" },
  

    
    
    { board: "cbse", standard: "1st-standard", image: standard1img, name: "Science Book", path: t1St1pdf },
    //std 1Term 2
    { board: "cbse", standard: "1st-standard", image: standard1img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "1st-standard", image: standard1img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "1st-standard", image: standard1img, name: "Science Book", path: t1St1pdf },
    //std 1Term 3
    { board: "cbse", standard: "1st-standard", image: standard1img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "1st-standard", image: standard1img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "1st-standard", image: standard1img, name: "Science Book", path: t1St1pdf },
//standard 2
    //Term
    { board: "cbse", standard: "2nd-standard", image: standard2img, name: "Math Book", path: t1St1pdf },
    { board: "cbse", standard: "2nd-standard", image: standard2img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "2nd-standard", image: standard2img, name: "Social Studies", path: t1St1pdf },
    //Term 2
    { board: "cbse", standard: "2nd-standard", image: standard2img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "2nd-standard", image: standard2img, name: "Social Studies", path: t1St1pdf },
    { board: "cbse", standard: "2nd-standard", image: standard2img, name: "Social Studies", path: t1St1pdf },
    //Term 3
    { board: "cbse", standard: "2nd-standard", image: standard2img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "2nd-standard", image: standard2img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "2nd-standard", image: standard2img, name: "Science Book", path: t1St1pdf },

//standard 3 
    //Term
    { board: "cbse", standard: "3rd-standard", image:standard3img, name: "Math Book", path: t1St1pdf },
    { board: "cbse", standard: "3rd-standard", image:standard3img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "3rd-standard", image:standard3img, name: "Social Studies", path: t1St1pdf },
    //Term 2
    { board: "cbse", standard: "3rd-standard", image:standard3img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "3rd-standard", image:standard3img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "3rd-standard", image:standard3img, name: "Science Book", path: t1St1pdf },
    //Term 3
    { board: "cbse", standard: "3rd-standard", image:standard3img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "3rd-standard", image:standard3img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "3rd-standard", image:standard3img, name: "Science Book", path: t1St1pdf },
    //standard 4
    //Term
    { board: "cbse", standard: "4th-standard", image: standard4img, name: "Math Book", path: t1St1pdf },
    { board: "cbse", standard: "4th-standard", image: standard4img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "4th-standard", image: standard4img, name: "Social Studies", path: t1St1pdf },
    //Term 2
    { board: "cbse", standard: "4th-standard", image: standard4img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "4th-standard", image: standard4img, name: "Social Studies", path: t1St1pdf },
    { board: "cbse", standard: "4th-standard", image: standard4img, name: "Social Studies", path: t1St1pdf },

    //Term 3
    { board: "cbse", standard: "4th-standard", image: standard4img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "4th-standard", image: standard4img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "4th-standard", image: standard4img, name: "Science Book", path: t1St1pdf },
    //standard 5
    //Term
    { board: "cbse", standard: "5th-standard", image: standard5img, name: "Math Book", path: t1St1pdf },
    { board: "cbse", standard: "5th-standard", image: standard5img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "5th-standard", image: standard5img, name: "Social Studies", path: t1St1pdf },
    //Term 2
    { board: "cbse", standard: "5th-standard", image: standard5img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "5th-standard", image: standard5img, name: "Social Studies", path: t1St1pdf },
    //Term 3
    { board: "cbse", standard: "5th-standard", image: standard5img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "5th-standard", image: standard5img, name: "Science Book", path: t1St1pdf },
    { board: "cbse", standard: "5th-standard", image: standard5img, name: "Science Book", path: t1St1pdf },
  ];

  return book
}
export default BookData;