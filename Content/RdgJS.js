var text = `
#Rdg File Format
___

This file format, only found in GameCube Msts is related to sound effects.

There are 3 different variations of rdg files that can be found. The first
variant is currently unknown as to it's purpose, the other two variants
are components of a Musyx project.

The first variant are the files that make up 99% of the total rdg count
within an mst. They are very small files never reaching more than 3 KB 
in size, their purpose is currently unknown.

The second variant is snd_init.rdg, this file is a small archive file
that contains a .Proj, .Pool and .Sdir file used in a Musyx project.

The third and final variant is snd_smpls.rdg, this file as it's name
implies contains all the sound samples for sound effects. This file is
in fact a .samp file used in a Musyx project, the only difference was
the extension was renamed to .rdg.

`;