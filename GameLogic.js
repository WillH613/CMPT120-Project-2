			
			var jacket = false; // yeah dont forget to do these either
			var crowbar = false;
			var satchel = false; 
			
			var currentLocation = 0
			
			function Help(){ 
				msg="Enter N, S, E, W, n, s , e, w to proceed. Enter Take to take an item."
				updateText;
			}
			
			function Location0(){ 
				msg="You find yourself back at the old wooden shack from wence you awoke. It is old, decrepit and appears to be condemned. It's windows are all broken and its roof appears to be covered in a dusting of snow.";
				var jacket = true;
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
			
			function displayNewLocation() {
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
					document.getElementById("southbutton").disabled = false; 
					document.getElementById("westbutton").disabled = true;
					document.getElementById("eastbutton").disabled = true;
					document.getElementById("northbutton").disabled = false;
					Location2();
					currentLocation=2;
					updateText(msg);
					break;
				case 2: 
					document.getElementById("southbutton").disabled = false; 
					document.getElementById("westbutton").disabled = false;
					document.getElementById("eastbutton").disabled = false;
					document.getElementById("northbutton").disabled = false;				
					Location0();
					currentLocation=0;
					updateText(msg);
					break;
				case 0: 
				    document.getElementById("southbutton").disabled = false; 
					document.getElementById("westbutton").disabled = true;
					document.getElementById("eastbutton").disabled = true;
					document.getElementById("northbutton").disabled = false;
					Location1();
					currentLocation=1;
					updateText(msg);
					break;
				case 1: 
					document.getElementById("southbutton").disabled = false; 
					document.getElementById("westbutton").disabled = true;
					document.getElementById("eastbutton").disabled = true;
					document.getElementById("northbutton").disabled = false;					
					Location6(); 
					currentLocation=6;
				    updateText(msg);
					break;
				case 6: 
					document.getElementById("southbutton").disabled = false; 
					document.getElementById("westbutton").disabled = true;
					document.getElementById("eastbutton").disabled = true;
					document.getElementById("northbutton").disabled = false;
					Location7();
					currentLocation=7;
					updateText(msg);					
					break;
				case 7:
					document.getElementById("southbutton").disabled = false; 
					document.getElementById("westbutton").disabled = true;
					document.getElementById("eastbutton").disabled = false;
					document.getElementById("northbutton").disabled = true;					
					Location8(); 
					currentLocation=8;
					updateText(msg);					
					break;
				case 9:
					document.getElementById("southbutton").disabled = false; 
					document.getElementById("westbutton").disabled = true;
					document.getElementById("eastbutton").disabled = true;
					document.getElementById("northbutton").disabled = true;					
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
					document.getElementById("southbutton").disabled = false; 
					document.getElementById("westbutton").disabled = true;
					document.getElementById("eastbutton").disabled = true;
					document.getElementById("northbutton").disabled = false;
					Location7();
					currentLocation=7;
					updateText(msg);
					break;
				case 7: 
					document.getElementById("southbutton").disabled = false; 
					document.getElementById("westbutton").disabled = true;
					document.getElementById("eastbutton").disabled = true;
					document.getElementById("northbutton").disabled = false;					
					Location6();
					currentLocation=6;
					updateText(msg);
					break;
				case 6: 
					document.getElementById("southbutton").disabled = false; 
					document.getElementById("westbutton").disabled = true;
					document.getElementById("eastbutton").disabled = true;
					document.getElementById("northbutton").disabled = false;					
					Location1();
					currentLocation=1;
					updateText(msg);
					break;
				case 1: 
					document.getElementById("southbutton").disabled = false; 
					document.getElementById("westbutton").disabled = false;
					document.getElementById("eastbutton").disabled = false;
					document.getElementById("northbutton").disabled = false;					
					Location0(); 
					currentLocation=0;
					updateText(msg);
					break;
				case 0: 
					document.getElementById("southbutton").disabled = false; 
					document.getElementById("westbutton").disabled = true;
					document.getElementById("eastbutton").disabled = true;
					document.getElementById("northbutton").disabled = false;				
					Location2();
					currentLocation=2;
					updateText(msg);					
					break;
				case 2:
					document.getElementById("southbutton").disabled = true; 
					document.getElementById("westbutton").disabled = true;
					document.getElementById("eastbutton").disabled = true;
					document.getElementById("northbutton").disabled = false;
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
					document.getElementById("southbutton").disabled = false; 
					document.getElementById("westbutton").disabled = false;
					document.getElementById("eastbutton").disabled = false;
					document.getElementById("northbutton").disabled = false;					
					Location0();
					currentLocation=0;
					updateText(msg);
					break;
				case 0: 
					document.getElementById("southbutton").disabled = true; 
					document.getElementById("westbutton").disabled = false;
					document.getElementById("eastbutton").disabled = true;
					document.getElementById("northbutton").disabled = true;				
					Location4();
					currentLocation=4;
					updateText(msg);
					break;
				case 8: 
					document.getElementById("southbutton").disabled = true ; 
					document.getElementById("westbutton").disabled = false;
					document.getElementById("eastbutton").disabled = true;
					document.getElementById("northbutton").disabled = false;					
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
					document.getElementById("southbutton").disabled = false; 
					document.getElementById("westbutton").disabled = false;
					document.getElementById("eastbutton").disabled = false;
					document.getElementById("northbutton").disabled = false;				
					Location0();
					currentLocation=0;
					updateText(msg);
					break;
				case 0: 
					document.getElementById("southbutton").disabled = true; 
					document.getElementById("westbutton").disabled = true;
					document.getElementById("eastbutton").disabled = false;
					document.getElementById("northbutton").disabled = true;
					Location3();
					currentLocation=3;
					updateText(msg);
					break;
				case 9: 
					document.getElementById("southbutton").disabled = false; 
					document.getElementById("westbutton").disabled = true;
					document.getElementById("eastbutton").disabled = false;
					document.getElementById("northbutton").disabled = true;
					Location8();
					currentLocation=8;
					updateText(msg);
					break;
				default: 
					msg: "Going this way seems unwise.";
					updateText(msg);
				}
			}
			
			function get_score(){
				alert(score)
			}

			function listInventory() {
				var invList = "";
				if (jacket = true) {
					invList = invList + "Jacket";
				} 
			}
			
			/*function listInventory() {
				var div = ", ";
				var invList = "";
				if (jacket !== "") {
					invList = invList + jacket + div //"Item, "
				} 
				if (crowbar !== "") {
					invList = invList + crowbar + div //"Item, other item, " 
				}
			}*/
		
