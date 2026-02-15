import './NewExpense.css'
import ExpenseForm from "./ExpenseForm.jsx";
import {useState} from "react";

function NewExpense(props) {

    const [editForm, setEditForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setEditForm(false);
    };

    const startEditingHandler = () => {
        setEditForm(true);
    };

    const stopEditingHandler = () => {
        setEditForm(false);
    };

    return (
        <div className="new-expense">
            {editForm && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onFormToggle={stopEditingHandler}
                />
            )}
            {!editForm && (
                <button onClick={startEditingHandler}>
                    Add New Expense
                </button>
            )}
        </div>
    );
}

export default NewExpense;