var text = `
#Multiplayer Hills
___

Multiplayer hills are special entities that only spawn in the multiplayer
game modes "King of the Hill" and "Moving Hill".

The hill is composed of two different entities working in tandem. One entity is
responsible for the visual representation of the hill while another entity is responsible
for the collision mesh used for determining when a player in standing in the hill.

To set up a multiplayer hill in a wld file, there are two entities placed
one on top of each other. The hill you see in game has a special name set up in it's gamedata like

<code>name = HillVisXX</code>

where XX is subsituted for a # like 00, 01, etc\\... The collision of the hill is a
seperate entity that similarily has a specified name in it's gamedata set up like

<code>name = HillXX</code>
    
where XX is subsituted for a # like 00, 01, etc\\... The collision and visual mesh entities
are linked together when they share the same matching # in the suffix of their name property
within the gamedata of the entities.

The visual mesh is set to not be collidable with the player. The collision mesh
on the other hand is set to not be drawn in the scene.

<Warning> DO NOT set the collision mesh to have no collision. The game automatically
applies the correct collision properties to the mesh as long as it has the correct
naming scheme in the entities gamedata. </Warning>
`;