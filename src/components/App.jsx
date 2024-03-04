import UserMenu from './UserMenu/UserMenu.jsx';
import Navigation from './Navigation/Navigation.jsx';

import { Route, Routes } from 'react-router-dom';
import Phonebook from './Phonebook/Phonebook.jsx';

const App = () => {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Phonebook />} />
        <Route />
        <Route />
      </Routes>
    </>
  );
};

export default App;
