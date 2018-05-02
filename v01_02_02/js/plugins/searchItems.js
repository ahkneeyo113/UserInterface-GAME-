/*:
 * @plugindesc Plugin that allows you to search your inventory.
 * @author Poryg
 * 
 * @help
 * Just make sure you update regals, begins and sizes properly.
 * And learn some javascript, internet tutorials won't help :P
 */
searchInventory = function (name) {
	var alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	var regals = ["RegalA", "RegalB", "RegalC", "RegalD", "RegalE", "RegalF", "RegalG", "RegalH", "RegalI", "RegalJ", "RegalK", "RegalL"];
	var inRegals = [];
	var nameStr = "";

	var begins = {150:80, 300: 150}
	var sizes = {150:300, 300: 80}

	var itemPref = name.toString();
	itemPref = itemPref [0] + itemPref [1] + itemPref[2];
	var tempVar = begins[itemPref] + sizes[itemPref] + 1;
	for (var i = begins[itemPref]; i < tempVar; i++){
		if ($dataItems[i]) {
			for (var j = 0; j<7; j++) {
			nameStr += $dataItems[i].name;
			}
		}
		
		if (nameStr == name) {
			for (var k = 0; j<regals.length; k++) {
				if ($gameParty.inventories[regals[i]].items[i]) {
					inRegals.push (alph[k]);
				}
			}
			messageStr = "Item n°" + name + " is in regals:\n";
			for (var l = 0; l < inRegals.length; l++){
				if (l < inRegals.length - 1) {
					inRegals[l] = inRegals[l].concat (inRegals[l], ",")
					messageStr = messageStr.concat (messageStr, inRegals[l])
				}else {
					inRegals[l] = inRegals[l].concat (inRegals[l], ".")
					messageStr = messageStr.concat (messageStr, inRegals[l])
				}
			}
			$gameMessage.add (messageStr);
			return inRegals;
		}
	}
	if (inRegals.length == 0) {
		$gameMessage.add ("Item n°" + name + " is nor present.");
	}
}