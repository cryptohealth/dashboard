import styled, { css } from 'styled-components';

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  ${(props) =>
    props.image &&
    css`
      background-image: url(${props.image});
      background-position: center right;
      background-size: cover;
      background-repeat: no-repeat;
    `}
`;

export const Filter = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: ${(props) => (props.filter ? props.filter : 'transparent')};
`;
