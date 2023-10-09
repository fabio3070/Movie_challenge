import { useEffect, useState } from "react";
import { fetchMovies } from "../api/movies.api";

export const useFetch = (filters) => {
    const [{ data, loading, error }, setData] = useState({data: [], loading:false, error:false});
   
    const fetchData = async () => {
        setData((prevData) => ({...prevData, loading: true}));

        try {
            const newData = await fetchMovies(filters);
            console.log("newData", newData);
            const filteredData = [...data, ...newData.content];

            setData((prevData) => ({...prevData, data: filteredData }));
        } catch (error) {
            setData((prevData) => ({...prevData, error: true}));
            console.error(`Error fetching api: ${error.message}`);
        } finally {
            setData((prevData) => ({...prevData, loading: false}));
        }
    };

    useEffect(() => {
        fetchData();
    }, [filters]);

    useEffect(() => {console.log(error);},[error]);


    return({data, loading, error});
}
