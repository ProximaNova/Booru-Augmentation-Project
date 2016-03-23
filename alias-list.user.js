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
for (i = 2; i < document.getElementsByTagName("td").length - 4; i += 3) {
    document.getElementsByTagName("td")[i].style.display = "none";
}
for (i = 0; i < document.getElementsByTagName("td").length - 4; i += 3) {
    document.getElementsByTagName("td")[i].innerHTML = "<a href='index.php?page=post&s=list&tags=" +
    document.getElementsByTagName("td")[i].innerHTML + "'>" +
    document.getElementsByTagName("td")[i].innerHTML + "</a>"
}
for (i = 1; i < document.getElementsByTagName("td").length - 4; i += 3) {
    document.getElementsByTagName("td")[i].innerHTML = "<a href='index.php?page=post&s=list&tags=" +
    document.getElementsByTagName("td")[i].innerHTML + "'>" +
    document.getElementsByTagName("td")[i].innerHTML + "</a>"
}
