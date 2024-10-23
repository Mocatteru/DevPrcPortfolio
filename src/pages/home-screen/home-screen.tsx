import React, { useCallback, useEffect, useState } from 'react';
import './home-screen.css';
import { Avatar, Box, Button, TextField, Typography } from '@mui/material';
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
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF'
      }}
    >
      <ButtonAppBar title='홈 화면' />
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <Avatar
          sx={{
            width: '400px',
            height: '400px',
            alignSelf: 'center',
            backgroundColor: 'gray',
            margin: '100px'
          }}
          alt='사용자 아바타'
          src='https://cdn.connectsites.net/user_files/esp/product_images/000/028/135/original.png?1610245237'
        />
        <Typography
          fontStyle={'italic'}
          fontWeight='bold'
          padding={'0px 200px 0px 200px'}
          textAlign={'center'}
          fontSize={'50px'}
        >
          {'환영합니다 "' + userStore.userName + '" 님'}
        </Typography>
        <Typography paddingTop={'40px'} textAlign={'center'}>
          {'접속 유저ID 번호: ' + userStore.userID}
        </Typography>
      </Box>
    </Box>
  );
}

export default HomeScreen;
