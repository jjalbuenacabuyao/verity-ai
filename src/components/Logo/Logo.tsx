"use client";

import Link from 'next/link'
import React from 'react'
import style from "./logo.module.css"

type Props = {}

const Logo = (props: Props) => {
  return (
    <Link href={"/"} className={style.logo}>
      AI Detector
    </Link>
  )
}

export default Logo