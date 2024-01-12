import React, { useCallback, useState } from 'react';
import './home-screen.css';
import DefaultScreen from '../../compoenents/DefaultScreen';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, Divider, Drawer, Typography } from '@mui/material';
import ButtonAppBar from '../../compoenents/Appbar';

function HomeScreen() {
  // local
  const [clickCounter, setClickCounter] = useState<number>(0);

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

  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'skyblue'
      }}
    >
      <ButtonAppBar />

      <Box sx={{ flex: 1 }}>
        <Typography>실험1</Typography>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography>실험2</Typography>
      </Box>

      {/* <Box>
        <Button variant='contained' color='primary' onClick={resetCount}>
          안녕하셈요? ㅋㅋ
        </Button>
        <Button variant='contained' color='primary' onClick={onClickPlusButton}>
          님아 이거 눌러보셈 지림 ㅋ
        </Button>
        <Typography textAlign={'center'}>{isCountEnd()}</Typography>
      </Box> */}
    </Box>
  );
}

export default HomeScreen;
