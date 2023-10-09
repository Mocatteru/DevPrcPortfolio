import react, { useCallback } from 'react';
import './home-screen.css';
import DefaultScreen from '../../compoenents/DefaultScreen';
import Button from '../../compoenents/Button';
import { useNavigate } from 'react-router-dom';

function HomeScreen() {
  // local
  const navigate = useNavigate();

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
    return `${clickCounter}회`;
  };

  const resetCount = useCallback(() => {
    setClickCounter(0);
  }, [clickCounter]);

  const goToGuitar = () => {
    navigate('/guitar');
  };

  return (
    <DefaultScreen flexDirection='column'>
      <button onClick={resetCount}>안녕하셈요? ㅋ</button>
      <Button variant='secondary' onClick={goToGuitar}>
        기타 페이지로 이동함요 ㅋ
      </Button>
      <Button variant='primary' onClick={onClickPlusButton}>
        님아 이거 눌러보셈 지림 ㅋ
      </Button>
      <h1>{isCountEnd()}</h1>
      <footer
        style={{
          position: 'static',
          bottom: '0'
        }}
      >
        위 버튼은 styled-components로 구성되었습니다노 ㅋ
      </footer>
    </DefaultScreen>
  );
}

export default HomeScreen;
