import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Field } from '../../interfaces/Field/Field';

interface FieldsContextType {
  fields: Field[];
  setFields: React.Dispatch<React.SetStateAction<Field[]>>;
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
  const [fields, setFields] = useState<Field[]>([]);

  return (
    <FieldsContext.Provider value={{ fields, setFields }}>
      {children}
    </FieldsContext.Provider>
  );
};
