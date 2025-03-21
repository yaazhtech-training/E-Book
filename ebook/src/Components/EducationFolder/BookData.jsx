//book data

//image 
//state board image 
import standard1img from './EduImg/standard1img.jpg'
import standard2img from './EduImg/standard2img.png'
import standard3img from './EduImg/standard3img.png'
import standard4img from './EduImg/standard4img.png'
import standard5img from './EduImg/standard5img.avif'


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
    { board: "state-board", standard: "7th-standard",term: "Term 1", image: standard4img, name: "Tamil", path: "1pkskJu1OIhu1lkXdOVt2tWUBNFcX5hvh" },
    { board: "state-board", standard: "7th-standard",term: "Term 1", image: standard4img, name: "English", path: "1pkskJu1OIhu1lkXdOVt2tWUBNFcX5hvh" },
    { board: "state-board", standard: "7th-standard",term: "Term 1", image: standard4img, name: "Maths", path: "1yNy0kVbrIO15YT8f7WL_U4JoQPLzDwKy" },
    { board: "state-board", standard: "7th-standard",term: "Term 1", image: standard4img, name: "Science", path: "1AF0A-JTL5CEiaxSHTlgrmBCfoUSXdegY" },
    { board: "state-board", standard: "7th-standard",term: "Term 1", image: standard4img, name: "Social Studies", path: "1ziqEabbX_V6tL0-Mwd0QOjVDkEmH96j_" },
    //Term 2
    { board: "state-board", standard: "7th-standard",term: "Term 2", image: standard4img, name: "Tamil", path: "1S6ej_-SNfxqDrlUtGiTfhuO3-rYuViH8" },
    { board: "state-board", standard: "7th-standard",term: "Term 2", image: standard4img, name: "English", path: "1mg0khS7NMOU3wP1YbCIePY0ukT5sk4MR" },
    { board: "state-board", standard: "7th-standard",term: "Term 2", image: standard4img, name: "Maths", path: "1IMs77vl2EzEgl47oSXa5LxD-ten4nvjn" },
    { board: "state-board", standard: "7th-standard",term: "Term 2", image: standard4img, name: "Science", path: "1-UxB01bl02NJoqiNbguM7uIGkPzxU3g4" },
    { board: "state-board", standard: "7th-standard",term: "Term 2", image: standard4img, name: "Social Studies", path: "1Pd2q8cyPr0yar299pc7oA-LPvzKFQa6r" },  
    //Term 3
    { board: "state-board", standard: "7th-standard",term: "Term 3", image: standard4img, name: "Tamil", path: "16-9YExvsfmr6RSJnXx1LB1SVmpNIynJQ" },
    { board: "state-board", standard: "7th-standard",term: "Term 3", image: standard4img, name: "English", path: "13u--zDvD1FLjU2rAOZMCz9ozMpotw0zW" },
    { board: "state-board", standard: "7th-standard",term: "Term 3", image: standard4img, name: "Maths", path: "1BFwgnl-xwYvyGBr5hS41cZm5u3ksd-Hl" },
    { board: "state-board", standard: "7th-standard",term: "Term 3", image: standard4img, name: "Science", path: "165fWgvUp8VKD2PVaM1_PbcWszbCYLEXj" },
    { board: "state-board", standard: "7th-standard",term: "Term 3", image: standard4img, name: "Social Studies", path: "1sv-GfenQKjbE9rSF6BJcRLV1Bzh-RPbQ" },
//standard 7 
    //Term 1
    { board: "state-board", standard: "6th-standard",term: "Term 1", image: standard4img, name: "Tamil", path: "1AGV90PuQ6boCtzuSPAO6ppUzavaWesNw" },
    { board: "state-board", standard: "6th-standard",term: "Term 1", image: standard4img, name: "English", path: "1Ox-Xp365dk9tcWdfXvK5rjF95yfMpjLM" },
    { board: "state-board", standard: "6th-standard",term: "Term 1", image: standard4img, name: "Maths", path: "1tfrVpG2kvILe94zM66NlUWX8yZ7buNbb" },
    { board: "state-board", standard: "6th-standard",term: "Term 1", image: standard4img, name: "Science", path: "1cmlg-hoHy_N21KiAVN8IrpIUCqCgJO0l" },
    { board: "state-board", standard: "6th-standard",term: "Term 1", image: standard4img, name: "Social Studies", path: "1f4Y9DGdqlr4VY8D7URIQOwVFndI-B5T9" },
    //Term 2
    { board: "state-board", standard: "6th-standard",term: "Term 2", image: standard4img, name: "Tamil", path: "19K9QqbhuD2tlmnOX_bYLkjUiRgc_gBiP" },
    { board: "state-board", standard: "6th-standard",term: "Term 2", image: standard4img, name: "English", path: "1qBKTHoLITK-L2bjTsvdl6AbT4TKJPprV" },
    { board: "state-board", standard: "6th-standard",term: "Term 2", image: standard4img, name: "Maths", path: "1CuiXitbpvIJTIT7IjMVooV2Y8B8aEBIS" },
    { board: "state-board", standard: "6th-standard",term: "Term 2", image: standard4img, name: "Science", path: "1eN7nxMtYtTNRKGX7CWXMcdUe1s9xZ3X1" },
    { board: "state-board", standard: "6th-standard",term: "Term 2", image: standard4img, name: "Social Studies", path: "1dfciplINKKld6nSu_25eEe6581Ra6ncC" },  
    //Term 3
    { board: "state-board", standard: "6th-standard",term: "Term 3", image: standard4img, name: "Tamil", path: "1McoTjFs-o8pu4sEJpNpnIaIKNE9mKQuF" },
    { board: "state-board", standard: "6th-standard",term: "Term 3", image: standard4img, name: "English", path: "1VRk9HgpGby8G0aTHT6OrpSPBnAkDMAtd" },
    { board: "state-board", standard: "6th-standard",term: "Term 3", image: standard4img, name: "Maths", path: "1_qkMm4_gae59pRFS_VgyLBjE1zN3Bv6b" },
    { board: "state-board", standard: "6th-standard",term: "Term 3", image: standard4img, name: "Science", path: "17vS80UocxiFT8uuN7FZfv2FgwpNkXSo0" },
    { board: "state-board", standard: "6th-standard",term: "Term 3", image: standard4img, name: "Social Studies", path: "1mdXudbHXcj8Ra9blhoLs1sb5FVPQnNtJ" },

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