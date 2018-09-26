/**This document contains notes and examples about various array operations available in javascript  */

/**Creating Arrays
 * two methods are availabel for creating an array in javascript
 * using array literal
 * var array = [];
 * using built-in Array constructor
 * var array = new Array();
 */

 var array = []; // []
 var array = new Array(1,2,3); //[1,2,3]

 /**Adding and removing items 
  * methods available
  * push : add item at th eend of the array
  * pop : remove item from the end of the array
  * shift : add item at the beginning of the array
  * unshift : remove item from the beginning of the array 
  */

  var array = [1,2,3,4,5];
  array.push(6); // 6
  console.log(array); //[1,2,3,4,5,6]
  array.pop(); // 6
  console.log(array); //[1,2,3,4,5]
  array.shift(); // 1
  console.log(array); //[2,3,4,5]
  array.unshift(6); // 5
  console.log(array); //[6,2,3,4,5]


  /**Adding and removing items 
  * from a specific index
  * delete method
  * splice method 
  */

var array = [1,2,3,4,5];
delete array[1] //true
console.log(array) // [1, undefined, 3,4,5]

//Using splice
var array = [1,2,3,4,5];
array.splice(0,1); // [1]
console.log(array); // [2, 3, 4, 5]
//Replace an item at specific index in array
array.splice(0,1,1); // [2]
console.log(array); //[1, 3, 4, 5]
array.splice(0,2,1);// returns remved items [1, 3]
console.log(array); // [1, 4, 5]

/**Iterating methods in array **/

let array = [1,2,3,4,5];

/**simple for loop */
for(let i = 0; i < array.length; i++){
    console.log(i);
}
/**
 * 1
 * 2
 * 3
 * 4
 * 5
 */

/**built-in forEach method 
 * provide a callback in for each block which will be run for each value in the array
*/
array.forEach(val => {
    console.log(val);
});
/**
 * 1
 * 2
 * 3
 * 4
 * 5
 */

 /**mapping an array
  *  Creates new arrays based on the items in an existing array. The idea
  *  is that we map each item from one array to a new item of a new array
*/

const employees = [
    {name: "A", id: "12345"},
    {name: "B", id: "12346"},
    {name: "C", id: "12347"}
   ];

const ids = employees.map(emp => emp.id);
console.log(ids); //["12345", "12346", "12347"]


/**testing arrays
  *  every : checks if every item in array satisfies a condition
  *  some : checks if atleast one item in array satisfies a condition
*/

employees.every(emp => "name" in emp); //true
employees.some(emp => "name" in emp); //true

/**finding array items */

employees.find(emp => emp.id == '12345'); // {name : 'A', id : '12345'}
employees.findIndex(emp => emp.id == '12345'); // 0

/**filter : The filter function creates a new array that contains all items for which the callback returns true. */
var array = [1,2,3,4,5];
array.filter(n=> n%2 == 0); // [2,4];

/**finding array indexes */

array.indexOf(2) // 1
array.lastIndexOf(2) // 1

/**Sorting arrays 
* sorting— arranging items systematically in
* some order.
array.sort((a, b) => a – b);
If a callback returns a value less than 0, then item a should come before item b.
 If a callback returns a value equal to 0, then items a and b are on equal footing
(as far as the sorting algorithm is concerned, they’re equal).
 If a callback returns a value greater than 0, then item a should come after item b. 
*/

const employees = [{name: "A"}, {name: "C"}, {name: "B"}];
employees.sort(function(emp1, emp2){
 if(emp1.name < emp2.name) { return -1; }
 if(emp1.name > emp2.name) { return 1; }
 return 0;
});
console.log(employees) // [{name: "A"}, {name: "B"}, {name: "C"}]

/**AGGREGATING ARRAY ITEMS
 * reduce function
 */
var array = [1,2,3,4,5];
array.reduce((a,b)=> a+b); // 15