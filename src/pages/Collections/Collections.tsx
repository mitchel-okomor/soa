import React from 'react';
import image from '../../assets/images/Shango.png';
import Card from './Card';

function Collections() {
  const cardData = [
    {
      name: '1sol',
      description: ''
    },
    {
      name: '3,333',
      description: 'items'
    },
    {
      name: 'solana',
      description: 'Blockchain'
    },
    {
      name: '0.5%',
      description: 'Lifetime Royalties'
    }
  ];

  return (
    <div className='sango text-center'>
      <div className='back-text'> SANGO</div>
      <div className='sango-image'>
        <img width={'50%'} src={image} alt='mint' />
      </div>
      <div className='front-text'>
        {cardData.map((item) => (
          <Card name={item.name} description={item.description} />
        ))}
      </div>
    </div>
  );
}

export default Collections;
