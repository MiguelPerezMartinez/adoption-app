import React from 'react'

import { AiOutlineLogout, AiOutlineUpload, AiOutlineUser } from 'react-icons/ai'

import { logout } from '../../services/firebase'

export default function Header() {
  function handleLogout() {
    logout()
  }

  return (
    <section className="header-container">
      <div></div>
      <AiOutlineUser className="option-locked" />
      <AiOutlineUpload className="option-locked" />
      <AiOutlineLogout onClick={handleLogout} />
    </section>
  )
}
