import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
      <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
      {/* WhatsApp icon with a link to your WhatsApp contact */}
      <BottomNavigationAction
        label="WhatsApp"
        icon={<WhatsAppIcon />}
        onClick={() => {
          window.location.href = 'https://wa.me/+212663116836'; // Replace with your WhatsApp number
        }}
      />
      {/* Facebook icon with a link to your Facebook page */}
      <BottomNavigationAction
        label="Facebook"
        icon={<FacebookIcon />}
      
      />
    </BottomNavigation>
  );
};

export default Footer;
