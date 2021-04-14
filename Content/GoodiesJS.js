var text = `
# Goodies
___

Are you looking to modify the goodie drops to change the pickup sound,
particle effect, mesh or something else? If so, you want to modify 
[Goodies.csv](index.html#CSVGoodies).

<bug> This page needs to be organzied, as of now it's a dumping ground
for all the User Defined Properties / Gamedata stored within the
entities and objects of a wld. Entities are the bots and weapons
while objects are strictly props. </bug>

<Bug> The way this the tables are layed out are terrible, look to
[https://wiki.teamfortress.com/wiki/Weapons](https://wiki.teamfortress.com/wiki/Weapons)
for a better reference </Bug>

##Weapon Names

When defining weapons in goodies, you must also specify the level of the
goodie as well. For example, if you want a level 3 Spew, the goodie name
will be "spew L3".

|               Icon                     |            Weapon             |  Goodie Name  |
| -------------------------------------- | ----------------------------- | ------------- |
| ![Link](./Images/Goodies/blaster.png)  | Scatter Blaster               | blaster	 |
| ![Link](./Images/Goodies/cleaner.png)  | Cleaner 		         | cleaner	 |
| ![Link](./Images/Goodies/emp.png)      | EMP 		                 | emp grenade   |
| ![Link](./Images/Goodies/flamer.png)   | Toaster 		         | flamer	 |
| ![Link](./Images/Goodies/coring.png)   | Coring Charge 	         | coring charge |
| ![Link](./Images/Goodies/laser.png)    | Mining Laser 	         | laser	 |
| ![Link](./Images/Goodies/magma.png)    | Magma Bomb 	                 | magma bomb	 |
| ![Link](./Images/Goodies/mortar.png)   | Slingshot   	                 | mortar	 |
| ![Link](./Images/Goodies/recruiter.png)| Recruiter Grenade 	         | recruiter 	 |
| ![Link](./Images/Goodies/rivet.png)    | Rivet Gun                     | rivet 	 |
| ![Link](./Images/Goodies/rocket.png)   | Rocket Launcher               | rocket 	 |
| ![Link](./Images/Goodies/scope.png)    | Scope                         | scope 	 |
| ![Link](./Images/Goodies/spew.png)     | Spew                          | spew   	 |
| ![Link](./Images/Goodies/tether.png)   | Control Tether                | tether   	 |
| ![Link](./Images/Goodies/wrench.png)   | Wrench                        | wrench   	 |
| ![Link](./Images/Goodies/EUK.png)      | Equipment Upgrade Kit (EUK)   | EUK*          |
| ![Link](./Images/Goodies/ripper.png)   | Ripper                        | ripper  	 |

\\* To spawn a EUK upgrade, you prefix the name with EUK, and then specify the weapon
in question along with the level. If you wanted to spawn a level 3 rocket
launcher EUK, the goodie name would be "EUK rocket 3".

##Unobtainable Weapons

<Warning> These weapons cannot be dropped as goodies, however
since they are classified as goodies they are listed here
for completion. </Warning>

|               Icon                     |            Weapon             | Internal Name |
| -------------------------------------- | ----------------------------- | ------------- |
| ![Link](./Images/Goodies/hand.png)     | Empty Hand 	                 | hand 	 |
| ![Link](./Images/Goodies/chaingun.png) | Titan's Chaingun              | chaingun	 |
| ![Link](./Images/Goodies/quadlaser.png)| Predator's Laser              | quadlaser	 |
| ![Link](./Images/Goodies/staff.png)    | Elite's Staff                 | staff   	 |

##Powerups

|               Icon                      |           Power Ups           |  Goodie Name  |
| --------------------------------------- | ----------------------------- | ------------- |
| ![Link](./Images/Goodies/Jump.png)      | High Jump                     | pup_hijump	  |
| ![Link](./Images/Goodies/armor.png)     | Shield / Armor                | pup_armor	  |
| ![Link](./Images/Goodies/Speed.png)     | Speed Boost                   | pup_speed	  |
| ![Link](./Images/Goodies/Energy.png)    | Health                        | pup_energy	  |
| ![Link](./Images/Goodies/megaEnergy.png)| Mega Health                   | mega health	  |
| ![Link](./Images/Goodies/weapon.png)    | X2 Weapon Damage              | pup_weapon	  |

##Campaign Goodies
While these goodies can be spawned in Multiplayer, they serve
no purpose.

|               Icon                      |            Goodies            |  Goodie Name  |
| --------------------------------------- | ----------------------------- | ------------- |
| ![Link](./Images/Goodies/goffhead.png)  | Agent Goff's Head             | goffhead	  |
| ![Link](./Images/Goodies/gofftorso.png) | Agent Goff's Torso            | gofftorso	  |
| ![Link](./Images/Goodies/goffleg.png)   | Agent Goff's Legs             | goffleg	  |
| ![Link](./Images/Goodies/chip.png)      | Blue Door Chip                | chip	  |
| ![Link](./Images/Goodies/secretchip.png)| Secret Chip                   | secret chip	  |
| ![Link](./Images/Goodies/washer.png)    | Washer                        | washer	  |
| ![Link](./Images/Goodies/megawasher.png)| Gold Mega Washer              | megawasher	  |
| ![Link](./Images/Goodies/detpack.png)   | Det Pack                      | Det Pack	  |
| ![Link](./Images/Goodies/armservo.png)  | Arm Servo                     | arm servo*	  |

\\* You need to specify what level of arm servo you want to give
the player, it ranges from 1 - 3. To give the player a level 2
arm servo, the goodie name would be "arm servo L2".

LOOK INTO
- battery [1-6]	 Battery (make sure to include batterynum)

<bug> It would be a nice feature for the tables to include renders for each
of the different entries within the tables with the name underneath. The renders in 
question should be rendered in a consistent manner with shaders set up as they 
should appear in game. Renders should not be taken in Blender, 3ds Max, 
Maya or Garry's Mod. See https://wiki.teamfortress.com/wiki/Weapons </bug>

<bug> What happens when you name a goodie drop like the rocket launcher
as just "rocket" instead of also specifying a level like "rocket L1"?
This must be tested. </bug>

<bug> Should we put guns and grenades into their own categories? Or at
least seperate them in the same table? Something to consider. </bug>

##Bot Names
|                     Icon                      |             Bot               | 	Bottype Name 		|
| --------------------------------------------- | ----------------------------- | ----------------------------- |
| ![Link](./Images/Bots/botAAgun.png)           | Anti Air Gun                  | botAAgun			|
| ![Link](./Images/Bots/botblink.png)           | Droid Miner                   | botblink			|
| ![Link](./Images/Bots/botcorrosive.png)       | General Corrosive             | botcorrosive			|
| ![Link](./Images/Bots/boteliteguard.png)      | Elite Guard                   | boteliteguard			|
| ![Link](./Images/Bots/botgrunt.png)           | Grunt                         | botgrunt    			|
| ![Link](./Images/Bots/botjumper.png)          | Jump Trooper                  | botjumper           	    	|
| ![Link](./Images/Bots/botkrunk.png)           | Krunk                         | botkrunk           	    	|
| ![Link](./Images/Bots/botminer.png)           | Droid Miner                   | botminer           	    	|
| ![Link](./Images/Bots/botmortar.png)          | Mortar                        | botmortar           	    	|
| ![Link](./Images/Bots/botpred.png)            | Predator                      | botpred           	    	|
| ![Link](./Images/Bots/botprobe.png)           | Leech                         | botprobe           	    	|
| ![Link](./Images/Bots/botscientist.png)       | Scientst                      | botscientist        	    	|
| ![Link](./Images/Bots/botslosh.png)           | Slosh                         | botslosh           	    	|
| ![Link](./Images/Bots/botsnarq.png)           | Snarq                         | botsnarq           	    	|
| ![Link](./Images/Bots/botswarmer.png)         | Swarmer                       | botswarmer           	    	|
| ![Link](./Images/Bots/botzombie.png)          | Zombiebot                     | botzombie           	    	|
| ![Link](./Images/Bots/botzombieboss.png)      | Zombiebot King                | botzombieboss           	|
| ![Link](./Images/Bots/siteweapon.png)         | Sentry                        | SiteWeapon*           	|
| ![Link](./Images/Bots/bottian.png)            | Titan                         | bottitan           	    	|
	
\\*(configured with "weapontype": ["floorSentry" and "wallSentry"]

##Vehicle Names
|                     Icon                      |          Vehicle              | 	Bottype Name 		|
| --------------------------------------------- | ----------------------------- | ----------------------------- |
| ![Link](./Images/Vehicles/vehiclerat.png)     | Rat                           | vehiclerat           	    	|
| ![Link](./Images/Vehicles/vehiclesentinel.png)| Sentinel Tank                 | vehiclesentinel      	    	|
| ![Link](./Images/Vehicles/vehicleloader.png)  | Loader                        | vehicleloader           	|

##Gamedata
Flag	Description	Example Usage
"Name"	Gives a name to an object for use in scripts or console linking	"name": [ controltitan
"bottype"	determines what bot is going to spawn	"bottype": [botgrunt; bottitan; etc
"disguisetime"	determines time (secs) before a mil realizes you have possessed a bot	"Disguisetime:" [ 21.0
"ammo"	determines amount of ammo a weapon has. Used in "goodies"	"ammo": [ 25.0
"spawntime"	Sets a respawn timer. Used in "goodies"	"spawntime": [ 2.0
"ZombieStartFormed"	Used to determine that a Zombiebot starts in pieces, or formed.	"""ZombieStartFormed"": [
        ""On"""
"Sleeping"	Whether a placed bot starts out sleeping. True, False	"sleeping": [ True
"DataPort"	Whether a data (posession) port should be installed on the bot.  None, Close, Open	"DataPort": [ "Open"
"PossessDist"	Distance in feet a posessed bot can travel from posess point before link is severed	"PossessDist": [2000
"Shield"	Titans and grunts only: Whether they have a shield. 	"Shield": [ ON
"armorprofile"	grunts, miners, etc: relative armor resistance based on a certain bot	"armorprofile":[ Pred; Glitch; none; etc
"ArmorModifier"	exact armor resistance	"ArmorModifier":[0.9900000095367432
"ai_job"	determines ai behavior	"ai_job":[wait; patrol
"goodiebag"	determines how many items a bot has/will drop	"goodiebag":[1.0, "one"
"goodie#"	specifies the type of a numbered goodie in the goodiebag	"goodie1":[pup_energy, 1.0, 1.0, 1.0
"vlax"	specifies whether a grunt is Vlax or not	"vlax":["true"
"NPCWeapon0"	specifies an npc's(grunt, miner) main weapon	"NPCWeapon0":["Rocket"
NPCWeapon1	specifies an npc's(grunt) secondary weapon, typically grenades	"NPCWeapon1":["grenade"
"KeepLimb"	specifies which of an ai's limbs is immune to breaking	"KeepLimb":["All"; "none"
"AI_RACE"	specifies ai allegiance	"AI_RACE":["AMBIENT"; "droid";  "good"; "bad"
"AI_ATTACKWHO"	specifies who an ai will attack	"AI_ATTACKWHO":["PLAYERS; "NPC"; "ENEMY"
"dropweapon"	specifies if an ai can drop its weapon(only false seems to have an effect)	"dropweapon": ["false"
AI_Aggression	Specifies aggressiveness of Grunt	"AI_Aggression": [100
AI_Intelligence	Specifies intelligence of Grunt	"AI_Intelligence": [100
AI_Courage	Specifies couragesnous og Grunt	"AI_Courage": [100
AI_ODDSOF_IGNORING_NEARBY_GRENADES	The odds of a Grunt ignoring a player's grenade	"AI_ODDSOF_IGNORING_NEARBY_GRENADES"; [ 0
AI_PREFERSTOPANDSHOOT	Specifies if Grunt prefers to stop while shooting	"AI_PREFERSTOPANDSHOOT": ["false"

`;