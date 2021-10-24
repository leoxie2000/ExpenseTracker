import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(props) {
  var i = 0;
  return (
    <div className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={i++}
        />
      ))}
      
    </div>
  );
}
export default Expenses;
