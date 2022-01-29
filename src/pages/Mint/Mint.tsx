import React from 'react';
import {
  RiTelegramLine,
  RiDiscordLine,
  RiTwitchLine,
  RiTwitterLine
} from 'react-icons/ri';
import { BsTelegram, BsDiscord, BsTwitter } from 'react-icons/bs';

function Mint() {
  return (
    <div className='row spirits'>
      <div className='col-sm-8'>
        <div className='spirit-intro'>spirits of</div>
        <div className='spirit-intro2'>africa</div>
        <div className='mt-3'>
          <a href='/#' target='_blank'>
            <RiTelegramLine
              style={{ fontSize: '3rem', color: 'var(--primary-color)' }}
            />
          </a>
          <a href='/#' target='_blank'>
            {' '}
            <RiDiscordLine
              style={{
                fontSize: '3rem',
                color: 'var(--primary-color)',
                marginLeft: '1rem'
              }}
            />
          </a>
          <a href='/#' target='_blank'>
            <RiTwitterLine
              style={{
                fontSize: '3rem',
                color: 'var(--primary-color)',
                marginLeft: '0.3rem'
              }}
            />
          </a>
        </div>
      </div>
      <div className='col-sm-4'></div>
    </div>
  );
}

export default Mint;
