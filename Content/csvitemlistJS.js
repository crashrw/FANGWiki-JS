var text = `
#Itemlist
___

The itemlist.csv file controls the display functions of the player's inventory. It has a wide variety of functions, which are layed out in the table below

 | Table Property           |     Data Type         |                                         Description                                                 |
 | ------------------------ | --------------------- | --------------------------------------------------------------------------------------------------- |
 | Code Name                | <dt>String</dt>       | Unique identifier used by game to access the entry                                                  |
 | Access Name				      | <dt>String</dt>	      | The internal name of the item as referenced by game code                                            |
 | Display Name				      | <dt>Wide String</dt>  | The item's name as shown in the HUD/Inventory                                                       |
 | Long Description         | <dt>Wide String</dt>  | The items description as shown in the HUD/Inventory                                                 |
 | Upgrade Text             | <dt>Wide String</dt>  | Whether or not "Upgradeable" will show under the item in the HUD                                    |
 | Upgrade Weapon           | <dt>String</dt>       | Tag of weapon this gun will upgrade to                                                              |
 | Tga File           	    | <dt>String</dt>       | Tag of the texture the weapon icon is found on                                                      |
 | Mesh File                | <dt>String</dt>       | Tag of the mesh this item will use			                                                            |
 | S1 Left Coord			      | <dt>Float</dt>		    | Texture coordinate left										                                                          |
 | T1 Top Coord				      | <dt>Float</dt>		    | Texture coordinate top										                                                          |
 | S2 Right Coord			      | <dt>Float</dt>		    | Texture coordinate right										                                                        |
 | T2 Bottom Coord 			    | <dt>Float</dt>		    | Texture coordinate bottom										                                                        |
 | Inventory X Position	  	| <dt>Int</dt>		      | X Position (in 3d space) of item in inventory screen			                                          |
 | Inventory Y Position	  	| <dt>Int</dt>		      | Y position (in 3d space) of item in inventory screen			                                          |
 | Current EUK Level	    	| <dt>Int</dt> 		      | Current EUK Level (0 if not applicable)						                                                  |
 | Maximum EUK Level	    	| <dt>Int</dt>		      | Max EUK Level (0 if not applicable)							                                                    |
 | Primary Weapon Flag		  | <dt>Int</dt>		      | Is this a primary weapon? (1=yes; 0=no)						                                                  |
 | Secondary Weapon Flag	  | <dt>Int</dt>		      | Is this a secondary weapon? (1=yes; 0=no)					                                                  |
 | Item ID					        | <dt>Int</dt>		      | >31 if not weapon, <=31 if a weapon							                                                    |
 | Z Offset					        | <dt>Float</dt>		    | Translate the objects mesh verticaly by this amount to have the origin through the axis of rotation |
 | Scale Factor				      | <dt>Float</dt>		    | Scale mesh by this factor when displaying						                                                |
 | Pitch Angle				      | <dt>Float</dt>		    | Pitch item by this amount after y rotation					                                                |
 | Poster Mesh				      | <dt>Int</dt>		      | Whether or not this item is camera facing						                                                |
 
 
 Example Entry (with comments)

  <note> Laser L1,Mining Laser, # Code Name, Access Name</br>
,|Mining Laser, # Display Name</br>
,|An industrial 4MW geologic laser modified to blow apart Mil bot chassis., # Long Description</br>
,|x, # Upgrade Text</br>
,Laser L2, # Upgrade weapon</br>  
,tfh2wpnsp01, # TGA File</br>  
,gwdmwpnp101, # Mesh file</br>  
,0.25, # S1 - Texture coordinate; left.</br>  
,0, # T1 - Texture coordinate; top.</br>  
,0.5, # S2 - Texture coordinate; right.</br>  
,0.25, # T2 - Texture coordinate; bottom.</br>  
,1, # X position of item in inventory screen (0 on left).</br>  
,0, # Y position of item in inventory screen (0 on top).</br>  
,1, # Current EUK level (0 if not applicable)</br>  
,3, # Max EUK level (0 if not applicable)</br>  
,1, # Primary weapon? (1 = yes; 0 = no)</br>  
,0, # Secondary weapon? (1 = yes; 0 = no)</br>  
,1," # Item ID: > 31 if not weapon, <= 31if a weapon"</br>  
,0, # Z Offset: Translate this object's mesh vertically (up is +) by this amount in order to have the origin through the axis of rotation.</br>  
,1, # Scale mesh by this factor when displaying.</br>  
,0, # Pitch item by this amount after y rotation.</br>  
,0," # Poster Mesh ( 0 - No, 1 - Yes )"</note>
`;