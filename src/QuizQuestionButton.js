import React,{Component} from "react";

class QuizQuestionButton extends React.Component {

    handleClick() {
        this.props.clickHandler(this.props.button_text);

    }
    render() {

        return (
            <li><button>{this.props.button_text}</button></li>
        );
    }


}

export default QuizQuestionButton;