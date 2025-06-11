import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import EmailForm from '../EXP7/EmailForm';
import ContactUs from '../EXP7/ContactUs';

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>  
      <ContactUs />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;

