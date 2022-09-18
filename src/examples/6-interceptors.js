import { useEffect } from 'react';
import authFetch from '../Axios/interceptors'

const url = 'https://course-api.com/react-store-products';

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const resp1 = await authFetch("/react-store-products")
      console.log(resp1)
    } catch (error) {
      
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;
