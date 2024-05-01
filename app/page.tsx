'use client'
import { WindowWrapper } from './components/WindowWrapper'
import { SearchInput } from './components/SearchInput'
import { ProductCard } from './components/ProductCard'
import { TopNav } from './TopNav'
import { useState } from 'react';
import { CartWindow } from './window/CartWindow'
import { ItemDetailsWindow } from './window/ItemDetailsWindow'
import { ItemsWindow } from './window/ItemsWindow'
import { PaymentWindow } from './window/PaymentWindow'
import { useWindows, WindowManagerProvider } from './WindowManagerContext';
import WindowNames from './WindowNames';

import "@fontsource/ibm-plex-mono"; // Defaults to weight 400
import "@fontsource/ibm-plex-mono/400.css"; // Specify weight
import "@fontsource/ibm-plex-mono/400-italic.css"; // Specify weight and style
import './style.css'

export default function Home() {
  return (
    <WindowManagerProvider>
      <TopNav />
      <AppContent />
    </WindowManagerProvider>
  );
}

function  AppContent() {
  const [zIndexes, setZIndexes] = useState({});
  const [highestZIndex, setHighestZIndex] = useState(100);
  const { visibility } = useWindows();

  const bringToFront = (id) => {
    setZIndexes(prevZIndexes => ({
      ...prevZIndexes,
      [id]: highestZIndex + 1
    }));
    setHighestZIndex(highestZIndex + 1);
  };

  const closeWindow = (id) => {
    //setVisibility(prev => ({ ...prev, [id]: false }));
  };

  return(
    <div 
      style={{
        fontFamily: 'IBM Plex Mono' ,
        width: '100vw', height: '92vh',
        backgroundColor: 'rgb(196,181,244)', // Fallback color
        background: 'linear-gradient(4deg, rgba(196,181,244,1) 0%, rgba(242,199,218,1) 100%)' // Gradient
      }}
    > {/* This sets the desktop area */}
      <div 
        className="relative" 
        style={{
          width: '100vw', height: '92vh',
          backgroundColor: 'rgb(196,181,244)', // Fallback color
          background: 'linear-gradient(4deg, rgba(196,181,244,1) 0%, rgba(242,199,218,1) 100%)' // Gradient
        }}
      >
        {visibility.window1 && (
          <WindowWrapper
            title="Window 1"
            windowId="window1"
          >
            <ItemsWindow />
          </WindowWrapper>
        )}
        {visibility.window2 && (
          <WindowWrapper
            title="Window 2"
            windowId="window2"
          >
            <ItemDetailsWindow />
          </WindowWrapper>
        )}
        {visibility.window3 && (
          <WindowWrapper
            title={WindowNames.Cart}
            windowId="window3"
          > 
            <ItemsWindow />
          </WindowWrapper>
        )}
      </div>
    </div>
  )
}