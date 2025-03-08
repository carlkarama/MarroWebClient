import React from 'react';
import { useFields } from '../../hooks/context/FieldsContext';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import './CalculateProfit.css';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const CalculateProfit: React.FC = () => {
  const { costData } = useFields();


  const totalCost = costData.reduce((sum, item) => sum + item.cost, 0);

  return (
    <div className="calculate-profit-container">
    <h1>Calculate Profit</h1>
    <div className="chart-section">
      <h2>Cost Breakdown</h2>
      <PieChart width={400} height={400}>
        <Pie data={costData} cx="50%" cy="50%" outerRadius={120} dataKey="cost" label>
          {costData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>

    <div className="profit-summary">
      <p>Total Cost: <strong>${totalCost}</strong></p>
    </div>
  </div>
  );
};

export default CalculateProfit;
