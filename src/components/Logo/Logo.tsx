import Link from 'next/link'
import React from 'react'

type Props = {}

const Logo = (props: Props) => {
  return (
    <Link href={"/"}>
      <p>AI Detector</p>
    </Link>
  )
}

export default Logo