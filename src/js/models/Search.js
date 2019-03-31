import axios from "axios";
const proxy = "https://cors-anywhere.herokuapp.com/";
const key = "b89a905be5de83e96523ab5e5b3d553d";    

export default class Search {

    constructor(query){
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
        } catch (e) {
            alert(e);
        }    
    }
}