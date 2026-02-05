import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense.jsx";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      price: 294.67,
      date: new Date(2024, 5, 28),
    },
    {
      id: "e2",
      title: "New Laptop",
      price: 1200,
      date: new Date(2024, 7, 12),
    },
  ];

  return (
    <div className="App">
      <NewExpense></NewExpense>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
