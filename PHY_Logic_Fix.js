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
				moveCount = moveCount + 1; 
			
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
				arrayItem[0] = jacket;
				arrayItem[1] = satchel;
				arrayItem[2] = crowbar;
				arrayItem[3] = note;
	
		var arrayInventory = new Array();
	
		var totalInventory = " ";
		var inventoryNumber = 0;
			
		var jacket = new Item(0, "Jacket", "A denim jacket, with several rips in the sleeves, yet still provides warmth against the biting cold.");
		var satchel = new Item(1, "Satchel", "A leather satchel, hastily dropped, with food, water, and a change of clothes.");
		var crowbar = new Item(2, "Crowbar", "A crowbar, spackled with rust and warn with age, yet still sturdy and useful.");
		var note = new Item(3, "Note", "You read the note addressed to you: 'Dear Peter, it's been three weeks since the disaster. I should hope you get this, although it's hard to muster any hope at all of seeing you again. We've headed east towards the unnaffected region of the country. I've with me Michelle and Thomas. I shall never forgive Roderick, as I am sure he has something to do with your disapearance before the eruption. He stayed behind, in Shelby for reasons I'm unsure of. If you get this, I would understand if you decided it best to deal with Roderick before coming after myself and the children. Much love, your wife, Anne");
		
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