'use strict';

var index       = require('../index'),
    definitions = require('../lib/dictionary');

var symbolIpsum = {

  /**
   * Generates special character words 
   * @param {number} number of words to generate
   * @param {charType} 'symbols' - rendered character; 'entities' - html character entity
   * @return array of words
   */
  words: function(number, charType) {
    var randomWords = [];
    if(typeof number === 'undefined') {
      number = 10;
    } 

    if(typeof charType === 'undefined') {
      var coinFlip = Math.floor(Math.random() * 2);
      if(coinFlip === 0) {
        charType = 'symbols';
      } else {
        charType = 'entities'
      }
    }

    if(charType === 'symbols') {
      for(var i = 0; i < number; i++) {
        var random = Math.floor(Math.random() * definitions.accentedChars.length);
        randomWords.push(definitions.accentedChars[random]);
      }
      return [randomWords];
    } else if(charType === 'entities') {
      for(var i = 0; i < number; i++) {  
        var random = Math.floor(Math.random() * definitions.charEntities.length);
        randomWords.push(definitions.charEntities[random]);
      }
      return [randomWords];
    } else {
      throw "This is not a valid character type. Please use 'symbols' or 'entities'."
    }
  },

  /**
   * Generates special character sentences 
   * @param {min} minimum number of words in a sentence
   * @param {max} maximum number of words in a sentence
   * @param {numberOfSentences} number of sentences to generate
   * @param {charType} 'symbols' - rendered character; 'entities' - html character entity
   * @return array of sentences
   */

  sentences: function(min, max, numberOfSentences, charType) {

    var randomSentences = [];

    if (typeof min === 'undefined') {
      min = 5;
    }

    if (typeof max === 'undefined') {
      max = 15;
    }

    if (typeof numberOfSentences === 'undefined') {
      numberOfSentences = 1;
    }

    for (var i = 0; i < numberOfSentences; i++) {
      var sentWords = this.words((min + Math.floor((Math.random()* (max - min)))), charType);
      randomSentences.push(sentWords[0].join(' '));
    } 
    return [randomSentences];
  },

  /**
   * Generates special character paragraphs 
   * @param {min} minimum number of words in a sentence
   * @param {max} maximum number of words in a sentence
   * @param {numberOfSentences} number of sentences to generate
   * @param {numberOfParagraphs} number of paragarphs to generate
   * @param {charType} 'symbols' - rendered character; 'entities' - html character entity
   * @return array of paragraphs
   */

  paragraphs: function(min, max, numberOfSentences, numberOfParagraphs, charType){

    var randomParagraphs = [];

    if (typeof numberOfParagraphs === 'undefined') {
      numberOfParagraphs = 2;
    }

    if (typeof numberOfSentences === 'undefined') {
      numberOfSentences = 4;
    }

    for (var i = 0; i < numberOfParagraphs; i++){
      var paraSentences = this.sentences(min, max, numberOfSentences, charType);
      randomParagraphs.push(paraSentences[0].join('. '));
    }

    return [randomParagraphs];
  }

};

module.exports = symbolIpsum;