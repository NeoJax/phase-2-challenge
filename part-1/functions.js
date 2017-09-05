//function that finds the month for a given date and returns the string
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

//function that reverses a sentence
function reverseSentence(string){
  let split = string.split(" ");
  let reverse = [split.length];
  for(let i = 0; i < split.length; i++){
    reverse[split.length-i] = split[i];
  }
}

//function that names all the properties of an object
function nameProps(obj){
  let properties = [];
  for(let key in obj){
    properties.push(key);
  }
  properties.sort();
  return properties;
}

/*function that removes strings between a min alphabetical
value and a max alphabetical value*/
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
