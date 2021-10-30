import {
  CheckBoxOutlineBlank,
  LabelImportantOutlined,
  StarBorderOutlined,
} from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import './EmailRow.css'
import { setSelectedMail } from './features/mailSlice'
function EmailRow({ id, title, subject, description, time }) {
  const history = useHistory()
  const dispatch = useDispatch()

  const openMail = () => {
    dispatch(setSelectedMail({ id, title, subject, description, time }))
    history.push('/mail')
  }
  return (
    <div className='emailRow' onClick={openMail}>
      <div className='emailRow__options'>
        <CheckBoxOutlineBlank />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <h3 className='emailRow__title'>{title}</h3>
      <div className='emailRow__message'>
        <h4>
          {subject} <span className='emailRow__description'>{description}</span>
        </h4>
      </div>
      <p className='emailRow__time'>{time}</p>
    </div>
  )
}

export default EmailRow
