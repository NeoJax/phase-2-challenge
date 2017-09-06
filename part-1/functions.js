// Write a function month(date) to find the month for a given Date object,
// returing the name of the month as a string
// ('January', 'February', 'March', 'April', 'May', ... etc).
// Example:
// let date = new Date(2017, 08, 17); August 17th 2017
// month(date); returns "August"
function month(date){
  try {
    date.getMonth();
  }
  catch(err) {
    throw "The correct object was not passed";
  }
  switch(date.getMonth()){
    case 0:
      return "January";
      break;
    case 1:
      return "February";
      break;
    case 2:
      return "March";
      break;
    case 3:
      return "April";
      break;
    case 4:
      return "May";
      break;
    case 5:
      return "June";
      break;
    case 6:
      return "July";
      break;
    case 7:
      return "August";
      break;
    case 8:
      return "September";
      break;
    case 9:
      return "October";
      break;
    case 10:
      return "November";
      break;
    case 11:
      return "December";
      break;
  }
}

// Write a function reverseSentence(string) that takes a string of words
// and returns a string with the words in reverse order. If there is only one
// word in the string return it unchanged.
// Consider any series of non-space characters a word.
// Example:
// let reverse = "The dog is cool.";
// reverseSentence(reverse); returns "cool. is dog The"
function reverseSentence(string){
  try {
    string.split(" ");
  }
  catch(err) {
    throw "The correct object was not passed";
  }
  let split = string.split(" ");
  let reverse = [];
  let reverseStr = "";
  for(let i = 0; i < split.length; i++){
    reverse[(split.length-1)-i] = split[i];
  }
  reverseStr = reverse.join(" ");
  reverseStr.trim();
  return reverseStr;
}

// Write a function nameProps(obj) that returns the names of the properties
// an object has in alphabetical order. Ignore symbolic properties
// and count only the "own properties" (not inherited) of the object.
// Example:
// let props = {name: "blah", age: "more blah"};
// nameProps(props); returns "[ 'name', 'age' ]"
function nameProps(obj){
  try {
    if(!'key' in obj){
      throw Error;
    }
  }
  catch(err) {
    throw "The correct object was not passed";
  }
  let properties = [];
  for(let key in obj){
    properties.push(key);
  }
  properties.sort();
  return properties;
}

// Write a function filterBetween(array, min, max) that takes
// an array of strings, a min value, and a max value.
// It returns a new array containing only the elements that
// come after min alphabetically and before max.
// Example:
// let filter = ['cat', 'dog', 'lizard', 'crab', 'zebra', 'ant'];
// filterBetween(filter, 'cat', 'dog'); returns [ 'lizard', 'zebra', 'ant' ]
function filterBetween(array, min, max){
  try {
    array.join(" ");
    min.split(" ");
    max.split(" ");
  }
  catch(err) {
    throw "The correct object was not passed";
  }
  let filter = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] < min){
      filter.push(array[i]);
    } else if (array[i] > max) {
      filter.push(array[i]);
    }
  }
  return filter;
}

//Exporting for testing
module.exports = {
  month,
  reverseSentence,
  nameProps,
  filterBetween
}
