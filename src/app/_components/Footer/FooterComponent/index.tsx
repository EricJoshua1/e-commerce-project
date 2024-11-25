'use client'

import React from 'react'

import classes from './index.module.scss'
import { inclusions, noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'
import { Gutter } from '../../Gutter'
import Image from 'next/image'

import type { Footer as FooterType } from '../../../../payload/payload-types'

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
          {inclusions.map((inclusions, index) => (
            <li key={inclusions.title}>
              <Image
                src={inclusions.icon}
                alt={inclusions.title}
                width={36}
                height={36}
                className={classes.icon}
              />
              <h5 className={classes.title}>{inclusions.title}</h5>
            </li>
          ))}
        </ul>
      </Gutter>
    </footer>
  )
}

export default FooterComponent
