'use strict';

var expect = require('chai').expect,
		dictionary = require('../lib/dictionary'),
		symbolIpsum = require('../index');

var define = function(result,charType){
		
		if(result[1] === 'symbols'){

				for(var i = 0; i < result.length; i++){

					expect(dictionary.accentedChars).to.contain(result[0][i]);

				}

			} else if(result[1] === 'entities'){

				for(var i = 0; i < result.length; i++){

					expect(dictionary.charEntities).to.contain(result[0][i]);

				}

			}
		};

	var verifySentences = function(result,charType,min,max){

		for(var i = 0; i < result.length; i++){

			var words = result[i].split(' ');

			expect(words.length).to.be.within(min,max);

			define(result,charType);
		}

	},

	verifyParagraph = function(result,charType,numOfSentences,min,max){

		for(var i = 0; i < result.length; i++){

			var sentences = result[i].split('. ');

			expect(sentences.length).to.equal(numOfSentences);

			verifySentences(sentences,charType,min,max);
				
			}

	};


describe('Symbol Ipsum',function(){

	describe('generating words', function(){

		it('should generate random words if no parameter is passed',function(){

			var result = symbolIpsum.words();

			expect(result[0].length).to.equal(10);

			define(result[0],result[1]);

		});

		it('should generate random words with symbol and number parameter passed',function(){

			var result = symbolIpsum.words(20,'symbols');

			expect(result[0].length).to.equal(20); 

			define(result[0],result[1]);

		});

		it('should generate random words with html entity encoding and number parameter passed',function(){

			var result = symbolIpsum.words(20,'entities');

			expect(result[0].length).to.equal(20); 

			define(result[0],result[1]);

		});

	}); 
	
	describe('generating sentences', function(){

		it('should generate random sentences with minimum of five and max of ten if no parameter is passed',function(){

			var min = 5,
					max = 15,
					result = symbolIpsum.sentences();
			
			expect(result[0].length).to.equal(1);

			verifySentences(result[0],result[1],min,max);

		});
		
		it('should generate random sentences with symbols parameters passed',function(){

			var min = 7,
					max = 14,
					result = symbolIpsum.sentences(min,max,2,'symbols');

			expect(result[0].length).to.equal(2);

			verifySentences(result[0],result[1],min,max);

		});

		it('should generate random sentences with html entity encoding parameters passed',function(){

			var min = 7,
					max = 14,
					result = symbolIpsum.sentences(min,max,2,'entities');

			expect(result[0].length).to.equal(2);

			verifySentences(result[0],result[1],min,max);

		});

	});


	describe('generating paragraphs', function(){

		it('should generate random paragraphs with symbols if no parameter is passed',function(){

			var min = 5,
					max = 15,
					numOfSentences = 4,
					result = symbolIpsum.paragraphs();

			expect(result[0].length).to.equal(2);

			verifyParagraph(result[0],result[1],numOfSentences,min,max);

		});

		it('should generate random paragraphs with symbols with a parameter passed',function(){

			var min = 7,
					max = 14,
					numOfSentences = 5,
					result = symbolIpsum.paragraphs(min,max,numOfSentences,3,'symbols');

			expect(result[0].length).to.equal(3);

			verifyParagraph(result[0],result[1],numOfSentences,min,max);

		});

		it('should generate random paragraphs with html entity encoding parameters passed',function(){

			var min = 7,
					max = 14,
					numOfSentences = 5,
					result = symbolIpsum.paragraphs(min,max,numOfSentences,3,'entities');

			expect(result[0].length).to.equal(3);

			verifyParagraph(result[0],result[1],numOfSentences,min,max);

		});

	});

});