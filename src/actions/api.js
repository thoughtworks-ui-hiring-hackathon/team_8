import { API_KEY } from 'çonfig';
export const api = (endpoint) => fetch(`https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}`, {
    method: "GET",
    header: {
        "Content-Type": "application/json",
    }
})