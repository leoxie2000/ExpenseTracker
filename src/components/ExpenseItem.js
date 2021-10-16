import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import './ExpenseDate.css';
import Card from './Card';
import React, { useState } from 'react';


function ExpenseItem(props) {  

  const [title, setTitle]= useState(props.title);

  const clickHandler = () =>{
    setTitle('updated!');
    console.log(title); 
  }
  


  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>;
      </div>
      <button onClick={clickHandler}>Change Title</button>

    </div>
  );
}

export default ExpenseItem;
