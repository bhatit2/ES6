/**Proxies are objects used to define custom behavior for fundamental operations. Main terminologies are:
 * handler : placeholder object which contains the traps.
 * traps : Methods that provide property access.
 * target : Object which the proxy virtualizes.
 * var p =  new Proxy(handler, target);
**/

let targetObj = {
    name : 'name',
    address : 'address'
};

console.log(targetObj.name); // name
console.log(targetObj.address); // address
console.log(targetObj.phone); // undefined

/*When property does not exist we get undefined. I want to return custom message for the properties
 which does not exist in my object. */

//Lets create a handler first

let handler = {
    get: function(target, name){
        return name in target ? target[name] : 'property does not exist';
    }
}

let myProxy = new Proxy(targetObj, handler);

console.log(myProxy.name); // name
console.log(myProxy.address); // address
console.log(myProxy.phone); // undefined

/**Access array values using neative indexes. When accessing array value using negative index,
 * it should return value from last array index.
 */


let negativeIndexHandler = {
    get : function(array,index){
        index = +index;
        return array[index < 0 ? array.length + index : index];
    },
    set : function(array,index, value){
        index = +index;
        return array[index < 0 ? array.length + index : index] = value;
    }
};

let sampleArray = [1,2,3,4,5,6,7,8,9,10];
let proxySampleArray = new Proxy(sampleArray,negativeIndexHandler);

console.log(proxySampleArray[-1]); // 10
console.log(proxySampleArray[-2]); // 9
