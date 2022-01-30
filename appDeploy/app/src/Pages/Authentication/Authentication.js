import React, { useState } from 'react'

import Signin from '../../Components/Signin'
import Signup from '../../Components/Signup'

export default function Authentication() {
  const [inLogin, setInLogin] = useState(true)

  function handleSection() {
    setInLogin(!inLogin)
  }

  if (inLogin) {
    return (
      <section>
        <Signin handleSection={handleSection} />
      </section>
    )
  } else {
    return (
      <section>
        <Signup handleSection={handleSection} />
      </section>
    )
  }
}
