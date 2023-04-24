import { elements } from "../base";

export const clearInput = () => {
    elements.searchInput.value = "";
}

export const clearResults = () => {
    elements.searchResults.innerHTML= "";
}

export const displayResults = data =>{
    data.results.forEach(movie => {
        const html = `
        <li class="media mb-3" style="display:flex">
            <img src="https://image.tmdb.org/t/p/w92/${movie.poster_path}" style="margin-right:10px" alt="${movie.title}">
            <div class="media-body">
                <h5 class="mt-0 mb-1">
                <span class="badge bg-primary">${movie.vote_average}</span> 
                <a href="#${movie.id}">${movie.title}</a>
                </h5>
                <p>${movie.overview}</p>
            </div>
        </li>     
        `;

        elements.searchResults.insertAdjacentHTML("beforeend",html);
    });
}