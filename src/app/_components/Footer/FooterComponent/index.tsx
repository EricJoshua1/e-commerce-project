'use client'

import React from 'react'

import classes from './index.module.scss'
import { inclusions, noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'
import { Gutter } from '../../Gutter'
import Image from 'next/image'

import type { Footer as FooterType } from '../../../../payload/payload-types'
import Link from 'next/link'

interface FooterComponentProps {
  footer: FooterType | null // Accept footer as a prop
}

const FooterComponent: React.FC<FooterComponentProps> = ({ footer }) => {
  const pathname = usePathname()

  if (!footer) {
    // Return a fallback if no footer data is provided
    return <footer className={classes.hide}>Footer data is not available.</footer>
  }
  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
      <Gutter>
        <ul className={classes.inclusions}>
          {inclusions.map(inclusions => (
            <li key={inclusions.title}>
              <Image
                src={inclusions.icon}
                alt={inclusions.title}
                width={36}
                height={36}
                className={classes.icon}
              />
              <h5 className={classes.title}>{inclusions.title}</h5>
              <p>{inclusions.description} </p>
            </li>
          ))}
        </ul>
      </Gutter>
      <div className={classes.footer}>
        <Gutter>
          <div className={classes.wrap}>
            <Link href="/">
              <Image src="/logo-littlemore.svg" alt="logo" width={170} height={50} />
            </Link>
          </div>
        </Gutter>
      </div>
    </footer>
  )
}

export default FooterComponent
