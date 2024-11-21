import React from "react";

const NetBalance = ({ transactions }) => {
  const totalIncome = transactions
    .filter((transaction) => transaction.type === "Income")
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const totalExpense = transactions
    .filter((transaction) => transaction.type === "Expense")
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const netBalance = totalIncome - totalExpense;

  return (
    <div className="net-balance">
      <h2>Net Balance: ${netBalance.toFixed(2)}</h2>
      <p>Total Income: ${totalIncome.toFixed(2)}</p>
      <p>Total Expense: ${totalExpense.toFixed(2)}</p>
    </div>
  );
};

export default NetBalance;
