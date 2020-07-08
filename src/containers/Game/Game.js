import React, { Component } from 'react';
import { calculateWinner } from '../../Utils/Utils';
import Board from '../../components/Board/Board';
import classes from './Game.module.css';
import Settings from '../../assets/Settings.svg';
import Backdrop from '../../components/Backdrop/BackDrop';

class Game extends Component {
    state = {
        squares: Array(9).fill(null),
        xIsNext: true,
        showTopDrawer: false
    };

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    resetBoard = (key='') => {
        this.setState({squares: Array(9).fill(null), xIsNext: true})
        if(key === 'reset') this.toggleTopDrawer();
    }

    toggleTopDrawer = () => {
        this.setState(prevState => {
            return { showTopDrawer: !prevState.showTopDrawer };
        })
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = (<h3>Winner: {winner}</h3>);
        } else if(!this.state.squares.includes(null)) {
            status = (<span onClick={this.resetBoard}>Reset Board</span>);
        } 
        else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        let topDrawer = null;

        if (this.state.showTopDrawer) {
            topDrawer = (
                <React.Fragment>
                    <Backdrop show clicked={this.toggleTopDrawer} />
                    <div className={classes.Menu}>
                        <div onClick={() => {this.props.history.push('/')}}>Go Back</div>
                        <div onClick={() => this.resetBoard('reset')}>Reset Board</div>
                    </div>

                </React.Fragment>
            )
        }

        return (
            <React.Fragment>
                {topDrawer}
                <div className={classes.Game}>
                    <div className={classes.GameBoard}>
                        <Board
                            squares={this.state.squares}
                            onClick={(i) => this.handleClick(i)}
                        />
                    </div>
                    <div className={classes.GameInfo}>
                        <div style={{padding: '10px'}}>{status}</div>
                        <img className={classes.Settings} src={Settings} alt="settings"
                            onClick={this.toggleTopDrawer} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Game;