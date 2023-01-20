import React,{Component} from "react";

class QuizQuestionButton extends React.Component {

    render() {

        return (
            <li><button>{this.props.button_text}</button></li>
        );
    }


}

export default QuizQuestionButton;