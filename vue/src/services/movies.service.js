import api from "../config/http";

export default {
    getPopularMovies() {
        return api.get("movie/popular")
    },
    getMovieDetail(movieId) {
        return api.get(`movie/${movieId}`)
    }
}
