import react, { useCallback } from 'react';
import './home-screen.css';
import { BrowserRouter } from 'react-router-dom';
import DefaultScreen from '../../compoenents/DefaultScreen';
import Button from '../../compoenents/Button';

function HomeScreen() {
  const [clickCounter, setClickCounter] = react.useState<number>(0);

  const onClickPlusButton = () => {
    console.log('기모띠');
    setClickCounter(value => value + 1);
  };

  const isCountEnd = () => {
    if (clickCounter >= 20) {
      return '독한새끼 ㅋ 나가뒤지셈 ㅋ';
    }
    if (clickCounter >= 10) {
      return '좆까셈 ㅋ';
    }
    return clickCounter;
  };

  const resetCount = useCallback(() => {
    setClickCounter(0);
  }, [clickCounter]);

  return (
    <BrowserRouter>
      <DefaultScreen flexDirection='column'>
        <button onClick={resetCount}>안녕하세요</button>
        <Button variant='primary' onClick={onClickPlusButton}>
          님아 이거 눌러보셈 지림 ㅋ
        </Button>
        <h1>{isCountEnd()}</h1>
      </DefaultScreen>
    </BrowserRouter>
  );
}

export default HomeScreen;
