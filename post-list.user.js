// ==UserScript==
// @name        post list
// @namespace   booru
// @include     http://*.booru.org/index.php?page=post&s=list&tags=*
// @version     1
// @grant       none
// ==/UserScript==

var linkIds = [];
for (i = 0; i < document.getElementsByTagName("a").length; i++) {
    if (document.getElementsByTagName("a")[i].id.match(/^p\d+/g)) {
        linkIds[i] = document.getElementsByTagName("a")[i].id;
    }
}
var linkIds2 = [];
for (i = 0; i < linkIds.length; i++) {
    if (linkIds[i] == "") {
        linkIds[i].splice(i, 1);
    } else {
        linkIds2[linkIds[i]] = linkIds[i];
    }
}
for (x in linkIds2) {
    var num = Number(linkIds2[x].slice(1));
    if (posts[num]["tags"].length > 10) {
        document.getElementById(linkIds2[x]).style.border = "15px solid red";
    }
}

console.log(linkIds2);
