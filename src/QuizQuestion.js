import React, {Component} from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends React.Component {

    constructor(props){

        super(props);
        this.state={incorrectAnswer: false};
    }
    handleClick(buttonText) {

        if(buttonText===this.props.quiz_question.answer){
            this.props.showNextQuestionHandler();
            this.state.incorrectAnswer=false;
        }
        else {
             this.state.incorrectAnswer=true;
        }

    }
    render() {

        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map((answerOption) => {
                            const answerIndex = this.props.quiz_question.answer_options.indexOf(answerOption);
                            const answer_option = answerOption;
                            return <QuizQuestionButton key={answerIndex} button_text={answer_option} clickHandler={this.handleClick.bind(this)}/>
                        })}
                    </ul>
                    {this.state.incorrectAnswer?<p className="error">Sorry, that's not right</p>:null}
                </section>
            </main>
        );
    }
}

export default QuizQuestion;