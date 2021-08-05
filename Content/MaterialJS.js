var text = `
#FANG Materials
___
##3DS MAX Parameters
___

Special Thanks to Vissova for providing these

These parameters are added at the end of material names. More than one parameter can be used.

*z(1)
Prevents z-fighting. Commonly used with decals. Set # to anywhere between 0.0 and 1.0


*surf(#)
- Surface type.
- 0 = Default
- 1 = Concrete
- 2 = Metal
- 3 = Metal grate
- 4 = Dirt
- 5 = Rock
- 6 = Glass
- 7 = Composite
- 8 = Electronics
- 9 = Junk
- 10 = Water
- 11 = Goop
- 12 = Acid
- 13 = Force field


*Coll(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
Collisions. Set the numbers to 1 to activate or 0 to deactivate.
- 1 = Player
- 2 = NPCs
- 3 = Line of sight
- 4 = Thin projectiles (bullets)
- 5 = Thick projectiles (rockets)
- 6 = ??
- 7 = ??
- 8 = ??
- 9 = Loader?
- 10 = Tank
- 11 = RAT
- 14 = Camera
- 15 = Objects
- 16 = Walkable


*nocoll
No collision

*scroll(1, 2, 3, 4)
Scrolls the texture along the X axis, Y axis, or both. (X is horizontal, Y is vertical)
The scrolling effect is relative to the texture image itself.
- 1 = X direction. 1.0 is forward on the X axis, -1.0 is reverse.
- 2 = Speed of scrolling on the X axis
- 3 = Y direction.
- 4 = Speed of scrolling on the Y axis
Examples:
- *scroll(-1.0, 2, 0.0, 0.0) = Scrolls the texture to the side at a speed of 2
- *scroll(1.0, 1.0, 1.0, 1.0) = Scrolls the texture diagonally upward

##Shaders
___

*Shader(#)
- 1 = Texture transparency
- 2 = 
- 4 = Make texture self-illuminating by using the alpha channel as a self-illumination mask
	Diffuse and illumination slots need to use the same tga
- 7 = Animated texture beneath alpha of main texture
	A composite material where the base is a scrolling texture
	and mat1 is the diffuse. The scrolling texture appears beneath
	the diffuse's alpha transparency
- 15 = Reflective texture
	Diffuse map is main texture, alpha channel defines reflectivity.
	Use reflection map as the material's reflection (typically demorefl.tga)
- 31 = See-through glowing texture, uses vertex-alpha

##Tips & Tricks
___

Commonly used:
Player and NPC clip: Name*Coll(1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1)*nodraw
	-Used as invisible level boundaries. Also blocks the camera.

Railings and meshes: Name*shader(1)*Coll(1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1)
	-Used for railings, metal grates, etc. Does not block bullets, blocks thick projectiles.

`;