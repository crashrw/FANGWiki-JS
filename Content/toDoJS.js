var text = `
#To Do Tasks For The Wiki
___

##General
___

- As expected, all the pages in TO\\_BE\\_CATEGORIZED should get proper homes.

- All renders should be done with how the model should look in game, no renders in Blender or Garry's Mod
UNLESS the page is under construction and the render is more for a proof of concept. Temporary renders
should be marked accordingly with T or TEMP

- All of the different robots should get their own pages designating
all their possible properties and parameters. The TF2 wiki might be a good example
to follow for overall styling guidelines.

##Programming
___

- Changing pages is a giant hack, everytime a new "page" is loaded a new html script
is appended in \<head\\>. Effectly this means the page continues to consume more memory
as more and more "pages" are loaded. Ideally we want to mark certain scripts to unload 
and to clean up the html page whenever we load new ones.
This looks useful [http://www.javascriptkit.com/javatutors/loadjavascriptcss2.shtml](http://www.javascriptkit.com/javatutors/loadjavascriptcss2.shtml)

- A known issue is when changing pages the page doesn't update, clicking it again fixes
the issue. The problem is we aren't actually waiting for the page to load, we arbitrarily
chose to pause for 10ms before calling the script to update the page. This needs to be fixed
so it's called AFTER the javascript file has been loaded.

- Clicking on href links to other pages on the wiki doesn't work, this must be fixed.

- The active page should be highlighted on the sidebar in a bright color, if the user were to refresh
the page the sidebar table should automatically be opened to show where on the wiki the user is.

- When clicking on the tables in the sidebar, if you don't click on the word the table
won't open, this needs to be fixed.

`;