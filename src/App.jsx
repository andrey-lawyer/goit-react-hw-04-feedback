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

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback()) * 100 || 0;
  };

  render() {
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;
    const arrayKey = Object.keys(this.state);
    return (
      <div className="Feedback">
        <Section title="Please leave feedback">
          {/* БЛОК КНОПОК */}
          <FeedbackOptions
            options={arrayKey}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          {/* БЛОК КНОПОК */}
          {!total ? (
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
              total={total}
              positivePercentage={positive}
            />
          )}
          {/* СТАТИСТИКА */}
        </Section>
      </div>
    );
  }
}
export default App;
