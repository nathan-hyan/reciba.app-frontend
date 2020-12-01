import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const IdGeneration = createContext<{
  generateId: () => string;
  currentId: string;
}>({
  generateId: () => {
    return '';
  },
  currentId: ''
});

export default function IdGenerationProvider(props: {
  children: React.ReactNode;
}) {
  const [currentId] = useState('');

  const generateId = () => {
    const newId = uuidv4();
    return newId;
  };

  return (
    <IdGeneration.Provider value={{ generateId, currentId }}>
      {props.children}
    </IdGeneration.Provider>
  );
}
