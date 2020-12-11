import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Context {
  generateId: () => string;
  currentId: string;
}

export const IdGeneration = createContext<Context>({
  generateId: () => '',
  currentId: '',
});

export default function IdGenerationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentId] = useState('');

  const generateId = () => {
    const newId = uuidv4();
    return newId;
  };

  return (
    <IdGeneration.Provider value={{ generateId, currentId }}>
      {children}
    </IdGeneration.Provider>
  );
}
