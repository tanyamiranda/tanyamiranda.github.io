function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function menuSelect(selectedItem) {
    myFunction();

    var contentSections=document.getElementsByClassName("content-section");
    var menuItems=document.getElementsByClassName("menu-items");

    for(var x=0; x < contentSections.length; x++) {
        
        if(x==selectedItem) {
            contentSections[x].style.display = "inline-block";
            menuItems[x].style.color = "yellow";
        }
        else {
            contentSections[x].style.display = "none";
            menuItems[x].style.color = "white";
        }
    }
}
