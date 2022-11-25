import React from 'react';
import PropTypes from 'prop-types';
import { ListButtons, ButtonEl } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ListButtons>
      {options.map((option, index) => (
        <li key={index}>
          <ButtonEl type="button" data-name={option} onClick={onLeaveFeedback}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </ButtonEl>
        </li>
      ))}
    </ListButtons>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
