import { useSelector } from 'react-redux'

import {
  AppsOutlined,
  ArrowDropDown,
  NotificationsOutlined,
} from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { Avatar, IconButton } from '@mui/material'
import './Header.css'
import { logout, selectUser } from './features/userSlice'
import { useDispatch } from 'react-redux'
import { auth } from './firebase'
function Header() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  return (
    <div className='header'>
      <div className='header__left'>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src='https://cdn.vox-cdn.com/thumbor/Tbqi3ZF9Qz0fTJIUvkgQe3FdN0k=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg'
          alt='Gmail Logo'
        />
      </div>
      <div className='header_middle'>
        <SearchIcon />
        <input type='text' placeholder='Search mail' />
        <ArrowDropDown className='header__inputCaret' />
      </div>
      <div className='header__right'>
        <IconButton>
          <AppsOutlined />
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <Avatar
          src={user.photoURL}
          onClick={() => {
            auth.signOut()
            dispatch(logout())
          }}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  )
}

export default Header
