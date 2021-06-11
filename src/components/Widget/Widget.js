import { Component } from "react";

import Section from './Section'
import Statistics from './Statistics'
import FeedbackOptions from './FeedbackOptions'
import Notification from './Notification'

class Widget extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    goodFeedback = () => {
        this.setState((prevState) => {
            return {
                good: prevState.good + 1
            }
        })
    };
    neutralFeedback = () => {
        this.setState((prevState) => {
            return {
                neutral: prevState.neutral + 1
            }
        })
    };
    badFeedback = () => {
        this.setState((prevState) => {
            return {
                bad: prevState.bad + 1
            }
        })
    };


    countTotalFeedback = ({ good, neutral, bad }) => {
        return (good + neutral + bad)
    };
    countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
       return (good / ((good + neutral + bad) / 100))
    }

    render() {
        
        const { good } = this.state;
        const { neutral } = this.state;
        const { bad } = this.state;
        const options = {
            goodFeedback: this.goodFeedback,
            neutralFeedback: this.neutralFeedback,
            badFeedback: this.badFeedback
        }

        return (
            <Section title="Please leave feedback">
                <FeedbackOptions options={options} />
                {this.countTotalFeedback(this.state) ?
                    <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback(this.state)} positivePercentage={this.countPositiveFeedbackPercentage(this.state)} /> :
                    <Notification message="No feedback given" />
                }
            </Section>
        )
    }
}
export default Widget


// total={ this.countTotalFeedback(this.state) } positivePercentage={ this.countPositiveFeedbackPercentage(this.state) }