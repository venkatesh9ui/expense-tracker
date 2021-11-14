import React from 'react';
import { useState } from 'react/cjs/react.development';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredyear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    // console.log('Expenses.js');
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredyear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
