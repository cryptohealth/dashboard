import React from 'react';

import { string } from 'prop-types';

import { Container, Field, Label } from './styles';

export function Input(props) {
  const { label, className, type } = props;
  return (
    <Container className={className}>
      {label && <Label>{label}</Label>}
      <Field type={type} />
    </Container>
  );
}

Input.propTypes = {
  label: string,
  type: string,
  className: string,
};

Input.defaultProps = {
  label: '',
  type: '',
  className: '',
};
