import { useState, useEffect } from 'react';
import { getBusinessList } from '../services/http.service';

export default () => {
  const [isLoading, setIsLoading] = useState(false);
  const [businesses, setBusinesses] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchBusinesses = async (searchTerm) => {
    setIsLoading(true);

    try {
      const response = await getBusinessList(searchTerm);
      const list = response.data.businesses;

      if (list.length !== 0) {
        setBusinesses(list);
        setErrorMessage('');
      } else {
        setErrorMessage('No results found, search another term.')
      }
    } catch (error) {
      setErrorMessage('Something went wrong, try again later.');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    searchBusinesses('');
  }, []);

  return [businesses, searchBusinesses, errorMessage, isLoading];
}