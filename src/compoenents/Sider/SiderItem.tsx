import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';

interface SiderItem {
  nav: () => void;
  itemName: string;
}

export const SiderItem = (siderItem: SiderItem) => {
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={siderItem.nav}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={siderItem.itemName} />
      </ListItemButton>
    </ListItem>
  );
};
