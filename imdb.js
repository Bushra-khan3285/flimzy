const api_key = "3aa03983";
const endPoint = "http://www.omdbapi.com/?apikey=3aa03983"
let movi = document.getElementById("movies-searched");

let output;
let searchInput = document.querySelector("#exampleInputEmail1");
const buttonSearch = document.querySelector("#search");
buttonSearch.onclick = function (event) {
    event.preventDefault();
    const value = searchInput.value;
    const newurl = endPoint + "&s=" + value;
    
    fetch(newurl)
        .then((res) => res.json())
        .then((data) => {
            console.log("Data:", data)
         let movies =data.Search;
            let output = '';
            let count=0;
            for (let movie of movies) {
                output += `
                <div class="col-sm-6 col-md-3">
                <div class="latest-movie">
                <a onclick="movieSelected('${movie.imdbID}')"  href="#"><img src="${movie.Poster}"></a>
           </div>
           </div>`;
         count++;
         if(count==8) break  
         console.log(count);
        };
            movi.innerHTML = output;
        })
        .catch((error) => {
            console.log("error:", error)
        })
        
        
}
function movieSelected(id){
    sessionStorage.setItem('movieId',id);
    window.location='main.html';
    return false;
}

function playMovies(){
    const value="Harry Potter";
    const newurl = endPoint + "&s=" + value;
    fetch(newurl)
        .then((res) => res.json())
        .then((data) => {
            console.log("Data:", data)
         let movies =data.Search;
            let output = '';
            let count=0;
            for (let movie of movies) {
                output += `<div class="col-sm-6 col-md-3">
                <div class="latest-movie">
                <a onclick="movieSelected('${movie.imdbID}')"  href="#"><img src="${movie.Poster}"></a>
           </div>
           </div>`;
           count++;
           if(count==8) break 
        };
            movi.innerHTML = output;
        })
        .catch((error) => {
            console.log("error:", error)
        })
}




//"https://movie-database-imdb-alternative.p.rapidapi.com"
//	 "4201eb10edmshb8a53e10ec9b6f1p1ba68ejsn2d0c22a16d05"
/* <h5>${movie.Title}</h5>
           <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
            */