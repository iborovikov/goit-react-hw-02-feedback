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

    leaveFeedback = (feedback) => {
        this.setState((prevState) => {
            return {
                [feedback]: prevState[feedback] + 1
            }
        })
    };

    countTotalFeedback = ({ good, neutral, bad }) => {
        return (good + neutral + bad)
    };
    countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
        return (good / ((good + neutral + bad) / 100))
    };

    render() {
        
        const {
            countTotalFeedback,
            leaveFeedback,
            countPositiveFeedbackPercentage } = this
        
        const options = Object.keys(this.state)

        return (
            <Section title="Please leave feedback">
                <FeedbackOptions options={options} onLeaveFeedback={leaveFeedback} />
                {countTotalFeedback(this.state) ?
                    <Statistics options={options} state={this.state} total={countTotalFeedback(this.state)} positivePercentage={countPositiveFeedbackPercentage(this.state)} /> :
                    <Notification message="No feedback given" />
                }
            </Section>
        )
    };
};
export default Widget
