import React, { createContext, useContext, useState } from 'react';

const BasketContext = createContext();

export const useBasketContext = () => {
  return useContext(BasketContext);
};

export const BasketProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const addToBasket = (item) => {
    setSelectedItems((prevItems) => [...prevItems, item]);
  };

  const removeFromBasket = (itemIndex) => {
    setSelectedItems((prevItems) => {
      const newItems = [...prevItems];
      newItems.splice(itemIndex, 1);
      return newItems;
    });
  };

  const clearBasket = () => {
    setSelectedItems([]);
  };

  return (
    <BasketContext.Provider value={{ selectedItems, addToBasket, removeFromBasket, clearBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
