import React from 'react'
import { fetchFooter } from '../../_api/fetchGlobals'
import FooterComponent from './FooterComponent'
import type { Footer as FooterType } from '../../../payload/payload-types'

export async function Footer() {
  let footer: FooterType | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    console.error(error)
  }

  return (
    <>
      <FooterComponent footer={footer} />
    </>
  )
}
