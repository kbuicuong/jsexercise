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

//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers){
	var num = numbers.split(' ');
	var max = num[0];
	var min = num[0];

	for(var i = 0; i < num.length; i++){
		if(max < parseInt(num[i])){
			max = num[i];
		}else if(min > parseInt(num[i])){
			min = num[i];
		}
	}
	var str = max + " " + min;
	return str;
}

// Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array and be ready for anything else which is not clearly specified :wink:

function tribonacci(signature,n){
  //your code here
  const container = [];

  if(n === 0){
    return container;
  }else if(n < 3){
    container.push(signature[0]);
    return container;
  }

  //add the first three numbers in the container
  for(let i = 0; i < signature.length; i++){
        container.push(signature[i]);
  }


  //keep a count of where to start indexing
  for(let count = 0; count < (n - 3); count++){
    //reset 
    let num = 0;


    for(let i = count; i < (count + 3); i++){
      num = num + container[i];
    }
    //console.log(num);
    container.push(num);
  }

  return container;
}
