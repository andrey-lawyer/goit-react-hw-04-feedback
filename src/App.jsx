import React, { useState } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutrale] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutrale(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return (good / countTotalFeedback()) * 100 || 0;
  };

  const total = countTotalFeedback();
  const positive = countPositiveFeedbackPercentage();
  const stateObject = {
    good,
    neutral,
    bad,
  };
  const arrayKey = Object.keys(stateObject);
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
