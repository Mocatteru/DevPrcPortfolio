import React, { useCallback, useEffect, useState } from 'react';
import './home-screen.css';
import { Box, Button, TextField, Typography } from '@mui/material';
import ButtonAppBar from '../../compoenents/Appbar';
import useUserStore from '../../store/userStore';

function HomeScreen() {
  // local
  const userStore = useUserStore();

  useEffect(() => {
    document.title = '홈 화면';
    userStore.fetchUserName();
  }, []);

  return (
    <Box
      sx={{
        flex: 1,
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#FFFFFF'
      }}
    >
      <ButtonAppBar title='홈 화면' />
      <Typography
        fontStyle={'italic'}
        fontWeight='bold'
        padding={'200px 200px 0px 200px'}
        textAlign={'center'}
        fontSize={'50px'}
      >
        {'환영합니다 "' + userStore.userName + '" 님'}
      </Typography>
      <Typography paddingTop={'40px'} textAlign={'center'}>
        {'접속 유저ID 번호: ' + userStore.userID}
      </Typography>
    </Box>
  );
}

export default HomeScreen;
