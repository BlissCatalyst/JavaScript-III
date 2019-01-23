/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. In Window Binding, "this" refers to the actual browser window.
* 2. For Implicit Binding, "this" refers to whatever is left of the dot when the object is being called or invoked.
* 3. In New Binding, "this" refers to the new object being made by invoking the constructor object and passing it the key/value pairs as arguments.
* 4. For Explicit Bindind, "this" will only refer to both the object and function (if the function is taken out of the object) when you invoke the function with a method such as .call().apply().bind and passing the object and function in as parameters.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const jon = {
    age: 30,
    name: "Jon",
    speak: function() {
        console.log(`My name is ${this.name}!`);
    }
};

jon.speak();

// Principle 3

// code example for New Binding
const Person = function(age, name) {
    this.age = age;
    this.name = name;
};

const nathan = new Person(25, "Nathan");
console.log(nathan.name);

// Principle 4

// code example for Explicit Binding
const speakName = function() {
    console.log(`My name is ${this.name}!`)
}

const jason = {
    name: "Jason"
};

speakName.call(jason);