'use client'

import React from 'react'

import classes from './index.module.scss'
import { noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'
import { Gutter } from '../../Gutter'

const FooterComponent = () => {
  const pathname = usePathname();
  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
      <Gutter>
        <ul className={classes.inclusions}></ul>
      </Gutter>
    </footer>
  )
}

export default FooterComponent
