var text = `
#Projected Textures
___

The FANG Engine has the ability to take a
dynamic light in a wld scene and extrapolate specific
parameters to project a texture on wld geometry, 
dynamically loaded apes, or both.

The best example of projected textures is the light projected
into the jail cell Glitch spawns in at the start of every
Colosseum level. On Xbox Glitch is lit as artistically intented,
on GameCube Glitch is lit using spherical harmonics rather than
through the projected texture. This can be fixed by modifying Glitch's
materials however more research must be done to test what triggers
the fallback lighting solution. On PlayStation 2 the effect cannot
be seen on either the wld geometry nor Glitch, further testing
must be done to extrapolate the problem in addition
to if the problem can be fixed.

The effect works flawlessly on Xbox, requires a specific
material setup to work on apes in GC and doesn't work
on PS2.

`;