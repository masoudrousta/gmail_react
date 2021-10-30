import { collection, onSnapshot, orderBy, query } from '@firebase/firestore'
import {
  ArrowDropDown,
  CheckBoxOutlineBlank,
  ChevronLeft,
  ChevronRight,
  InboxOutlined,
  KeyboardHide,
  LocalOfferOutlined,
  MoreVert,
  PeopleOutlined,
  RedoOutlined,
  SettingsOutlined,
} from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useEffect, useState } from 'react'
import './EmailList.css'
import EmailRow from './EmailRow'
import { db } from './firebase'
import Section from './Section'
import { convertTime } from './utils/convertTime'
function EmailList() {
  const [emails, setEmails] = useState([])

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'emails'), orderBy('timestamp', 'desc')),
        (querySnapshot) => {
          setEmails(
            querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          )
        }
      ),
    []
  )
  return (
    <div className='emailList'>
      <div className='emailList__settings'>
        <div className='emailList__settingsLeft'>
          <CheckBoxOutlineBlank />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <RedoOutlined />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className='emailList__settingsRight'>
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <SettingsOutlined />
          </IconButton>
        </div>
      </div>
      <div className='emailList__sections'>
        <Section Icon={InboxOutlined} title='Primary' color='red' selected />
        <Section Icon={PeopleOutlined} title='Social' color='#1A73E8' />
        <Section Icon={LocalOfferOutlined} title='Promotions' color='green' />
      </div>
      <div className='emailList__list'>
        {emails &&
          emails.map(({ id, data: { to, subject, message, timestamp } }) => (
            <EmailRow
              key={id}
              title={to}
              subject={subject}
              description={message}
              time={convertTime(timestamp?.seconds)}
            />
          ))}
      </div>
    </div>
  )
}

export default EmailList
