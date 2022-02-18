import React from 'react';
import{Box , Typography, TextField,Button, makeStyles} from '@material-ui/core'
import { useState } from 'react';
const usestyle= makeStyles({
    container:{
        display:'flex',
        flexDirection:'column',
        '& >*':{
            marginTop:'30px'
        }
    },
    button:{
        background:'#445A6F',
        color:'#FFF'
    }
})
const NewTransactions = ({addTransaction}) => {
    const classes= usestyle();
    const[text, setText]= useState('');
    const[amount, setAmount]= useState();

    const newTransaction=()=>{
        const transaction={
            id:Math.floor(Math.random()*10000),
            text: text,
            amount: +amount,
        }
        addTransaction(transaction);
    }
  return (
      
      <Box className={classes.container}>
          <Typography variant="h5"> New Transactions </Typography>
      <TextField label="Enter Expense" onChange={(e)=> setText(e.target.value)}/>
      <TextField label="Total Amount"onChange={(e)=> setAmount(e.target.value)}/>
      <Button variant="contained" className={classes.button} onClick={newTransaction}>ADD NEW Transaction</Button>
      </Box>
  )
}

export default NewTransactions;