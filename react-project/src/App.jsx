import "./App.css";
import Expenses from "./Expenses/Expenses";
import NewExpense from "./NewExpense/NewExpense.jsx";

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
  ]

  const addExpenseHandler = (expense) => {
    console.log('In App.jsx')
    console.log(expense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App;
