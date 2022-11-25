import React from 'react';
import PropTypes from 'prop-types';
import { BlockWidget, TitleWidget } from './Section.styled';
const Section = ({ title, children }) => (
  <section>
    <BlockWidget>
      <TitleWidget>{title}</TitleWidget>
      {children}
    </BlockWidget>
  </section>
);
export default Section;

Section.propTypes = {
  children: PropTypes.array,
  title: PropTypes.string,
};
