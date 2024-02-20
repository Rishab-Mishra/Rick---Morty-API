import axios from "axios";

// Create an instance of Axios with the base URL for the Rick and Morty API

const api = axios.create({
    baseURL: "https://rickandmortyapi.com/api/"
});

// Define an object containing service functions related to posts
export const postServices = {
    getPost: (params)=>{
        // If 'id' is not provided, make a GET request to fetch posts with query parameters
        if(!params.id){
            return api.get("character/" , {params});
        }
        else{
            // If 'id' is provided, make a GET request to fetch a single post using URL parameter
            return api.get(`character/${params.id}`)
        }
        
    }
}