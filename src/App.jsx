import React, { Component } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static counter;

  onLeaveFeedback = event => {
    // const kindFeedback = event.target.textContent;
    const kindFeedback = event.target.dataset.name;
    if (!this.counter) {
      this.counter = true;
    }
    this.setState(prevState => ({
      [kindFeedback]: prevState[kindFeedback] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback()) * 100;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const arrayKey = Object.keys(this.state);
    return (
      <div className="Feedback">
        <Section title="Please leave feedback">
          {/* БЛОК КНОПОК */}
          <FeedbackOptions
            options={arrayKey}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
          {/* БЛОК КНОПОК */}
          {!this.counter ? (
            // Предупреждение
            <div>
              <Notification message="There is no feedback"></Notification>
            </div>
          ) : (
            // Предупреждение
            // {/* СТАТИСТИКА */}
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            ></Statistics>
          )}
          {/* СТАТИСТИКА */}
        </Section>
      </div>
    );
  }
}
export default App;
