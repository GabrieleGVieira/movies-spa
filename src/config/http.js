import { default as axios } from "axios";

export const moviesApis = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2YyZThhM2NjMzQwM2EyZTdiMzRlMjZhZjVhYzZiZiIsIm5iZiI6MTc0ODIxNzE4NS4wMjgsInN1YiI6IjY4MzNhZDYxMDY3NTg4Yjg5N2E4NmUwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UkJJeWGhmqmRgRuqjunhhtLAnbefZw7OaJ4bNi37WvU"
    }

})