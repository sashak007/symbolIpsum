# symbolIpsum

## Synopsis
Symbol Ipsum is a text generator that handles utf-8 characters including accented and special character. I've included two word lists: rendered accented characters and symbols as well as entity encoded characters. 

## Usage

### Node.js
```
var symbolIpsum = require('symbolIpsum');

var  text = symbolIpsum.words(6,'symbols'); // atkvæði, d’état, ¿cómo?, benåde, fußgängerübergänge, Σ
var sentence = symbolIpsum.sentences(7,14,2,'entities'); // outputs two sentences between seven to 14 words each with the entity encoding.
var paragraph  = symbolIpsum.paragraphs(7,14,5,3,'symbols'); // outputs three paragraphs with five sentences between seven to 14 words each with rendered symbols.
```

## Motivation

There's some great text generator packages out there but I've found that they don't cover some pretty common test cases so I created this module to uncover any encoding issues for automated testing. 

## Installation 	

`npm install @sashak007/symbol-ipsum`

## Tests

`npm test`

## License

symbolIpsum copyright (c) 2015 Natasha Dykes

This software is hereby granted, free of charge, to any person interested. Software is 'AS IS', I absolve any liability for damages.

[![Build Status](https://travis-ci.org/sashak007/symbolIpsum.svg)](https://travis-ci.org/sashak007/symbolIpsum)

[![Coverage Status](https://coveralls.io/repos/sashak007/symbolIpsum/badge.svg?branch=master&service=github)](https://coveralls.io/github/sashak007/symbolIpsum?branch=master)