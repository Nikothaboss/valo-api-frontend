import { useState, useEffect, useCallback } from "react";

export const useFetch = (url, request) =>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [hasError, setHasError] = useState(false)

    const getProducts = useCallback(async () =>{
        setLoading(true)

        try{
            const res = await fetch(url, request)
            const data = await res.json()

            setData(data)
            setLoading(false)
        } catch{
            setHasError(true)
            setLoading(false)
        }
    }, [url, request]);

    useEffect(()=>{
        getProducts();
    }, [url, getProducts])

    return { data, loading, hasError }
}