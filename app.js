 let pic = document.querySelector(".zoom");
// let colr = document.querySelector(".headng");

// // function event1()
// // {
// //     colr.style.backgroundColor = 'red';
// // }

// pic.onmousemove = () =>{
//     pic.style.height = "700px"
//     pic.style.width = "700px"
//     pic.style.border = "11px solid black"
// }
// pic.onmouseleave = () =>{
//     pic.style.height = "512px"
//     pic.style.width = "512px"
// }
// // function z_in()
// // {
// //     pic.style.height = "700px"
// //     pic.style.width = "700px"
// // }
// // function z_out()
// // {

// //     pic.style.backgroundColor = "black"
// // }


// pic.onclick = (e) => {
//     console.log(e);
// }
// colr.onmousemove = () => {
//     colr.style.backgroundColor = 'black';
//     colr.style.color = "white";
// }
// colr.onmouseleave = (e) => {
//     colr.style.backgroundColor = 'white';
//     colr.style.color = "black";
//     console.log(e);
// }
// let bodyy = document.querySelector(".full"); // problem is that when we click other area then it will not work
// bodyy.onclick = (e) => {
//     let diskimages = document.querySelector(".photo");
//     diskimages.src = `4.png`; 

//     //Image.style.width = "500px" -----------change the width 
// }


// event listener
// let clicks = document.querySelector(".clicks");
let pics = document.querySelector(".zoom");
// document.onmousemove          pic moved with mouse
document.onclick = (e) =>{
    // pics.style.width="300px";
   pics.style.width = "100px"
   pics.style.height = "100px"
   
    pics.style.position = "fixed"
    pics.style.left = e.x + "px"  // or `${e.clientX} + px`
    pics.style.top = e.y + "px"
   
    console.log(e);
}
