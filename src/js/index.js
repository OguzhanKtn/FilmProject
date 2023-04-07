// api : 289bb04bf03ab954dd0eea031def1053
// url : https://api.themoviedb.org/3
// https://api.themoviedb.org/3/search/movie?api_key=289bb04bf03ab954dd0eea031def1053&language=en-US&page=1&include_adult=false

import Search from "./models/search";

const search = new Search("abc");
console.log(search);

search.getResult();
