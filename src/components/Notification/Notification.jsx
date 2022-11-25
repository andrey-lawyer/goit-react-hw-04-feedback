import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Notification = ({ message }) => (
  <StayledMessage>{message}</StayledMessage>
);
export default Notification;
//
const StayledMessage = styled.p`
  padding: 20px;
  text-align: center;
  color: #800000;
`;
//
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
