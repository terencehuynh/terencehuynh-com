import React from 'react'
import { ThemeProvider, css } from 'fannypack'
import {
  faLaptopCode,
  faPencilAlt,
  faMapMarkerAlt,
  faBars,
  faHeart,
  faVideo,
} from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faFacebook,
  faTumblr,
  faLastfm,
  faGithub,
  faMastodon,
  faTelegram,
  faMedium,
  faSpeakerDeck,
} from '@fortawesome/free-brands-svg-icons'

const theme = {
  Paragraph: {
    base: css`
      &:not(:last-child) {
        margin-bottom: 18px;
      }
    `,
  },
  Container: {
    tabletMargin: '0 20px',
  },
  Icon: {
    iconSets: [
      {
        icons: [
          faLaptopCode,
          faPencilAlt,
          faMapMarkerAlt,
          faBars,
          faHeart,
          faVideo,
        ],
        prefix: 'solid-',
        type: 'font-awesome',
      },
      {
        icons: [
          faTwitter,
          faInstagram,
          faLinkedinIn,
          faFacebook,
          faTumblr,
          faMastodon,
          faLastfm,
          faGithub,
          faTelegram,
          faMedium,
          faSpeakerDeck,
        ],
        prefix: 'brand-',
        type: 'font-awesome',
      },
    ],
  },
  Columns: {
    base: css`
      margin: 0;
    `,
  },
  Column: {
    base: css`
      padding: 0;
    `,
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
