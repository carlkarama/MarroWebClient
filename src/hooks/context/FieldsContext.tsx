import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Field } from '../../interfaces/Field/Field';

export interface FieldsContextType {
  fields: Field[];
  setFields: React.Dispatch<React.SetStateAction<Field[]>>;
  costData: { name: string; cost: number }[]; 
  setCostData: React.Dispatch<React.SetStateAction<{ name: string; cost: number }[]>>;
}

export const FieldsContext = createContext<FieldsContextType | undefined>(undefined);

export const useFields = () => {
  const context = useContext(FieldsContext);
  if (!context) {
    throw new Error('useFields must be used within a FieldsProvider');
  }
  return context;
};

export const FieldsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [fields, setFields] = useState<Field[]>([]);
  const [costData, setCostData] = useState<{ name: string; cost: number }[]>([]);

  return (
    <FieldsContext.Provider value={{ fields, setFields, costData, setCostData }}>
      {children}
    </FieldsContext.Provider>
  );
};
