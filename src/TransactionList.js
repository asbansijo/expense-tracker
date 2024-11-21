import React from "react";

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <div className="transaction-list">
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} className={`transaction ${transaction.type}`}>
            <span>
              {transaction.description} - {transaction.date}
            </span>
            <span>
              ${transaction.amount.toFixed(2)}
              <button 
                className="delete-btn" 
                onClick={() => deleteTransaction(transaction.id)}
              >
                X
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
