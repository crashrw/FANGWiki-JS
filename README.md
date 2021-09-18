# FANG Engine Wiki
A wiki dedicated to the FANG Engine used for Metal Arms: Glitch in the System

This wiki is designed to be usable in both an offline / local and online environment while also attempting to be as easy as possible to make changes and see them reflected in realtime.

# THIS REPOSITORY IS NOW ARCHIVED
This wiki was created from my personal irritation with how I thought wikis were created, Originally I couldn't find any solutions on how to create a wiki that could work both locally on ones computer and be hosted online. As a result I built my own.

My solution is this repository as you see it now. I believed that writting markdown formatted strings stored in JS files, then using `showdown.js` to create html code and dynamically inject it into a div container on my html page was the best course of action to my problem. While this tool served it's purpose there were many problems. Itterating on pages was tolerable but jank because you were writting markdown text in a javascript var. Creating new pages was a hassle, it didn't scale to different screen resolutions, specially mobile. And you had to click twice on a page to actually load the contents, amidst other issues.

In the time since making this wiki I have come to learn that there are much more efficient frameworks to use rather than continuing to use my janky solution. One in particular I have found useful is `MkDocs` along with the theme `Material for MkDocs`. This tool does everything I wanted from the start such as ease of itteration, local and online wiki, wiki search and much more.

The FANG documentation wiki might return one day, but it will be in a new repository. I'm leaving the code for this wiki here, as is rather than updating to serve as an archive of an idea.

TLDR: I hated itterating on my wiki and found `MkDocs` solves all the shortcomings of this code structure.
