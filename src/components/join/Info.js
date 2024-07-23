import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Info = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const params = new URLSearchParams(location.search);
      const code = params.get('code');
      try {
        const response = await axios.post(`${process.env.REACT_APP_HOST}/users/kakao_oauth`, { code });
        if (response.status === 200) {
          setUserId(response.data);
          console.log(response.data);
          navigate("/home");
        } else {
          console.log("카카오 로그인 실패", response.status);
        }
      } catch (error) {
        console.error('Error: ', error);
      }
    }
    fetchUserInfo();
  }, [userId]);
};

export default Info;