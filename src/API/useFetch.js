import React from 'react'

const useFetch = (url, options) => {
    const [response, setResponse] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    {/* Fetch information between client and api */}

    React.useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const res = await fetch(url, options);
          const json = await res.json();
          setResponse(json);
          setIsLoading(false)
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
    }, []);

    {/* return information response, error and isLoading */}
    return { response, error, isLoading };
}

export default UseFetch
