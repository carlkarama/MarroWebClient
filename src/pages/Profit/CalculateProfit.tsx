import React, { useState, useContext, useRef } from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { FieldsContext } from '../../hooks/context/FieldsContext';
import './CalculateProfit.css';
import NextButton from '../../components/Button/NextButton/NextButton';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "jspdf-autotable";
import DownloadButton from '../../components/Button/DownloadButton/DownloadButton';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28DFF', '#FF69B4'];

const CalculateProfit: React.FC = () => {
  const { fields } = useContext(FieldsContext);
  const [clientBudget, setClientBudget] = useState<number>(25000);
  const reportRef = useRef<HTMLDivElement | null>(null);


  const costData = fields.map(field => ({
    name: field.fieldName,
    cost: field.total
  }));

  const totalCost = costData.reduce((sum, item) => sum + item.cost, 0);

  const profit = clientBudget ? clientBudget - totalCost : 0;
  const profitMargin = clientBudget ? ((profit / clientBudget) * 100).toFixed(2) : 0;
  const isOverBudget = clientBudget && totalCost > clientBudget;

const handleDownloadReport = async () => {

  if(!reportRef.current) {
    console.error("❌ Report content not found!");
    return;
  }

  console.log("✅ Report content found, starting capture...");


  const reportNumber = generateInvoiceNumber();

  const canvas = await html2canvas(reportRef.current);
  console.log("✅ Canvas generated successfully!");

  const imgData = canvas.toDataURL("image/png");

  const doc = new jsPDF("p", "mm", "a4");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("Project Pricing Report", 20, 20);
  
  doc.setFontSize(14);
  doc.setFont("helvetica", "normal");
  doc.text(`Total Cost: $${totalCost.toLocaleString()}`, 20, 40);
  doc.text(`Profit: $${profit.toLocaleString()} (${profitMargin}%)`, 20, 50)

  if (isOverBudget) {
    doc.setTextColor(255, 0, 0)
    doc.text(`Over Budget: Project exceeds budget by $${(totalCost - clientBudget).toLocaleString()}`, 20, 60);
    doc.setTextColor(0, 0, 0);
  }

  doc.addImage(imgData, "PNG", 20, 70, 170, 120);
  
  console.log("✅ PDF generated, saving...");

  doc.save(`Project-Report - #${reportNumber}.pdf`);
};

const generateInvoiceNumber = () => {
  const now = new Date();
  const yy = now.getFullYear().toString().slice(-2); // Get last two digits of the year
  const mm = String(now.getMonth() + 1).padStart(2, "0"); // Month (01-12)
  const dd = String(now.getDate()).padStart(2, "0"); // Day (01-31)
  const hh = String(now.getHours()).padStart(2, "0"); // 24-hour format
  const min = String(now.getMinutes()).padStart(2, "0"); // Minutes (00-59)
  const sec = String(now.getSeconds()).padStart(2, "0"); // Seconds (00-59)

  return `${yy}${mm}${dd}${hh}${min}${sec}`;
};  

  return (
    <div>
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


      {/* Charts Container (Flex) */}
      <div ref={reportRef} className="report-container">
      <div className="charts-container">
        {/* Cost Breakdown Pie Chart */}
        <div className="chart-section">
          <h2>Cost Breakdown</h2>
          <PieChart width={550} height={550}>
            <Pie
              data={costData}
              cx="50%"
              cy="50%"
              outerRadius={130}
              dataKey="cost"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(2)}%`}
              labelLine={false}
              
            >
              {costData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        {/* Bar Chart for Expected vs. Actual Costs */}
        <div className="chart-section">
          <h2>Client vs Actual Costs</h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={[{ name: 'Budget', budget: clientBudget || 0, cost: totalCost }]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="budget" fill="#28a745" name="Client Budget" />
              <Bar dataKey="cost" fill="#dc3545" name="Total Cost" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      </div>

      {/* Profit Summary */}
      <div className="profit-summary">
        <p><strong>Total Cost:</strong> ${totalCost.toLocaleString()}</p>
        <p><strong>Profit:</strong> {clientBudget ? `$${profit.toLocaleString()} (${profitMargin}%)` : 'Enter a budget'}</p>
        <DownloadButton onClick={handleDownloadReport}></DownloadButton>
      </div>
    </div>
    <NextButton 
            route={"/invoice"} 
            nextPageName={"Generate invoice 🧾 >"} 
          />
    </div>     
  );
};

export default CalculateProfit;
