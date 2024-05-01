'use client'
import React from 'react';
import Draggable from 'react-draggable';
import { useWindows } from '../WindowManagerContext';

export const WindowWrapper = ({ title, windowId, children }) => {
  const { zIndexes, bringToFront, closeWindow } = useWindows();

  return (
    <Draggable handle=".handle" onStart={() => bringToFront(windowId)} bounds="parent">
      <div style={{ position: 'absolute', zIndex: zIndexes[windowId] || 100 }} className="bg-gray-200 max-w-lg mx-auto border-2 border-gray-400 shadow-xl" >
        <div className="flex justify-between items-center bg-gray-300 border-b-2 border-gray-400 p-3 handle">
          <h1 className="font-mono text-gray-800 text-lg">{title}</h1>
          <div className="flex space-x-2">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-sm">-</button>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded-sm">[]</button>
            <button onClick={() => closeWindow(windowId)} className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-3 rounded-sm">×</button>
          </div>
        </div>
        <div className="p-1 bg-white border-t-2 border-gray-400">
          <div className='border-2 border-gray-400 p-1'>
            {children}
          </div>
        </div>
      </div>
    </Draggable>
  );
}
