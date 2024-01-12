import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SiderItem } from './SiderItem';

export const Sider = () => {
  const navigate = useNavigate();

  const goToGuitar = () => {
    navigate('/guitar');
  };

  return (
    <Box
      sx={{
        width: 280
      }}
      role='presentation'
    >
      <List>
        <SiderItem nav={goToGuitar} itemName={'마타사부로 기타 COVER'} />
      </List>
    </Box>
  );
};
