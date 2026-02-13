import "./Expenses.css";
import "./ExpenseItem.jsx";
import Card from "../../../UI/Card.jsx";
import ExpensesFilter from "./ExpensesFilter.jsx";

function ExpenseList(props) {
  return null;
}

const Expenses = (props) => {
  const [filteredExpenses, setFilteredExpenses] = useState(props.expenses);

  const filterChangeHandler = (year) => {
    console.log(`year is ${year}`);

    const newArray = props.expenses.filter(
        (expense) => new Date(expense.date).getFullYear() === year,
    );
    setFilteredExpenses(newArray);
  };

  return (
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterChangeHandler} />
        <ExpenseList expenses={filteredExpenses}></ExpenseList>
      </Card>
  );
};
export default Expenses;
