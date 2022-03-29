import { useState, useEffect } from 'react';
import { getBusinessDetail } from '../services/http.service';

export default (id) => { 
  const [isLoading, setIsLoading] = useState(false);
  const [business, setBusiness] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  	
  useEffect(async () => {
    setIsLoading(true);

    try {
      const response = await getBusinessDetail(id);
      setBusiness(response.data);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Something went wrong, try again later.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [business, isLoading, errorMessage];
};