// api : 289bb04bf03ab954dd0eea031def1053
// url : https://api.themoviedb.org/3
// https://api.themoviedb.org/3/search/movie?api_key=289bb04bf03ab954dd0eea031def1053&language=en-US&page=1&include_adult=false

import Search from "./models/search";
import { elements } from "./base";
import * as searchView from './views/searchView';

const state = {};

const searchController = async() =>{
    const keyword = elements.searchInput.value;

    if(keyword){
       state.search = new Search(keyword);

      await state.search.getResult();

      searchView.clearInput();
      searchView.clearResults();
      searchView.displayResults(state.search.data);
      
    }else{
        alert("you must enter a keyword");
    }
}

elements.searchForm.addEventListener("submit",function(e){
    e.preventDefault();
    searchController();

})
