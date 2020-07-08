import React, {Component} from 'react';
import Square from '../Square/Square';
import classes from './Board.module.css';

class Board extends Component {
    
    renderSquare (i) {
        return <Square 
            value = {this.props.squares[i]} 
            onClick = {() => {this.props.onClick(i)}}
        />;
    }
    render() {
        let topRow = [classes.Row, classes.BorderBottom];
        let col = [classes.Col, classes.BorderRight]
        return (
            <React.Fragment>
                <div className={topRow.join(' ')}>
                    <div className={col.join(' ')}>{this.renderSquare(0)}</div>
                    <div className={col.join(' ')}>{this.renderSquare(1)}</div>
                    <div className={classes.Col}>{this.renderSquare(2)}</div>
                   
                </div>
                <div className={topRow.join(' ')}>
                    <div className={col.join(' ')}>{this.renderSquare(3)}</div>
                    <div className={col.join(' ')}>{this.renderSquare(4)}</div>
                    <div className={classes.Col}>{this.renderSquare(5)}</div>
                   
                </div>
                <div className={classes.Row}>
                    <div className={col.join(' ')}>{this.renderSquare(6)}</div>
                    <div className={col.join(' ')}>{this.renderSquare(7)}</div>
                    <div className={classes.Col}>{this.renderSquare(8)}</div>
                   
                </div>
                
               
            </React.Fragment>
        );
    }
}

export default Board;