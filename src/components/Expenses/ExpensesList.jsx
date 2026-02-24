import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem.jsx";

const ExpenseList = (props) => {

    if (props.isLoading) {
        return <p className="expenses-list__fallback">Fetching expenses data...</p>
    }

    if (props.expenses.length === 0) {
        return <p className="expenses-list__fallback">No Expenses found</p>
    }

    return (
        <ul className="expenses-list">
            {props.expenses.map((expense) => (
                <ExpenseItem
                    expenseData={expense}
                    key={expense.id}
                />
            ))}
        </ul>
    )
}


export default ExpenseList;