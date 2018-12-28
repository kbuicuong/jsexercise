//In this kata you will create a function that takes a list of non-negative integers and strings 
//and returns a new list with the strings filtered out.

function filter_list(l) {
  // Return a new array with the strings filtered out
  let newArray = [];
  for(let i=0; i < l.length; i++){
    if(Number.isInteger(l[i])){
      newArray.push(l[i]);
    }
  }
  return newArray;
}

//Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits
//that occur more than once in the input string. The input string can be assumed to contain only alphabets 
//(both uppercase and lowercase) and numeric digits.

function duplicateCount(text){
  var lower = text.toLowerCase();
  var count = 0;
  var used = [];
  
  lower.split('').forEach(function(letter) {
    if (!used.includes(letter) && (lower.split(letter).length - 1) > 1) {
      count++;
      used.push(letter);
    }
  });
  
  return count;
}