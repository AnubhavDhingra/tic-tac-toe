import React from 'react';
import classes from './Square.module.css';
import Cross from '../../assets/Cross.svg';
import Zero from '../../assets/Zero.svg';

const square = (props) => {
    let square = null;
    if(props.value === 'X') {
        square = (
            <img src={Cross} alt="cross"/>
        );
    } else if (props.value === 'O') {
        square = (
            <img src={Zero} alt="Zero"/>
        );
    }
    return (
        <div className={classes.square} onClick = {props.onClick}>
            {square}        
        </div>
    )
}


export default square;