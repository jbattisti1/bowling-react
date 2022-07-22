/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import { render, screen, within } from '@testing-library/react';
 import '@testing-library/jest-dom';
import BowlingCard, { CardValues } from './BowlingCard';

const DEFAULT_CARD_VALUES: CardValues = {
  1: {
    pinBoxValues: [],
    frameScore: '0'
  },
  2: {
    pinBoxValues: [],
    frameScore: '0'
  }
};

describe('<BowlingCard />', () => {
    it('should show 10 bowlingFrames', () => {
        render(<BowlingCard cardValues={DEFAULT_CARD_VALUES} />);
        const bowlingCard = screen.getByRole('list');
        expect(within(bowlingCard).getAllByRole('listitem')).toHaveLength(10);
    });
});