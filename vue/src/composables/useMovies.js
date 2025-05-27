import { ref, onMounted } from 'vue'
import moviesService from '@/services/movies.service'
import { useRoute } from 'vue-router'

export function useMovies() {
    const movies = ref([])
    const loading = ref(true)
    const error = ref(null)

    const fetchMovies = async () => {
        try {
            const res = await moviesService.getPopularMovies()
            movies.value = res.data.results
        } catch (err) {
            error.value = err
        } finally {
            loading.value = false
        }
    }

    fetchMovies()

    return {
        movies,
        loading,
        error
    }
}

export function useMovie(movieId) {
    const movie = ref([])
    const loading = ref(true)
    const error = ref(null)

    const fetchMovie = async () => {
        try {
            const res = await moviesService.getMovieDetail(movieId)
            movie.value = res.data
        } catch (err) {
            error.value = err
        } finally {
            loading.value = false
        }
    }

    fetchMovie()

    return {
        movie,
        loading,
        error
    }
}
