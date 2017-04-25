const fs = require('fs');

var _fortunes = {
    random: function(category) {
		if (category === "all") {
			category = _fortunes.categories[Math.floor(Math.random() * _fortunes.categories.length)];
			return _fortunes.random(category);
		}

		var fortuneFile = fs.readFileSync("fortunes/" + category, { "encoding": "UTF-8" });
		var possibleFortunes = fortuneFile.split("%\n");
		var fortune = possibleFortunes[Math.floor(Math.random() * possibleFortunes.length)];
		return fortune.substring(0, fortune.length - 1);
    },
	categories: [
		"computers",
		"cookie",
		"definitions",
		"drugs",
		"education",
		"ethnic",
		"fortunes",
		"goedel",
		"humorists",
		"kids",
		"law",
		"linuxcookie",
		"literature",
		"love",
		"magic",
		"medicine",
		"men-women",
		"miscellaneous",
		"news",
		"people",
		"pets",
		"platitudes",
		"politics",
		"riddles",
		"science",
		"songs-poems",
		"sports",
		"startrek",
		"translate-me",
		"wisdom",
		"work",
		"zippy"
	]
}

module.exports = _fortunes;
