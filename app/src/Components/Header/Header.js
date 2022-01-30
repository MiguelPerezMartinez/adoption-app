import React from 'react'

import Logout from '../Logout'

import { logout } from '../../services/firebase'

export default function Header() {
  function handleLogout() {
    logout()
  }

  return (
    <section className="header-container">
      <div></div>
      <div>profile</div>
      <div>upload</div>
      <div onClick={handleLogout}>logout</div>
    </section>
  )
}
