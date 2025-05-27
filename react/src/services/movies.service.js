import { moviesApis } from "../config/http";

export function getPopularMovies() {
    return moviesApis.get("movie/popular")
}

export function getMoviesDetails(movieId) {
    return moviesApis.get(`movie/${movieId}`)
}