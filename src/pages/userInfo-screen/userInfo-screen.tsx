import React, { useCallback, useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import ButtonAppBar from '../../compoenents/Appbar';
import useUserStore from '../../store/userStore';

function UserInfoScreen() {
  // local
  const userStore = useUserStore();

  const [userNameInput, setUserNameInput] = useState<string>('');

  useEffect(() => {
    document.title = '유저 정보 및 수정';
  }, []);

  // handle
  const handleUserNameTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserNameInput(event.target.value);
  };

  const onClickEditUserNameButton = useCallback(() => {
    userStore.editUserName(userNameInput);
  }, [userNameInput, userStore.editUserName]);

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
      <ButtonAppBar title='유저 정보' />
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          width: '100vw',
          height: '100vh',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography padding={'12px 12px 0px 12px'} fontWeight={'20px'} fontSize={'26px'}>
          유저 정보
        </Typography>
        <Typography padding={'12px 12px 0px 12px'} fontSize={'16px'}>
          {'이름: ' + userStore.userName}
        </Typography>
        <Typography padding={'12px'} fontSize={'16px'}>
          {'ID: ' + userStore.userID}
        </Typography>
        <Box
          sx={{
            flexDirection: 'row',
            display: 'flex'
          }}
        >
          <TextField
            onChange={handleUserNameTextFieldChange}
            value={userNameInput}
            label='변경할 이름'
            variant='filled'
            color='primary'
            size='small'
          />
          <Button variant='contained' size='medium' onClick={onClickEditUserNameButton}>
            변경
          </Button>
        </Box>
        <Typography fontStyle={'italic'}>Zustand 활용예제</Typography>
      </Box>
    </Box>
  );
}

export default UserInfoScreen;
