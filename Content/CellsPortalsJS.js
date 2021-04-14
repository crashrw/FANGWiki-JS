var text = `
#Cells & Portals
___

Drawing polygons is hard work, drawing entire worlds isn't easier. Trying to draw
the entire level all at once is just asking for your performance to tank. 

As a result, someone came up wtih the great idea of culling, also known as 
hiding everything the player can't see. After all, why should FANG bother
rendering surfaces that the player can't currently see?
This answer came in the form of Portals & Cells.

Cells are convex shapes that encapsulate a section of a level, if your standing
within that shape, you are considered in that cell.

Cells can be considered very similar to BSP used in Quake and Source
Engine games, however unlike those engines where visibilty and it's cells
are automatically calculated, you need to create all the cells yourself
in FANG.

The key to good performance in carefully controlling what parts of the 
level are drawn at any given time. What the player doesn't see should never
have to be drawn.

`;