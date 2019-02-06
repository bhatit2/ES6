var obj1 = {
	name : 'Tanvi',
  	age : 27
}

 var obj2 = {
 	name : 'Rahul'
 }
 
 let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(z);

let obj3 = {...obj1, ...obj2};
console.log(JSON.stringify(obj3));