//alert("hola mundo js");
//console.log("hola mundo js en consola");
//dom (document objet model)

//let element = document.querySelector(".fa-star");
//los objetos dentro del dom se conocen como nodos
//let elementlist = document.querySelectorAll(".fa-star");

//elementlist.forEach(function(element){
  //  element.addEventListener("click",function(){
    //    alert("estrellita clickeada");
      //  element.classList.remove("far");
        //element.classList.add("fas");
    //})

//});

//eventos

let closes = document.querySelectorAll(".close");
let content = document.querySelector(".content");

closes.forEach(function(close){
    close.addEventListener("click",function(ev){
        ev.preventDefault();
        content.classList.remove("animated");
        content.classList.remove("fadeInRight");
        content.classList.add("animated");
        content.classList.add("fadeInRight");
        setTimeout(() => {

            location.href="/";

        },1000);



    });
})

