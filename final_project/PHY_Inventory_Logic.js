var score = 0
		var has_axe = false
			
		function Item(_id,_name,_description,_taken) {
			this.id = _id;
			this.name = _name;
			this.description = _description;
			this.taken = _taken;
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
		var arrayItem = new Array(); //In stead of placing items in their own array space, place them in the same array location as the game Locations
				arrayItem[0] = new Item(0, "Jacket", "A denim jacket, with several rips in the sleeves, yet still provides warmth against the biting cold.", "");
				arrayItem[1] = new Item(1, "Satchel", "A leather satchel, hastily dropped, with food, water, and a change of clothes.", "");
                arrayItem[2] = new Item(2, "Crowbar", "A crowbar, spackled with rust and warn with age, yet still sturdy and useful.", "");
				arrayItem[3] = new Item(3, "Note", "You read the note addressed to you: 'Dear Peter, it's been three weeks since the disaster. I should hope you get this, although it's hard to muster any hope at all of seeing you again. We've headed east towards the unnaffected region of the country. I've with me Michelle and Thomas. I shall never forgive Roderick, as I am sure he has something to do with your disapearance before the eruption. He stayed behind, for reasons I'm unsure of. I saw him last at the Town Hall. If you get this, I would understand if you decided it best to deal with Roderick before coming after myself and the children. Much love, your wife, Anne", "");
				arrayItem[4] = new Item(4, "Axe", "An old wood-cutting axe. It is sturdy and ideal for chopping trees and other wooden objects.", "");
	
		var arrayInventory = new Array();
	
		var totalInventory = " ";
		var inventoryNumber = 0;
			
		function displayInventory() {
			updateText(arrayInventory);
		}
		//	End of Item array/prototype stuff
		
		function TakeItem() {
			switch(currentLocation) {
				case 13:
					score = score + 10
					arrayInventory[4] = arrayItem[4].name;
					has_axe = true;
					updateText("You wrap your hand against the cold, sturdy, woodcutting axe.");
					break;
				case 8:
					score = score + 10
					arrayInventory[1] = arrayItem[1].name;
					updateText("You sling the satchel around your shoulders.");
					break;
				case 9:
					score = score + 10
					arrayInventory[0] = arrayItem[0].name;
					updateText("You pull the old denim jacket around your body, instantly feeling warm relief from the biting cold.");
					break;
				case 11:
					score = score + 10
					arrayInventory[3] = arrayItem[3].name;
					updateText("You read the note addressed to you: 'Dear Peter, it's been three weeks since the disaster. I should hope you get this, although it's hard to muster any hope at all of seeing you again. We've headed east towards the unnaffected region of the country. I've with me Michelle and Thomas. I shall never forgive Roderick, as I am sure he has something to do with your disapearance before the eruption. He stayed behind, for reasons I'm unsure of. I saw him last at the Church, where they set up the makeshift morgue. If you get this, I would understand if you decided it best to deal with Roderick before coming after myself and the children. Much love, your wife, Anne");
					break;
				default:
					updateText("There is nothing to take");
			}
		}
		
		function attack() {
			if (has_axe == true) { 
			updateText("You raise your old axe and bear down upon the old villain, taking your righteous revenge... With Roderick no more, you can man make an attempt to find your family amongst the harsh wilderness that now surrounds you.");
			updateText("-------------------------YOU WIN--------------------------")
			} else {
				updateText("You have nothing to attack with.");
			}
		}
		
		function get_score() {
			updateText(score)
		}