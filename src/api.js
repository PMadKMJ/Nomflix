import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: "75d9b4ea72ae6f77bddf35eee23fc1eb",
        language: "en-US",
    }
});

export const tvApi = {
    search: (term) => api.get("search/tv", {
        params: {
            query: encodeURIComponent(term)
        }
    }),
    top_rated: () => api.get("tv/top_rated"),
    airing_today: () => api.get("tv/airing_today"),
    popular: () => api.get("tv/popular"),
    tvDetail: (tv_id) => api.get(`tv/${tv_id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
};
export const movieApi = {
    search: (term) => api.get("search/movie", {
        params: {
            query: encodeURIComponent(term)
        }
    }),
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: (movie_id) => api.get(`movie/${movie_id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
};