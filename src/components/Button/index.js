import React from 'react';

import { any } from 'prop-types';

import { Container } from './styles';

export function Button(props) {
  const { children } = props;
  return <Container>{children}</Container>;
}

Button.propTypes = {
  children: any,
};

Button.defaultProps = {
  children: '',
};
