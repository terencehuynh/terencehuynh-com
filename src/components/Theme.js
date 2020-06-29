import React from 'react'
import { ThemeProvider } from 'fannypack'
import {
  faLaptopCode,
  faPencilAlt,
  faMapMarkerAlt,
  faBars,
  faHeart,
  faVideo,
  faAngleRight,
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
  palette: {
    primary: '#1F6BC1',
    primaryDark: '#19579F',
    primaryLight: '#D7E1EA',
    primaryHover: '#0B2747',
    primaryBorder: '#CBDEF6',
    menu: '#113A6A',
    menuInactive: '#164E8D',
    menuHover: '#113A6A',
    menuText: '#96BDED',
    miniHeader: '#EEF4FC',
    miniHeaderLink: '#5F81AB',
    miniHeaderHover: '#184077',
    heroBg: '#0B2747',
    heroText: '#85B3EA',
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
          faAngleRight,
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
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
