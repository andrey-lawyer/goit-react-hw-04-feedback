import PropTypes from 'prop-types';
import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <h3>Statistics</h3>
    <ul>
      <li>
        <p>Good: {good}</p>
      </li>
      <li>
        <p> Neutral: {neutral}</p>
      </li>
      <li>
        <p> Bad: {bad}</p>
      </li>
      <li>
        <p> Total: {total}</p>
      </li>
      <li>
        <p> Positive Feedback: {positivePercentage}%</p>
      </li>
    </ul>
  </div>
);
export default Statistics;

Notification.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
