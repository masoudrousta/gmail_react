import { CloseOutlined } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { closeSendMessage } from './features/mailSlice'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

import { db } from './firebase'
import './SendMail.css'
function SendMail() {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async ({ to, subject, message }) => {
    dispatch(closeSendMessage())
    const docRef = await addDoc(collection(db, 'emails'), {
      to,
      subject,
      message,
      timestamp: serverTimestamp(),
    })
  }

  return (
    <div className='sendMail'>
      <div className='sendMail__header'>
        <h3>New Message</h3>
        <CloseOutlined
          onClick={() => dispatch(closeSendMessage())}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder='To'
          type='email'
          {...register('to', { required: true })}
        />
        {errors.to && <p className='sendMail_error'>To field is required</p>}
        <input
          placeholder='Subject'
          type='text'
          {...register('subject', { required: true })}
        />
        {errors.subject && (
          <p className='sendMail_error'>Subject field is required</p>
        )}
        <input
          className='sendMail__message'
          placeholder='Message...'
          type='text'
          {...register('message', { required: true })}
        />
        {errors.message && (
          <p className='sendMail_error'>Message field is required</p>
        )}
        <div className='sendMail__options'>
          <Button
            className='sendMail__send'
            variant='contained'
            color='primary'
            type='submit'
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail
