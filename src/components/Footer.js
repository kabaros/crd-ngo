import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render () {
    return (
      <footer className='footer has-background-black has-text-white-ter'>
        <div className='content has-text-centered has-background-black has-text-white-ter'>
          <div className='container has-background-black has-text-white-ter'>
            <div className='columns'>
              <div className='column is-12'>
                <section className='menu has-text-centered has-text-white'>
                  Registered under the South Sudan Relief and Rehabilitation
                  Commission (RRC) registration No: (2040) TIN No: (101-161-323)
                  <br />
                  Email:{' '}
                  <a href='mailto:cdrsouthsudan@gmail.com'>
                    cdrsouthsudan@gmail.com
                  </a>
                  <br />
                  Telephone: +211921200050 <br />
                  Juba, South Sudan
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
