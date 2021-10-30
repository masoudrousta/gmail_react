import { Button, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import './Sidebar.css'
import {
  AccessTime,
  DuoOutlined,
  ExpandMore,
  InboxOutlined,
  LabelImportant,
  NearMe,
  Note,
  PersonPinSharp,
  PhoneSharp,
  Star,
} from '@mui/icons-material'
import SidebarOption from './SidebarOption'
import { useDispatch } from 'react-redux'
import { openSendMessage } from './features/mailSlice'
function Sidebar() {
  const dispatch = useDispatch()
  return (
    <div className='sidebar'>
      <Button
        className='sidebar__compose'
        startIcon={<AddIcon />}
        size='large'
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxOutlined}
        title='Inbox'
        number={46}
        selected={true}
      />
      <SidebarOption Icon={Star} title='Starred' number={32} />
      <SidebarOption Icon={AccessTime} title='Snoozed' number={12} />
      <SidebarOption Icon={LabelImportant} title='Important' number={43} />
      <SidebarOption Icon={NearMe} title='Sent' number={87} />
      <SidebarOption Icon={Note} title='Drafts' number={11} />
      <SidebarOption Icon={ExpandMore} title='More' number={8} />
      <div className='sidebar__footer'>
        <div className='sidebar__footerIcons'>
          <IconButton>
            <PersonPinSharp />
          </IconButton>
          <IconButton>
            <DuoOutlined />
          </IconButton>
          <IconButton>
            <PhoneSharp />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
