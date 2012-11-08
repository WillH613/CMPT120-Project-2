            var score=0
		
			var visitedNorth = true
			var visitedSouth = true
			var visitedEast = true
			var visitedWest = true
			
			var jacket = false; // yeah dont forget to do these either
			var crowbar = false;
			var satchel = false; 
			
			var currentLocation = 0
			
			function Location0(){ 
				msg="You find yourself back at the old wooden shack from wence you set out.";
				updateText;
			}
			function Location1(){ 
				msg="You set out and decide to head north up the old dirt road. In the distance you can make out what seems to be an old road sign, standing at a crooked angle."
				updateText;
			}
			function Location2(){
				msg="You decide to follow the dirt road to the south. You travel for what seems like ages, finding little of value.";
				updateText;
			}
			function Location3(){ 
				msg="Heading west, you cautiously enter the large pine forest. The trees all stand close to 100 feet in heigh and many feet in diameter. ";
				updateText;
			}
			function Location4(){ 
				msg="You step out into the dead brush, sinking sinking into the weeds and snow. There is no sign of anything but hills and snow.";
				updateText;
			}
			function Location5(){ 
				msg="As you continue to walk along the road, the trail becomes muddy and impassable. The wind chill begins to pick up and realize you shuold turn back.";
				updateText;
			}
			function Location6(){ 
				msg="You approach the sign, your head buckled down against the biting wind as you struggle to read the sign, covered in frost and snow. You reach out and limply brush away the snow, reavealing it's message: Shelby, NE. Pop: 145";
				updateText;
			}
			function Location7(){ 
				msg="You continue your treck northwards as the biting wind begins to sting against your exposed arms and face. The edge of a small hamlet comes into view as you come over a hill, lying against the backdrop of snow and pines."
				updateText;
			}
			function Location8(){ 
				msg="After few more minutes of walking, you come near the small village in the middle of the eery plane of snow and pines. No souls are in sight but a small gas station lays just up a small path to the east."
				updateText;
			}
			function Location9(){
				msg="You hike up the path and enter the old pumping station, which appears to be in ruinous condition. You enter and notice the location seems to have been stripped bare. A crowbar lies on the ground and an old jacket on a coat rack.";
				updateText;
			}
			function Location10(){ 
				msg="From the gas station, you make the decision to head into the old town. As you walk between the buildings, you notice a coating of snow and ash on the buildings and the floor. Just west you notice a public noticeboard with multiple notes taped to it."
				updateText;
			}
			
			function displayNewLocation() { //FIX THSI SHIT NIGGA 
				switch (currentLocation) {
				case 0: location0(); break;
				case 1: location1(); break;
				case 2: location2(); break;
				case 3: location3(); break;
				case 4: location4(); break;
				case 5: location5(); break;
				case 6: location6(); break;
				case 7: location7(); break;
				case 8: location8(); break;
				case 9: location9(); break;
				case 10: location10(); break;
				default: 
				updateText("Invalid Location")
				}
			}

			function button_North() {
				switch (currentLocation)
				{
				case 5: 
					Location2();
					currentLocation=2;
					updateText(msg);
					break;
				case 2: 
					Location0();
					currentLocation=0;
					updateText(msg);
					break;
				case 0: 
					Location1();
					currentLocation=1;
					updateText(msg);
					break;
				case 1: 
					Location6(); 
					currentLocation=6;
				    updateText(msg);
					break;
				case 6: 
					Location7();
					currentLocation=7;
					updateText(msg);					
					break;
				case 7:
					Location8(); 
					currentLocation=8;
					updateText(msg);					
					break;
				case 9:
					Location10();
					currentLocation=10;
					updateText(msg);
				default: 
					msg: "Going this way seems unwise.";
					updateText(msg);
				}
			}
			
			function button_South() { 
				switch (currentLocation)
				{
				case 8: 
					Location7();
					currentLocation=7;
					updateText(msg);
					break;
				case 7: 
					Location6();
					currentLocation=6;
					updateText(msg);
					break;
				case 6: 
					Location1();
					currentLocation=1;
					updateText(msg);
					break;
				case 1: 
					Location0(); 
					currentLocation=0;
					updateText(msg);
					break;
				case 0: 
					Location2();
					currentLocation=2;
					updateText(msg);					
					break;
				case 2:
					Location5(); 
					currentLocation=5;
					updateText(msg);					
					break;
				default: 
					msg: "Going this way seems unwise.";
					updateText(msg);
				}
			}
			
			function button_East() { 
				switch (currentLocation)
				{
				case 3: 
					Location0();
					currentLocation=0;
					updateText(msg);
					break;
				case 0: 
					Location4();
					currentLocation=4;
					updateText(msg);
					break;
				case 8: 
					Location9();
					currentLocation=9;
					updateText(msg);
					break;
				default: 
					msg: "Going this way seems unwise.";
					updateText(msg);
				}
			}
			
			function button_West() { 
				switch (currentLocation)
				{
				case 4: 
					Location0();
					currentLocation=0;
					updateText(msg);
					break;
				case 0: 
					Location3();
					currentLocation=3;
					updateText(msg);
					break;
				case 9: 
					Location8();
					currentLocation=8;
					updateText(msg);
					break;
				default: 
					msg: "Going this way seems unwise.";
					updateText(msg);
				}
			}
			
			
			
			
			
		/*	function updateScore() {
			
				var visited_1 = true
				var visited_2 = true
				var visited_3 = true
				var visited_4 = true
				var visited_5 = true
				var visited_6 = true
			
				/* switch(score) //THIS IS THE LEAST OF MY CONCERN RIGHT NOW
				{
				case loc_1 
				score = score+5
				visited_1 = false 
					break;
				case loc_2
				score = score+5
				visited_2 = false
					break;
				case loc_3
				score = score+5
				visited_3 = false
					break;
				case loc_4
				score = score+5
				visited_4 = false
					break;
				case loc_5
				score = score+5
				visited_5 = false
					break;
				case loc_6
				score = score+5
				visited_6 = false
					break;
				} */
			
			function get_score(){
				alert(score)
			}
		
			/*function PutItemInInventory(item) {
				if (checkEmpty(inv_a)) {
					inv_a = item;
				} else if (inv_b===" ") 
					inv_b = item;
				} 
				
				
			function listInventory() {
				var div = ", ";
				var invList = "";
				if (inv_a !== "") {
					invList = invList + inv_jacket + div //"Item, "
				} 
				if (inv_b !== "") {
					invList = invList + inv_ crowbar + div //"Item, other item, " 
				}
			}*/
		