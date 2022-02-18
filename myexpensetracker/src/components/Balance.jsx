import React from "react"
import{Box, Typography,makeStyles} from '@material-ui/core';
// import { useState} from "react";
// import { useEffect } from "react";

const useStyle= makeStyles({
    balance:{
        fontSize:'25px',
        marginBottom:'10px'
    }
})

const Balance = ({ transactions }) => {
    // const [balance, setBalance] = useState(0);
    const classes = useStyle();
    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((amount, item) => (amount += item), 0).toFixed(2);
    
    return (
        <Box>
            <Typography className={classes.balance}>Balance: ₹{total}</Typography>
        </Box>
    )
}


export default Balance;