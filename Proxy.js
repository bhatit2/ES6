/**Proxies are objects used to define custom behavior for fundamental operations. Main terminologies are:
 * handler : placeholder object which contains the traps.
 * traps : Methods that provide property access.
 * target : Object which the proxy virtualizes.
 * var p =  new Proxy(handler, target);
**/

let target = {
    name : 'name',
    address : 'address'
};

console.log(target.name); // name
console.log(target.address); // address
console.log(target.phone); // undefined

/*When property does not exist we get undefined. I want to return custom message for the properties
 which does not exist in my object. */

//Lets create a handler first

let handler = {
    get: function(target, name){
        return name in target ? target[name] : 'property does not exist';
    }
}

let myProxy = new Proxy(target, handler);

console.log(myProxy.name); // name
console.log(myProxy.address); // address
console.log(myProxy.phone); // undefined