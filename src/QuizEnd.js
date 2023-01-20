import React,{Component} from "react";

class QuizEnd extends React.Component {

    handleResetClick() {

    }
    render() {

        return (
            <div>
                <p>Thanks for playing!</p>
                <a onClick={this.handleResetClick.bind(this)}>Reset Quiz</a>
            </div>
        );
    }
}

export default QuizEnd;