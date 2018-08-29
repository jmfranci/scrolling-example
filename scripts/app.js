window.onscroll = menuScrolling;
var header = document.getElementById("menu-header");

//To smooth the transition
header.style.transition = "all 0.5s";

function menuScrolling(){
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("header-scrolling");
    } else {
        header.classList.remove("header-scrolling");
    }
}
