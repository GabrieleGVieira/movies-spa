import { useEffect, useState } from "react"
import { getPopularMovies } from "../services/movies.service"

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
        getPopularMovies(movieId).then(
            ({data}) => {
                setMovie(data.results)
            })
        }, [movieId])

    return movie
}

