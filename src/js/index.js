// api : 289bb04bf03ab954dd0eea031def1053
// url : https://api.themoviedb.org/3
// https://api.themoviedb.org/3/search/movie?api_key=289bb04bf03ab954dd0eea031def1053&language=en-US&page=1&include_adult=false

import Search from "./models/search";
import { elements, renderLoader } from "./base";
import * as searchView from './views/searchView';
import { Movie } from "./models/movie";
import * as movieView from "./views/movieView";

const state = {};

const searchController = async() =>{
    const keyword = elements.searchInput.value;

    if(keyword){
       state.search = new Search(keyword);

       searchView.clearInput();
       searchView.clearResults();
       
       renderLoader(elements.searchResults); 

      await state.search.getResult();
      searchView.displayResults(state.search.data);
      
    }else{
        alert("you must enter a keyword");
    }
}

const movieController = async() =>{
    const id = window.location.hash.replace('#','');
    if(id){
        state.movie = new Movie(id);

        await state.movie.getMovie();
    
        movieView.displayMovie(state.movie.data);
        movieView.backToTop();
    }

}

window.addEventListener('hashchange',movieController);
elements.movieDetailsClose.addEventListener("click",movieView.closeDetails);


elements.searchForm.addEventListener("submit",function(e){
    e.preventDefault();
    searchController();
    movieController();
})
