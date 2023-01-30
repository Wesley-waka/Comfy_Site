import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi' /**gi-icons used for my history,mission and vision  */
// links constant for my navigation in the app
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

// services constant for my services in the home page
export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'BEST FURNITURE IN TOWN',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'BEST FURNITURE IN TOWN',

  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'BEST FURNITURE IN TOWN',

  },
]


