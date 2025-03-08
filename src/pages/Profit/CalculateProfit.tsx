import React, { useState, useContext } from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { FieldsContext } from '../../hooks/context/FieldsContext';
import './CalculateProfit.css';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28DFF', '#FF69B4'];

const CalculateProfit: React.FC = () => {
  const { fields } = useContext(FieldsContext);
  const [clientBudget, setClientBudget] = useState<number | ''>('');
  
  const costData = fields.map(field => ({
    name: field.fieldName,
    cost: field.total
  }));

  const totalCost = costData.reduce((sum, item) => sum + item.cost, 0);

  const profit = clientBudget ? clientBudget - totalCost : 0;
  const profitMargin = clientBudget ? ((profit / clientBudget) * 100).toFixed(2) : 0;
  const isOverBudget = clientBudget && totalCost > clientBudget;

  return (
    <div className="calculate-profit-container">
      <h1>Calculate Profit</h1>
      
      {/* Budget Input */}
      <div className="client-budget-container">
      <div className="budget-input">
        <label className="client-budget-label">Client Budget ($)</label>
       
          <input
          type="number"
          value={clientBudget}
          onChange={(e) => setClientBudget(Number(e.target.value))}
          placeholder="Enter client's budget..."
        />
        </div>
        
      </div>

      {/* Over-Budget Warning */}
      {isOverBudget && (
        <div className="warning">
          ⚠️ Warning: Your project exceeds the client’s budget by <strong>${(totalCost - clientBudget).toLocaleString()}</strong>.
        </div>
      )}

      {/* Pie Chart for Cost Breakdown */}
      <div className="chart-section">
        <h2>Cost Breakdown</h2>
        <PieChart width={400} height={400}>
          <Pie
            data={costData}
            cx="50%"
            cy="50%"
            outerRadius={120}
            dataKey="cost"
            label
          >
            {costData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      {/* Bar Chart for Expected vs. Actual Cost Comparison */}
      <div className="chart-section">
        <h2>Expected vs. Actual Costs</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={[{ name: 'Budget', budget: clientBudget || 0, cost: totalCost }]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="budget" fill="#82ca9d" name="Client Budget" />
            <Bar dataKey="cost" fill="#FF8042" name="Total Cost" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Profit Summary */}
      <div className="profit-summary">
        <p><strong>Total Cost:</strong> ${totalCost.toLocaleString()}</p>
        <p><strong>Profit:</strong> {clientBudget ? `$${profit.toLocaleString()} (${profitMargin}%)` : 'Enter a budget'}</p>
      </div>
    </div>
  );
};

export default CalculateProfit;
