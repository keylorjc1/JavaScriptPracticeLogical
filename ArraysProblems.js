// Write a simple JavaScript program to join all elements of the following array into a string
// Sample array : myColor = ["Red", "Green", "White", "Black"];
//listo
function joinArr(arr, separador) {
  let emptyStr = "";
  for (let index = 0; index < arr.length; index++) {
    if (index != arr.length - 1) {
      emptyStr += arr[index] + separador;
    } else {
      emptyStr += arr[index];
    }
  }
  return emptyStr;
}
var myColor = ["Red", "Green", "White", "Black"];

console.log(joinArr(myColor, "-"));

// Write a JavaScript program which accept a number as input and insert dashes
// (-) between each two even numbers. For example if you accept 025468 the output should be
// 0-254-6-8.
// Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  return array;
}

let array = [2, 3, 5, 6, 8, 1];
console.log(selectionSort(array));

// Write a JavaScript program to find the most frequent item of an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )
var array2 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

function mostFrequent() {
  let counts = {};
  let maxCount = 0;
  let maxItem;

  for (let i = 0; i < array2.length; i++) {
    let item = array2[i];
    counts[item] = counts[item] ? counts[item] + 1 : 1;

    if (counts[item] > maxCount) {
      maxCount = counts[item];
      maxItem = item;
    }
  }

  return maxItem;
}

console.log(mostFrequent());

// Write a JavaScript program which accept a string as input and swap the case of each character.
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

var str = "c";
var UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LOWER = "abcdefghijklmnopqrstuvwxyz";
var result = [];

for (var x = 0; x < str.length; x++) {
  if (UPPER.indexOf(str[x]) !== -1) {
    result.push(str[x].toLowerCase());
  } else if (LOWER.indexOf(str[x]) !== -1) {
    result.push(str[x].toUpperCase());
  } else {
    result.push(str[x]);
  }
}
console.log(result.join(""));


