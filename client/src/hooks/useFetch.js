import { useState } from "react";
export const useFetch = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async (url, options = {}) => {
        setIsLoading(true);
        try {
            const response = await fetch(url, options);
            if (!response.ok) throw new Error(response.statusText);
            const json = await response.json();
            setIsLoading(false);
            setData(json);
            setError(null);
            return json;
        } catch (error) {
            setError(`${error} Could not Fetch Data `);
            setData({ error })
            setIsLoading(false);
        }
    };

    return { data, isLoading, error, fetchData };
};