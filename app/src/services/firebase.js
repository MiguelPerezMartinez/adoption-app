import axios from 'axios'
import { initializeApp } from 'firebase/app'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth'

import { getFirestore, collection, addDoc } from 'firebase/firestore'

import { firebaseConfig } from './firebaseConfig'

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const googleProvider = new GoogleAuthProvider()

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider)
    const user = res.user
    const payload = { email: user.email }
    await axios
      .post(`${process.env.REACT_APP_URL}/users/register-new-user`, payload)
      .then(
        () => {
          return
        },
        (error) => {
          console.error(error)
        }
      )
  } catch (err) {
    console.error(err)
    console.error(err.message)
  }
}

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (err) {
    console.error(err)
    console.error(err.message)
  }
}

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user
    const payload = { email: user.email }
    await axios.post(
      `${process.env.REACT_APP_URL}/users/register-new-user`,
      payload
    )
    await addDoc(collection(db, 'Users'), {
      uid: user.uid,
      name: name,
      authProvider: 'local',
      email,
    })
  } catch (err) {
    console.error(err)
    console.error(err.message)
  }
}

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email)
    alert('Password reset link sent!')
  } catch (err) {
    console.error(err)
    console.error(err.message)
  }
}

const logout = () => {
  signOut(auth)
}

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
}
