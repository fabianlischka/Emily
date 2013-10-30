window.onload = function () {
	var printer = (function () {
		var div = document.getElementById('printed');
		var text = [
			"      111111111111111111111111\n",
			"      11                    11              #######         #######\n",
			"      11  1111111111111111  11            ###########     ###########\n",
			"      11  0011001100111111  11           #############  ##############\n",
			"      11  1111111111111111  11           #############################\n",
			"      11  1100001100001111  11            ###########################\n",
			"      11  1111111111111111  11             #########################\n",
			"      11  1111111111111111  11              #######################\n",
			"      11                    11                ###################\n",
			"      111111111111111111111111                 #################\n",
			"              11111111                           #############\n",
			"        11111111111111111111                       #########\n",
			"      111111  11  11  11  1111                       #####\n",
			"      1111  11  11  11  111111                         #\n",
			"      111111111111111111111111\n",
			"\n",
			"\n",
			"===================/|\n",
			"``\\===============\\\\|\n",
			"   ===|            ||      /|\n",
			"   ===|            ''     /=|\n",
			"   ===|                  /==|\n",
			"   ===|        ||     __/===|=====    /=========\\   =========     =========\n",
			"   ===|_______//|     ============   /===      \\=|   \\====/        \\====/\n",
			"   ===========\\\\|        ===|        |==        \\|    \\===\\         \\==/\n",
			"   ===|        ||        ===|        \\====             \\===\\         =/\n",
			"   ===|                  ===|          \\====            \\===\\       =/\n",
			"   ===|                  ===|             =====          \\===\\     =/\n",
			"   ===|            ..    ===|                ====\\        \\===\\   =/\n",
			"   ===|            ||    |===\\   ,,  |\\        ===|        \\===\\ =/\n",
			",,/===============//|     \\======/   |=\\       ===/         \\====/\n",
			"===================\\|       ===/      \\==========/           \\==/\n",
			"                                                              //\n",
			"                                                   |\\        //\n",
			"                                                   |\\\\______//\n",
			"                                                    \\=======/\n"
		].join('').split('').reverse();
		for (var i in text) {
			switch (text[i]) {
				case ' ':
					text[i] = text[i].replace(' ', '&nbsp;');
					break;
				case '\n':
					text[i] = text[i].replace('\n', '<br />');
					break;
				case '1':
					text[i] = '<span class="one">' + text[i] + '</span>';
					break;
				case '0':
					text[i] = '<span class="zero">' + text[i] + '</span>';
					break;
				case '#':
					text[i] = '<span class="octothorpe">' + text[i] + '</span>';
					break;
				default:
					break;
			}
		}
		return {
			go: function () {
				var popped = '';
				if (text.length > 0) {
					div.innerHTML += text.pop();
				}
			}
		}

	})();
	window.setInterval(printer.go, 0.001);
};