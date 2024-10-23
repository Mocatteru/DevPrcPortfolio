import React, { useCallback, useEffect, useState } from 'react';
import { Avatar, Box, Button, TextField, Typography } from '@mui/material';
import ButtonAppBar from '../../compoenents/Appbar';
import useUserStore from '../../store/userStore';
import _, { replace } from 'lodash';
import { numberRegex } from '../../regex/regex';

function UserInfoScreen() {
  // local
  const userStore = useUserStore();
  const [userNameInput, setUserNameInput] = useState<string>('');
  const [userIDInput, setUserIDInput] = useState<number | null>();
  const [isInputError, setIsInputError] = useState<boolean>(false);

  useEffect(() => {
    document.title = '유저 정보 및 수정';
    userStore.fetchUserName();
    userStore.fetchUserID();
  }, []);

  // handle
  const handleUserNameTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserNameInput(event.target.value);
  };

  const handleUserIDTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsInputError(false);
    if (event.target.value === '') {
      setUserIDInput(null);
    }
    const newID = parseInt(event.target.value.replace(numberRegex, ''));
    if (!_.isNaN(newID)) {
      setUserIDInput(newID);
    }
  };

  const onClickEditUserNameButton = useCallback(async () => {
    userStore.updateUserName(userNameInput);
  }, [userNameInput, userStore]);

  const onClickEditUserIDButton = useCallback(async () => {
    if (_.isUndefined(userIDInput) || _.isNaN(userIDInput) || _.isNull(userIDInput)) {
      setIsInputError(true);
    } else {
      console.log(userIDInput);
      userStore.updateUserID(userIDInput);
    }
  }, [userIDInput, userStore]);

  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
        backgroundColor: '#FFFFFF'
      }}
    >
      <ButtonAppBar title='유저 정보' />
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#9be8f3'
        }}
      >
        <Typography
          padding={'12px 12px 0px 12px'}
          fontSize={'26px'}
          sx={{
            fontWeight: 'bold'
          }}
        >
          유저 정보
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            borderRadius: '16px',
            backgroundColor: '#FFFFFF'
          }}
        >
          <Avatar
            sx={{
              width: '130px',
              height: '130px',
              alignSelf: 'center',
              backgroundColor: 'gray',
              marginBottom: '20px'
            }}
            alt='사용자 아바타'
            src='https://cdn.connectsites.net/user_files/esp/product_images/000/028/135/original.png?1610245237'
          />
          <Typography paddingBottom={'8px'} fontSize={'16px'}>
            {'이름: ' + userStore.userName}
          </Typography>
          <Typography paddingBottom={'12px'} fontSize={'16px'}>
            {'유저 ID: ' + userStore.userID}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              paddingBottom: '12px',
              flexDirection: 'row'
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
          <Box
            sx={{
              flexDirection: 'row',
              display: 'flex',
              paddingBottom: '12px'
            }}
          >
            <TextField
              onChange={handleUserIDTextFieldChange}
              value={userIDInput ?? ''}
              label='변경할 ID'
              variant='filled'
              color='primary'
              size='small'
              error={isInputError}
              helperText={isInputError ? 'ID는 숫자만 입력할 수 있습니다.' : ''}
            />
            <Button variant='contained' size='medium' onClick={onClickEditUserIDButton}>
              변경
            </Button>
          </Box>
          <Typography alignSelf={'center'} fontStyle={'italic'}>
            Zustand
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default UserInfoScreen;
