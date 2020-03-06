import React, { Component }     from "react";
import { connect }              from "react-redux";
import {
    calculate,
    deleteLastEntry,
    clear,
    evaluateExpression,
    square,
    squareRoot
}                               from "./store/actions/calculate";
import Calculator               from "./components/calculator";
import * as fromCalculator      from "./store";
import                               "./App.css";
import { SocialIcon } from 'react-social-icons';

export class App extends Component {
    componentDidMount() {
        console.log("mounted calculator!");
    }

    render() {
        return (
          <div>
            <div className="calculator--container">
                <Calculator.Screen {...this.props} />
                <Calculator.Keypad {...this.props} />

            </div>
            <div><SocialIcon url="http://twitter.com"  style={{align: 'left'}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SocialIcon url="https://www.facebook.com/"  style={{align: 'center'}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SocialIcon url="https://www.linkedin.com/"  style={{align: 'right'}}/></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          </div>
        );

    };
};

const mapStateToProps = state => {
    return {
        expression: fromCalculator.getExpression(state),
        total: fromCalculator.getTotal(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        calculate: buttonKey => {
            dispatch(calculate(buttonKey));
        },
        delete: () => {
            dispatch(deleteLastEntry());
        },
        clear: () => {
            dispatch(clear());
        },
        evaluate: () => {
            dispatch(evaluateExpression());
        },
        square: () => {
            dispatch(square());
        },
        squareRoot: () => {
            dispatch(squareRoot());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
