# Promises - Student Notes

Promises in JavaScript are a powerful way to work with asynchronous operations. They help you manage and handle asynchronous tasks more elegantly and avoid callback hell (a situation where you have deeply nested callbacks). Promises provide a more structured and readable way to work with asynchronous code. Let's break down what promises are and how they work:

### What is a promise in javascript ?

A promise is a special javascript object created using the `Promise` constructor.

1. `Promise` constructor takes a single function (usually called the executor function) as its argument. 
2. This executor function has two parameters: **`resolve`** and **`reject`**, which are callback functions provided by javascript that you call when the asynchronous operation is successful or has failed, respectively.

```jsx
let myPromise = new Promise(function(resolve, reject) {    
   // Make an asynchronous call and either resolve or reject;
});
console.log(myPromise) // This will be a Promise object {}
```

Understand that promises are generally used for async operations but technically speaking, one can use it for sync operations as well 

### **How promises are resolved and rejected :**

This is an example of promise that gets resolved immediately

```jsx
let myPromise1 = new Promise(function(resolve, reject) {
    resolve("I am done");
});

console.log(myPromise1)

{
  [[PromiseState]] : "fulfilled",
  [[PromiseResult]] : "I am done"
  [[Prototype]] : Promise,
}
```

This one below is an example of promise that gets reject immediately

```jsx
let myPromise2 = new Promise(function (resolve, reject) {
  reject("Broken promise")
})

console.log(myPromise2)

{
  [[PromiseState]] : "rejected",
  [[PromiseResult]] : "Broken promise"
  [[Prototype]] : Promise,
}
```

### Understanding promise object :

Each promise object ( `myPromise1` or `myPromise2` ) initially before it gets `resolved` or `rejected` will have the state as `pending`

```jsx
{
  [[PromiseState]] : "pending",
  [[PromiseResult]] : undefined
  [[Prototype]] : Promise,
}
```

But we didn’t see that in the above example ?? Right ??

Well that’s because in the above example, it was not an asynchronous operation and so the promise was immediately getting `resolved`  or `rejected` and hence you didn’t see the promise object when it’s state is `pending`

Generally speaking, you will use promises to handle async operations. So let’s take an example wherein async operation is involved

```jsx
let isNetworkRequestSuccessfull = false; // true, false -------> Since we aren't making actual network request. I am hardcoding this condition here;

let myPromise = new Promise(function (resolve, reject) {

		// imitating a network request
		setTimeout(function () { 
		    if (isNetworkRequestSuccessfull) { // if network request is successfull --> resolve will be called and the data that you want to user will be send as arguement to that
		      resolve({ data: { id: 1 }, error: false })
		    } else { // if network request is unsuccessfull --> reject will be called and the error data/message that you want to user will be send as arguement to that
		      reject({ data: null, error: true })
		    }
		  }, 1000)

})

console.log(myPromise)

myPromise
	.then(function(res) {
	  console.log(res) // what should happen when the promise is fulfilled ; 
		// value that you passed as argument to resolve callback function will be available here
	})
	.catch(function(err) {
	  console.log(err) // what should happen when the promise is rejected; 
		// value that you passed as argument to reject callback function will be available here
	})
```

Now a better way to view Promise object at different states would be to use debugger tool of chrome and showcase the same

These internal properties are code-inaccessible but they are inspectable. This means that we will be able to inspect the `state` and `result` property values using the debugger tool, but we will not be able to access them directly using the program.

**CASE 1** : `**myPromise` object with state pending and result undefined**

![Screenshot 2023-09-08 at 5.41.07 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/e7ab2b2f-ef9b-4992-9a0f-fc67e7e9e6a3/b363f457-250e-403e-a6db-f59d9ab0b0ed/Screenshot_2023-09-08_at_5.41.07_PM.png)

**CASE 2** : `**myPromise` object with state fulfilled and result `{ data: { id:1}, error: false  }`**

![Screenshot 2023-09-08 at 5.42.41 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/e7ab2b2f-ef9b-4992-9a0f-fc67e7e9e6a3/c3097b07-34ac-48db-9401-a9319494be73/Screenshot_2023-09-08_at_5.42.41_PM.png)

**CASE 3** : `**myPromise` object with state rejected and result `{ data: null, error: true  }`**

![Screenshot 2023-09-08 at 5.41.41 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/e7ab2b2f-ef9b-4992-9a0f-fc67e7e9e6a3/60159b49-67e2-499c-8da7-bfea8d528ea0/Screenshot_2023-09-08_at_5.41.41_PM.png)

The `myPromise` object that is created using Promise constructor function has following internal properties

1. State : This property can have the following values
    1. `pending`: Initially when the executor function starts the execution.
    2. `fulfilled`: When the promise is resolved.
    3. `rejected`: When the promise is rejected.
2. Result : This property can have the following values:
    1. `undefined`: Initially when the `state` value is `pending`.
    2. `value`: When `resolve(value)` is called.
    3. `error`: When `reject(error)` is called.

```jsx
// pending
{
  [[PromiseState]] : "pending",
  [[PromiseResult]] : undefined
  [[Prototype]] : Promise,
}
```

```jsx
// fulfilled
{
  [[PromiseState]] : "fulfilled",
  [[PromiseResult]] : value passed inside resolve callback
  [[Prototype]] : Promise,
}
```

```jsx
// rejected
{
  [[PromiseState]] : "rejected",
  [[PromiseResult]] : error value passed inside reject callback
  [[Prototype]] : Promise,
}
```

A promise that is either resolved or rejected is called `settled`.

![promise-state-result.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/e7ab2b2f-ef9b-4992-9a0f-fc67e7e9e6a3/0db185db-01d2-4000-9236-d0db234693de/promise-state-result.png)

### Using Promises : Let’s understand this `.then` , `.catch`, `.finally`

```jsx
let isNetworkRequestSuccessfull = false

let myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (isNetworkRequestSuccessfull) {
      resolve({ data: { id: 1 }, error: false })
    } else {
      reject({ data: null, error: true })
    }
  }, 1000)
})

console.log(myPromise)

myPromise
  .then(function (res) {
    console.log(res) // what should happen when the promise is fulfilled ;
    // value that you passed as argument to resolve callback function will be available here
  })
  .catch(function (err) {
    console.log(err) // what should happen when the promise is rejected;
    // value that you passed as argument to reject callback function will be available here
  })
```

Whenever a promise object is created using Promise constructor. In it’s prototype, you will have these methods `.then` , `.catch` , `.finally` ..

1. Code goes in `.then` when `resolve()` is called
2. Code goes in `.catch` when `reject()` is called
3. Code goes in `.finally` in any case, even if `resolve` or `reject` is called

---

### Why Promises when we can use callbacks for async operations ?

1. `firstTask` , `secondTask` and `thirdTask` are three tasks which takes some time to execute.
2. Only when the `firstTask` completes it’s execution, then you can call `secondTask` .Only when the `secondTask` completes it’s execution, then you can call `thirdTask`. That should be the order of execution
3. So you end up writing a code like this. Try to visualize callstack for the same ( use loupe )
4. When you have a deeply nested callbacks in your code, It makes your code hard to read, maintain, and debug. It’s also called callback hell or Pyramid of Doom

```jsx
function firstTask(callback) {
  setTimeout(function () {
    console.log("First task done.")
    callback()
  }, 1000)
}

function secondTask(callback) {
  setTimeout(function () {
    console.log("Second task done.")
    callback()
  }, 1000)
}

function thirdTask(callback) {
  setTimeout(function () {
    console.log("Third task done.")
    callback()
  }, 1000)
}

firstTask(function () {
  secondTask(function () {
    thirdTask(function () {
      console.log("All tasks are completed.")
    })
  })
})

/* 
  callback function passed to firstTask function :

  function () {
    secondTask(function () {
      thirdTask(function () {
        console.log("All tasks are completed.")
      })
    })
  }  

  //----------------------------------------------------------------

  callback function passed to secondTask function :

  function () {
    thirdTask(function () {
      console.log("All tasks are completed.")
    })
  }

  //----------------------------------------------------------------

  callback function passed to thirdTask function :

  function () {
    console.log("All tasks are completed.")
  }

*/
```

The solution ?

**Promises**  : Promises can help resolve callback hell by providing a more structured and readable way to handle asynchronous operations. Now, let's refactor the same example using promises

```jsx
function firstTask() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("First task done.")
      resolve()
    }, 1000)
  })
}

function secondTask() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Second task done.")
      resolve()
    }, 1000)
  })
}

function thirdTask() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Third task done.")
      resolve()
    }, 1000)
  })
}

firstTask()
  .then(secondTask)
  .then(thirdTask)
  .then(function () {
    console.log("All tasks are completed.")
  })
```

In this refactored code, each task is wrapped in a promise, and we use **`.then()`** to specify the order of execution. It's more linear and easier to follow, especially as you add more tasks or error handling.

### Promise Chaining :

In this example:

1. We have three functions (**`doTask1`**, **`doTask2`**, and **`doTask3`**), each simulating a task with a different timeout using **`setTimeout`**.
2. Each function returns a promise, and inside the promise, we use **`setTimeout`** to simulate a delay before resolving the promise.
3. We use promise chaining with **`.then()`** to ensure the tasks are executed sequentially. When one task is completed, it triggers the next one in the chain.
4. The final **`.then()`** block logs "All tasks completed." when all tasks are done.
5. The **`.catch()`** block is used to catch and handle any errors that may occur during the execution of tasks.
    
    ```jsx
    // Using promise chaining to execute tasks sequentially
    doTask1()
      .then(doTask2)
      .then(doTask3)
      .then(() => {
        console.log("All tasks completed.");
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
    ```
    

This example demonstrates how you can use promises to execute a series of asynchronous tasks one after another in a clean and readable manner. This is also called Promise Chaining

---

### Bonus :

**1. `Promise.all`:**

`Promise.all` takes an array of promises and returns a new promise that resolves when all the promises in the array have resolved. If any of the promises in the array rejects, the returned promise will reject with the reason of the first rejected promise.

```jsx
const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Task 1');
  }, 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Task 2');
  }, 1500);
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Task 3');
  }, 800);
});

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log('All tasks completed:', results);
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });

```

In this example, `Promise.all` waits for all three promises to resolve and then logs their results as an array when they are all done.

**2. `Promise.any`:**

`Promise.any` takes an array of promises and returns a new promise that resolves as soon as one of the promises in the array resolves. If all promises in the array reject, the returned promise rejects with an error.

```jsx
const promiseA = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Task A');
  }, 2000);
});

const promiseB = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Task B failed');
  }, 1000);
});

const promiseC = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Task C');
  }, 1500);
});

Promise.any([promiseA, promiseB, promiseC])
  .then((result) => {
    console.log('One task completed:', result);
  })
  .catch((error) => {
    console.error('All tasks failed:', error);
  });

```

In this example, `Promise.any` resolves with the result of the first promise (in this case, "Task C") that resolves.

**3. `Promise.allSettled`:**

`Promise.allSettled` takes an array of promises and returns a new promise that resolves with an array of objects, each representing the outcome of a promise (whether it resolved or rejected), without stopping on errors.

```jsx
const promiseX = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Task X');
  }, 1000);
});

const promiseY = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Task Y failed');
  }, 1500);
});

const promiseZ = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Task Z');
  }, 800);
});

Promise.allSettled([promiseX, promiseY, promiseZ])
  .then((results) => {
    console.log('Results:', results);
  });

```

In this example, `Promise.allSettled` logs the outcomes of all promises, including both resolved and rejected ones.

**4. `Promise.race`:**

`Promise.race` takes an array of promises and returns a new promise that resolves or rejects as soon as one of the promises in the array resolves or rejects.

```jsx
const promiseA = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Task A');
  }, 2000);
});

const promiseB = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Task B failed');
  }, 1000);
});

const promiseC = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Task C');
  }, 1500);
});

Promise.race([promiseA, promiseB, promiseC])
  .then((result) => {
    console.log('First task completed:', result);
  })
  .catch((error) => {
    console.error('First task failed:', error);
  });

```

In this example, `Promise.race` resolves or rejects with the result of the first promise (in this case, "Task B failed") that settles.