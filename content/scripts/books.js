var contentlocation = ""; /** TO BE SET to */
var bookdetailsurl="/book-details.html";
const GO_WIDE = true;
const BOOKSTORE_LIVE = true;

const BOOK_META_DATA = [
    {
        id:"the-dragon-amulet",
        title: "The Dragon Amulet",
        subtitle: "Family Relics Book 3",
        image:"/images/books-TheDragonAmulet.webp",
        tagline: "Family is the only treasure worth sacrificing for.",
        shortblurb: "Can Jasmyn wield her grandmother's magic to save her family, or will Ryland steal her powers and erase her bloodline from history?<br/><br/>Jasmyn's entire family, her sole existence, is at stake, and time is running out.",
        fullblurb: "Jasmyn has suffered more loss than she can bear, but she finds hope when she learns of her grandmother's darkest secret: magic that can reverse time itself. Along with her coven sisters, she journeys to the only place the enchantment will work—the Isle of Enid. Although Jasmyn never learned the spell, she hopes the island's supernatural forces will give her insight and help her turn back the clock.<br/><br/>But Jasmyn isn't the only one after this magic. Ryland, an immortal seer, devises a plan to use the spell to go back centuries to kill Finna, Jasmyn's great-grandmother, and change the fate of his people. If he succeeds, Ryland will erase Finna's bloodline from history.<br/><br/>Jasmyn's entire family, her sole existence, is at stake, and time is running out.",
        shoplink: "https://bookstore.tanyamiranda.com/b/the-dragon-amulet",
        amazon: "https://amzn.to/3G4zCRf",
        google: "https://bit.ly/47Z9XEf",
        nook: "https://bit.ly/3R4oo35",
        ibooks: "https://apple.co/47YhkMg",
        smashwords: "https://bit.ly/3RrKbTy",
        kobo: "https://bit.ly/3RqhqH7"
    },
    {
        id:"the-onyx-ring",
        title: "The Onyx Ring",
        subtitle: "Family Relics Book 2",
        image:"/images/books-TheOnyxRing.webp",
        tagline: "The blood that binds a family bleeds the darkest.",
        shortblurb: "Will Logan reject his clan's magic to protect his sister, or will he fulfill his clan's destiny and destroy Jasmyn's coven?<br/><br/>With such opposing magical forces, even the tightest family bonds can break.",
        fullblurb: "Jasmyn blames herself for her family's tragedy, and she's confident her family blames her too. The guilt is too much to bear, so instead of returning home, she joins her coven to focus on developing her grandmother's magic.<br/><br/>Logan understands Jasmyn's pain and respects his sister's desire to live apart, but he doesn't stay away for too long. An enemy clan of sorcerers claims Logan as one of their own, and the mysterious bond of an ancient brotherhood takes hold of him. An age-old rivalry between Logan's clan and Jasmyn's coven reawakens, and the violence it unearths threatens all they hold dear.<br/><br/>Will Logan reject the brotherhood to protect his sister, or will he fulfill his clan's destiny and destroy Jasmyn's coven? With such opposing magical forces, even the tightest family bonds can break.",
        shoplink: "https://bookstore.tanyamiranda.com/b/the-onyx-ring",
        amazon: "https://amzn.to/3hv50y2",
        google: "https://bit.ly/3RpR4op",
        nook: "https://bit.ly/2lbCm4J",
        ibooks: "https://apple.co/2MAyOFs",
        smashwords: "https://bit.ly/2ybNUhx",
        kobo: "https://bit.ly/2MtgNJk"
    },
    {
        id:"the-box-of-souls",
        title: "The Box Of Souls",
        subtitle: "Family Relics Book 1",
        image:"/images/books-TheBoxOfSouls.webp",
        tagline: "Even the darkest magic can't break the bonds of family.",
        shortblurb: "Although she was overlooked to inherit her grandmother's magic, Jasmyn learns she has powers of her own. Resentment and envy are a dangerous pair, but when doused with magic, the chaos it creates is unimaginable.",
        fullblurb: "18-year-old Jasmyn secretly resents her family's preference for her 8-year-old sister Katarina. Her jealousy grows when her grandmother, a dying witch, overlooks Jasmyn and chooses Katarina to inherit her magic powers. Although being second to her sister is something Jasmyn has grown accustomed to, this rejection wounds her like no other.<br/><br/>Little does Jasmyn know she, too, has inherited some of her grandmother's powers. Resentment and envy are a dangerous pair, but when doused with magic, the chaos it creates is unimaginable.",
        shoplink: "https://bookstore.tanyamiranda.com/b/the-box-of-souls",
        amazon: "https://amzn.to/3fVgOco",
        google: "https://bit.ly/417duxZ",
        nook: "https://bit.ly/2JE4Nmr",
        ibooks: "http://apple.co/1TPbLEo",
        smashwords: "https://bit.ly/1Ie6b6d",
        kobo: "https://bit.ly/2y5MZPO"
    },
    {
        id:"distant-origins",
        title: "Distant Origins",
        subtitle: "",
        image:"/images/books-DistantOrigins.webp",
        tagline: "",
        shortblurb: "<p>Can Sarah Winters save the only other surviving Dramani female on Earth, or will she be the last of her kind? Only her powerful telekinetic ability can stop the destruction of her species, but is it enough to save herself?</p>",
        fullblurb: "Sarah Winters is an orphan. Her origin has never interested her until she meets Darren McAvoy and can communicate with him telepathically. They are of a human-like alien species called the Dramani who possess advanced physical and mental abilities. Sarah's a late bloomer for her kind, but on her twenty-fifth birthday she finds out just how powerful Dramani women can be.<br/><br/>As she digs further into what it means to be Dramani, Sarah learns the women are being targeted for elimination. She joins a top-secret military mission to rescue the only other surviving woman in the heart of Death Valley and finds there is more to the disappearances than the military knows.<br/><br/>Only Sarah's powerful telekinetic ability can stop the destruction of her species, but will it be enough to save herself?",
        shoplink: "https://bookstore.tanyamiranda.com/b/distant-origins",
        amazon: "https://amzn.to/3TklVAN",
        google: "https://bit.ly/4a0ZGJA",
        nook: "https://bit.ly/2KyQzXI",
        ibooks: "https://apple.co/2tHbGxu",
        smashwords: "https://bit.ly/2z65eVY",
        kobo: "https://bit.ly/2KAZmIB"
        
    },
    {
        id:"a-selfish-moment",
        title: "A Selfish Moment",
        subtitle: "",
        image:"/images/books-ASelfishMoment.webp",
        tagline: "Sometimes you have to let yourself go.",
        shortblurb: "<p>Neither Jubilee nor Everett can let go of that first night together. Was that one perfect evening a fluke, or was it a preview of something greater than they ever imagined?</p>",
        fullblurb: "Jubilee Ray wakes up Saturday morning in a strange bed with a handsome guy asleep at her side and no memory of how she got there. Everett Salerno wakes up ecstatic about the incredible night he spent with Jubilee. She can't wait to get out of his apartment and he can't wait to start their romance. Jubilee is a blackout drunk. Everett is drunk with love.<br/><br/>Their one-night-stand ends almost as quickly as it began, however fate has other plans in mind. In the next three days filled with impossible coincidences, humiliating moments, and mouthwatering recollections, Everett can't find the right moment to express his intentions and Jubilee can't let go of her past long enough to really give Everett a chance.<br/><br/>Neither Jubilee nor Everett can let go of that first night together. Was that one perfect evening a fluke, or was it a preview of something greater than they ever imagined?",
        shoplink: "https://bookstore.tanyamiranda.com/b/a-selfish-moment",
        amazon: "https://amzn.to/3UqWVcm",
        google: "https://bit.ly/3T8okC1",
        nook: "https://bit.ly/2tJICp7",
        ibooks: "https://apple.co/2tTnZpy",
        smashwords: "https://bit.ly/2KF9MH4",
        kobo: "https://bit.ly/2MCTcF7"
        
    },
    {
        id:"isabel-and-leo",
        title: "Isabel & Leo",
        subtitle: "",
        image:"/images/books-IsabelAndLeo.webp",
        tagline: "Life is crazy. They wouldn't want it any other way.",
        shortblurb: "<p>Finding romance gets harder after so many years together, but Isabel and Leo make it work. Between sassy kids and demanding careers, heartbreaks and frustrations, a quick kiss or a love tap are sometimes the only intimacy they can get. And when the moment comes, they jump all over it.</p><p>These are their stories.</p>",
        fullblurb: "Finding romance gets harder after so many years together, but Isabel and Leo make it work. This collection of short stories takes a peek into their lives as a competitive couple continually outwitting one another, as parents to two children who are too wise for their young ages, and as grownups who shoot foam dart guns like military snipers while attempting to act like responsible adults.<br/><br/>Between sassy kids and demanding careers, heartbreaks and frustrations, a quick kiss or a love tap are sometimes the only intimacy they can get. And when the moment comes, they jump all over it.<br/><br/>These are their stories.",
        shoplink: "https://bookstore.tanyamiranda.com/b/isabel-and-leo",
        amazon: "https://amzn.to/3A04zSM",
        google: "https://bit.ly/3uHVrT0",
        nook: "https://bit.ly/2lNyibb",
        ibooks: "https://apple.co/2MF3QeF",
        smashwords: "https://bit.ly/2lJvpYR",
        kobo: "https://bit.ly/2tH0rVO"
        
    },
    
    {
        id:"outside-the-lines",
        title: "Outside The Lines",
        subtitle: "A Poetry Collection",
        image:"/images/books-OutsideTheLines.webp",
        tagline: "",
        shortblurb: "<p>Outside The Lines is a collection of poetry and prose on love, relationships, fear, inspiration, death, and all of life's wonderful splendor.</p>",
        fullblurb: "Outside The Lines is a collection of poetry and prose on love, relationships, fear, inspiration, death, and all of life's wonderful splendor.",
        shoplink: "",
        amazon: "https://amzn.to/3DR3SfI",
        google: "",
        nook: "",
        ibooks: "",
        smashwords: "",
        kobo: ""

    }

];

function loadBooks() {

    var html = "";

    BOOK_META_DATA.forEach((book, index) => {

        const isEvenRow = (index+1) % 2 === 0;

        const cssClass= isEvenRow ? "book-banner-section-alternate" : "book-banner-section";

        html += getBookDetailsHTML(book, cssClass, true);

    });

    var bookList = document.getElementById("book-list-container");

    bookList.innerHTML = html;

}

function loadFullBookDetails(book) {

    html = getBookDetailsHTML(book)

    var bookList = document.getElementById("book-list-container");

    bookList.innerHTML = html;
}

function getBookDetailsHTML(book, cssClass, shortBlurb) {

    var html = "";

    if (!cssClass)
        cssClass = "book-banner-section";

    if (book != null) {

        html = 
            "<div class='" + cssClass + "'>" + 
                "<div class='book'>" + 
                    "<div class='book-image" + (book.displayBookImageWithoutShadow ? " book-image-noshadow" : "") + "'><img src='" + contentlocation + "" + book.image + "' /></div>" + 
                    "<div class='book-details'>" + 
                        "<div class='book-details-title'>" + book.title + "</div>" + 
                        "<div class='book-details-subtitle'>" + book.subtitle + "</div>";

                        if (book.tagline != null)
                            html +="<div class='book-details-tagline'>" + book.tagline + "</div>" 
                        
                        html += "<div class='book-details-shortblurb'>" + (shortBlurb ? book.shortblurb : book.fullblurb) + "</div>"       
                          
                        if (!GO_WIDE) {
                            html += "<div class='myStoreButton'><a href='" + book.amazon + "' target='_blank'>Buy now on Amazon!</a></div>";
                        }
                        else {
                            
                            if(book.shoplink !=null && book.shoplink !== "") 
                                html += "<div class='myStoreButton'><a href='" + book.shoplink + "' target='_blank'>Buy the eBook in my shop!</a></div>";

                            html += "<div class='book-links'><p>Available at all major booksellers:</p>";

                            if(book.amazon !=null && book.amazon !== "")  
                                html += "<a href='" + book.amazon + "' target='_blank'><img class='bookSellerButton' src='" + contentlocation + "/images/store-amazon.png'/></a>" ;
                            
                            if(book.ibooks !=null && book.ibooks !== "")  
                                html += "<a href='" + book.ibooks + "' target='_blank'><img class='bookSellerButton' src='" + contentlocation + "/images/store-ibooks.png'/></a>";
                            
                            if(book.google !=null && book.google !== "")  
                                html += "<a href='" + book.google + "' target='_blank'><img class='bookSellerButton' src='" + contentlocation + "/images/store-google.png'/></a>";
                            
                            if(book.kobo !=null && book.kobo !== "")  
                                html += "<a href='" + book.kobo + "' target='_blank'><img class='bookSellerButton' src='" + contentlocation + "/images/store-nook.png'/></a>";
                                
                            if(book.nook !=null && book.nook !== "")  
                                html += "<a href='" + book.nook + "' target='_blank'><img class='bookSellerButton' src='" + contentlocation + "/images/store-kobo.png'/></a>"; 
                        
                            if(book.smashwords !=null && book.smashwords !== "")  
                                html += "<a href='" + book.smashwords + "' target='_blank'><img class='bookSellerButton' src='" + contentlocation + "/images/store-smashwords.png'/></a>";
                            }
                       
                        html += "</div>" +        
                    "</div>" + 
                "</div>" + 
            "</div>";

    };

    return html;

}


function loadBookThumbnails(small) {

    var html = "<div class='all-books'>";

    BOOK_META_DATA.forEach(book => {
        if (!book.hideFromBookList) 
            html += "<div class='book-thumbnail" + (small ? " smallest-thumbnail" : "") + "'>" + 
                    "<a href='" + bookdetailsurl + "?bookId=" + book.id + "' ><img src='" + contentlocation + book.image + "' alt='" + book.title + "' width='100%' height='auto'/></a>" + 
                "</div>"
    });

    html += "</div>";

    var bookList = document.getElementById("book-list-container");
    bookList.innerHTML = html;

}

function loadBookVendorLinks() {

    html = ""

    if (!GO_WIDE) {
        html += "<p><center><div class='myStoreButton'><a href='https://amzn.to/3UoMI0b' target='_blank'>Buy now on Amazon!</a></div></center></p>"
    }
    else{

        if (BOOKSTORE_LIVE) {
            html += "<p class='cozy-message'>Support an independent author and small business owner by purchasing your copy at my shop!</p>" + 
            "<p><center><div class='myStoreButton'><a href='https://bookstore.tanyamiranda.com/' target='_blank'>Visit My Shop</a></div></center></p>" 
        }

        html += "<p class='cozy-message'>Available at all major booksellers:</p>" + 
            "<div id='all-books-footer'>" +
                "<div>" +
                    "<a href='https://amzn.to/3UoMI0b' target='_blank' id='amazon'><img class='bookSellerButton' src='https://tanyamiranda.github.io/content/images/store-amazon.png' width='80px' height='auto'></a>" +
                    "<a href='https://itunes.apple.com/us/author/tanya-miranda/id641906457?mt=11' target='_blank' id='apple'><img class='bookSellerButton' src='https://tanyamiranda.github.io/content/images/store-ibooks.png' width='80px' height='auto'></a>" +
                    "<a href='https://play.google.com/store/books/author?id=Tanya+Miranda' target='_blank' id='google'><img class='bookSellerButton' src='https://tanyamiranda.github.io/content/images/store-google.png' width='80px' height='auto'></a>" +
                    "<a href='https://www.barnesandnoble.com/s/%22Tanya%20Miranda%22' target='_blank' id='nook'><img class='bookSellerButton' src='https://tanyamiranda.github.io/content/images/store-nook.png' width='80px' height='auto'></a>" +
                    "<a href='https://www.kobo.com/us/en/author/tanya-miranda' target='_blank' id='kobo'><img class='bookSellerButton' src='https://tanyamiranda.github.io/content/images/store-kobo.png' width='80px' height='auto'></a>" +
                    "<a href='https://www.smashwords.com/profile/view/tanyamirandabooks' target='_blank' id='smashwords'><img class='bookSellerButton' src='https://tanyamiranda.github.io/content/images/store-smashwords.png' width='80px' height='auto'></a>" +
                "</div>" +
            "</div>";

    }

    var bookVendorList = document.getElementById("book-vendor-links");
    bookVendorList.innerHTML = html

}