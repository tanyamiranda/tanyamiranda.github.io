var pageLoaded = false;

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function toggleMenu() {

    if (!pageLoaded)
        return;

    var menuIcon = document.getElementById("myTopnav");
    if (menuIcon.className === "topnav") {
        menuIcon.className += " responsive";
    } else {
        menuIcon.className = "topnav";
    }
}

function displaySection(sectionName) {

	const HOMEPAGETAG="welcome";
	const ALLTAGS=["welcome","apitherapy", "products-and-services", "about-me"];
	
	let sectionTag = "";
	
	if (sectionName==='' || ALLTAGS.indexOf(sectionName)===-1) {
		sectionTag= HOMEPAGETAG;
        window.location.hash = "welcome";
    }
	else
        sectionTag = sectionName;

    sectionTag = sectionTag + "-section";

    var contentSections=document.getElementsByClassName("content-section");
    var menuItems=document.getElementsByClassName("menu-items");

    for(var x=0; x < contentSections.length; x++) {
        
        var sectionId = contentSections[x].id;

        if(sectionId === sectionTag) {
            contentSections[x].style.display = "inline-block";
            menuItems[x].style.color = "yellow";
        }
        else {
            contentSections[x].style.display = "none";
            menuItems[x].style.color = "white";
        }
    }

}

/******************************
In case the sections are linked
externally, pre-load section
******************************/
const hash = window.location.hash;
displaySection(hash.substring(1));

pageLoaded = true;

window.onpopstate = function() {
	const hash = window.location.hash;
	displaySection(hash.substring(1));
    toggleMenu();
}