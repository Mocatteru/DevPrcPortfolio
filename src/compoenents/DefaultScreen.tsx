//Legacy
import styled from 'styled-components';

interface DefaultScreenProps {
  readonly flexDirection: 'column' | 'row';
}

const DefaultScreen = styled.div<DefaultScreenProps>`
  background-color: skyblue;
  flex: 1;
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0;
  flex-direction: ${props => props.flexDirection};
  overflow: hidden;
  align-items: center;
`;

export default DefaultScreen;
