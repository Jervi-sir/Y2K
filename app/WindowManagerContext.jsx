import React, { createContext, useContext, useState } from 'react';

const WindowManagerContext = createContext();

export const WindowManagerProvider = ({ children }) => {
  const [zIndexes, setZIndexes] = useState({});
  const [highestZIndex, setHighestZIndex] = useState(100);
  const [visibility, setVisibility] = useState({
    window1: true,
    window2: true,
    window3: true
  });

  const bringToFront = (id) => {
    setZIndexes(prevZIndexes => ({
      ...prevZIndexes,
      [id]: highestZIndex + 1
    }));
    setHighestZIndex(highestZIndex + 1);
  };

  const closeWindow = (id) => {
    setVisibility(prev => ({ ...prev, [id]: false }));
  };

  const openWindow = (id) => {
    setVisibility(prev => ({ ...prev, [id]: true }));
  };

  return (
    <WindowManagerContext.Provider value={{ zIndexes, visibility, bringToFront, closeWindow, openWindow }}>
      {children}
    </WindowManagerContext.Provider>
  );
};

export const useWindows = () => useContext(WindowManagerContext);
