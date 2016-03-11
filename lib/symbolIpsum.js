'use strict';

var index       = require('../index'),
    definitions = require('../lib/dictionary');

var symbolIpsum = {

  /**
   * Generates special character words 
   * @param {number} number
   * @param {charType} 'symbols' - rendered character; 'entities' - html character entity
   * @return array
   */
  words: function(number, charType){
    var randomWords = [];

    if (typeof number === 'undefined') {
      number = 10;
    } 


    if (typeof charType === 'undefined') {
      var coinFlip = Math.floor(Math.random() * 2);

      if (coinFlip === 0){
        charType = 'symbols';
      
      } else {
        charType = 'entities'
      }
    }

    if (charType === 'symbols') {
      for(var i = 0; i < number; i++) {
        var random = Math.floor(Math.random() * definitions.accentedChars.length);

        randomWords.push(definitions.accentedChars[random]);
      }

      return [randomWords,charType];

    } else if (charType === 'entities') {
      for(var i = 0; i < number; i++) {  
        var random = Math.floor(Math.random() * definitions.charEntities.length);

        randomWords.push(definitions.charEntities[random]);
      }

      return [randomWords,charType];
    }
  },

  /**
   * Generates special character sentences 
   * @param {min} number
   * @param {max} number
   * @param {numberOfSentences} number
   * @param {charType} 'symbols' - rendered character; 'entities' - html character entity
   * @return array
   */

  sentences: function(min, max, numberOfSentences, charType){

    var randomSentences = [],
        randomCharType;

    if (typeof min === 'undefined') {
      min = 5;
    }

    if (typeof max === 'undefined') {
      max = 15;
    }

    if (typeof numberOfSentences === 'undefined') {
      numberOfSentences = 1;
    }

    for (var i = 0; i < numberOfSentences; i++){
      var sentWords = this.words((min + Math.floor((Math.random()* (max - min)))), charType);

      randomSentences.push(sentWords[0].join(' '));
      randomCharType = sentWords[1]; 
    } 
    return [randomSentences, randomCharType];
  },

  /**
   * Generates special character paragraphs 
   * @param {min} number
   * @param {max} number
   * @param {numberOfSentences} number
   * @param {numberOfParagraphs} number
   * @param {charType} 'symbols' - rendered character; 'entities' - html character entity
   * @return array
   */

  paragraphs: function(min, max, numberOfSentences, numberOfParagraphs, charType){

    var randomParagraphs = [],
        randomCharType;

    if (typeof numberOfParagraphs === 'undefined') {
      numberOfParagraphs = 2;
    }

    if (typeof numberOfSentences === 'undefined') {
      numberOfSentences = 4;
    }

    for (var i = 0; i < numberOfParagraphs; i++){
      var paraSentences = this.sentences(min, max, numberOfSentences, charType);

      randomCharType = paraSentences[1];
      randomParagraphs.push(paraSentences[0].join('. '));
    }

    return [randomParagraphs, randomCharType];
  }

};

module.exports = symbolIpsum;