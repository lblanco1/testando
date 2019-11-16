// Floating Action Button
const elemsBtns = document.querySelectorAll(".fixed-action-btn");
const floatingBtn = M.FloatingActionButton.init(elemsBtns, {
    direction: "left",
    hoverEnabled: false
});

// Navbar
const elemsDropdown = document.querySelectorAll(".dropdown-trigger");
const instancesDropdown = M.Dropdown.init(elemsDropdown, {
    coverTrigger: false
});
elemsSidenav = document.querySelectorAll(".sidenav");
const instancesSidenav = M.Sidenav.init(elemsSidenav);

function calParallax(){
	$('.parallax').parallax();
	
}
window.load = calParallax();

(function(){ 
    var navMain = $("#mobile-navbar");

    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});