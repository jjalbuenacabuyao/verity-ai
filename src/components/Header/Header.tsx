import React from 'react'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'

type Props = {}

const Header = (props: Props) => {
  return (
    <header>
      <Logo />
      <Nav />
    </header>
  )
}

export default Header