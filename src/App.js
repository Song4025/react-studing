import './App.css';
import styled, {keyframes} from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
  0%
  {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% 
  { 
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Box = styled.div`
  background: tomato;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation:${rotationAnimation} 3s linear infinite;
  span {
    font-size: 36px;
  }
`;


function App() {
  return (
    <Wrapper>
      <Box>
      <span>🤣</span>
      </Box>
    </Wrapper>
  );
}

export default App;
