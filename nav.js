window.onscroll = function{myFunction()} ;
var navbar =document.getElementById ( "navbox");
var sticky = navbox.offsetTop;

function myFunction (){
    if (window.pageYOffset>= sticky) {
        navbar.classList.add ("sticky")
    }
    else {
        navbar.classList.remove ("sticky");
    }
}