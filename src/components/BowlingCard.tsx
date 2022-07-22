import React from 'react';
import BowlingFrame, { BowlingFrameProps } from './BowlingFrame';
import './BowlingCard.css';

export type CardValues = Record<number, BowlingFrameProps | undefined>;

type BowlingCardProps = {
  cardValues?: CardValues
};

const BowlingCard: React.FC<BowlingCardProps> = ({ cardValues }) => {
  return (
    <div className='card' role='list'>
      {[1,2,3,4,5,6,7,8,9,10].map(value => {
        return (
          <div role='listitem' key={value}>
            <BowlingFrame
              pinBoxValues={cardValues?.[value]?.pinBoxValues ?? []}
              frameScore={cardValues?.[value]?.frameScore ?? ''}
            />
          </div>
        );
      })}
  </div>);
};

export default BowlingCard;