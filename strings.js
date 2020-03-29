const text = 'am a text';

// * these are some helpful functions from a string

text.toLowerCase();
text.toUpperCase();

// gets rid of all spaces
text.trim();
text.length;
//  replaces the value provided with a new one
text.replace('x' , '@');
// returns an array splitted by the value provided
text.split(' ')

//  returns true if it starts with value
text.startsWith('am');
// if it ends with value
text.endsWith('xt');
// if the text includes this word
text.includes('text');