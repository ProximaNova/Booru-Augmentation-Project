// ==UserScript==
// @name        Alias
// @namespace   booru
// @include     http://*.booru.org/index.php?page=alias*
// @version     1
// @grant       none
// ==/UserScript==

document.getElementsByTagName("div")[2].style.color = "black";
document.getElementsByTagName("div")[2].innerHTML = "<b>One example:</b> <code style='color:#A0A'>Evangelion</code> is the tag and <code style='color:#A0A'>Neon_Genesis_Evangelion</code> is the alias.";
document.getElementsByTagName("th")[2].style.display = "none";
var getTd = document.getElementsByTagName("td");

for (i = 2; i < getTd.length - 4; i += 3) {
    getTd[i].style.display = "none";
}
for (i = 0; i < document.getElementsByTagName("td").length - 4; i += 3) {
    if (getTd[i].innerHTML.match(/_\(artist\)/g)) {
        var coloredTags = " style='color:#A00;'";
    } else if (getTd[i].innerHTML.match(/_\(character\)/g)) {
        var coloredTags = " style='color:#0A0;'";
    } else if (getTd[i].innerHTML.match(/_\(copyright\)/g)) {
        var coloredTags = " style='color:#A0A;'";
    } else {
        var coloredTags = "";
    }
    getTd[i].innerHTML = "<a href='index.php?page=post&s=list&tags=" +
    getTd[i].innerHTML + "'" + coloredTags + ">" +
    getTd[i].innerHTML + "</a>"
}
for (i = 1; i < document.getElementsByTagName("td").length - 4; i += 3) {
    if (getTd[i].innerHTML.match(/_\(artist\)/g)) {
        var coloredTags = " style='color:#A00;'";
    } else if (getTd[i].innerHTML.match(/_\(character\)/g)) {
        var coloredTags = " style='color:#0A0;'";
    } else if (getTd[i].innerHTML.match(/_\(copyright\)/g)) {
        var coloredTags = " style='color:#A0A;'";
    } else {
        var coloredTags = "";
    }
    getTd[i].innerHTML = "<a href='index.php?page=post&s=list&tags=" +
    getTd[i].innerHTML + "'" + coloredTags + ">" +
    getTd[i].innerHTML + "</a>"
}
