import { Button, Menu, MenuItem } from '@mui/material';
import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import styles from './SimpleMenu.module.scss'

interface ISimpleMenuProps {
  linkMob1: React.ReactNode;
  linkMob2: React.ReactNode;
  linkMob3: React.ReactNode;
  linkMob4: React.ReactNode;
}

export default function SimpleMenu({linkMob1, linkMob2, linkMob3}: ISimpleMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.menu}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <GiHamburgerMenu size={25} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{
          zIndex: '1000'
        }}
      >
        <MenuItem onClick={handleClose}>{linkMob1}</MenuItem>
        <MenuItem onClick={handleClose}>{linkMob2}</MenuItem>
        <MenuItem onClick={handleClose}>{linkMob3}</MenuItem>
      </Menu>
    </div>
  );
}