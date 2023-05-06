import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';

export const Header = () => {
  return (
    <div className='header'>

      <IconButton>
        <PersonIcon fontSize='large' className='header__icon' />
      </IconButton>

      <img 
        className='header__logo' 
        src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTQ0tQGj-uN_kZhDdnw-N30Qzv6r28xS-IcK0_x5_83NmhNrkIT1SdstQAl' 
        alt=''
      />
 
      <IconButton>
        <ForumIcon fontSize='large' className='header__icon' />
      </IconButton>
      <></>

    </div>
  )
}
