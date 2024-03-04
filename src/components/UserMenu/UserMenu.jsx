import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import {
  StyledUserMenuContainer,
  StyledUserInfo,
  StyledLogoutButton,
} from './UserMenuStyles';

const fetchUserEmail = async token => {
  try {
    const response = await axios.get(
      'https://connections-api.herokuapp.com/users/current',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching user email:', error);
    throw error;
  }
};

const UserMenu = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (token) {
      fetchUserEmail(token)
        .then(({ email, name }) => {
          setUserInfo({ email, name });
        })
        .catch(error => {
          console.error('Error fetching user email:', error);
        });
    }
  }, [token]);

  const handleLogout = () => {
    // dispatch(clearToken());
  };

  return (
    <StyledUserMenuContainer>
      {userInfo && (
        <>
          <StyledUserInfo>{userInfo.name}</StyledUserInfo>
          <StyledUserInfo>{userInfo.email}</StyledUserInfo>
        </>
      )}
      <StyledLogoutButton onClick={handleLogout}>Logout</StyledLogoutButton>
    </StyledUserMenuContainer>
  );
};

export default UserMenu;
