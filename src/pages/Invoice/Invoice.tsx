import React, { useContext, useState } from "react";
import { FieldsContext } from "../../hooks/context/FieldsContext";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "./Invoice.css";

const Invoice: React.FC = () => {
  const { fields } = useContext(FieldsContext);
  const [businessName, setBusinessName] = useState("Karama Visuals");
  const [businessEmail, setBusinessEmail] = useState("hello@karamavisuals.com");
  const [businessAddress, setBusinessAddress] = useState("123 Creative St, City, Country");
  const [discount, setDiscount] = useState(0);
  const [taxRate, setTaxRate] = useState(10); // Default tax rate 10%

  // Calculate totals
  const subtotal = fields.reduce((sum, item) => sum + item.total, 0);
  const discountAmount = (subtotal * discount) / 100;
  const taxAmount = ((subtotal - discountAmount) * taxRate) / 100;
  const finalTotal = subtotal - discountAmount + taxAmount;

  // Generate PDF Invoice
  const generatePDF = () => {
    const invoiceNumber = generateInvoiceNumber();
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Invoice", 14, 20);
    doc.setFontSize(12);
    doc.text(`Invoice Number: ${invoiceNumber}`, 14, 30);
    doc.text(`Business Name: ${businessName}`, 14, 40);
    doc.text(`Email: ${businessEmail}`, 14, 50);
    doc.text(`Address: ${businessAddress}`, 14, 60);
  
    autoTable(doc, {
      startY: 70,
      head: [["Role", "Cost", "Production Phases"]],
      body: fields.map((field) => [
        field.fieldName,
        `$${field.total.toLocaleString()}`,
        field.phases.length ? field.phases.join(", ") : "N/A"
      ]),
    });
  
    const finalY = (doc as any).lastAutoTable.finalY || 80;
  
    doc.text(`Subtotal: $${subtotal.toLocaleString()}`, 14, finalY + 10);
    doc.text(`Discount: -$${discountAmount.toLocaleString()} (${discount}%)`, 14, finalY + 20);
    doc.text(`Tax: +$${taxAmount.toLocaleString()} (${taxRate}%)`, 14, finalY + 30);
    doc.text(`Total: $${finalTotal.toLocaleString()}`, 14, finalY + 40);
  
    doc.save(`invoice-${invoiceNumber}.pdf`);
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
    <div className="invoice-container">
      <h1>Invoice</h1>

      {/* Business Info */}
      <div className="business-info">
        <input
          type="text"
          placeholder="Business Name"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Business Email"
          value={businessEmail}
          onChange={(e) => setBusinessEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Business Address"
          value={businessAddress}
          onChange={(e) => setBusinessAddress(e.target.value)}
        />
      </div>

      {/* Invoice Table */}
      <table className="invoice-table">
        <thead>
          <tr>
            <th>Role</th>
            <th>Cost ($)</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field) => (
            <tr key={field.fieldName}>
              <td>{field.fieldName}</td>
              <td>${field.total.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Invoice Summary */}
      <div className="invoice-summary">
        <label>
          Discount (%):
          <input type="number" value={discount} onChange={(e) => setDiscount(Number(e.target.value))} />
        </label>
        <label>
          Tax Rate (%):
          <input type="number" value={taxRate} onChange={(e) => setTaxRate(Number(e.target.value))} />
        </label>

        <p><strong>Subtotal:</strong> ${subtotal.toLocaleString()}</p>
        <p><strong>Discount:</strong> -${discountAmount.toLocaleString()} ({discount}%)</p>
        <p><strong>Tax:</strong> +${taxAmount.toLocaleString()} ({taxRate}%)</p>
        <p><strong>Total:</strong> ${finalTotal.toLocaleString()}</p>

        <button className="invoice-button" onClick={generatePDF}>Download PDF</button>
      </div>
    </div>
  );
};

export default Invoice;
