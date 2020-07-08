import React, { Component } from 'react';
import classes from './Landing.module.css';
import logo from '../../assets/XO.svg';

class Landing extends Component {

    state = {
        toggle: ''
    };

    handleClick = (key) => {
        console.log(key);
        this.setState({ toggle: key });
        this.props.history.push('/game');
    }

    render() {
        return (
            <React.Fragment>
                <div className={classes.Logo}>
                    <img src={logo} alt="logo" />
                    <h3>Choose your play mode</h3>
                </div>
                <div className={classes.ButtonGroup}>
                    <button className={classes.Button}
                        onClick={() => this.handleClick('A')}>With AI</button>
                    <button className={classes.Button}
                        onClick={() => this.handleClick('F')}>With a Friend</button>
                </div>
            </React.Fragment>
        );
    }
}

export default Landing;