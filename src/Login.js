import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth, provider } from './firebase'
import { Button } from '@material-ui/core'
import './Login.css'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
function Login() {
  const dispatch = useDispatch()
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        // The signed-in user info.
        const user = result.user
        dispatch(login(user))

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        alert(error.message)
        // ...
      })
  }
  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://logos-world.net/wp-content/uploads/2020/11/Gmail-Logo-2020-present.jpg'
          alt='Google Logo'
        />
        <Button onClick={signIn} variant='contained' color='primary'>
          Sign In
        </Button>
      </div>
    </div>
  )
}

export default Login
