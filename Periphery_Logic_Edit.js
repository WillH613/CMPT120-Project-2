			var NORTH = 0; //ASK DAN ABOUT THESE ON FRIDAY. 
			var SOUTH = 1; //QUESTION: How do you assign directions an integer value for a matrix while a location also will hold that space in membory?
			var EAST = 2;
			var WEST = 3;
			
			var currentLocation = 0;
			
			var nav = [        //N, S,  e, w  
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
						  /*10*/[10, 9, -1, -1],
						  /*11*/[-1, -1, -1, -1]
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
				
			function Location(_id,_name,_description,_item) {
				this.id = _id;
				this.name = _name;
				this.description = _description;
				this.item = _item;
				
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
			
			function Initialize() { //QUESTION: What is the point of having this function again?
				 Locations[0] = new Location(0, "Start", "You find yourself back at the old wooden shack from wence you awoke. It is old, decrepit and appears to be condemned. It's windows are all broken and its roof appears to be covered in a dusting of snow.", "");
				 Locations[1] = new Location(1, "NorthRoad", "You decide to follow the dirt road to the south. You travel for what seems like ages, finding little of value.", "");
				 Locations[2] = new Location(2, "SouthRoad", "", "");
				 Locations[3] = new Location(3, "Woods", "Heading west, you cautiously enter the large pine forest. The trees all stand close to 100 feet in heigh and many feet in diameter. ", "");
				 Locations[4] = new Location(4, "Weeds", "You step out into the dead brush, sinking sinking into the weeds and snow. There is no sign of anything but hills and snow.", "");
				 Locations[5] = new Location(5, "SouthRoad2", "As you continue to walk along the road, the trail becomes muddy and impassable. The wind chill begins to pick up and realize you shuold turn back.", "");
				 Locations[6] = new Location(6, "RoadSign", "You approach the sign, your head buckled down against the biting wind as you struggle to read the sign, covered in frost and snow. You reach out and limply brush away the snow, reavealing it's message: Shelby, NE. Pop: 145", "");
				 Locations[7] = new Location(7, "VillageDistant", "You continue your treck northwards as the biting wind begins to sting against your exposed arms and face. The edge of a small hamlet comes into view as you come over a hill, lying against the backdrop of snow and pines.", "");
				 Locations[8] = new Location(8, "VillageEdge", "After few more minutes of walking, you come near the small village in the middle of the eery plane of snow and pines. No souls are in sight but a small gas station lays just up a small path to the east. You notice a satchel lying nearby on the ground.", "satchel");
				 Locations[9] = new Location(9, "PumpingStation", "You hike up the path and enter the old pumping station, which appears to be in ruinous condition. You enter and notice the location seems to have been stripped bare. There is an old jacket on a coat rack.", "jacket");
				 Locations[10] = new Location(10, "InnaVillage", "From the gas station, you make the decision to head into the old town. As you walk between the buildings, you notice a coating of snow and ash on the buildings and the ground. You see an abandoned car with a crowbar next to it. Just west you notice a public noticeboard with multiple notes taped to it.", "crowbar");
				 Locations[11] = new Location(11, "MessageBoard", "You approach the message board and begin to read the various notes and warnings that are hung. Many allude to a recent disaster in which you have no memory. One note catches your eye. It appears to be addressed to you.", "note");
			
	
					updateText(Locations[0].description);
		}
			
			// --------------- END NAVIGATION --------------- //
			
			//----------------Do Item Stuff Below this --------- //
			
			
		var jacketTaken = true //seems contradictory, but this was the only way it worked with boolean. DONT GET CONFUSED AND CHANGE THIS BECAUSE IT LOOKS WRONG
		var crowbarTaken = true
		var satchelTaken = true 
		var noteTaken = true			
			
		function Item(_id,_name,_description) {
			this.id = _id;
			this.name = _name;
			this.description = _description;
			this.toString = function() {
				var retVal = "";
				retVal = "[Item]" 							+ "\n" +
						"id:" 			+ this.id 			+ "\n" +
						"name:"	    + this.name 		+ "\n" +
						"description:" + this.description  + "\n";
				return retVal;
			}	
		}
		//Item Array/Prototype Stuff 
		var arrayItem = new Array();
				arrayItem[0] = new Item(0, "Jacket", "A denim jacket, with several rips in the sleeves, yet still provides warmth against the biting cold.");
				arrayItem[1] = new Item(1, "Satchel", "A leather satchel, hastily dropped, with food, water, and a change of clothes.");
                arrayItem[2] = new Item(2, "Crowbar", "A crowbar, spackled with rust and warn with age, yet still sturdy and useful.");
				arrayItem[3] = new Item(3, "Note", "You read the note addressed to you: 'Dear Peter, it's been three weeks since the disaster. I should hope you get this, although it's hard to muster any hope at all of seeing you again. We've headed east towards the unnaffected region of the country. I've with me Michelle and Thomas. I shall never forgive Roderick, as I am sure he has something to do with your disapearance before the eruption. He stayed behind, in Shelby for reasons I'm unsure of. If you get this, I would understand if you decided it best to deal with Roderick before coming after myself and the children. Much love, your wife, Anne");

	
		var arrayInventory = new Array();
	
		var totalInventory = " ";
		var inventoryNumber = 0;
			
		function displayInventory() {
			updateText(arrayInventory);
		}
		//	End of Item array/prototype stuff
		
		function TakeItem() {
			switch(currentLocation) {
				case 9:
					arrayInventory[0] = arrayItem[0].name;
					updateText("You pull the jacket on over your body, instantly shielding yourself, if only a little, from the biting cold. ");
					jacketTaken = false;
					break;
				case 7:
					arrayInventory[1] = arrayItem[1].name;
					updateText("You sling the satchel around your shoulders.");
					satchelTaken = false;
					break;
				case 8:
					arrayInventory[2] = arrayItem[2].name;
					updateText("You reach down and pick up the old crowbar.");
					crowbarTaken = false;
					break;
				case 10:
					arrayInventory[3] = arrayItem[3].name;
					updateText("You pick up a note amongst the dozens that seems to be addressed to you.");
					noteTaken = false;
					break;
				default:
					updateText("There is nothing to take");
					break;
			}
		}
				
//welp. item stuff finally works. DONT ADD ANY ITEM RELATED SHIT AFTER THIS. YOU HAVE ENOUGH PROBLEMS FIXING AND INTERPRETING YOUR OWN CODE AS IS
		
