import React, { useState } from 'react';
import UserAccountContext from './index';

const UserAccountProvider = ({ children }) => {
  const [contract, setContract] = useState(null);
  const [accounts, setAccounts] = useState([]);  

  return (
    <UserAccountContext.Provider value={{ contract, accounts, setAccounts }}>
      {children}
    </UserAccountContext.Provider>
  );
};

export default UserAccountProvider;