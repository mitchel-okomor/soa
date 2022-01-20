import React from 'react';
type cardProps = {
  name: string;
  description: string;
};

function Card({ name, description }: cardProps) {
  return (
    <div className='text-center text-uppercase sango-card '>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
