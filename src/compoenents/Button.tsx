import styled from 'styled-components';

const backgroundColor = {
  primary: '#1c7ed6',
  secondary: '#ae3ec9'
};

const hoverBackgroundColor = {
  primary: '#1971c2',
  secondary: '#9c36b5'
};

interface StyledButtonProps {
  readonly variant: 'primary' | 'secondary';
}

const Button = styled.button<StyledButtonProps>`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  background-color: ${props => backgroundColor[props.variant]};
  cursor: pointer;
  &:hover {
    background-color: ${props => hoverBackgroundColor[props.variant]};
  }
`;

export default Button;
