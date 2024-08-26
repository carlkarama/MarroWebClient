import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FieldsContextType {
  fields: string[];
  setFields: React.Dispatch<React.SetStateAction<string[]>>;
}

const FieldsContext = createContext<FieldsContextType | undefined>(undefined);

export const useFields = () => {
  const context = useContext(FieldsContext);
  if (!context) {
    throw new Error('useFields must be used within a FieldsProvider');
  }
  return context;
};

export const FieldsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [fields, setFields] = useState<string[]>([]);

  return (
    <FieldsContext.Provider value={{ fields, setFields }}>
      {children}
    </FieldsContext.Provider>
  );
};
