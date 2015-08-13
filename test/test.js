'use strict';

var expect = require('chai').expect,
		dictionary = require('../lib/dictionary'),
		helper = require('../lib/helper'),
		symbolIpsum = require('../index');

describe('Symbol Ipsum',function(){

	describe('generating words', function(){

		// words
		it('should generate random words if no parameter is passed',function(){

			var result = symbolIpsum.words();

			expect(result[0].length).to.equal(10);

			if(result[1] === 'symbols'){

				for(var i = 0; i < result.length; i++){

					expect(dictionary.accentedChars).to.contain(result[0][i]);

				}

			} else if(result[1] === 'entities'){

				for(var i = 0; i < result.length; i++){

					expect(dictionary.charEntities).to.contain(result[0][i]);

				}

			}

		});

		it('should generate random words with symbol and number parameter passed',function(){

			var result = symbolIpsum.words(20,'symbols');

			expect(result[0].length).to.equal(20); 

			for(var i = 0; i < result.length; i++){

				expect(dictionary.accentedChars).to.contain(result[0][i]);
			
			}

		});

		it('should generate random words with html entity encoding and number parameter passed',function(){

			var result = symbolIpsum.words(20,'entities');

			expect(result[0].length).to.equal(20); 

			for(var i = 0; i < result.length; i++){

				expect(dictionary.charEntities).to.contain(result[0][i]);
			
			}

		});

	}); // End of words describe
	
	describe('generating sentences', function(){

		// sentences

		it('should generate random sentences with minimum of five and max of ten if no parameter is passed',function(){

			var result = symbolIpsum.sentences();
			
			expect(result[0].length).to.equal(1);

			for(var i = 0; i < result[0].length; i++){

				var words = result[0][i].split(' ');

				expect(words.length).to.be.within(5,15);

				if(result[1] === 'symbols'){

					for(var i = 0; i < result.length; i++){

						expect(dictionary.accentedChars).to.contain(words[i]);

					}

				} else if(result[1] === 'entities'){

					for(var i = 0; i < result.length; i++){

						expect(dictionary.charEntities).to.contain(words[i]);

					}

				}
			}

		});
		
		it('should generate random sentences with symbols parameters passed',function(){

			var result = symbolIpsum.sentences(7,14,2,'symbols');

			expect(result[0].length).to.equal(2);

			for(var i = 0; i < result[0].length; i++){

				var words = result[0][i].split(' ');

				expect(words.length).to.be.within(7,14);

				for(var j = 0; j < words.length; j++){

					expect(dictionary.accentedChars).to.contain(words[j]);

				}

			}

		});

		it('should generate random sentences with html entity encoding parameters passed',function(){

			var result = symbolIpsum.sentences(7,14,2,'entities');

			expect(result[0].length).to.equal(2);

			for(var i = 0; i < result.length; i++){

				var words = result[0][i].split(' ');

				expect(words.length).to.be.within(7,14);

				for(var j = 0; j < words.length; j++){

					expect(dictionary.charEntities).to.contain(words[j]);

				}

			}

		});

	});


	describe('generating paragraphs', function(){

			// paragraphs

		it('should generate random paragraphs with symbols if no parameter is passed',function(){

			var result = symbolIpsum.paragraphs();

			expect(result[0].length).to.equal(2);

			for(var i = 0; i < result.length; i++){

				var sentences = result[0][i].split('. ');

				expect(sentences.length).to.equal(4);

				for(var j = 0; j < sentences.length; j++){

					var words = sentences[j].split(' ');

					expect(words.length).to.be.within(5,15);
					
				}

			}

		});

		it('should generate random paragraphs with symbols with a parameter passed',function(){

			var result = symbolIpsum.paragraphs(7,14,5,3,'symbols');

			expect(result[0].length).to.equal(3);

			for(var i = 0; i < result[0].length; i++){

				var sentences = result[0][i].split('. ');

				expect(sentences.length).to.equal(5);

				for(var j = 0; j < sentences.length; j++){

					var words = sentences[j].split(' ');

					expect(words.length).to.be.within(7,14);

					for(var k = 0; k < words.length; k++){

						expect(dictionary.accentedChars).to.contain(words[k]);

					}
					
				}

			}

		});

		it('should generate random paragraphs with html entity encoding parameters passed',function(){

			var result = symbolIpsum.paragraphs(7,14,5,3,'entities');

			expect(result[0].length).to.equal(3);

			for(var i = 0; i < result.length; i++){

				var sentences = result[0][i].split('. ');

				expect(sentences.length).to.equal(5);

				for(var j = 0; j < sentences.length; j++){

					var words = sentences[j].split(' ');

					expect(words.length).to.be.within(7,14);

					for(var k = 0; k < words.length; k++){

						expect(dictionary.charEntities).to.contain(words[k]);

					}
					
				}

			}

		});

	});


});