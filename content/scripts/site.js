const SITE_PAGES = [
    {
        id:"books",
        file: "/content/books.html"
    },
    {
        id:"book-details",
        file: "/content/bookdetails.html"
    },
    {
        id:"about-me",
        file: "/content/about-me.html"
    },
    {
        id:"short-stories",
        file: "/content/short-stories.html"
    }
];


function loadSite() {
  
    var headerDiv = document.getElementById("site-header");
    includeHTML(headerDiv, "site-header.html");
    
    var leftDiv = document.getElementById("site-left");
    if(leftDiv != null)
        includeHTML(leftDiv, "site-left.html");
    
    var rightDiv = document.getElementById("site-right");
    if (rightDiv != null) 
        includeHTML(rightDiv, "site-right.html");

    var footerDiv = document.getElementById("site-footer");
    includeHTML(footerDiv, "site-footer.html");
}
    
function includeHTML(element, fileName) {
  
    if (fileName) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                element.innerHTML = this.responseText;
            }
        }      
        xhttp.open("GET", fileName, true);
        xhttp.send();
        return;
    }
};

function showTopNav() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
}

function loadPage() {

    const urlParams = new URLSearchParams(window.location.search);
    const pageId = urlParams.get('page');
    let page = SITE_PAGES.find(rec => rec.id === pageId)

    if (page === null || !page)   
       page = SITE_PAGES[0];
        
    var pageDiv = document.getElementById("site-content");
    includeHTML(pageDiv, page.file);

           

}

