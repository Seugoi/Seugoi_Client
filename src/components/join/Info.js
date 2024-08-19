import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/actions';

const Info = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const params = new URLSearchParams(location.search);
      const code = params.get('code');
      try {
        const response = await axios.post(`${process.env.REACT_APP_HOST}/users/kakao_oauth`, { code });
        if (response.status === 200) {
          console.log(response.data);
          navigate("/home");
          dispatch(loginSuccess(response.user.id));
        } else {
          console.log("카카오 로그인 실패", response.status);
        }
      } catch (error) {
        console.error('Error: ', error);
      }
    }
    fetchUserInfo();
  }, []);
};

export default Info;