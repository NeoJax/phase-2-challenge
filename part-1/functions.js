// Write a function month(date) to find the month for a given Date object,
// returing the name of the month as a string
// ('January', 'February', 'March', 'April', 'May', ... etc).
function month(date){
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
function reverseSentence(string){
  let split = string.split(" ");
  let reverse = [split.length];
  for(let i = 0; i < split.length; i++){
    reverse[split.length-i] = split[i];
  }
}

// Write a function nameProps(obj) that returns the names of the properties
// an object has in alphabetical order. Ignore symbolic properties
// and count only the "own properties" (not inherited) of the object.
function nameProps(obj){
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
function filterBetween(array, min, max){
  let filter = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] < min){
      filter.push(array[i]);
    } else if (array[i] > max) {
      filter.push(array[i]);
    }
  }
}

//Exporting for testing
module.exports = {
  month,
  reverseSentence,
  nameProps,
  filterBetween
}
