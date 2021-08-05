var text = `
#Scripting Introduction
___

In game events like pushing a button to open a door, starting
cutscenes or setting a checkpoint save are controlled by .sma files.

## How to add a script to a level
___
1. First you must modify the .csv file associated with the .wld.
You must define a new row called scripts and in that row add the scripts
you want like scripttest.sma.
2. Second you must place all your files in the PASM local directory folder. 
    - Add a folder called small_include and in that folder include all your
    .inc files.
    - Place all your .sma files in the root of your PASM local directory folder
    - Finally, add your new .csv file
3. Finally, compile your scripts into your MST with PASM.

##Common Terminology
___
- Scope, explain and why important

`;