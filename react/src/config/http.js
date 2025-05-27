import { default as axios } from "axios";

export const moviesApis = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_TOKEN}`
    }

})