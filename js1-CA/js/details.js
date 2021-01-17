const detailsContainer = document.querySelector(".results");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("i");


const url = "http://www.omdbapi.com/?apikey=160891a7&i=" + id;



async function getDetails() {

    try {
        const response = await fetch(url);

        const result = await response.json();

        document.title = result.Title;

        console.log(result);

        detailsContainer.innerHTML = `
                                <div class="details-description">
                                <div class=""><h1>${result.Title}</h1>
                                    <h3>Details:</h3>
                                        <p><b>Actors:</b> ${result.Actors}</p>
                                        <p><b>Director:</b> ${result.Director}</p>
                                        <p><b>Country:</b> ${result.Country}</p>
                                        <p><b>Genre:</b> ${result.BoxOffice}</p>
                                        <p><b>Language:</b> ${result.Language}</p>                 
                                        <p><b>Released:</b> ${result.Released}</p>
                                        <p><b>Runtime:</b> ${result.Runtime}</p>
                                        <p><b>Metascore:</b> ${result.Metascore}</p>
                                        <p><b>Imdb rating:</b> ${result.imdbRating}</p>
                                    </div>
                                    <div class="plot">
                                        <h3>Plot:</h3>
                                        <p>${result.Plot}</p>
                                    </div>
                                    <a href="index.html">Back to movie list</a>
                                </div>`;

    }
    catch (error) {
        detailsContainer.innerHTML = "Something went wrong!";
    }
}

getDetails();