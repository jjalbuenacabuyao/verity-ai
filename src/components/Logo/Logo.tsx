"use client";

import Link from 'next/link'
import React from 'react'
import style from "./logo.module.css"
import Image from 'next/image';

type Props = {}

const Logo = (props: Props) => {
  return (
    <Link href={"/"} className={style.logo}>
      <Image src="/logo.svg" width={36} height={32} alt='Veracity'/>
      <span>VeracityAI</span>
    </Link>
  )
}

export default Logo