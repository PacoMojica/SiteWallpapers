import axios from 'axios';
import { useEffect, useState } from "react";

export function usePokeApi() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchDatabase() {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');

    setData(response.data);
  }

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    try {
      fetchDatabase();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }

    return () => controller.abort();
  }, []);

  return { data, error, loading };
}
