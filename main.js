const reveal = document.querySelector('.open');
const hide = document.querySelector('.hide');

//Open arrows
const open1 = document.querySelector('.open-1');
const open2 = document.querySelector('.open-2');
const open3 = document.querySelector('.open-3');
const open4 = document.querySelector('.open-4');
const open5 = document.querySelector('.open-5');



//hidden blocks of info
const hide1 = document.querySelector('.hide-1');
const hide2 = document.querySelector('.hide-2');
const hide3 = document.querySelector('.hide-3');
const hide4 = document.querySelector('.hide-4');
const hide5 = document.querySelector('.hide-5');




//function on click


open1.addEventListener('click', ()=>{
    hide1.style.display = "block";
    open1.style.transform = "rotate(180deg)";
});

open2.addEventListener('click', ()=>{
    hide2.style.display = "block";
    open2.style.transform = "rotate(180deg)";
});

open3.addEventListener('click', ()=>{
    hide3.style.display = "block";
    open3.style.transform = "rotate(180deg)";
});

open4.addEventListener('click', ()=>{
    hide4.style.display = "block";
    open4.style.transform = "rotate(180deg)";
});

open5.addEventListener('click', ()=>{
    hide5.style.display = "block";
    open5.style.transform = "rotate(180deg)";
});


function dropdown(){
    const reveal = document.querySelector('.open');
    const hide = document.querySelector('.hide');

    if(hide.style.display == "block"){
        hide.style.display ="none";
    }else{
        hide.style.display = "block";
    }
}

