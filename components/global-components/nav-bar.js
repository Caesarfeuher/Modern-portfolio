import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CallIcon from '@mui/icons-material/Call';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { IconButton, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import Link from 'next/link';

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCallFormOpen, setCallFormOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleCallForm = () => {
    setCallFormOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const iconVibrate = {
    scale: [1, 1.1, 1], // Vibrating effect
    transition: {
      duration: 0.7,
      ease: 'easeInOut',
    },
  };

  return (
    <div className="flex justify-between items-center p-10 relative">
      {/* Hamburger Menu */}
      <motion.div whileHover={iconVibrate} whileTap={{ scale: 0.9 }}>
        <IconButton onClick={toggleMenu}>
          {isMenuOpen ? (
            <CancelOutlinedIcon fontSize="large" style={{ color: 'aqua' }} />
          ) : (
            <MenuIcon fontSize="large" style={{ color: 'aqua' }} />
          )}
        </IconButton>
      </motion.div>

      {/* Spacer to push Call icon to the far right */}
      <div style={{ flex: 1 }} />

      {/* Call Icon */}
      <motion.div whileHover={iconVibrate} whileTap={{ scale: 0.9 }}>
        <IconButton onClick={toggleCallForm}>
          {isCallFormOpen ? (
            <CancelOutlinedIcon fontSize="large" style={{ color: 'aqua' }} />
          ) : (
            <CallIcon fontSize="large" style={{ color: 'aqua' }} />
          )}
        </IconButton>
      </motion.div>

      {/* Overlay for blur effect */}
      {isMenuOpen && (
        <div className="overlay" onClick={closeMenu}>
          {/* Dropdowns */}
          <Menu
            anchorEl={document.body}
            open={isMenuOpen}
            onClose={closeMenu}
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            PaperProps={{
              style: {
                background: 'grey', // Set the background color
                width: '300px', // Set the width of the dropdown
              },
            }}
          >
            {/* Add Menu Items here for each dropdown */}
            <Link href="/">
              <MenuItem
                onClick={closeMenu}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}
              >
                HOME
              </MenuItem>
            </Link>

            <Link href="/about">
              <MenuItem
                onClick={closeMenu}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}
              >
                ABOUT
              </MenuItem>
            </Link>

            <Link href="/projects">
              <MenuItem
                onClick={closeMenu}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}
              >
                PROJECTS
              </MenuItem>
            </Link>

            <Link href="/skills">
              <MenuItem
                onClick={closeMenu}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}
              >
                SKILLS
              </MenuItem>
            </Link>

            <Link href="/education">
              <MenuItem
                onClick={closeMenu}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}
              >
                EDUCATION
              </MenuItem>
            </Link>
            {/* ... */}
          </Menu>
        </div>
      )}

      {/* Main Content Container */}
      <div id="main-content">
        {/* Display Call Form */}
        {isCallFormOpen && (
          <Dialog open={true} onClose={toggleCallForm}>
            <DialogTitle>CORRESPONDENCE</DialogTitle>
            <DialogContent>
              <TextField label="Name" fullWidth margin="normal" />
              <TextField label="Phone Number" fullWidth margin="normal" />
              <TextField label="email" fullWidth margin="normal" />
              <TextField label="message" fullWidth margin="normal" />
              {/* Add more form fields as needed */}
            </DialogContent>
            <DialogActions>
              <Button onClick={toggleCallForm}>Cancel</Button>
              <Button onClick={toggleCallForm}>Submit</Button>
            </DialogActions>
          </Dialog>
        )}
        {/* Your other content goes here */}
      </div>

      <style jsx>{`
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(5px);
          z-index: 999;
        }
      `}</style>
    </div>
  );
};

export default NavBar;




