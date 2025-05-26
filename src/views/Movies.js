import { useEffect, useState } from "react"
import { getPopularMovies } from "../services/movies"

export function Movies() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        getPopularMovies().then(({data}) => {
            setMovies(data.results)
        })
    }, [])

    return (<>
    <section>
        <h1> Filmes Populares</h1>
        <ul>
            {movies.map((movie) => <li>{movie.title}</li>)}
        </ul>
    </section>
    </>
)}