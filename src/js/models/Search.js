import axios from "axios";
const proxy = "https://cors-anywhere.herokuapp.com/";
const key = "231e0b9cfba44847c416f3948ddb16ca";    

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