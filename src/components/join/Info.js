import { useEffect, useState } from 'react';
import axios from 'axios';

const Info = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/seugoi_kakaoOAuth`);
        setUserId(response.data);
      } catch (error) {
        console.error('Error: ', error);
      }
    }
    fetchUserInfo();
  }, [userId]);
};

export default Info;