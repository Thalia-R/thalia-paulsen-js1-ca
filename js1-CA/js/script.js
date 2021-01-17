

const apiUrl = "http://www.omdbapi.com/?apikey=160891a7&s=star wars";

const movieContainer = document.querySelector(".results");


async function getMovies() {

  try {

    const response = await fetch(apiUrl);

    const results = await response.json();

    const facts = results.Search;

    console.log(facts);

    movieContainer.innerHTML = "";


    for (let i = 0; i < facts.length; i++) {
      console.log(facts[i].Title);

      console.log(facts[i].imdbID)

      movieContainer.innerHTML += `<div class="result"> 
                                    <h3>${facts[i].Title}</h3>
                                     <p>Type: ${facts[i].Type}</p>
                                     <p>Year: ${facts[i].Year}</p>  
                                     <a href="details.html?i=${facts[i].imdbID}">Details >></a>
                                  </div>`;
    }
  }

  catch (error) {
    movieContainer.innerHTML = "Something went wrong!";
  }
}



getMovies();

