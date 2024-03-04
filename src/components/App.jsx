import UserMenu from './UserMenu/UserMenu.jsx';
import Navigation from './Navigation/Navigation.jsx';
import Phonebook from './Phonebook/Phonebook.jsx';
import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';

import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/contacts" element={<Phonebook />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<UserMenu />} />
        <Route />
      </Routes>
    </>
  );
};

export default App;
