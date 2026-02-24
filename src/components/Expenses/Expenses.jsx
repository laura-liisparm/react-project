import "./Expenses.css";
import Card from "../UI/Card.jsx";
import ExpensesFilter from "./ExpensesFilter.jsx";
import {useEffect, useMemo, useState} from "react";
import ExpensesList from "./ExpensesList.jsx";
import ExpenseList from "./ExpensesList.jsx";


const Expenses = (props) => {
    const [filteredExpenses, setFilteredExpenses] = useState("2024");

    const filterChangeHandler = (year) => {
        setFilteredExpenses(year);
    };

    const filteredYear = props.expenses.filter((expense) => {
        return new Date(expense.date).getFullYear().toString() === filteredExpenses;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter onChangeFilter={filterChangeHandler} />
            <ExpenseList
                expenses={filteredYear}
                isLoading={props.isLoading}
            ></ExpenseList>
        </Card>
    );
};
export default Expenses;
