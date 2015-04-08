window.onload = function () {
	var printer = (function () {

  var xmlhttp = new XMLHttpRequest();
  var messages_url = "https://spreadsheets.google.com/feeds/list/1i5iVAwMZp7eBmoXjkAQXXcRXPp58oHWEwQtEpOzJIlA/oq9t691/public/basic?alt=json";

  xmlhttp.open("GET", messages_url, false);
  xmlhttp.send();
  var messages_json = JSON.parse(xmlhttp.responseText);
  var messages_arr = messages_json.feed.entry


  if (!String.prototype.repeat) {
  String.prototype.repeat = function(count) {
    'use strict';
    if (this == null) {
      throw new TypeError('can\'t convert ' + this + ' to object');
    }
    var str = '' + this;
    count = +count;
    if (count != count) {
      count = 0;
    }
    if (count < 0) {
      throw new RangeError('repeat count must be non-negative');
    }
    if (count == Infinity) {
      throw new RangeError('repeat count must be less than infinity');
    }
    count = Math.floor(count);
    if (str.length == 0 || count == 0) {
      return '';
    }
    // Ensuring count is a 31-bit integer allows us to heavily optimize the
    // main part. But anyway, most current (august 2014) browsers can't handle
    // strings 1 << 28 chars or longer, so:
    if (str.length * count >= 1 << 28) {
      throw new RangeError('repeat count must not overflow maximum string size');
    }
    var rpt = '';
    for (;;) {
      if ((count & 1) == 1) {
        rpt += str;
      }
      count >>>= 1;
      if (count == 0) {
        break;
      }
      str += str;
    }
    return rpt;
  }
}


		var div = document.getElementById('printed');
		var text = [
			"            111111111111111111111111\n",
			"            11                    11              #######         #######\n",
			"            11  1111111111111111  11            ###########     ###########\n",
			"            11  0011001100111111  11           #############  ##############\n",
			"            11  1111111111111111  11           #############################\n",
			"            11  1100001100001111  11            ###########################\n",
			"            11  1111111111111111  11             #########################\n",
			"            11  1111111111111111  11              #######################\n",
			"            11                    11                ###################\n",
			"            111111111111111111111111                 #################\n",
			"                    11111111                           #############\n",
			"              11111111111111111111                       #########\n",
			"            111111  11  11  11  1111                       #####\n",
			"            1111  11  11  11  111111                         #\n",
			"            111111111111111111111111\n",
			"\n",
			"\n",
			"===================/|                                      /==||\n",
			"``\\===============\\\\|                                      |==||\n",
			"   ===|            ||                                       ==||\n",
			"   ===|            ''                                       ==||\n",
			"   ===|                                          /===\\      ==||\n",
			"   ===|        ||                                \\===/      ==||    =========     =========\n",
			"   ===|_______//|                                           ==||     \\====/        \\====//\n",
			"   ===========\\\\|           /====\\   /====\\      /===|      ==||      \\===\\         \\==/\n",
			"   ===|        ||          /==|\\==\\|/==/|==||     ===|      ==||       \\===\\         =/\n",
			"   ===|                    ==|    ==|    ==||     ===|      ==||        \\===\\       =/\n",
			"   ===|                    ==|    ==|    ==||     ===|      ==||         \\===\\     =/\n",
			"   ===|            ..      ==|    ==|    ==||     ===|      ==||          \\===\\   =/\n",
			"   ===|            ||      ==|    ==|    ==||     ===|      ==||           \\===\\ =/\n",
			",,/===============//|      ==|    ==|    ==||     ===|     ===||            \\====/\n",
			"===================\\|     /==|           ===\\    //==\\\\   /====\\\\            \\==/\n",
			"                                                                              //\n",
			"                                                                   |\\        //\n",
			"                                                                   |\\\\______//\n",
			"                                                                    \\=======/\n",
			"\n",
			"+=========================================================================================+\n",
      "|                                                                                         |\n"
    ];

    for (var i in messages_arr) {
      var message_text = messages_arr[i].title["$t"].trim();
      if( message_text.substring(0,5) != "Row: " ) {
        var rep_l = Math.max(0,Math.ceil(("|                                                                                         |".length - 4 - message_text.length)/2));
        var rep_r = Math.max(0,Math.floor(("|                                                                                         |".length - 4 - message_text.length)/2));
        text.push("| "+ " ".repeat(rep_l) + message_text + " ".repeat(rep_r) +" |\n" );
        text.push("|                                                                                         |\n");
      }
    }
    text.push(  "+=========================================================================================+\n" );
    text = text.join('').split('').reverse();
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
	window.setInterval(printer.go, 0.1);
};
