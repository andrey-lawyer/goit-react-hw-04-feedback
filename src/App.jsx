import React, { useState } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = state;
  const onLeaveFeedback = option => {
    setState(prevState => ({ ...prevState, [option]: prevState[option] + 1 }));
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return (good / countTotalFeedback()) * 100 || 0;
  };

  const total = countTotalFeedback();
  const positive = countPositiveFeedbackPercentage();
  const arrayKey = Object.keys(state);
  return (
    <div className="Feedback">
      <Section title="Please leave feedback">
        {/* БЛОК КНОПОК */}
        <FeedbackOptions options={arrayKey} onLeaveFeedback={onLeaveFeedback} />
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
};

export default App;
