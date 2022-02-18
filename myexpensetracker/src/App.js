import React from 'react';
import { useState } from 'react';
import './App.css';
import {makeStyles, Typography, Box } from '@material-ui/core';
import Balance from './components/Balance';
import Expcards from './components/Expcards';
import NewTransactions from './components/NewTransactions';
import TransactionHistory from './components/TransactionHistory';
// import Transaction from './components/Transaction';
// import { useEffect } from 'react';



const useStyle= makeStyles({
  header :{
    color:'whight',
    fontSize:'45px',
    margin:'10px 0',
    textTransform:'uppercase',
    textAlign:'center'
  },
  component:{
    background:'#FFFF',
    width:'480px',
    padding:'10px',
    borderRadius:'20px',
    display:'flex',
    '& > *':{
      width:'50%',
      padding:'10px',
      height:'70vh'

    }


  }
})
function App() {
  const classes = useStyle();
  const[transactions, setTransaction] = useState([
    {id:1, text: 'Books' , amount:-2000},
    {id:2, text: 'Salary' , amount:65000},
    {id:3, text: 'Manali' , amount:-9200},

  ]);
  const deleteTransaction = (id) => {
    console.log(id);
    setTransaction(transactions.filter(transaction => transaction.id !== id));
  
  }

  const addTransaction = (transaction) => {
    setTransaction(transactions => [transaction, ...transactions]);

  }
    return (
    <div className='App'>
      <Typography className={classes.header}>
        Expense tracker
      </Typography>
      <Box className={classes.component}>
        
        <Box><Balance transactions={transactions}/>  
         <Expcards transactions={transactions}/>
         <NewTransactions addTransaction={addTransaction}/>
          </Box>
          <Box>
          <TransactionHistory transactions={transactions} deleteTransaction={deleteTransaction}/>  
          </Box>
               </Box>
    </div>
    
  );
}

export default App;
