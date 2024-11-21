import React, { useState } from "react";

const AddTransaction = ({ addTransaction }) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("Expense");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !description) {
      alert("Please fill in all fields");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      amount: parseFloat(amount),
      description,
      type,
      date: new Date().toLocaleDateString(),
    };

    addTransaction(newTransaction);

    setAmount("");
    setDescription("");
    setType("Expense");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="Expense">Expense</option>
          <option value="Income">Income</option>
        </select>
      </div>
      <button type="submit" className="btn">Add Transaction</button>
    </form>
  );
};

export default AddTransaction;
