var text = `
#Mst File Format
___

The **M**a**st**er (Mst) file is the archive file that stores most of the other files within the game.
The easiest comparison is a zip of 7z file, however unlike those it offers no compression.

Mst files have the ability to be optimized to reduce load times.
When an mst has been optimized it has become "locked".
The process in which mst files can be optimized however is currently 
unknown and requires more research.

MA_WIN can generate an asset log to "optimize load times" for the game, 
PASM can take this file and use it as a reference for how to "optimize" the MST.
This process also "locks" it to prevent further modifications. You can "unlock" the mst
however it undos the optimization.

##Tools
___

|              Name                       |          Description        |
| --------------------------------------- | --------------------------- |
| [https://github.com/dj0wns/DJs\\_MA\\_TOOLs/blob/master/mst\\_extract.py](https://github.com/dj0wns/DJs_MA_TOOLs/blob/master/mst_extract.py) | The most feature complete python script for extracting the contents of the MST file, currently works with GameCube and Xbox, PS2 is not supported.
| [https://github.com/amPerl/MATools/blob/master/tools/extract.py](https://github.com/amPerl/MATools/blob/master/tools/extract.py)             | The very first MST extractor ever created, rendered obsolete by the tool above, this one's only advantage is PS2 MST support.                                                                                         
`;