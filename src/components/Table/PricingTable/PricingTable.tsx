import React from 'react';
import { useFields } from '../../../hooks/context/FieldsContext';
import { ProductionPhase } from '../../../interfaces/Phase/ProductionPhase';
import { Field } from '../../../interfaces/Field/Field';
import PhaseChips from './PhaseChips';

const allPhases: ProductionPhase[] = [
  "Development",
  "Pre-Production",
  "Production",
  "Post-Production"
];

const PricingTable: React.FC = () => {
  const { fields, setFields } = useFields();

  const handleFieldChange = (index: number, key: keyof Field, value: string | number | ProductionPhase[]) => {
    const updatedFields = [...fields];
    updatedFields[index] = { ...updatedFields[index], [key]: value };

    if (key === 'price' || key === 'hours') {
      updatedFields[index].total = 
        parseFloat(updatedFields[index].price) * parseFloat(updatedFields[index].hours.toString());
    }

    setFields(updatedFields);
  };

  const togglePhaseSelection = (index: number, phase: ProductionPhase) => {
    const updatedFields = [...fields];
    const field = updatedFields[index];

    if (field.phases.includes(phase)) {
      field.phases = field.phases.filter(p => p !== phase);
    } else {
      field.phases.push(phase);
    }

    setFields(updatedFields);
  };

  return (
    <div>
      <h1>Pricing Table</h1>
      <table>
        <thead>
          <tr>
            <th>Field Name</th>
            <th>Pricing Type</th>
            <th>Price</th>
            <th>Hours</th>
            <th>Total</th>
            <th>Production Phases</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field, index) => (
            <tr key={index}>
              <td>{field.fieldName}</td>
              <td>
                <select
                  value={field.pricingType}
                  onChange={(e) => handleFieldChange(index, 'pricingType', e.target.value)}
                >
                  <option value="Per Hour">Per Hour</option>
                  <option value="Per Project">Per Project</option>
                </select>
              </td>
              <td>
                <input
                  type="number"
                  value={field.price}
                  onChange={(e) => handleFieldChange(index, 'price', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={field.hours}
                  onChange={(e) => handleFieldChange(index, 'hours', e.target.value)}
                />
              </td>
              <td>{field.total}</td>
              <td>
                <PhaseChips
                  selectedPhases={field.phases}
                  allPhases={allPhases}
                  onToggle={(phase) => togglePhaseSelection(index, phase)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
