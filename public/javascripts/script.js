let a4 = document.querySelector(".a4");
let a5 = document.querySelector(".a5");
let com = document.querySelector(".com");
let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
let p3 = document.querySelector(".p3");
a4.addEventListener("click",function(){
    a5.style.display="initial";
    a4.style.display="none";
    p1.style.textDecoration="line-through";
    p1.style.textDecoration="line-through";
    p2.style.textDecoration="line-through";
    p3.style.textDecoration="line-through";
    com.style.display="initial";
});
a5.addEventListener("click",function(){
    a4.style.display="initial";
    a5.style.display="none";
    p1.style.textDecoration="none";
    p1.style.textDecoration="none";
    p2.style.textDecoration="none";
    p3.style.textDecoration="none";
    com.style.display="none";
});