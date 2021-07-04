var text = `
# How to add a new page
___

Each page of the wiki is contained with a .js (javascript) file. These .js files
are essentially Markdown files, meaning that you can write markdown into these
files and when you open up the page on the wiki it will be formatted as such.

To add a new page, you first need to create a new .js file within the Content folder.
For a quck start you can copy paste the templateJS.js file located within the Content folder. 
The file MUST follow the naming scheme of xJS.js where x will be your internal name
for the page, don't worry you can write a pretty name later on.

After duplicating you can open up the file and start editing it as if it
was a text / markdown file. Looking at MarkdownJS.js within the Content folder
is a good reference for what is possible.

<warning> You cannot add \` to your markdown code, it will break formatting
and I don't know how to fix this as of writting this. If you are using a special char
and it is not showing up in the page, try adding \\\\\\  or \\\\ before
the char or chars in question. Also if you are trying to embed code in a page,
it must be prefixed with a tab space or encapsulated in < code >Your Code< /code >. </warning>

To see your changes in the wiki, you must now edit init.js within the Content folder.
The init.js file contains a var called sidebarPages which is esentially as json file. 
This var is used for dynamically constructing the sidebar for linking to different "pages".
Each property is the name of the table with the sub properties "name" and prettyName" being
the internal name of the javascript file minus JS.js and prettyName being the name shown in the browser.

`;
