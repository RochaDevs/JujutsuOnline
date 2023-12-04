import { Button, Menu, MenuItem } from '@mui/material';
import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import styles from './SimpleMenu.module.scss'

interface ISimpleMenuProps {
  linkMob1: React.ReactNode;
  linkMob2: React.ReactNode;
  linkMob3: React.ReactNode;
  linkMob4?: React.ReactNode;
  linkMob5?: React.ReactNode;
  linkMob6?: React.ReactNode;
  linkMob7?: React.ReactNode;
}

export default function SimpleMenu({ linkMob1, linkMob2, linkMob3, linkMob4, linkMob5, linkMob6, linkMob7 }: ISimpleMenuProps) {
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
        <GiHamburgerMenu color='#FFF' size={25} />
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
        <div className={styles.divMenu}>
          {linkMob1 && <MenuItem onClick={handleClose}>{linkMob1}</MenuItem>}
          {linkMob2 && <MenuItem onClick={handleClose}>{linkMob2}</MenuItem>}
          {linkMob3 && <MenuItem onClick={handleClose}>{linkMob3}</MenuItem>}
          {linkMob4 && <MenuItem onClick={handleClose}>{linkMob4}</MenuItem>}
          {linkMob5 && <MenuItem onClick={handleClose}>{linkMob5}</MenuItem>}
          {linkMob6 && <MenuItem onClick={handleClose}>{linkMob6}</MenuItem>}
          {linkMob7 && <MenuItem onClick={handleClose}>{linkMob7}</MenuItem>}
        </div>
      </Menu>
    </div>
  );
}
