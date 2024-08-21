import React, { useState } from 'react';
import TradeContext from './TradeContext';

const TradeProvider = ({ children }) => {
  const [tradeSettings, setTradeSettings] = useState({
    buyAmt: 0,
    sellAmt: 0,
  });

  return (
    <TradeContext.Provider value={{ tradeSettings, setTradeSettings }}>
      {children}
    </TradeContext.Provider>
  );
};

export default TradeProvider;