  const movieData = `
[
  {
    "title": "Interstellar",
    "director": "Christopher Nolan",
    "price": 10.99,
    "image": "paths/interstellarPoster.jpg"
  },
  {
    "title": "WALL-E",
    "director": "Andrew Stanton",
    "price": 7.99,
    "image": "paths/Wall-E.jpg"
  },
  {
    "title": "10 Things I Hate About You",
    "director": " Gil Junger",
    "price": 8.99,
    "image": "paths/10Things.jpg"
  }
]`;

  class Movie {
    #price;
  
    constructor(title, director, price, image) {
      this.title = title;
      this.director = director;
      this.image = image;
      this.setprice(price);
    }
  
    getprice() {
      return this.#price;
    }
  
    setprice(newprice) {
      if (newprice >= 0) {
        this.#price = newprice;
      } else {
        console.error("price cannot be negative.");
        this.#price = 0;
      }
    }
  
    toString() {
      return `${this.title} by ${this.director}, $${this.#price.toFixed(2)}`;
    }
  
    renderCard() {
        const card = document.createElement("div");
        card.className = "movie-card";
      
        const img = document.createElement("img");
        img.src = this.image;
        img.alt = this.title;
      
        const infoDiv = document.createElement("div");
        infoDiv.className = "movie-info";
      
        const title = document.createElement("h3");
        title.textContent = this.title;
      
        const director = document.createElement("p");
        director.textContent = `Director: ${this.director}`;
      
        const price = document.createElement("p");
        price.textContent = `Price: $${this.#price.toFixed(2)}`;
      
        infoDiv.appendChild(title);
        infoDiv.appendChild(director);
        infoDiv.appendChild(price);
      
        card.appendChild(img);
        card.appendChild(infoDiv);
      
        return card;
      }
      
      
  }
const movieArray = JSON.parse(movieData);
const container = document.getElementById("media-container");

movieArray.forEach(movieObj => {
  const movie = new Movie(
    movieObj.title,
    movieObj.director,
    movieObj.price,
    movieObj.image
  );

  container.appendChild(movie.renderCard());
});


  