import { useEffect, useState } from "react"
import { getPopularMovies, getMoviesDetails } from "../services/movies.service"

export function useMovies() {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        getPopularMovies().then(
            ({data}) => {
                setMovies(data.results)
            })
        }, [])

    return movies
}

export function useMovie(movieId) {
    const [movie, setMovie] = useState([])
    
    useEffect(() => {
        getMoviesDetails(movieId).then(
            ({data}) => {
                setMovie(data)
            })
        }, [movieId])

    return movie
}

