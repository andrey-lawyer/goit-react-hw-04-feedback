import React from 'react';
import PropTypes from 'prop-types';
import { ListButtons, ButtonEl } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ListButtons>
      {options.map((option, index) => (
        <li key={index}>
          <ButtonEl type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
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
