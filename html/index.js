const div = document.querySelector(".sidebar");

const btn1 = document.querySelector(".menubar");
const btn2 = document.querySelector(".xicon");
btn1.addEventListener("click",()=>{
    btn1.style.display= "none";
    btn2.style.display= "block";
});

btn2.addEventListener("click",()=>{
btn1.style.display="block";
btn2.style.display="none";
});

