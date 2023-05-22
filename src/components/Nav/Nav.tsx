import Link from 'next/link'
import React from 'react'

type Props = {}

const Nav = (props: Props) => {
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"#features"}>Home</Link>
        </li>
        <li>
          <Link href={"#tutorial"}>Tutorial</Link>
        </li>
        <li>
          <Link href={"#faq"}>FAQs</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav