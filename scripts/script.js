// JavaScript Document

var deMicky = document.querySelector("img.deMicky");

// button 1928
var deButton1928 = document.querySelector(".tekst1928");
deButton1928.addEventListener("click", micky1928InBeeld);
function micky1928InBeeld() {
	deMicky.classList.remove("micky1935", "micky1999", "micky2020")
    deMicky.classList.toggle("micky1928")

}

// button 1935
var deButton1935 = document.querySelector(".tekst1935");
deButton1935.addEventListener("click", micky1935InBeeld);
function micky1935InBeeld() {
    deMicky.classList.remove("micky1928", "micky1999", "micky2020")
	deMicky.classList.toggle("micky1935")
}

// button 1999
var deButton1999 = document.querySelector(".tekst1999");
deButton1999.addEventListener("click", micky1999InBeeld);
function micky1999InBeeld() {
    deMicky.classList.remove("micky1928", "micky1935", "micky2020")
	deMicky.classList.toggle("micky1999")
}

// button 2020
var deButton2020 = document.querySelector(".tekst2020");
deButton2020.addEventListener("click", micky2020InBeeld);
function micky2020InBeeld() {
    deMicky.classList.remove("micky1928", "micky1935", "micky1999")
	deMicky.classList.toggle("micky2020")
}