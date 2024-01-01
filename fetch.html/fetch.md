# Fetch - I Student Notes

- Fetch
- Local Storage

### What is `fetch()`?

`fetch()` is a modern way in JavaScript to make network requests, like fetching data from a server or sending data to one. . 

### Basic Structure:

```jsx
fetch('<https://api.example.com/data>') // This is the URL you're "calling".
  .then(response => response.json())  // Convert the response to a format we can easily work with.
  .then(data => {
    // Do something with the data
    console.log(data);
  })
  .catch(error => {
    // If something goes wrong, this block will run.
    console.error("There was an error fetching the data.", error);
  });

```

With the basic structure we've discussed, you can start making simple requests and handle the data they return. As you become more familiar with it, you'll discover even more capabilities and options it offers.

### Breaking it Down:

1. **URL:** The URL inside `fetch('<https://api.example.com/data>')` is the web address we want to get data from or send data to.
2. **.then() Method:** Think of `.then()` as the next step in a sequence. It's used because network operations can take time, so JavaScript doesn't want to just sit around waiting. Instead, it says, "When you're done getting that data, *then* do this next thing."
3. **response => response.json():** When the server gives us back data, it's often not in a format that's easy for JavaScript to work with immediately. So, we convert it into a "JavaScript-friendly" format called JSON.
4. **data => { ... }:** Now that we have our data in a format we can use, we define what to do with it. For simplicity, we're just logging it to the console in this example.
5. **.catch() Method:** Sometimes, things go wrong. Maybe the server is down, or we made a typo in the URL. The `.catch()` method lets us handle any errors gracefully, meaning our entire script won't crash.

### Notes:

- `fetch()` returns  a "Promise"
- The beauty of `fetch()` is that it's part of modern JavaScript, so you don't need any additional libraries or tools to use it.

---

As a frontend developer, your task is to retrieve data from the backend (the storage room) and show it on the frontend (the display). This data is managed by backend developers, and they provide specific instructions on how to access it.

These instructions are called **API documentation**. It's like a guidebook written by the backend team to help frontend developers know the right way to ask for data. So different Products. Different API, Different API Documentations. It’s like different machines that you have in your house like washing machine, refrigerator etc having different user manual. You read that particular machine’s user manual ( API Documentation ) to understand about that machine ( API )  

Using the `fetch` function in JavaScript, you can follow these instructions to request data from the backend. Once you have the data, you can display it in your application. This means your application is now not just a standalone app but is connected to a backend server, pulling real data to show to users.

So our agenda in this particular session is to 

1. Explore some API documentations
2. Use fetch API and build some application which makes network request to the server and use the response and display the same onto UI.
3. We will also see a cool tool called Local Storage and how it can be useful

---

### Example 1

API Docs :

[Reqres - A hosted REST-API ready to respond to your AJAX requests](https://reqres.in/)

index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      #container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        margin-top: 5%;
        margin-left: 5%;
        margin-right: 5%;
        grid-gap: 20px;
      }

      #container > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid #cecece;
      }

      img {
        width: 90%;
        height: 225px;
      }
    </style>
    <title>Reqres</title>
  </head>
  <body>
    <h1>Get Dummy Users data</h1>
    <div id="container"></div>
  </body>
</html>
<script src='index.js'></script>

```

index.js

```jsx
      let container = document.getElementById("container");

      let data = [];

      // get the data
      fetch("https://reqres.in/api/users") //fetch is a promise and promises takes time
        .then(function (res) {
          return res.json();
        })
        .then(function (res) {
          data = res.data;
          console.log("data:", data);
          displayData(data);
        });

      function displayData(data) {
        data.forEach(function (user) {
          let div = document.createElement("div");

          let avatar = document.createElement("img");

          avatar.src = user.avatar;

          let name = document.createElement("p");

          name.innerText = `${user.first_name} ${user.last_name}`;

          let email = document.createElement("p");

          email.innerText = user.email;

          div.append(avatar, name, email);

          container.appendChild(div);
        });
      }
```

---

### Example 2

API DOCS :

[Fake Store API](https://fakestoreapi.com/docs)

index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      #container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        margin-top: 5%;
        margin-left: 5%;
        margin-right: 5%;
        grid-gap: 20px;
      }

      #container > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid #cecece;
      }

      img {
        width: 90%;
        height: 225px;
      }
    </style>
    <title>E Commerce</title>
  </head>
  <body>
    <h1>E Commerce</h1>
    <div id="container"></div>
  </body>
  <script src="index.js"></script>
</html>
```

```jsx
    let container = document.getElementById("container");

    let data = [];

    // get the data
    fetch("https://fakestoreapi.com/products")
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        displayData(res);
      });

    function displayData(data) {
      data.forEach(function (product) {
        let div = document.createElement("div");

        let productImg = document.createElement("img");

        productImg.src = product.image;

        let title = document.createElement("p");

        title.innerText = product.title;

        let price = document.createElement("p");

        price.innerText = "INR : " + product.price;

        div.append(productImg, title, price);

        container.append(div);
      });
    }
```

---

### Local Storage :

### **What is Local Storage?**

Local Storage is a way for web pages to store data in a user's web browser. Think of it as a small closet in the browser where you can keep certain items (data) that you might need later. It's useful because even if you close the browser or turn off your computer, the items in this closet stay there, waiting for the next time you come back.

### **Why Use Local Storage?**

1. **Persistence**: Data saved in Local Storage remains there even after you close the browser.
2. **No Internet Needed**: Once the data is saved, you don't need an internet connection to access it.
3. **Performance**: Faster to fetch data from Local Storage than from a remote server.

### **How to Use Local Storage?**

Local Storage is like a simple key-value store. Imagine a box with labeled compartments. The label (key) helps you identify what's inside each compartment (value).

Here's how you can use it in JavaScript:

1. **Storing Data in local storage**

```jsx
localStorage.setItem('favoriteColor', 'blue');

```

Here, `favoriteColor` is the key, and `blue` is the value. We're basically saying, "In the box labeled 'favoriteColor', store the item 'blue'."

1. **getting the stored data from local storage**

```jsx
let color = localStorage.getItem('favoriteColor');
console.log(color); // Outputs: blue

```

With this, we're asking, "What's in the box labeled 'favoriteColor'?" And the answer is 'blue'.

1. **Removing a particular data by passing it’s key** 

```jsx
localStorage.removeItem('favoriteColor');

```

This command clears out the item in the 'favoriteColor' compartment.

1. **Clear Everything the entire local storage**

```jsx
localStorage.clear();

```

This is like emptying out the entire closet, removing all stored items.

### **Limitations and Notes**:

- **Space**: Local Storage is limited in size, often around 5MB. So, it's not suitable for storing large amounts of data.
- **Security**: It's not encrypted, so it's best not to store sensitive information like passwords.
- **Synchronous**: Local Storage operations are synchronous, which means they can block the main thread and potentially slow down your website if misused.

### **Conclusion**:

Local Storage is a handy tool for web developers to store small amounts of data directly in a user's browser. It's quick, doesn't require internet access once the data is saved, and retains data across sessions. But remember to use it wisely, considering its limitations!

---

### **Example 3**

API DOCS :

[OMDb API - The Open Movie Database](https://www.omdbapi.com/)

**Project Structure** : 

```jsx
.
├── index.html
├── index.js
├── moviedetails.html
└── moviedetails.js
```

```jsx
// index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 1px solid black;
        padding: 20px;
        margin: 20px;
      }
    </style>
    <title>OMDB API</title>
  </head>
  <body>
    <h1>OMDB MOVIES</h1>
    <input type="text" id="searchParam" />
    <button onclick="getData()">Search</button>
    <div id="container"></div>
    <script src="index.js"></script>
  </body>
</html>
```

```jsx
// index.js
let API_KEY = "API_KEY"
let container = document.getElementById("container")

function getData() {
  let searchParam = document.getElementById("searchParam").value

  // get the data
  fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchParam}`)
    .then(function (res) {
      return res.json()
    })
    .then(function (res) {
      displayData(res.Search)
    })
    .catch(function (err) {
      console.log(err)
    })
}

function displayData(moviesList) {
  container.innerHTML = ""

  if (!moviesList || moviesList.length === 0) {
    let notFoundDiv = document.createElement("div")
    notFoundDiv.textContent = "No Results Found"
    container.appendChild(notFoundDiv)
  } else {
    moviesList.map((movie) => {
      let movieCard = document.createElement("div")
      movieCard.className = "card"

      // Create Image
      let posterElement = document.createElement("img")
      posterElement.src = movie.Poster

      // Create Title
      let titleElement = document.createElement("p")
      titleElement.textContent = "Title : " + movie.Title

      // Create Year
      let yearElement = document.createElement("p")
      yearElement.textContent = "Year : " + movie.Year

      // Create IMDB ID;
      let idElement = document.createElement("p")
      idElement.textContent = "IMDB-ID : " + movie.imdbID

      // Create Type
      let typeElement = document.createElement("p")
      typeElement.textContent = "Type : " + movie.Type

      movieCard.append(
        posterElement,
        titleElement,
        yearElement,
        idElement,
        typeElement
      )

      movieCard.addEventListener("click", function (e) {
        localStorage.setItem("imdbID", movie.imdbID)
        location.href = "moviedetails.html"
      })

      container.append(movieCard)
    })
  }
}
```

```jsx
// moviedetails.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      .card {
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        padding: 20px;
        width: 40%;
        margin: auto;
      }
    </style>
    <title>Movie Details Page</title>
  </head>
  <body>
    <button onclick="backToMoviesPage()">Back to movies page</button>
    <div id="container"></div>
    <script src="moviedetails.js"></script>
  </body>
</html>
```

```jsx
// moviedetails.js
let container = document.getElementById("container")
let API_KEY = "API_KEY"

function backToMoviesPage() {
  location.href = "index.html"
}

function init() {
  let imdbID = localStorage.getItem("imdbID")

  // get the data
  fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`)
    .then(function (res) {
      return res.json()
    })
    .then(function (res) {
      displayData(res)
    })

  if (imdbID) {
  } else {
    container.innerHTML = ""
    let notFoundDiv = document.createElement("div")
    notFoundDiv.textContent = "IMDB ID Invalid.. Please Check"
    container.append(notFoundDiv)
  }
}

function displayData(movie) {
  container.innerHTML = ""
  let movieCard = document.createElement("div")
  movieCard.className = "card"

  let posterElement = document.createElement("img")
  posterElement.src = movie.Poster

  let titleElement = document.createElement("p")
  titleElement.textContent = "Title  : " + movie.Title

  let yearElement = document.createElement("p")
  yearElement.textContent = "Year : " + movie.Year

  let ratedElement = document.createElement("p")
  ratedElement.textContent = "Rated : " + movie.Rated

  let releasedElement = document.createElement("p")
  releasedElement.textContent = "Released : " + movie.Released

  let runtimeElement = document.createElement("p")
  runtimeElement.textContent = "Runtime : " + movie.Runtime

  let genreElement = document.createElement("p")
  genreElement.textContent = "Genre : " + movie.Genre

  let directorElement = document.createElement("p")
  directorElement.textContent = "Director : " + movie.Director

  let writerElement = document.createElement("p")
  writerElement.textContent = "Writer : " + movie.Writer

  let plotElement = document.createElement("p")
  plotElement.textContent = "Plot : " + movie.Plot

  let languageElement = document.createElement("p")
  languageElement.textContent = "Language : " + movie.Language

  let countryElement = document.createElement("p")
  countryElement.textContent = "Country : " + movie.Country

  let awardsElement = document.createElement("p")
  awardsElement.textContent = "Awards : " + movie.Awards

  let metascoreElement = document.createElement("p")
  metascoreElement.textContent = "Metascore : " + movie.Metascore

  let imdbRatingElement = document.createElement("p")
  imdbRatingElement.textContent = "IMDB Rating : " + movie.imdbRating

  let imdbVotesElement = document.createElement("p")
  imdbVotesElement.textContent = "IMDB Votes : " + movie.imdbVotes

  let typeElement = document.createElement("p")
  typeElement.textContent = "Type : " + movie.Type

  let DVDElement = document.createElement("div")
  DVDElement.textContent = "DVD : " + movie.DVD

  let boxOfficeElement = document.createElement("p")
  boxOfficeElement.textContent = "Box Office  : " + movie.BoxOffice

  let productionElement = document.createElement("p")
  productionElement.textContent = "Production : " + movie.Production

  let websiteElement = document.createElement("p")
  websiteElement.textContent = "Website : " + movie.Website

  let responseElement = document.createElement("p")
  responseElement.textContent = "Response : " + movie.Response

  // append all the element created above to movieCard element

  movieCard.append(
    posterElement,
    titleElement,
    yearElement,
    ratedElement,
    releasedElement,
    runtimeElement,
    genreElement,
    directorElement,
    writerElement,
    plotElement,
    languageElement,
    countryElement,
    awardsElement,
    metascoreElement,
    imdbRatingElement,
    imdbVotesElement,
    typeElement,
    DVDElement,
    boxOfficeElement,
    productionElement,
    websiteElement,
    responseElement
  )

  container.append(movieCard)
}

init()
```

---