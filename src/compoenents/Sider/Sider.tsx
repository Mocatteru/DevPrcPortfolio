import { Box, List } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SiderItem } from './SiderItem';

export const Sider = () => {
  const navigate = useNavigate();

  const goToGuitar = () => {
    navigate('/guitar');
  };

  const goToUserInfo = () => {
    navigate('/userinfo');
  };

  const goToHome = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        width: 280
      }}
      role='presentation'
    >
      <List>
        <SiderItem nav={goToHome} itemName={'홈 화면'} />
        <SiderItem nav={goToGuitar} itemName={'마타사부로 기타 COVER'} />
        <SiderItem nav={goToUserInfo} itemName={'유저 정보 및 수정'} />
      </List>
    </Box>
  );
};
