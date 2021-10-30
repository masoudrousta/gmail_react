import {
  ArrowBackIosOutlined,
  CheckCircleOutline,
  DeleteOutlined,
  EmailOutlined,
  ErrorOutlined,
  ExitToAppOutlined,
  LabelImportant,
  LabelImportantOutlined,
  MoreVertOutlined,
  MoveToInboxOutlined,
  PrintOutlined,
  UnfoldMoreOutlined,
  WatchLaterOutlined,
} from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import './Email.css'
import { selectSelectedMail } from './features/mailSlice'
function Email() {
  const { id, title, subject, description, time } =
    useSelector(selectSelectedMail)
  const history = useHistory()
  return (
    <div className='email'>
      <div className='mail__tools'>
        <div className='mail__toolsLeft'>
          <IconButton onClick={() => history.push('/')}>
            <ArrowBackIosOutlined />
          </IconButton>
          <IconButton>
            <MoveToInboxOutlined />
          </IconButton>
          <IconButton>
            <ErrorOutlined />
          </IconButton>
          <IconButton>
            <DeleteOutlined />
          </IconButton>
          <IconButton>
            <EmailOutlined />
          </IconButton>
          <IconButton>
            <WatchLaterOutlined />
          </IconButton>
          <IconButton>
            <CheckCircleOutline />
          </IconButton>
          <IconButton>
            <LabelImportantOutlined />
          </IconButton>
          <IconButton>
            <MoreVertOutlined />
          </IconButton>
        </div>
        <div className='mail__toolsRight'>
          <IconButton>
            <UnfoldMoreOutlined />
          </IconButton>
          <IconButton>
            <PrintOutlined />
          </IconButton>
          <IconButton>
            <ExitToAppOutlined />
          </IconButton>
        </div>
      </div>
      <div className='mail__body'>
        <div className='mail__bodyHeader'>
          <h2>{subject}</h2>
          <LabelImportant className='mail__important' />
          <p>{title}</p>
          <p className='mail__time'>{time}</p>
        </div>
        <div className='mail__message'>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Email
