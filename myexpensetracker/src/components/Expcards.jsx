import React from 'react'
import { Box, Card, makeStyles, CardContent, Typography } from '@material-ui/core';

const usestyle= makeStyles({
    cards:{
        display:'flex',
        '& > *':{
            padding:'10',
            flex:'1',
        }
    },
    // sp:{ padding:'80px'
    // },
    income:{
        color:"green"
    },
    expense:{
        color:"red"
    }
});
const Expcards = ({transactions}) => {

    const classes= usestyle();
    const amount = transactions.map(transaction => transaction.amount);
    const income = amount.filter(item => item > 0).reduce((acc, item) => (acc+=item), 0).toFixed(2);
    const expense = (amount.filter(item => item < 0).reduce((acc, item) => (acc+=item), 0) * -1).toFixed(2);
  
    return (
      <Box className={classes.cards}>
    <Card classNme={classes.sp}>
        <CardContent >
            <Typography >Income</Typography>
            <Typography className={classes.income}> ₹{income}</Typography>
            
        </CardContent>
    </Card>
     <Card>
     <CardContent >
         <Typography >Expense</Typography>
         <Typography className={classes.expense}> ₹{expense}</Typography>
         
     </CardContent>
 </Card>
 </Box>
  );
}

export default Expcards;