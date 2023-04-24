import { elements } from "../base";

export const backToTop = () =>{
    window.scrollTo({top:0, behavior:"smooth"});
}

export const closeDetails = () =>{
    elements.movieDetailsContainer.style.display="none";
}
export const displayMovie = movie =>{

        var html = '<div class="row">';

        var genres = '';

        movie.genres.forEach(genre => {
            genres += `<span class="badge bg-primary" style="margin-right:5px">${genre.name}</span>`;
        });

        html += `
           <div class="col-md-4">
           <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="img-fluid" alt="${movie.title}">
           <hr>
           </div>
           
           <div class="col-md-8">
            <div>
                <h5>${movie.original_title}</h5>
                <p>${movie.overview}</p>
                <p><small class="badge bg-primary">${movie.vote_average}</small></p>
                <hr>
                ${genres}
            </div>
           </div>
        `;

        html += '</div>'
        elements.movieDetailsContainer.style.display="block";
        elements.movieDetails.insertAdjacentHTML('beforebegin',html);

}