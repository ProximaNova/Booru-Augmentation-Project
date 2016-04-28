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
}

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

/*
if (window.location.href.match("&pid=")) {
   var pageID = Number(window.location.href.replace(/^.*&pid=/, ""));
} else {
   var pageID = 0;
}
//document.getElementById("paginator").innerHTML = "";
*/

// todo: pagination links should span the width. 5 image rows: 30 links; 3: 10; etc.
