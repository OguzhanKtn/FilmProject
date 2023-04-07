export default class Search{
    constructor(keyword){
        this.keyword = keyword;
    }

    async getResult(){
        const api_key = "289bb04bf03ab954dd0eea031def1053";
        const base_url = "https://api.themoviedb.org/3";
    
       const response = await fetch(`${base_url}/search/movie?api_key=${api_key}&page=1&query=${this.keyword}`);
       this.data = await response.json();
    }
}