import React, { useCallback, useState } from 'react';
import './home-screen.css';
import DefaultScreen from '../../compoenents/DefaultScreen';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

function HomeScreen() {
  // local
  const navigate = useNavigate();

  const [clickCounter, setClickCounter] = useState<number>(0);

  const [isOpenSider, setOpenSider] = useState<boolean>(false);

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

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpenSider(open);
  };

  // component
  const Sider = () => (
    <Box
      sx={{
        width: 280
      }}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={goToGuitar}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={'MATASABURO COVER'} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <DefaultScreen flexDirection='column'>
      <button onClick={resetCount}>안녕하셈요? ㅋ</button>
      <React.Fragment>
        <Button
          variant='contained'
          sx={{
            margin: '42px'
          }}
          onClick={toggleDrawer(true)}
        >
          Sider Test Button
        </Button>
        <Drawer anchor='left' open={isOpenSider} onClose={toggleDrawer(false)}>
          <Sider />
        </Drawer>
      </React.Fragment>
      <Button variant='contained' color='info' onClick={goToGuitar}>
        기타 페이지로 이동함요 ㅋ
      </Button>
      <Button variant='contained' color='primary' onClick={onClickPlusButton}>
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
