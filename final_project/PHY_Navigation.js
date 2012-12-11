
			var NORTH = 0;  
			var SOUTH = 1; 
			var EAST = 2;
			var WEST = 3;
			var currentLocation = 0;
			var nav = [        //N, S,  E, W  
						 /*0*/  [1, 2, 3, 4], // QUESTION: Can't seem to find anything about the proper syntax in regards to perenthesis around 2D arrays. Ask Dan on Friday
						  /*1*/	[6, 0, -1, -1],
						  /*2*/	[0, 5, -1, -1],
						  /*3*/	[-1, -1, -1, 0],
						  /*4*/	[-1, -1, 0, -1],
						  /*5*/	[2, -1, -1, -1],
						  /*6*/	[7, 1, -1, -1],
						  /*7*/	[8, 6, -1, -1],
						  /*8*/	[-1, 7, -1, 9],
						  /*9*/ [10, -1, 8, -1],
						  /*10*/[-1, 9, -1, 11],
						  /*11*/[12, -1, 10, -1],
						  /*12*/[-1, -1, 14, 13],
						  /*13*/[-1, -1, 12, -1],
						  /*14*/[-1, -1, 15, 12],
						  /*15*/[-1, -1, -1, 14]
						] 
			
			function displayArray(array2display) {			      //This all seems right to me but I don't trust myself
				for (var i=0; i < array2display.length; i++) {
					updateText(i + ":" + array2display[i]);
				}
			}	
			
			function move(direction) { 
				var moveCount = moveCount + 1; 
			
				var newLocation = nav[currentLocation][direction] 
				if (newLocation !== -1) {
				currentLocation = newLocation;
				displayNewLocation();
			} else {
				updateText("You cannot go that way.");
				}
			} 
			
			function displayNewLocation() {
				updateText(Locations[currentLocation].description);
			}
				
			function Location(_id,_name,_description,_item,_required) {
				this.id = _id;
				this.name = _name;
				this.description = _description;
				this.item = _item;
				this.required = _required;
				
				this.toString = function() {
					var retVal = "";
					retVal = "[Item]" 							+ "\n" +
							"id:" 			+ this.id 			+ "\n" +
							"name:"	    + this.name 		+ "\n" +
							"description:" + this.description  + "\n" +
							"item:" 		+ this.item 		+ "\n";
					return retVal;
				}	
			}		
				
			var Locations = new Array();
			
			function initialize() { 
				 Locations[0] = new Location(0, "Start", "You find yourself back at the old wooden shack from wence you awoke. It is old, decrepit and appears to be condemned. It's windows are all broken and its roof appears to be covered in a dusting of snow.", "");
				 Locations[1] = new Location(1, "NorthRoad", "You set off north and follow the dirt road for a long time until what seems to be a road sign comes into view in the distance.", "");
				 Locations[2] = new Location(2, "SouthRoad", "You follow the trail south but find little of value and your legs begin to get weary.", "");
				 Locations[3] = new Location(3, "Woods", "Heading west, you cautiously enter the large pine forest. The trees all stand close to 100 feet in heigh and many feet in diameter. ", "");
				 Locations[4] = new Location(4, "Weeds", "You step out into the dead brush, sinking sinking into the weeds and snow. There is no sign of anything but hills and snow.", "");
				 Locations[5] = new Location(5, "SouthRoad2", "As you continue to walk along the road, the trail becomes muddy and impassable. The wind chill begins to pick up and realize you shuold turn back.", "");
				 Locations[6] = new Location(6, "RoadSign", "You approach the sign, your head buckled down against the biting wind as you struggle to read the sign, covered in frost and snow. You reach out and limply brush away the snow, reavealing it's message: Shelby, NE. Pop: 145", "");
				 Locations[7] = new Location(7, "VillageDistant", "You continue your treck northwards as the biting wind begins to sting against your exposed arms and face. The edge of a small hamlet comes into view as you come over a hill, lying against the backdrop of snow and pines.", "");
				 Locations[8] = new Location(8, "VillageEdge", "After few more minutes of walking, you come near the small village in the middle of the eery plane of snow and pines. No souls are in sight but a small gas station lays just up a small path to the west. You notice a satchel lying nearby on the ground.", "satchel");
				 Locations[9] = new Location(9, "PumpingStation", "You hike up the path and enter the old pumping station, which appears to be in ruinous condition. You enter and notice the location seems to have been stripped bare. There is an old jacket on a coat rack.", "jacket");
				 Locations[10] = new Location(10, "InnaVillage", "From the gas station, you make the decision to head into the old town. As you walk between the buildings, you notice a coating of snow and ash on the buildings. Just west you notice a public noticeboard with multiple notes taped to it.", "crowbar");
				 Locations[11] = new Location(11, "MessageBoard", "You approach the message board and begin to read the various notes and warnings that are hung. Many allude to a recent disaster in which you have no memory. One note catches your eye. It appears to be addressed to you.", "note");
				 Locations[12] = new Location(12, "Streets", "You exhale, releasing a transparent cloud of condensation	as you head up the street to the north, deeper into the village, which appears more and more to be in ruinous condition. As you walk, the Church mentioned in the note comes into view, down the road to the east. Just across the street to the west there is a hardware store.", "");
				 Locations[13] = new Location(13, "Hardware Store", "You test the door, but it is locked so you decide to go through the broken glass display in front. You look around and see various items, although the store appears to have been looted. However, an axe lies across a nearby display.", "axe");
				 Locations[14] = new Location(14, "Church", "Nervously you trudge up the stairs, but only to realize the door to the church is barricaded shut. You hear a muffled voice on the other side of the door. It sounds strangely familiar to you and leaves you unsettled. You need something to get through this door.", "");
				 Locations[15] = new Location(15, "InsideChurch", "You step through the broken down door. There appears a an older man, in a hazmat suit standing behind a desk. He faces away from you, distracted by his work. In spite of your amnesia, you instantly recognize the man as the one who tried to murder you. There appears to be many body bags nearby along with makeshift operating tables. You realize what you must do, while his back is turned... ", "");
			
	
				updateText(Locations[0].description);
		}