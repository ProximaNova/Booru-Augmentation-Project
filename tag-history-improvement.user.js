// ==UserScript==
// @name         Tag history improver
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       usernam
// @match        http://*.booru.org/index.php?page=history&type=tag_history&id=*
// @grant        none
// ==/UserScript==

// Tag(s) diff(s):
var tagsOld = document.getElementsByTagName("td")[10].textContent
              .replace(/^ /g, "").replace(/ $/g, "").split(" ");
var tagsNew = document.getElementsByTagName("td")[4].textContent
              .replace(/^ /g, "").replace(/ $/g, "").split(" ");
var blah = [], diff = [];
for (i = 0; i < tagsOld.length; i++) {
    blah[tagsOld[i]] = true;
}
for (i = 0; i < tagsNew.length; i++) {
    if (blah[tagsNew[i]]) {
        delete tagsNew[i];
    }
}
document.getElementsByTagName("h2")[0].innerHTML =
tagsNew.join(" ").replace(/^ /g, "").replace(/ $/g, "").split(" ");

for (i = 0; i < 5; i++) {
    document.getElementsByTagName("th")[i].removeAttribute("width");
}

// Post:
postNumberLength = location.href.replace(/^.*&id=/g, "").replace(/#$/g, "")
if (postNumberLength.length <= 4) {
    document.getElementsByTagName("th")[1].style.width = "2px";
} else if (postNumberLength.length == 5) {
    document.getElementsByTagName("th")[1].style.width = "5px";
} else if (postNumberLength.length == 6) {
    document.getElementsByTagName("th")[1].style.width = "8px";
}

// Date:
document.getElementsByTagName("th")[2].style.width = "150px";
for (i = 2; i < document.getElementsByTagName("td").length - 3; i += 6) {
    var timeSpecific = document.getElementsByTagName("td")[i].innerHTML.match(/\d+:\d+:\d+/g);
    document.getElementsByTagName("td")[i].innerHTML =
    document.getElementsByTagName("td")[i].innerHTML.replace(/ \d+:\d+:\d+/g, " (" + timeSpecific + ")");
}

// User:
document.getElementsByTagName("th")[3].style.width = "35px";

// "Options":
document.getElementsByTagName("th")[5].innerHTML = "Undo";
document.getElementsByTagName("th")[5].style.width = "20px";

document.getElementsByTagName("th")[0].style.width = "1px";
for (i = 0; i < document.getElementsByTagName("td").length; i += 6) {
    
    // Username(s) link(s):
    var username = document.getElementsByTagName("td")[i + 3];
    if (!(username.innerHTML.match("Anonymous"))) {
        username.innerHTML = "<a href='index.php?page=account_profile&uname=" + 
        username.innerHTML + "'>" + username.innerHTML + "</a>";
    } else {
        username.innerHTML = "<a href='index.php?page=post&s=list&tags=user%3AAnonymous'>Anonymous</a>";
    }
    
    // Tag(s) link(s):
    document.getElementsByTagName("td")[i + 4].innerHTML =
    document.getElementsByTagName("td")[i + 4].innerHTML.replace(/^ /g, "").replace(/ $/g, "");
    var oldAndNewTagsArray = document.getElementsByTagName("td")[i + 4].innerHTML.split(" ");
    var oldAndNewTags = "";
    for (j = 0; j < oldAndNewTagsArray.length; j++) {
        if (oldAndNewTagsArray[j].match(/_\(artist\)/g)) {
            oldAndNewTagsStyle = "style='color:#A00;'";
        } else if (oldAndNewTagsArray[j].match(/_\(character\)/g)) {
            oldAndNewTagsStyle = "style='color:#0A0;'";
        } else if (oldAndNewTagsArray[j].match(/_\(copyright\)/g)) {
            oldAndNewTagsStyle = "style='color:#A0A;'";
        } else {
            oldAndNewTagsStyle = "";
        }
        oldAndNewTags += "<a href='index.php?page=post&s=list&tags=" + oldAndNewTagsArray[j] +
        "' " + oldAndNewTagsStyle + ">" + oldAndNewTagsArray[j] + "</a> ";
    }
    document.getElementsByTagName("td")[i + 4].innerHTML = oldAndNewTags;

    // Subtraction or addition if = green, else if = red, and else = white:
    if (document.getElementsByTagName("td")[i + 4].innerHTML.match(/ /g).length >
    document.getElementsByTagName("td")[i + 10].innerHTML.match(/ /g).length) {
        document.getElementsByTagName("td")[i].style.backgroundColor = "#148F04";
    }
    else if (document.getElementsByTagName("td")[i + 4].innerHTML.match(/ /g).length <
    document.getElementsByTagName("td")[i + 10].innerHTML.match(/ /g).length) {
        document.getElementsByTagName("td")[i].style.backgroundColor = "#F30601";
    } else {
        document.getElementsByTagName("td")[i].style.backgroundColor = "white";
    }
}
