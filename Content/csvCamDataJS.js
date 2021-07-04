var text = `
#B\\_Cam_Data
___

"B\\_Cam_Data.csv" controls settings of the in game camera. It's set per bot (order is unknown at the moment). Settings are inherited based on which bot you spawned in as. 

| Table Property           |    Data Type      |            Description                 |
| ------------------------ | ----------------- | -------------------------------------- |
| HalfFov				   | <dt>Float</dt>	   | FOV of the bot when in campaign mode   |
| HalfFovMP				   | <dt>Float</dt>	   | FOV of the bot when in multiplayer mode|
| TargetPOS_MS.x		   | <dt>Float</dt>	   | Camera position in 3d space X 			|
| TargetPOS_MS.y		   | <dt>Float</dt>	   | Camera position in 3d space Y          |
| TargetPOS_MS.z 		   | <dt>Float</dt>	   | Camera position in 3d space Z		    |
| POS_MS.x				   | <dt>Float</dt>	   | ???									|
| POS_MS.y				   | <dt>Float</dt>	   | ???								    |
| POS_MS.z 				   | <dt>Float</dt>	   | ???									|
| PosScale_MP			   | <dt>Float</dt>	   | ???									|
| LookupYOffset			   | <dt>Float</dt>	   | ???									|
| ClosestDistToTarget	   | <dt>Float</dt>	   | ???									|

An example of an entry in this table is below

<note>
,33.0,33.0,1.0,4.2,0.5,1.0,5.0,-8.5,1.0,1.35,-0.75</note>
While the order is unknown, the first entry in this file is for Glitch. Since possessed bots inherit the starting bots FOV, it's sufficient enough to modify his settings.  
It's unknown if this behavior is intended.

`;