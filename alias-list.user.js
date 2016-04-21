// ==UserScript==
// @name        Alias list improver
// @namespace   booru
// @include     http://*.booru.org/index.php?page=alias*
// @version     1
// @grant       none
// ==/UserScript==

document.getElementsByTagName("div")[2].style.color = "black";
document.getElementsByTagName("div")[2].innerHTML = "<b>One example:</b> \
<a href='index.php?page=post&s=list&tags=evangelion' style='color:#A0A' onmouseover=\"this.style.color = \
'#9093ff'\" onmouseout=\"this.style.color = '#A0A'\">Evangelion</a> is the tag and \
<a href='index.php?page=post&s=list&tags=neon_genesis_evangelion' style='color:#A0A' onmouseover=\"this.style.color = \
'#9093ff'\" onmouseout=\"this.style.color = '#A0A'\">Neon_Genesis_Evangelion</a> is the alias.";
document.getElementsByTagName("table")[0].removeAttribute("style");
document.getElementsByTagName("th")[0].removeAttribute("width");
document.getElementsByTagName("th")[1].removeAttribute("width");
document.getElementsByTagName("th")[2].style.display = "none";

var getTd = document.getElementsByTagName("td");
for (i = 2; i < getTd.length - 4; i += 3) {
    getTd[i].style.display = "none";
}
for (i = 0; i < document.getElementsByTagName("td").length - 4; i += 3) {
    if (getTd[i].innerHTML.match(/_\(artist\)/g)) {
        var coloredTags = " style='color:#A00;' onmouseover=\"this.style.color = \
                           '#9093ff'\" onmouseout=\"this.style.color = '#A00'\"";
    } else if (getTd[i].innerHTML.match(/_\(character\)/g)) {
        var coloredTags = " style='color:#0A0;' onmouseover=\"this.style.color = \
                           '#9093ff'\" onmouseout=\"this.style.color = '#0A0'\"";
    } else if (getTd[i].innerHTML.match(/_\(copyright\)/g)) {
        var coloredTags = " style='color:#A0A;' onmouseover=\"this.style.color = \
                           '#9093ff'\" onmouseout=\"this.style.color = '#A0A'\"";
    } else {
        var coloredTags = "";
    }
    getTd[i].innerHTML = "<a href='index.php?page=post&s=list&tags=" +
    getTd[i].innerHTML.toLowerCase() + "'" + coloredTags + ">" +
    getTd[i].innerHTML.toLowerCase() + "</a>"
}
for (i = 1; i < document.getElementsByTagName("td").length - 4; i += 3) {
    if (getTd[i].innerHTML.match(/_\(artist\)/g)) {
        var coloredTags = " style='color:#A00;' onmouseover=\"this.style.color = \
                           '#9093ff'\" onmouseout=\"this.style.color = '#A00'\"";
    } else if (getTd[i].innerHTML.match(/_\(character\)/g)) {
        var coloredTags = " style='color:#0A0;' onmouseover=\"this.style.color = \
                           '#9093ff'\" onmouseout=\"this.style.color = '#0A0'\"";
    } else if (getTd[i].innerHTML.match(/_\(copyright\)/g)) {
        var coloredTags = " style='color:#A0A;' onmouseover=\"this.style.color = \
                           '#9093ff'\" onmouseout=\"this.style.color = '#A0A'\"";
    } else {
        var coloredTags = "";
    }
    getTd[i].innerHTML = "<a href='index.php?page=post&s=list&tags=" +
    getTd[i].innerHTML.toLowerCase() + "'" + coloredTags + ">" +
    getTd[i].innerHTML.toLowerCase() + "</a>"
}

// todo maybe something about this: http://forum.booru.org/index.php?action=vthread&forum=2&topic=634
