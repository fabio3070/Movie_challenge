import axiosClient from "./axiosService";

const removeNullParams = (params) => {
    Object.keys(params).forEach((key) => params[key] === null && delete params[key]);

    return params
}

export async function fetchMovies(filters) {
    const newParams = `?${new URLSearchParams(removeNullParams(filters))}`;

    return new Promise(async(resolve, reject) => {
        try {
            const response = await axiosClient.get(`/movies${newParams}`);
            resolve(response.data);
        } catch(error) {
            console.log(`Error fetching movies: ${error.message}`);
            reject({error: true});
        }
    });
}

export async function fetchMovieById(id) {
    return new Promise(async(resolve, reject) => {
        try {
            const response = await axiosClient.get(`/movies/${id}`);
            resolve(response.data);
        } catch(error) {
            console.log(`Error fetching movies: ${error.message}`);
        }
    });
}