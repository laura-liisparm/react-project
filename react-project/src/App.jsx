import "./App.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseItem from "./ExpenseItem";

function App() {
  const expenses = [
    {
      title: "Car Insurance",
      price: 294.67,
      date: new Date(2024, 5, 28),
    },
    {
      title: "New Desk (Wooden)",
      price: 450,
      date: new Date(2024, 2, 12),
    },
  ];

  return (
    <>
      <ExpenseItem expenseData={expenses[0]} />
      <ExpenseItem expenseData={expenses[1]} />
    </>
  );
}

export default App;
