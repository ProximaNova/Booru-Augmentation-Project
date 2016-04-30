// ==UserScript==
// @name         Booru post list improver
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*.booru.org/index.php?page=post&s=list*
// @match        http://rule34.xxx/index.php?page=post&s=list*
// @grant        none
// ==/UserScript==

for (i = 0; i < document.getElementsByTagName("a").length; i++) {
    // fix "'":
    if (document.getElementsByTagName("a")[i].href.match("%26%23039%3B")) {
        document.getElementsByTagName("a")[i].href =
            document.getElementsByTagName("a")[i].href.replace(/%26%23039%3B/g, "%27");
    }
    // fix '"':
    if (document.getElementsByTagName("a")[i].href.match("%26quot%3B")) {
        document.getElementsByTagName("a")[i].href =
            document.getElementsByTagName("a")[i].href.replace(/%26quot%3B/g, "%22");
    }
    // hide advert
    if (document.getElementsByTagName("a")[i].href.match("https://www.patreon.com/booru")) {
        document.getElementsByTagName("a")[i].style.display = "none";
    }
}
// Compact view:
// Thumbnails currently have 1em between them, the best aesthetics but not the best utility:
// for (i = 0; i < document.getElementsByClassName("thumb").length; i++) {
//      document.getElementsByClassName("thumb")[i].style.height = "160px";
//     document.getElementsByClassName("thumb")[i].style.width = "160px";
// }

var userID = document.cookie.replace(/user_id=/, "").replace(/; pass_hash.*/, "");
if (!(window.location.href.match("http://rule34.xxx"))) {
    document.getElementsByTagName("h2")[0].style.display = "inline";
    document.getElementsByTagName("h2")[0].innerHTML += "&emsp;";
    document.getElementsByTagName("li")[1].style.border = "1px dotted";
    document.getElementsByTagName("a")[2].style.margin = "8px";
    document.getElementById("long-notice").style.border = "1px dotted";
    document.getElementById("long-notice").style.position = "relative";
    document.getElementById("long-notice").style.top = "-10px";
    document.getElementById("long-notice").style.height = "25px";
    document.getElementById("long-notice").innerHTML =
        "<span style='position:relative;top:2px;'><big>&ensp;<a href='index.php?page=post&s=add'>Upload</a>&emsp;" +
        "<a href='help/posts.php'>Search help</a></big></span>";
    document.getElementById("footer").style.display = "none";
} else {
    document.getElementById("bottom").style.display = "none";
    document.getElementById("top").style.display = "none";
}

// q - Search
// Applies to all but the search box:
document.body.addEventListener("keydown", function(e) {
    var pagePid = (document.location.href.match("&pid=")) ? true : false;
    var pageIdBase = document.location.href.replace(/\d+$/g, "");
    var pageId = Number(document.location.href.match(/\d+$/g));
    var pageIdNext = pageId + 20;
    var pageIdPrev = pageId - 20;
    if (document.activeElement.id !== "tags") {
        // 68:d = Next page:
        if (e.keyCode == 68 && document.getElementsByTagName("img").length == 20) {
            if (pagePid) {
                document.location.href = pageIdBase + pageIdNext;
            } else {
                document.location.href = pageIdBase + "&pid=20";
            }
        // 65:a - Previous page:
        } else if (e.keyCode == 65 && pagePid && pageId !== 0) {
            document.location.href = pageIdBase + pageIdPrev;
        // 82:r - Go to random post:
        } else if (e.keyCode == 82) {
            document.location.href = document.location.href
                .replace(/index\.php.*/g, "index.php?page=post&s=random");
        // Vertically scrolling by 1em per (Google Chrome does 2.1 per) movement:
        // 87:w - Scroll up:
        } else if (e.keyCode == 87) {
            window.scrollBy(0, -16);
        // 83:s - Scroll down:
        } else if (e.keyCode == 83) {
            window.scrollBy(0, 16);
        }
    }
});

var pageNum = Number(document.getElementsByTagName("b")[0].innerHTML);
//if (window.innerWidth >= 1223 && window.innerWidth <= 1336) {
//    if (pageNum)
//    document.getElementById("paginator").innerHTML = "";
//}
//document.getElementById("paginator").innerHTML = "";

// todo: pagination links should span the width. 5 image rows: 30 links; 3: 10; etc.
