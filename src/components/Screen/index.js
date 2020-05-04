import React from 'react';

import { any, string } from 'prop-types';

import { Container, Filter } from './styles';

export function Screen(props) {
  const { children, image, filter } = props;
  return (
    <Container image={image}>
      <Filter filter={filter}>{children}</Filter>
    </Container>
  );
}

Screen.propTypes = {
  children: any,
  filter: string,
  image: any,
};

Screen.defaultProps = {
  children: '',
  filter: '',
  image: '',
};
