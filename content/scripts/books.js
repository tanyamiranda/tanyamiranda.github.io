var contentlocation = "";
var bookdetailsurl="/book-details.html";

const BOOK_META_DATA = [
    {
        id:"the-box-of-souls",
        title: "The Box Of Souls",
        subtitle: "Family Relics Book 1",
        image:"/images/books-TheBoxOfSouls.jpg",
        tagline: "Even the darkest magic can't break the bonds of family.",
        shortblurb: "Although she was overlooked to inherit her grandmother's magic, Jasmyn learns she has powers of her own. Resentment and envy are a dangerous pair, but when doused with magic, the chaos it creates is unimaginable.",
        fullblurb: "18-year-old Jasmyn secretly resents her family's preference for her 8-year-old sister Katarina. Her jealousy grows when her grandmother, a dying witch, overlooks Jasmyn and chooses Katarina to inherit her magic powers. Although being second-place to her sister is something Jasmyn has grown accustomed to, this rejection wounds her like no other.<br/><br/>Little does Jasmyn know, she too has inherited some of her grandmother's powers. Resentment and envy are a dangerous pair, but when doused with magic, the chaos it creates is unimaginable.",
        shoplink: "https://bookstore.tanyamiranda.com/b/vmnYi",
        amazon: "http://www.amzn.to/2LF5soj",
        nook: "http://www.bit.ly/2y5MZPO",
        ibooks: "http://www.apple.co/1TPbLEo",
        google: "http://www.bit.ly/2y9ItQj",
        smashwords: "http://www.bit.ly/1Ie6b6d",
        kobo: "http://www.bit.ly/2JE4Nmr"
    },
    {
        id:"the-onyx-ring",
        title: "The Onyx Ring",
        subtitle: "Family Relics Book 2",
        image:"/images/books-TheOnyxRing.jpg",
        tagline: "The blood that binds a family bleeds the darkest.",
        shortblurb: "Jasmyn blames herself for her family's tragedy, and she's confident her family blames her too. Instead of returning home, she joins her coven to focus on developing her grandmother's magic. When an enemy clan threatens the family, her brother Logan goes in search of his estranged sister. Can Jasmyn and Logan survive the magical forces tearing their family apart?",
        fullblurb: "Jasmyn blames herself for her family's tragedy, and she's confident her family blames her too. So instead of returning home, Jasmyn joins her coven to focus on developing her grandmother's magic.<br/><br/>Logan understands Jasmyn's pain and respects his sister's desire to live apart, but he doesn't stay away for too long. An enemy clan of sorcerers claims Logan as one of their own, and the mysterious bond of an ancient brotherhood takes hold of him.<br/><br/>An age-old rivalry between Logan's clan and Jasmyn's coven reawakens, threatening all they hold dear. Will Jasmyn and Logan survive the magical forces tearing their family apart?",
        shoplink: "https://bookstore.tanyamiranda.com/b/grk7P",
        amazon: "http://www.amzn.to/2JLfdRb",
        nook: "http://www.bit.ly/2MtgNJk",
        ibooks: "http://www.apple.co/2MAyOFs",
        google: "http://www.bit.ly/2ldje69",
        smashwords: "http://www.bit.ly/2ybNUhx",
        kobo: "http://www.bit.ly/2lbCm4J"
    },
    {
        id:"a-selfish-moment",
        title: "A Selfish Moment",
        subtitle: "",
        image:"/images/books-ASelfishMoment.jpg",
        tagline: "Sometimes you have to let yourself go.",
        shortblurb: "<p>Neither Jubilee nor Everett can let go of that first night together. Was that one perfect evening a fluke, or was it a preview of something greater than they ever imagined?</p>",
        fullblurb: "Jubilee Ray wakes up Saturday morning in a strange bed with a handsome guy asleep at her side and no memory of how she got there. Everett Salerno wakes up ecstatic about the incredible night he spent with Jubilee. She can’t wait to get out of his apartment and he can’t wait to start their romance. Jubilee is a blackout drunk. Everett is drunk with love.<br/><br/>Their one-night-stand ends almost as quickly as it began, however fate has other plans in mind. In the next three days filled with impossible coincidences, humiliating moments, and mouthwatering recollections, Everett can’t find the right moment to express his intentions and Jubilee can’t let go of her past long enough to really give Everett a chance.<br/><br/>Neither Jubilee nor Everett can let go of that first night together. Was that one perfect evening a fluke, or was it a preview of something greater than they ever imagined?",
        shoplink: "https://bookstore.tanyamiranda.com/b/jthdG",
        amazon: "http://www.amzn.to/1mvkEan",
        nook: "http://www.bit.ly/2MCTcF7",
        ibooks: "http://www.apple.co/2tTnZpy",
        google: "http://www.bit.ly/2tKixpC",
        smashwords: "http://www.bit.ly/2KF9MH4",
        kobo: "http://www.bit.ly/2tJICp7"
    },
    {
        id:"isabel-and-leo",
        title: "Isabel & Leo",
        subtitle: "",
        image:"/images/books-IsabelAndLeo.jpg",
        tagline: "Life is crazy. They wouldn't want it any other way.",
        shortblurb: "<p>Finding romance gets harder after so many years together, but Isabel and Leo make it work. Between sassy kids and demanding careers, heartbreaks and frustrations, a quick kiss or a love tap are sometimes the only intimacy they can get. And when the moment comes, they jump all over it.</p><p>These are their stories.</p>",
        fullblurb: "Finding romance gets harder after so many years together, but Isabel and Leo make it work. This collection of short stories takes a peek into their lives as a competitive couple continually outwitting one another, as parents to two children who are too wise for their young ages, and as grownups who shoot foam dart guns like military snipers while attempting to act like responsible adults.<br/><br/>Between sassy kids and demanding careers, heartbreaks and frustrations, a quick kiss or a love tap are sometimes the only intimacy they can get. And when the moment comes, they jump all over it.<br/><br/>These are their stories.",
        shoplink: "https://bookstore.tanyamiranda.com/b/JoDKc",
        amazon: "http://www.amzn.to/2lKfPvX",
        nook: "http://www.bit.ly/2tH0rVO",
        ibooks: "http://www.apple.co/2MF3QeF",
        google: "http://www.bit.ly/2NgLr95",
        smashwords: "http://www.bit.ly/2lJvpYR",
        kobo: "http://www.bit.ly/2lNyibb"
    },
    {
        id:"distant-origins",
        title: "Distant Origins",
        subtitle: "",
        image:"/images/books-DistantOrigins.jpg",
        tagline: "Where you come from shouldn't matter. Unless is does.",
        shortblurb: "<p>Can Sarah Winters save the only other surviving Dramani female on Earth, or will she be the last of her kind? Only her powerful telekinetic ability can stop the destruction of her species, but is it enough to save herself?</p>",
        fullblurb: "Sarah Winters is an orphan. Her origin has never interested her until she meets Darren McAvoy and can communicate with him telepathically. They are of a human-like alien species called the Dramani who possess advanced physical and mental abilities. Sarah's a late bloomer for her kind, but on her twenty-fifth birthday she finds out just how powerful Dramani women can be.<br/><br/>As she digs further into what it means to be Dramani, Sarah learns the women are being targeted for elimination. She joins a top-secret military mission to rescue the only other surviving woman in the heart of Death Valley and finds there is more to the disappearances than the military knows.<br/><br/>Only Sarah's powerful telekinetic ability can stop the destruction of her species, but will it be enough to save herself?",
        shoplink: "https://bookstore.tanyamiranda.com/b/QHnsd",
        amazon: "http://www.amzn.to/2z9A8Nd",
        nook: "http://www.bit.ly/2KAZmIB",
        ibooks: "http://www.apple.co/2tHbGxu",
        google: "http://www.bit.ly/2NdVzzv",
        smashwords: "http://www.bit.ly/2z65eVY",
        kobo: "http://www.bit.ly/2KyQzXI"
    },

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
                    "<div class='book-image'><img src='" + contentlocation + "" + book.image + "' /></div>" + 
                    "<div class='book-details'>" + 
                        "<div class='book-details-title'>" + book.title + "</div>" + 
                        "<div class='book-details-subtitle'>" + book.subtitle + "</div>" + 
                        "<div class='book-details-tagline'>" + book.tagline + "</div>" + 
                        "<div class='book-details-shortblurb'>" + (shortBlurb ? book.shortblurb : book.fullblurb) + "</div>"       
                        
                        if(book.shoplink !=null && book.shoplink !== "") {
                            html += "<div class='myStoreButton'><a href='" + book.shoplink + "' target='_blank'>Buy the eBook in my shop!</a></div>";
                        }            

                        html += "<div class='book-links'><p>Get your copy from your favorite bookseller:</p>" + 
                            "<a href='" + book.amazon + "' target='_blank'><img class='bookSellerButton' src='" + contentlocation + "/images/store-amazon.png'/></a>" + 
                            "<a href='" + book.ibooks + "' target='_blank'><img class='bookSellerButton' src='" + contentlocation + "/images/store-ibooks.png'/></a>" +
                            "<a href='" + book.google + "' target='_blank'><img class='bookSellerButton' src='" + contentlocation + "/images/store-google.png'/></a>" +
                            "<a href='" + book.kobo + "' target='_blank'><img class='bookSellerButton' src='" + contentlocation + "/images/store-nook.png'/></a>" +
                            "<a href='" + book.nook + "' target='_blank'><img class='bookSellerButton' src='" + contentlocation + "/images/store-kobo.png'/></a>" +
                            "<a href='" + book.smashwords + "' target='_blank'><img class='bookSellerButton' src='" + contentlocation + "/images/store-smashwords.png'/></a>" +
                        "</div>" +        
                    "</div>" + 
                "</div>" + 
            "</div>";

    };

    return html;

}


function loadBookThumbnails(small) {

    var html = "<div class='all-books'>";

    BOOK_META_DATA.forEach(book => {
        html += "<div class='book-thumbnail" + (small ? " smallest-thumbnail" : "") + "'>" + 
                    "<a href='" + bookdetailsurl + "?bookId=" + book.id + "' ><img src='" + contentlocation + book.image + "' /></a>" + 
                "</div>"
    });

    html += "</div>";

    var bookList = document.getElementById("book-list-container");
    bookList.innerHTML = html;

}