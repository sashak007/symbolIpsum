var index = require('../index'),
		helper = require('../helper'),
		definitions = require('../lib/dictionary');

var symbolIpsum = {

	words: function(number,charType){

		var randomWords;

		if (typeof number === 'undefined') {
			number = 10;
		} 

		if (typeof charType === 'undefined') {

			var coinFlip = Math.floor(Math.random() * 1);

			if (coinFlip === 0){

				charType = 'symbols';
			
			} else {
				charType = 'entities'
			}
		}

		if (charType === 'symbols') {

			for(var i = 0; i < number; i++) {
			
				var random = Math.random() * definitions.accentedChars.length();

				randomWords.push(definitions.accentedChars[random]);
			}

			return randomWords;

		} else if (charType === 'entities') {

			for(var i = 0; i < number; i++) {
			
				var random = Math.random() * definitions.accentedChars.length();

				randomWords.push(definitions.accentedChars[random]);
			}

			return randomWords;

		}
	},

	sentences: function(min,max,numberOfSentences,charType){

		var randomSentences;

		if (typeof min === 'undefined') {
			min = 5;
		}

		if (typeof max === 'undefined') {
			min = 15;
		}

		if (typeof numberOfSentences === 'undefined') {
			min = 1;
		}

		for (var i = 0; i < numberOfSentences; i++){
		
			randomSentences.push(this.words(min + (Math.random()* max)));
		
		}	

		return randomSentences.join('\n');
	},


	paragraphs: function(min,max,numberOfSentences,charType,numberOfParagraphs){

		var randomParagraphs;

		if (typeof numberOfParagraphs === 'undefined') {

			numberOfParagraphs = 2;

		}

		for (var i = 0; i < numberOfParagraphs; i++){

			randomParagraphs.push(this.sentences(min,max,numberOfSentences,charType));

		}

		return randomParagraphs.join('\n \r\t');
	}

};

module.exports = symbolIpsum;