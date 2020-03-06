import React, { Component }   from "react";
import { keypadKeys }         from "../../utils/constants";
import Calculator             from "../calculator";

export default class Keypad extends Component {
    handleClick = key => {
        switch (key) {
        case "c":
            this.props.clear();
            break;
        case "+/-":
            this.props.delete();
            break;
        case "=":
            this.props.evaluate();
            break;
        case "√":
            this.props.squareRoot();
            break;
        case "x^2":
            this.props.square();
            break;
        default:
            this.props.calculate(key);
            break;
        };
    };

    render() {
        return (
            <div className="keypad">
                {keypadKeys.map((block, index) => {
                    return (
                        <div key={index} className="block">
                            {block.map(key => (
                                <Calculator.Button
                                    key={key}
                                    onButtonClick={this.handleClick}
                                    buttonKey={key}
                                />
                            ))}
                        </div>
                    );
                })}
            </div>
        );
    };
};
