import { ListItemText, ListItem, makeStyles, ListItemIcon } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
// import TransactionHistory from './TransactionHistory';
import React from 'react';

const useStyle = makeStyles({
    list: {
        display: 'flex',
        marginTop: 10,
        border: '1px solid #F6F6F6'
    }
})

const Transaction = ({transaction, deleteTransaction}) => {
    const sign = transaction.amount >= 0 ? '₹' : '-₹';
    const amount = sign + Math.abs(transaction.amount);
    const color = transaction.amount >=0 ? 'Green' : 'Red';
    const classes = useStyle();

     

    return (
        <ListItem style={{background: `${color}`, color: '#fff'}} className={classes.list}>
            <ListItemIcon>
                <DeleteIcon onClick={() => deleteTransaction(transaction.id)} />
            </ListItemIcon>
            <ListItemText primary={transaction.text} />
            <ListItemText primary={amount} />
        </ListItem>
    )
}

export default Transaction;