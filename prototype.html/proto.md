<script>
 prototype is like an insistor which u will get all the thing which will be get by ur own insitor.
    ex:- 1   , to set the proto on any object
let  dhanush = {
name: "dhanush yadav",
car: "hyundai",
};
let suraj = Object.create(dhanush)
suraj.housetype= "bungalow"
console.log(suraj)
console.log(suraj.car);    




example :- 2    , to set the proto on any object

    let sanju = {
        name:"sanju",
        car:"rolls",
        bike:"pulsar"
    };
    let salman={
        name:"salman",
        car:"bmw",
        headphone:"boat"
    }
    let sarukh ={
        name:"sharukh",
        car: "ferrari",
        bookshelf: "personal"
    }
    Object.setPrototypeOf(sarukh,sanju)
    Object.setPrototypeOf(sanju,salman)
    console.log(sarukh);
     console.log(sarukh.headphone);


# Prototype & Inheritance - Student notes

## Before moving to inheritance we need to solve these three simple problems as a quick revision

- Object creation - Student task 1 - factory functions [[problem](https://codepen.io/abduljabbarpeer/pen/jOXVxrm)]
    - solution
        
        ```jsx
        // write a factory function iPhone1 to create iPhone objects in bulk quantiy
        // iPhone1 takes in ASIN, color, display, camera
        // the object it creates has the following
        // properties: ASIN, color, display, camera
        // methods:
        // dial - console logs "tring.. tring..."
        // sendMessage - console logs "Sending message..."
        // cameraClick - "Camera clicked"
        
        function iPhoneGen1(ASIN, color, display, camera) {
          let obj = {}
        
          obj.ASIN = ASIN
          obj.color = color
          obj.display = display
          obj.camera = camera
        
          obj.dial = function () {
            console.log("tring.. tring...")
          }
        
          obj.sendMessage = function () {
            console.log("Sending message...")
          }
        
          obj.cameraClick = function () {
            console.log("Camera clicked")
          }
        
          return obj
        }
        
        let iphone1 = iPhoneGen1("B09X67JBQV", "Gray", "90mm", "2.0 MP")
        iphone1.dial() // "tring.. tring..."
        iphone1.sendMessage() // "Sending message..."
        iphone1.cameraClick() // "Camera clicked"
        ```
        
- Objects - student task 2 - attach simple properties from one object to another [[problem](https://codepen.io/abduljabbarpeer/pen/qBLqYqg)]
    - solution
        
        ```jsx
        
        // make objectCreator2 DRY
        // invoke objectCreator1 inside objectCreator2 in such a way that property1 to property5 are attached to the object b in objectCreator2
        // You do not need to create a protoype chain
        // you are expected to copy them / attach them to the new object b
        
        // this function has capability of attaching 5 properties to an obj
        function objectCreator1() {
          let a = {}
        
          a.property1 = 1
          a.property2 = 2
          a.property3 = 3
          a.property4 = 4
          a.property5 = 5
        
          return a
        }
        
        function objectCreator2() {
          let b = {}
        
          b = objectCreator1()
          b.property6 = 6
        
          return b
        }
        
        console.log(objectCreator2())
        ```
        
    

## Inheritance

Inheritance is one of the core concepts of object-oriented programming that enables an object to take on the properties and methods of another object. This makes it easy to reuse code in different parts of an application.

Unlike classical languages like C# and Java, JavaScript does not have a true class. It utilizes linking objects together in order to inherit properties. Every single object that you create, unless specified not to, is automatically linked to the corresponding global object prototype.

When you think of inheritance, you might think about classes, and object-oriented languages like C# and Java, and how these languages use classes to create inheritance by instantiating classes, extending them to inherit and pass these properties and methods to child classes.

JavaScript does not have a true class. It uses prototypes, is just an object. These objects are automatically linked together for us by JavaScript engines so that we can access properties and methods.

## Classical Inheritance

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/e7ab2b2f-ef9b-4992-9a0f-fc67e7e9e6a3/9b0774c3-c3f6-4205-900b-5ccdc4cb136a/Untitled.png)

https://www.figma.com/file/n9WHBIq5I4CXqAMmKQXdj1/Untitled?node-id=0%3A1

## What is a prototype chain?

When it comes to inheritance, Javascript only has one construct: **objects**.  Each object has a private property (`__proto__`) that holds a link to another object (`prototype`) . That prototype object has a `__proto__` of its own, and so on, until an object is reached with `null` as its prototype.

Nearly all objects in Javascript are instances of Object that sits on the top of a prototype chain. 

The ECMAScript likes to represent this hidden property as  `[[Prototype]]` but many browsers like to represent  it as `__proto__`. For our discussion we will be using `__proto__` notiation to refer to the private property if the object responsible for chaining.

Note: These days, even some browsers represents `__proto__` as `[[Prototype]]`.   

```jsx
let obj = {
  name: 'vivek',
  sayHello: function () {
    console.log('Hello');
  }
}
```

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/e7ab2b2f-ef9b-4992-9a0f-fc67e7e9e6a3/1e50ba3c-cd80-46f8-8ec4-95c6d66a67b3/Untitled.png)

In the browser console, if you try, you can of course get access to `name` and `sayHello` by typing `.` after `obj`. 

But along with the two properties that we have defined, we also see a lot of other properties like `hasOwnProperty`, `toString()` and many more. Where are they stored & how do we get access to them in our `obj`

They are stored in the built in `Object` constructor function. Object constructor function has a property called `prototype` . `Object.prototype` is a object. All these extra properties that we see our `obj` are actually properties of `Object. prototype`.

Our `obj` is linked to `Object.prototype` via the hidden property called `__proto__` 

The way developers communicate the above chain is as follows:

 communication: `Object()` is the **prototype** of `obj`

technical: obj's __proto__ is linked to Object's prototype

We can validate if `obj.__proto__` is equal to `Object.prototype` by logging `obj.__proto__ === Object.prototype` 

Let's move one step ahead with the example of an array. Consider the following array

```jsx
let arr = ['one', 'two', 'three'];
```

Again with our `arr` we see so many properties attached. Where are they stored? How do we see them as a property of our `arr` 

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/e7ab2b2f-ef9b-4992-9a0f-fc67e7e9e6a3/ff9cfb88-7ffb-4b60-8490-f364ca199cf3/Untitled.png)

The `__proto__` property of `Array.prototype` is linked to `Object.prototype` and in that way, it has access to all of the properties & methods of `Object.prototype`

The `__proto__` property of the `arr` object is linked to `Array.prototype` & in that way `arr` has access to all the properties and methods of `Array.prototype` and `Object.prototype` 

We can verify this relationship by logging these :

```jsx
console.log(arr.__proto__ === Array.prototype) // true
console.log(Array.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true
```

Now let's check the prototype chain of a function. consider the following simple function:

```jsx
function fun() {
  
}
```

We'll see that our `fun` has access to several functions related properties & methods like `call()`, `bind()` , `arguments`, `length` etc... and also it has access to properties and methods of objects. 

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/e7ab2b2f-ef9b-4992-9a0f-fc67e7e9e6a3/2ce5505c-3739-4f79-b312-c3d34673e481/Untitled.png)

This prototype chain must be obvious to you by now.

This chain can be verified by running the following command:

```jsx
console.log(fun.__proto__ === Function.prototype);
console.log(fun.__proto__.__proto__ == Object.prototype);  // or
console.log(Function.prototype.__proto__ == Object.prototype);
```

## Creating our own Prototype chains

using `Object.setPrototypeOf()` 

```jsx
let obj = {
  name: 'vivek',
  sayHello: function () {
    console.log('Hello');
  }
}

let obj2 = {
  salary: 100000,
  work: function () {
    console.log('Working');
  }
}

Object.setPrototypeOf(obj2, obj);

obj2.sayHello();

console.log(obj2);
```

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/e7ab2b2f-ef9b-4992-9a0f-fc67e7e9e6a3/5fc17508-1a1a-4053-a084-148d55069acf/Untitled.png)

The `Object.setPrototypeOf()` method sets the prototype (i.e., the internal `__proto__` property) of a specified object to another object

Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/e7ab2b2f-ef9b-4992-9a0f-fc67e7e9e6a3/e4bfc12f-c303-4e5a-b876-d22cf186c0f6/Untitled.png)

```jsx
obj2.__proto__ === obj // true
```

The same task can also be performed 

1. using `Object.create()` 

```jsx
let obj = {
  name: "vivek",
  sayHello: function () {
    console.log("Hello")
  },
}

let obj2 = Object.create(obj) // The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

obj2.salary = 100000 // adding as main property
obj2.work = function () {
  // adding as main method
  console.log("Working")
}
console.log(obj2)
```

1. using `Object.setPrototypeOf`

```jsx
let obj = {
  name: "vivek",
  sayHello: function () {
    console.log("Hello")
  },
}

let obj2 = {}

obj2.salary = 100000
obj2.work = function () {
  console.log("Working")
}

Object.setPrototypeOf(obj2, obj) // Object.setPrototypeOf() sets up a prototype chain between the source object and the target object.

console.log(obj2)
obj2.sayHello()
```

Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create 

```jsx
Object.setPrototypeOf(obj2, obj);
console.log(obj2);
```

`Object.setPtototypeOf()` & `Object.create()` does create a prototype chain.

## How are functions linked to objects in Javascript

### 1. Factory Functions :

Okay, now we understand that every object has a `__proto__` property which is used to link it to another object. But what about functions? How is prototypal inheritance handled in objects created by constructor functions via `new` keyword?

Functions are first-class objects in JavaScript which means they can have their own properties and methods like any other plain object could.

This `prototype` property of a function itself is not used in the prototype chain look-up. The `.prototype` property object lives in every function

## Solving the problem using the functions prototype object & linking our objects to it

```jsx
Person.prototype.increaseAge = function () {
  this.age = this.age + 1
  console.log(this.age)
}

Person.prototype.sleep = function () {
  console.log(`${this.firstName} is sleeping.`)
}

Person.prototype.eat = function () {
  console.log(`${this.firstName} is eating.`)
}

Person.prototype.introduceSelf = function () {
  console.log(this.firstName, this.lastName, this.age)
}

function Person(firstName, lastName, age) {
  let obj = {}
  Object.setPrototypeOf(obj, Person.prototype)

  obj.firstName = firstName
  obj.lastName = lastName
  obj.age = age

  return obj
}

let person1 = Person("Bruce", "Wayne", 26)
console.log(person1)
```

If you observe the `person1` object now ( You’d observe that `eat` `increaseAge` .. are all added to prototypes of `person1` object ) 

![Screenshot 2023-09-06 at 3.25.30 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/e7ab2b2f-ef9b-4992-9a0f-fc67e7e9e6a3/dcf83cb4-b813-4eab-ad1c-a2c8e5762379/Screenshot_2023-09-06_at_3.25.30_PM.png)

```jsx
function Person(firstName, lastName, age) {
  let obj = {}
  Object.setPrototypeOf(obj, Person.prototype)

  obj.firstName = firstName
  obj.lastName = lastName
  obj.age = age

  return obj
}

Person.prototype.increaseAge = function () {
  this.age = this.age + 1
  console.log(this.age)
}

Person.prototype.sleep = function () {
  console.log(`${this.firstName} is sleeping.`)
}

Person.prototype.eat = function () {
  console.log(`${this.firstName} is eating.`)
}

Person.prototype.introduceSelf = function () {
  console.log(this.firstName, this.lastName, this.age)
}

function Employee(firstName, lastName, age, department, salary) {
  let obj = Person(firstName, lastName, age) // a new object which has some properties of object that is returned from Person factory function
  Object.setPrototypeOf(obj, Employee.prototype) // the object we are gonna return will have Employee.prototype as its prototype;
  obj.department = department
  obj.salary = salary

  return obj
}

Object.setPrototypeOf(Employee.prototype, Person.prototype) // Employee prototype object's prototype will be set to Person.prototype;

Employee.prototype.work = function () {
  console.log(`${this.firstName} is working.`)
}

Employee.prototype.getSalary = function () {
  console.log(`${this.firstName} is getting Salary.`)
}

let e1 = Employee("John", "Doe", 25, "engineering", 200000)

console.log(e1)
// e1.work() // This should work now.
```

![Screenshot 2023-09-06 at 4.21.01 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/e7ab2b2f-ef9b-4992-9a0f-fc67e7e9e6a3/c3898fb2-7bd7-41c2-b3a6-a9a49b1ca6ac/Screenshot_2023-09-06_at_4.21.01_PM.png)

## iPhone example with Factory Method

This is what we have so far

```jsx
// write a factory function iPhone1 to create iPhone objects in bulk quantiy
// iPhone1 takes in ASIN, color, display, camera
// the object it creates has the following
// properties: ASIN, color, display, camera
// methods:
// dial - console logs "tring.. tring..."
// sendMessage - console logs "Sending message..."
// cameraClick - "Camera clicked"

function iPhoneGen1(ASIN, color, display, camera) {
  let obj = {}

  obj.ASIN = ASIN
  obj.color = color
  obj.display = display
  obj.camera = camera

  obj.dial = function () {
    console.log("tring.. tring...")
  }

  obj.sendMessage = function () {
    console.log("Sending message...")
  }

  obj.cameraClick = function () {
    console.log("Camera clicked")
  }

  return obj
}

let iphone1 = iPhoneGen1("B09X67JBQV", "Gray", "90mm", "2.0 MP")
iphone1.dial() // "tring.. tring..."
iphone1.sendMessage() // "Sending message..."
iphone1.cameraClick() // "Camera clicked"
```

In console, this is how it looks

```jsx
{
  ASIN: "B09X67JBQV"
  camera: "2.0 MP"
  cameraClick: ƒ()
  color: "Gray"
  dial: ƒ()
  display: "90mm"
  sendMessage: ƒ()
}
```

---

The idea is to share some of the methods above like `dial` , `sendMessage`, `cameraClick` . For this we can move the methods inside of prototype object;

```jsx
function iPhoneGen1(ASIN, color, display, camera) {
  let obj = {}
  Object.setPrototypeOf(obj, iPhoneGen1.prototype) // set the prototype of the object that we are returning here to iPhoneGen1 prototype;

  obj.ASIN = ASIN
  obj.color = color
  obj.display = display
  obj.camera = camera

  return obj
}

iPhoneGen1.prototype.dial = function () {
  console.log("tring.. tring...")
}

iPhoneGen1.prototype.sendMessage = function () {
  console.log("Sending message...")
}

iPhoneGen1.prototype.cameraClick = function () {
  console.log("Camera clicked")
}

let iphone1 = iPhoneGen1("B09X67JBQV", "Gray", "90mm", "2.0 MP")

console.log(iphone1)

iphone1.dial() // "tring.. tring..."
iphone1.sendMessage() // "Sending message..."
iphone1.cameraClick() // "Camera clicked"
```

In console, this is how it looks

```jsx
{
  ASIN: "B09X67JBQV"
  camera: "2.0 MP"
  color: "Gray"
  display: "90mm",
  [[Prototype]] : {
    cameraClick : ƒ (),
    dial: ƒ(),
    sendMessage: ƒ ()
  }
}
```

Now when there comes in Gen 2 Iphones, we want it to share some of the properties from Gen 1 phones and Some new properties/methods will be added to it’s own prototypes

```jsx
function iPhoneGen1(ASIN, color, display, camera) {
  let obj = {}
  Object.setPrototypeOf(obj, iPhoneGen1.prototype) // set the prototype of the object that we are returning here to iPhoneGen1 prototype;

  obj.ASIN = ASIN
  obj.color = color
  obj.display = display
  obj.camera = camera

  return obj
}

iPhoneGen1.prototype.dial = function () {
  console.log("tring.. tring...")
}

iPhoneGen1.prototype.sendMessage = function () {
  console.log("Sending message...")
}

iPhoneGen1.prototype.cameraClick = function () {
  console.log("Camera clicked")
}

// we want to create second generation iphone now which will have some of the stuff inherited from first generation iphone and some of the stuff will be new;
function iPhoneGen2(ASIN, color, display, camera, bluetooth) {
  let obj = iPhoneGen1(ASIN, color, display, camera)

  Object.setPrototypeOf(obj, iPhoneGen2.prototype)
  obj.bluetooth = bluetooth

  return obj
}

Object.setPrototypeOf(iPhoneGen2.prototype, iPhoneGen1.prototype) // set prototype of iPhoneGen2 to iPhoneGen1 prototype ( Iphone gen2 prototype object will have Iphone gen 1 object as it's prototype meaning some of the prop/methods of iphone gen 1 will be shared by iphoneGen2 by using this prototype chain )

iPhoneGen2.prototype.connectToBT = function () { // new properties/methods added 
  console.log("Bluetooh connected")
}

iPhoneGen2.prototype.disConnectFromBT = function () {
  console.log("Bluetooh disconnected")
}

let iPhoneSecondGenFirst = iPhoneGen2("NVIOF284", "green", "6.5", "5MP", "1.4")

console.log(iPhoneSecondGenFirst)
iPhoneSecondGenFirst.cameraClick()
```

![Screenshot 2023-09-06 at 4.54.58 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/e7ab2b2f-ef9b-4992-9a0f-fc67e7e9e6a3/4a36e725-b62b-43ef-9017-897d078a8d5d/Screenshot_2023-09-06_at_4.54.58_PM.png)

### 2. Constructor Functions :

Converting factory function into constructor function and adding prototypes in constructor functions

```jsx
function Person(firstName, lastName, age) {
  let obj = {}
  Object.setPrototypeOf(obj, Person.prototype)

  obj.firstName = firstName
  obj.lastName = lastName
  obj.age = age

  return obj
}

Person.prototype.increaseAge = function () {
  this.age = this.age + 1
  console.log(this.age)
}

Person.prototype.sleep = function () {
  console.log(`${this.firstName} is sleeping.`)
}

Person.prototype.eat = function () {
  console.log(`${this.firstName} is eating.`)
}

Person.prototype.introduceSelf = function () {
  console.log(this.firstName, this.lastName, this.age)
}

let person1 = Person("Bruce", "Wayne", 26)
console.log(person1)
person1.increaseAge()
person1.sleep()
person1.eat()
person1.introduceSelf()
```

```jsx
function Person(firstName, lastName, age) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}

Person.prototype.increaseAge = function () {
  this.age = this.age + 1
  console.log(this.age)
}

Person.prototype.sleep = function () {
  console.log(`${this.firstName} is sleeping.`)
}

Person.prototype.eat = function () {
  console.log(`${this.firstName} is eating.`)
}

Person.prototype.introduceSelf = function () {
  console.log(this.firstName, this.lastName, this.age)
}

let person1 = new Person("Bruce", "Wayne", 26)
console.log(person1)
person1.increaseAge()
person1.sleep()
person1.eat()
person1.introduceSelf()
```

The response will be same in both the cases

![Screenshot 2023-09-06 at 3.25.30 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/e7ab2b2f-ef9b-4992-9a0f-fc67e7e9e6a3/dcf83cb4-b813-4eab-ad1c-a2c8e5762379/Screenshot_2023-09-06_at_3.25.30_PM.png)

---

```jsx
function Person(firstName, lastName, age) {
  let obj = {}
  Object.setPrototypeOf(obj, Person.prototype)

  obj.firstName = firstName
  obj.lastName = lastName
  obj.age = age

  return obj
}

Person.prototype.increaseAge = function () {
  this.age = this.age + 1
  console.log(this.age)
}

Person.prototype.sleep = function () {
  console.log(`${this.firstName} is sleeping.`)
}

Person.prototype.eat = function () {
  console.log(`${this.firstName} is eating.`)
}

Person.prototype.introduceSelf = function () {
  console.log(this.firstName, this.lastName, this.age)
}

function Employee(firstName, lastName, age, department, salary) {
  let obj = Person(firstName, lastName, age) 
  Object.setPrototypeOf(obj, Employee.prototype) // the object we are gonna return will have Employee.prototype as its prototype;
  obj.department = department
  obj.salary = salary

  return obj
}

Object.setPrototypeOf(Employee.prototype, Person.prototype) // Employee prototype object's prototype will be set to Person.prototype;

Employee.prototype.work = function () {
  console.log(`${this.firstName} is working.`)
}

Employee.prototype.getSalary = function () {
  console.log(`${this.firstName} is getting Salary.`)
}

let e1 = Employee("John", "Doe", 25, "engineering", 200000)

console.log(e1)
// e1.work() // This should work now.
```

```jsx
function Person(firstName, lastName, age) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}

Person.prototype.increaseAge = function () {
  this.age = this.age + 1
  console.log(this.age)
}

Person.prototype.sleep = function () {
  console.log(`${this.firstName} is sleeping.`)
}

Person.prototype.eat = function () {
  console.log(`${this.firstName} is eating.`)
}

Person.prototype.introduceSelf = function () {
  console.log(this.firstName, this.lastName, this.age)
}

function Employee(firstName, lastName, age, department, salary) {
  // notice that we are not calling Person() with the new keyword
  // we are using it as a simple function
  // Using call, we are passing it our new `this` object and
  // the `Person()` function will stick the `firstName`, `lastName`, `age` property to `this` object
  Person.call(this, firstName, lastName, age)

  // we know that Employee will be called with the new keyword
  // so assume it already has an empty object called `this` which will be
  // returned at the end of the function

  // the objects created with the Teacher function must
  // have a property called `subject`
  this.department = department
  this.salary = salary
}

// linking the prototype of Employee to Person so that the
// employee has access to all the methods of a Person
Object.setPrototypeOf(Employee.prototype, Person.prototype)

Employee.prototype.work = function () {
  console.log(`${this.firstName} is working.`)
}

Employee.prototype.getSalary = function () {
  console.log(`${this.firstName} is getting Salary.`)
}

let e1 = new Employee("John", "Doe", 25, "engineering", 200000)

console.log(e1)
e1.work() // This should work now.
e1.sleep() // This should work now.
```

**Factory**

![Screenshot 2023-09-06 at 4.21.01 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/e7ab2b2f-ef9b-4992-9a0f-fc67e7e9e6a3/c3898fb2-7bd7-41c2-b3a6-a9a49b1ca6ac/Screenshot_2023-09-06_at_4.21.01_PM.png)

**Constructor**

![Screenshot 2023-09-06 at 6.01.22 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/e7ab2b2f-ef9b-4992-9a0f-fc67e7e9e6a3/24aeeb4f-4d1f-437c-a976-e3ee5711f35e/Screenshot_2023-09-06_at_6.01.22_PM.png)

---

## iPhone example with Constructor Function

We Started Factory function of Iphone with this 

Equivalent Constructor function

```jsx
function iPhoneGen1(ASIN, color, display, camera) {
  let obj = {}

  obj.ASIN = ASIN
  obj.color = color
  obj.display = display
  obj.camera = camera

  obj.dial = function () {
    console.log("tring.. tring...")
  }

  obj.sendMessage = function () {
    console.log("Sending message...")
  }

  obj.cameraClick = function () {
    console.log("Camera clicked")
  }

  return obj
}

let iphone1 = iPhoneGen1("B09X67JBQV", "Gray", "90mm", "2.0 MP")
iphone1.dial() // "tring.. tring..."
iphone1.sendMessage() // "Sending message..."
iphone1.cameraClick() // "Camera clicked"
```

```jsx
function IPhoneGen1(ASIN, color, display, camera) {
  this.ASIN = ASIN
  this.color = color
  this.display = display
  this.camera = camera

  this.dial = function () {
    console.log("tring.. tring...")
  }

  this.sendMessage = function () {
    console.log("Sending message...")
  }

  this.cameraClick = function () {
    console.log("Camera clicked")
  }
}

let iPhoneGen1First = new IPhoneGen1("B09X67JBQV", "Gray", "90mm", "2.0 MP")
iPhoneGen1First.dial() // "tring.. tring..."
iPhoneGen1First.sendMessage() // "Sending message..."
iPhoneGen1First.cameraClick() // "Camera clicked"
```

---

The idea is to share some of the methods above like `dial` , `sendMessage`, `cameraClick` . For this we can move the methods inside of prototype object;

```jsx
function iPhoneGen1(ASIN, color, display, camera) {
  let obj = {}
  Object.setPrototypeOf(obj, iPhoneGen1.prototype) // set the prototype of the object that we are returning here to iPhoneGen1 prototype;

  obj.ASIN = ASIN
  obj.color = color
  obj.display = display
  obj.camera = camera

  return obj
}

iPhoneGen1.prototype.dial = function () {
  console.log("tring.. tring...")
}

iPhoneGen1.prototype.sendMessage = function () {
  console.log("Sending message...")
}

iPhoneGen1.prototype.cameraClick = function () {
  console.log("Camera clicked")
}

let iphone1 = iPhoneGen1("B09X67JBQV", "Gray", "90mm", "2.0 MP")

console.log(iphone1)

iphone1.dial() // "tring.. tring..."
iphone1.sendMessage() // "Sending message..."
iphone1.cameraClick() // "Camera clicked"
```

Equivalent in Constructor function

```jsx
function IPhoneGen1(ASIN, color, display, camera) {
  this.ASIN = ASIN
  this.color = color
  this.display = display
  this.camera = camera
}
IPhoneGen1.prototype.dial = function () {
  console.log("tring.. tring...")
}

IPhoneGen1.prototype.sendMessage = function () {
  console.log("Sending message...")
}

IPhoneGen1.prototype.cameraClick = function () {
  console.log("Camera clicked")
}

let iPhoneGen1First = new IPhoneGen1("B09X67JBQV", "Gray", "90mm", "2.0 MP")
iPhoneGen1First.dial() // "tring.. tring..."
iPhoneGen1First.sendMessage() // "Sending message..."
iPhoneGen1First.cameraClick() // "Camera clicked"
```

In console, this is how it looks

```jsx
{
  ASIN: "B09X67JBQV"
  camera: "2.0 MP"
  color: "Gray"
  display: "90mm",
  [[Prototype]] : {
    cameraClick : ƒ (),
    dial: ƒ(),
    sendMessage: ƒ ()
  }
}
```

---

Now when there comes in Gen 2 Iphones, we want it to share some of the properties from Gen 1 phones and Some new properties/methods will be added to it’s own prototypes

```jsx
function iPhoneGen1(ASIN, color, display, camera) {
  let obj = {}
  Object.setPrototypeOf(obj, iPhoneGen1.prototype) // set the prototype of the object that we are returning here to iPhoneGen1 prototype;

  obj.ASIN = ASIN
  obj.color = color
  obj.display = display
  obj.camera = camera

  return obj
}

iPhoneGen1.prototype.dial = function () {
  console.log("tring.. tring...")
}

iPhoneGen1.prototype.sendMessage = function () {
  console.log("Sending message...")
}

iPhoneGen1.prototype.cameraClick = function () {
  console.log("Camera clicked")
}

// we want to create second generation iphone now which will have some of the stuff inherited from first generation iphone and some of the stuff will be new;
function iPhoneGen2(ASIN, color, display, camera, bluetooth) {
  let obj = iPhoneGen1(ASIN, color, display, camera)

  Object.setPrototypeOf(obj, iPhoneGen2.prototype)
  obj.bluetooth = bluetooth

  return obj
}

Object.setPrototypeOf(iPhoneGen2.prototype, iPhoneGen1.prototype) // set prototype of iPhoneGen2 to iPhoneGen1 prototype ( Iphone gen2 prototype object will have Iphone gen 1 object as it's prototype meaning some of the prop/methods of iphone gen 1 will be shared by iphoneGen2 by using this prototype chain )

iPhoneGen2.prototype.connectToBT = function () { // new properties/methods added 
  console.log("Bluetooh connected")
}

iPhoneGen2.prototype.disConnectFromBT = function () {
  console.log("Bluetooh disconnected")
}

let iPhoneSecondGenFirst = iPhoneGen2("NVIOF284", "green", "6.5", "5MP", "1.4")

console.log(iPhoneSecondGenFirst)
iPhoneSecondGenFirst.cameraClick()
```

Equivalent using Constructor Function

```jsx
function IPhoneGen1(ASIN, color, display, camera) {
  this.ASIN = ASIN
  this.color = color
  this.display = display
  this.camera = camera
}
IPhoneGen1.prototype.dial = function () {
  console.log("tring.. tring...")
}

IPhoneGen1.prototype.sendMessage = function () {
  console.log("Sending message...")
}

IPhoneGen1.prototype.cameraClick = function () {
  console.log("Camera clicked")
}

function IPhoneGen2(ASIN, color, display, camera, bluetooth) {
  IPhoneGen1.call(this, ASIN, color, display, camera)
  this.bluetooth = bluetooth
}

Object.setPrototypeOf(IPhoneGen2.prototype, IPhoneGen1.prototype)

IPhoneGen2.prototype.connectToBT = function () {
  // new properties/methods added
  console.log("Bluetooh connected")
}

IPhoneGen2.prototype.disConnectFromBT = function () {
  console.log("Bluetooh disconnected")
}

let iphoneGen2FirstPhone = new IPhoneGen2(
  "NVIOF284",
  "green",
  "6.5",
  "5MP",
  "1.4"
)

console.log(iphoneGen2FirstPhone)
iphoneGen2FirstPhone.cameraClick()
```