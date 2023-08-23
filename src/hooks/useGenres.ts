import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";



interface Genre {
    id : number;
    name : string;
    slug : string;
}

interface FetchGenresResponse {
    count : number;
    results : Genre[];
}


const useGenres = () => {
    const controller = new AbortController();

    const [genres , setGenres] =  useState<Genre[]>([]);
    const [error , setError] =  useState()
    const  [isLoading , setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        apiClient
        .get<FetchGenresResponse>('/genres', { signal: controller.signal })
        .then(res => {
            setGenres(res.data.results)
            setLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setLoading(false);
        });
            

        // return () => controller.abort();
    },[])
    
    return {genres , error , isLoading};
}

export default useGenres;