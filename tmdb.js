const endPoint = "http://www.omdbapi.com/?apikey=3aa03983";
let movy=document.getElementById('movie');
let trailer=document.getElementById('trailer');
let section=document.getElementsByClassName('moviesContainer');
function getMovies(){
    let movieId=sessionStorage.getItem('movieId');
    const newurl = endPoint + "&i=" + movieId;
    fetch(newurl)
        .then((res) => res.json())
        .then((data) => {
            let movie=data;
            console.log(movie);
            output=`
            <div class="row">
            <div class="col-md-4">
            <img src="${movie.Poster}">
            </div>
            <div class="col=md-8">
            <h2>${movie.Title}</h2>
            <h3>Plot</h3>
            <p>${movie.Plot}</p>
            <ul class="list-group" style="list-style-type :none">
              <li class="list-group-item"><strong>Genre: </strong>${movie.Genre}</li>
              <li class="list-group-item"><strong>Released: </strong>${movie.Released}</li>
              <li class="list-group-item"><strong>IMDB: </strong>${movie.imdbRating}</li>
              <li class="list-group-item"><strong>Director: </strong>${movie.Director}</li>
              <li class="list-group-item"><strong>Cast: </strong>${movie.Actors}</li>
            </ul>
            </div>
            </div>`
         movy.innerHTML=output
        })
            .catch((error) => {
                console.log("error:", error)
            })
}



