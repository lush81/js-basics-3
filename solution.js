function range(start, end, step) {
  // Write a range function that takes two arguments, start and end,
  // and returns an array containing all the numbers from start up to (and including) end.
 
  if(step===undefined){
   step=1;
  } 
  if(start>=end){
   step=(step<0)?step:step*(-1);
  }
    var mas = [];
	var len =  (end-start)/step ; 
  for (var j=0; j<=len; j++){ 
    mas[j]=start;
    start = start+step;
  }
  return mas; 
}
  
function sum(numbers) {
  // Write a sum function that takes an array of numbers
  // and returns the sum of these numbers.

 var sum =0;
 for (var i=0; i<numbers.length; i++){
  sum += numbers[i];
 }
 return sum;
}

function reverseArray(arr) {
  // Write a function which takes an array as argument
  // and produces a new array that has the same elements in the inverse order.

 var newArr = [];
 var i=arr.length-1;

 for (var j=0; j<arr.length; j++){
  if (i>=0){
   newArr[j]=arr[i];
   i--;
  }
 }
  return (newArr);  
}

function reverseArrayInPlace(arr) {
  // Write a function that does what the reverse method does:
  // it modifies the array given as argument in order to reverse
  // its elements. It should not use the standard reverse method.

  var i=arr.length-1;

 for (var j=0; j<=i; j++){
  var newArr = arr[j];
  arr[j]=arr[i];
  arr[i]=newArr;
  i--;
 }
return (arr); 
 }

function arrayToList(arr) {
  // Objects, as generic blobs of values, can be used to build all
  // sorts of data structures. A common data structure is the list
  // (not to be confused with the array). A list is a nested set of
  // objects, with the first object holding a reference to the second,
  // the second to the third, and so on.
  // For example:
  //
  // var list = {
  //   value: 1,
  //   rest: {
  //     value: 2,
  //     rest: {
  //       value: 3,
  //       rest: null
  //     }
  //   }
  // };
  //
  // Write a function arrayToList that builds up a data structure like
  // the previous one when given [1, 2, 3] as argument. It should use
  // helper function prepend.

   var obj = {};
   obj.value = arr[arr.length-1];
   obj.rest = null;
  
  if(arr.length-1===0){
   return obj;
  }
  for(var i = arr.length-2; i>=0; i--){
   obj = prepend(arr[i], obj);
  }
 return obj;
}
 
function listToArray(list) {
  // Write a function that produces an array from a list

  var i=0;  
  var mas = [];
 
  for( var key in list){
   if(typeof list[key] !='object'){
     mas[i] = list[key];
     i++;
   }else{
     inList(list[key], mas, i);
   }
  }
 return mas; 
}
 
 
function inList(obj, mas, i) {

   for( var key in obj){
    if(typeof obj[key] !='object'){
      mas[i] = obj[key];
      i++;
    }else{
      inList(obj[key], mas, i);
    }
  }
}  

function prepend(item, list) {
  // Write a function which takes an element and a list and creates a new list
  // that adds the element to the front of the input list.
 var newObject = {};
   newObject.value = item;
   newObject.rest = list;
  return newObject;
 }

function nth(n, list) {
  // Write which takes a list and a number and returns the element at the
  // given position in the list, or undefined when there is no such element.
  // It should be recursive.

 var mas = listToArray(list);
 return mas[n];
 }

function deepEqual(a, b) {
  // The == operator compares objects by identity. But sometimes,
  // you would prefer to compare the values of their actual properties.
  //
  // Write a function, deepEqual, that takes two values and returns true
  // only if they are the same value or are objects with the same
  // properties whose values are also equal when compared with
  // a recursive call to deepEqual.

  if(typeof(a)!='object' && typeof(b)!='object'|| a===null|| b===null ){
 	if(a===b){ 
	 return true;
	}else{
	 return false;
	}
  
 }else if (typeof (a) === 'object' && typeof (b) === 'object'){
	var countPropA = 0;
	var countPropB = 0;
	 
	 for(var propA in a){
	  countPropA++;
	 }
	 for(var propB in b){
	  countPropB++;
	 }
 
	 if(countPropA != countPropB ){
	   return false;
	 }else{
	   for(var propA in a){
         if (propA in b){
		   return deepEqual(a[propA], b[propA]) ;
		 }else{
		   return false;
		 }
       }
     }
 }else{
   return false;
 }
}

module.exports = {
  range: range,
  sum: sum,
  reverseArray: reverseArray,
  reverseArrayInPlace: reverseArrayInPlace,
  arrayToList: arrayToList,
  listToArray: listToArray,
  prepend: prepend,
  nth: nth,
  deepEqual: deepEqual
}
