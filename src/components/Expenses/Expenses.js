import ExpenseList from "./ExpenseList";
import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filterdYear, setfilterdYear] = useState("2020");

  const yearChangeHandler = (selectedYear) => {
    setfilterdYear(selectedYear);
    console.log(filterdYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterdYear;
  });

  // let expenseContent = <p>No Expense Found</p>;

  // if (filteredExpenses.length > 0) {
  //   expenseContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filterdYear}
          onYearChange={yearChangeHandler}
        />

        <ExpensesChart expenses={filteredExpenses}/>

        {/* One way of filtering conditional data using ternery operator ---> #1 */}

        {/* Second way of filtering conditional data using && operator ---> #2 */}

        {/*  3rd way of filtering conditional data*/}
        {/* {expenseContent} */}

        {/* 4th way creating new component for the expenseList */}
        <ExpenseList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;

// #1

// {filteredExpenses.length == 0 ? (
//   <p>No Expenses Found</p>
// ) : (
//   filteredExpenses.map((expense) => (
//     <ExpenseItem
//       key={expense.id}
//       title={expense.title}
//       amount={expense.amount}
//       date={expense.date}
//     />
//   ))
// )}

// #2

// {filteredExpenses.length === 0 && <p>No Expense Found</p>}
//         {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
//             <ExpenseItem
//               key={expense.id}
//               title={expense.title}
//               amount={expense.amount}
//               date={expense.date}
//             />
//           ))
//         }
