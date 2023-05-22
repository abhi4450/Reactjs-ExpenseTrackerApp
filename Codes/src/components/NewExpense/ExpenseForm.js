import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, updatedTitle] = useState("");
  const [amount, updatedAmount] = useState("");
  const [date, updatedDate] = useState("");

  const titleChangeHandler = (event) => {
    updatedTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    updatedAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    updatedDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseData);
    updatedTitle("");
    updatedAmount("");
    updatedDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            id=""
            onChange={titleChangeHandler}
            value={title}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            id=""
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            id=""
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button onClick={props.onClose}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
