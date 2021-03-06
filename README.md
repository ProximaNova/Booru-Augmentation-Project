# Booru Augmentation Project
A userscript that improves usability of basic *.booru.org hosted sites.

It's no secret that free accounts on booru.org offer very little convenience compared to well-developed boorus like Danbooru.  
  My goal is to do what is possible on client-side to compensate for the lack of functionality on the server side.
  
## List of features:

* Drop-down select tag list for the search field

![screen](http://puu.sh/lD5FK/c90fd506d8.png)

Like on Danbooru, but so far only works for the first tag entered. 

* AJAX tag editor
 
 ![pic](http://puu.sh/lwWff/d89ecf28d3.png)

Allows you to quickly add, edit and remove tags with just a few clicks and without page reloading. No more scrolling to the bottom of the page to open the edit form, do everything directly in the tag list to the left.  
  
* Revamp Statistics area below the tag list 

![screen](http://puu.sh/lyCVk/363400f0e5.png)

Improve readability, add user links and image title, remove unnecessary info.

* Shift page number links, so that links to both 5 previous and 5 next pages are available 
  
![screen](http://puu.sh/lC2cz/0a406af9a0.png)

By default booru only shows 10 next links, which makes jumping several pages back impossible.

Aside from these, I added some minor tweaks such as fitting the post image into screen width, fixing links to user accounts, highlighting potential mistakes in tags input, showing complete tag list in account options and some other.

You feedback is required, please go to the [Issues](https://github.com/Seedmanc/Booru-Augmentation-Project/issues) section and make suggestions which features I should add, and what would you like to see.

## Booru mass editor
Use this script to quickly edit images at websites runing older versions of Gelbooru.

Functionality:
* It works the best on Gelbooru Beta 0.1.11: what most hostnames (*.example.com) on booru.org use.
* It sort of works on Gelbooru Beta 0.2.
* It doesn't work at all on Gelbooru Beta 0.2.0 or Gelbooru Beta 0.2.5.

It is not really a problem that this script only works on older versions of Gelbooru:
* Gelbooru version Beta 0.1.11"
 * Users could post images with no tags resulting in the images having the "tagme" tag
 * Many boorus have vast image dumps with no tags (for example, 80% images at [meme.booru.org](http://meme.booru.org/index.php?page=forum&s=list) have no tags (23,375/29,024 images total))
 * Thus, many boorus really need to be tagged
* Gelbooru versions equal to or greater than "Beta 0.2":
 * The software forces users to have at least 4 tags
 * The software is not free so the popularity of the booru has to pay for the software's cost

(For quicker editting at the newest version of Gelbooru get the form to display automatically instead of having to click "Edit" to unhide it.)

## See also
Seedmanc's userscripts:
* [Booru mass uploader](https://github.com/Seedmanc/Booru-mass-uploader)
* [Booru Augmentation Project](https://github.com/Seedmanc/Booru-Augmentation-Project)
