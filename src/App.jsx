import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense.jsx";
import Expenses from "./components/Expenses/Expenses.jsx";
import React, { Fragment, useState, useEffect} from "react";

const App = () => {

    const [isFetching, setIsFetching] = useState(false)
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null);
    const [showError, setShowError] = useState(false);

    useEffect(() => {

        const getExpenses = async () => {

            setIsFetching(true)

            try {
                const response = await fetch("http://localhost:3005/expenses");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const responseData = await response.json();
                setExpenses(responseData.expenses);
                console.log(`Backend response ${JSON.stringify(responseData)}`)
            } catch (error) {
                setError({
                    title: "An error occurred!",
                    message: "Failed fetching expenses data, please try again later.",
                })
                setShowError(true);
            }

            setIsFetching(false)
        }
        getExpenses()
        console.log(expenses)
    }, [])

    console.log(error);
    const errorHandler = () => {
        setError(null)
        setShowError(false)
    }


    const addExpenseHandler = (expense) => {
        const addExpense = async (expense) => {
            try {
                console.log(JSON.stringify(expense), "stringified expense");

                const response = await fetch("http://localhost:3005/add-expense", {
                    method: "POST",
                    body: JSON.stringify(expense),
                    headers: { "Content-Type": "application/json" },
                });

                if (!response.ok) {
                    throw new Error("Failed saving data");
                }
                const responseData = await response.json();
                console.log(responseData);
                if (!response.ok) {
                    throw new Error("Failed saving data");
                }
                setExpenses([expense, ...expenses]);
            } catch (error) {
                setError({
                    title: "An error occured!",
                    message: "Failed saving expenses data, please try again.",
                });
                setShowError(true);
            }
        };
        addExpense(expense);
    };

  return (
      <div className="App">
          {showError && (
              <Error
                  title={error.title}
                  message={error.message}
                  onConfirm={errorHandler}
              />)
          }
        <NewExpense onAddExpense={
            addExpenseHandler}></NewExpense>
        <Expenses
            expenses={expenses}
            isLoading={isFetching}
        />
      </div>
  )
}

export default App;