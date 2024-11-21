import React, { useState } from "react";
import AddTransaction from "./AddTransaction";
import TransactionList from "./TransactionList";
import NetBalance from "./NetBalance";
import "./App.css";


const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  return (
    <div className="app">
      <h1 className="title">Expense Tracker</h1>
      <NetBalance transactions={transactions} />
      <AddTransaction addTransaction={addTransaction} />
      <TransactionList 
        transactions={transactions} 
        deleteTransaction={deleteTransaction} 
      />
    </div>
  );
};

export default App;
