import React from 'react'
import {
  Icon,
  Flex,
  Container as _Container,
  Paragraph,
  Link,
  styled,
} from 'fannypack'

import { theme } from 'styled-tools'
import { MonoFonts } from '../../constants'

const colorMap = {
  se: '#ffeb3b',
  blog: '#f4511e',
  loc: '#E91E63',
}

const BgWrap = styled(Flex)`
  background-color: #101010;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 600px;
  height: 95vh;
  padding: 64px 20px;
  position: relative;
`

const Container = styled(_Container)`
  flex: 1;
`

const HeroLine = styled.span`
  margin: 0;
  font-family: ${MonoFonts};
  font-weight: 300;
  font-size: 3rem;
  line-height: 2;
  letter-spacing: -2px;
  color: #707070;
  display: block;
  text-align: center;

  &:not(:last-child) {
    margin: 0;
  }

  strong {
    color: white;
    font-weight: 700;
  }

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    font-size: 2rem;
    letter-spacing: 0px;
  }

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 1.125rem;
    text-align: left;
    display: inline;
  }
`

const HeroLink = styled(Link)`
  text-decoration: none;
  padding: 2px 6px;
  color: ${props => colorMap[props.className] || 'white'};
  border-bottom: 1px solid ${props => colorMap[props.className] || 'white'};
  font-weight: 700;
  transition: background-color 0.08s ease-in-out, color 0.08s ease-in-out;

  &:hover {
    background: ${props => colorMap[props.className] || 'white'};
    color: #101010;
  }

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    padding: 0 4px;
    display: inline-block;
    clear: both;
  }
`

const HeroIcon = styled(Icon)`
  width: 3rem;
  height: 3rem;
  margin-right: 2px;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    width: 1rem;
    height: 1rem;
  }
`

const Hero = () => (
  <BgWrap>
    <Container>
      <HeroLine>
        My name is <HeroLink href="/about">Terence Huynh</HeroLink> and{' '}
      </HeroLine>
      <HeroLine>
        I am a{' '}
        <HeroLink href="/about" className="se">
          <HeroIcon icon="solid-laptop-code" /> Software Engineer
        </HeroLink>{' '}
      </HeroLine>
      <HeroLine>
        and{' '}
        <HeroLink href="/writing" className="blog">
          <HeroIcon icon="solid-pencil-alt" /> Tech Blogger
        </HeroLink>{' '}
      </HeroLine>
      <HeroLine>
        from{' '}
        <HeroLink href="https://www.visitmelbourne.com/" className="loc">
          <HeroIcon icon="solid-map-marker-alt" /> Melbourne, Australia
        </HeroLink>
      </HeroLine>
    </Container>
  </BgWrap>
)

export default Hero
