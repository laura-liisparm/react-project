import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense.jsx";
import Expenses from "./components/Expenses/Expenses.jsx";
import { useState, useEffect } from "react";

const App = () => {
  const [expenses, setExpenses] = useState(() => {
      const expenseFormLS = JSON.parse(localStorage.getItem('expenses'));
      return expenseFormLS || [];
  })

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    });
  };

  return (
      <div className="App">
        <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
        <Expenses expenses={expenses} />
      </div>
  );
};

export default App;