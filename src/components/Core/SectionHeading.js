import React from 'react'
import { Heading as _Heading, styled, space, theme, palette } from 'fannypack'

const Heading = styled(_Heading)`
  font-size: 0.875rem;
  margin: 0 0 ${space(4, 'major')}rem;
  color: ${palette('primary')};
  text-transform: uppercase;
  position: relative;

  &:before {
    content: ' ';
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 3px;
    background-color: #004fc9;
  }

  span {
    background: white;
    padding-right: 8px;
    position: relative;
    z-index: 2;
  }

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    margin: 0 0 ${space(3, 'major')}rem;
  }
`

const SectionHeading = ({ text, as = 'h2' }) => {
  return (
    <Heading as={as}>
      <span>{text}</span>
    </Heading>
  )
}

export default SectionHeading
