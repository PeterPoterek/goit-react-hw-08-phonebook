import styled from 'styled-components';

export const StyledUserMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100vh;
`;

export const StyledUserMenuCard = styled.div`
  background-color: #1f2937;
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledUserInfo = styled.div`
  color: #fff;
  font-size: 1.5rem;
`;

export const StyledLogoutButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.5rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
