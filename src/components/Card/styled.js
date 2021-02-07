import React from 'react'
import {
  Card as _Card,
  Button as _Button,
  Heading,
  Paragraph,
  styled,
  space,
} from 'bumbag'

export const Card = styled(_Card.Content)`
  display: flex;
  flex-direction: column;

  a[type='button'] {
    margin-bottom: 4px;
    font-size: 0.875rem;
  }
`

export const Title = styled(Heading)`
  font-size: 1.3125rem;
  line-height: 1.15;
  font-weight: 600;
  margin: 0 0 ${space(2, 'major')}rem;
`

export const Button = ({ href, text, ...props }) => (
  <_Button as="a" palette="primary" href={href} {...props}>
    {text}
  </_Button>
)

export const ImageBox = styled.div`
  margin: -24px -24px 20px;
  border-radius: 4px 4px 0 0;
  width: auto;
  overflow: hidden;
`

export const ImageCredit = styled(Paragraph)`
  font-weight: 300;
  font-size: 0.75rem;
  color: #90a4ae;
  margin: 12px 24px 0;
`

export const Description = styled(Paragraph)`
  line-height: 2;
  font-size: 0.875rem;
  font-family: var(--serif-font);
  font-weight: 300;
  flex: 1;
`

export const Metadata = styled(Paragraph)`
  font-size: 0.875rem;
  line-height: 1.15;
  font-weight: 400;
  letter-spacing; -1px;
  margin: -8px 0 24px;
`
