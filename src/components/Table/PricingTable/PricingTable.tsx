import React, { useState } from 'react';
import { useFields } from '../../../hooks/context/FieldsContext';

interface PricingTableProps {
    fields: string[];
  }

const PricingTable: React.FC = () => {
  const { fields } = useFields();

  return (
    <div>
      <h1>Pricing Table</h1>
      <table>
        <thead>
          <tr>
            <th>Field Name</th>
            <th>Pricing Type</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field, index) => (
            <tr key={index}>
              <td>{field}</td>
              <td>
                <select>
                  <option value="Per Hour">Per Hour</option>
                  <option value="Per Project">Per Project</option>
                </select>
              </td>
              <td>
                <input type="number" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
