var text = `
#Goodies.csv
___
Are you looking for the list of all the goodie drops?
If so, you want to look at the [Goodies](index.html#Goodies) page.

<note> goodies.csv determines what mesh/particle/cam orientation/sound a pickup uses,
THIS REQUIRES MORE RESEARCH </note>

This CSV file is responsible for defining all the different pickups
from weapons to power ups that the Player can pick up.

 | Table Property           |     Data Type      | Description |
 | ------------------------ | ------------------ | ----------- |
 | Goodie Name              | <dt>String</dt>    | The internal name of the goodie used when referenced by other entities |
 | Mesh                     | <dt>String</dt>    | The .ape mesh file used to represent the goodie in the level           |
 | Pool Size                | <dt>Float </dt>    | ??? |
 | Ammo Count               | <dt>Float </dt>    | Quanity of the goodie, in terms of weapons it's # of ammo              |
 | Pickup Sound             | <dt>String</dt>    | The sound played when the Player picks up the goodie                   |
 | Respawn Sound            | <dt>String</dt>    | The sound played when the goodie respawns in the world                 |
 | Particle Name            | <dt>String</dt>    | The .fpr particle file to spawn and attach to the goodie               |
 | Respawn Particle         | <dt>String</dt>    | The .fpr particle file spawned when the goodie respawns                |
 | EUK Mesh Name            | <dt>String</dt>    | ??? |
 | Mesh Animation           | <dt>String</dt>    | The .mtx animation to play on the goodie                               |
 | Hud Scale                | <dt>Float </dt>    | How big the goodie appears on the HUD when you pick it up before disapearing |
 | Hud Scale Special EUK    | <dt>Float </dt>    | ??? |

As an example, let's say we have this line in the csv file

<note> coring charge,GWDMgrenade,8.0,5.0,5.0,SFHUammo,SFHUweapon,none,none,none,none,3.0,0.0, </note>

In this table, "coring charge" is the goodie name, followed by "GWDMgrenade", the mesh name. The table above correspsonds to each entry in order.
`;