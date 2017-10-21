import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => (
  <div>
    <div className='navigation'>
      <div className='screen'>
        <div className='screen__header'>
          <h1 className='screen__title'>Subtitles /
            <span className='screen__subtitle'> Clockwork Orange</span>
          </h1>
        </div>

        <div className='screen__content'>
          <h2 className='screen__text'>
            <ul className='list-unstyled'>
              <li>
                <Link className='btn btn-lg btn-default screen__link' to='/lang/en'>English</Link>
              </li>
              <li>
                <Link className='btn btn-lg btn-default screen__link' to='/lang/de'>Deutsch</Link>
              </li>
              <li>
                <Link className='btn btn-lg btn-default screen__link' to='/lang/tr'>Türkçe</Link>
              </li>
            </ul>
          </h2>
        </div>

        <div className='screen__background' />
      </div>
    </div>
  </div>
)

export default LandingPage
