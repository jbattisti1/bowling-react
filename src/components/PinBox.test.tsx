/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PinBox from './PinBox';

describe('<PinBox />', () => {
    describe('props', () => {
        it('should show roll score of 1', () => {
            render(<PinBox key={1} number={1} rollScore={'1'} />);
            expect(screen.getByTestId('pinBox-1')).toHaveTextContent('1');
        });

        it('should show roll score of strike', () => {
            render(<PinBox key={1} number={1} rollScore={'X'} />);
            expect(screen.getByTestId('pinBox-1')).toHaveTextContent('X');
        });

        it('should show roll score of spare', () => {
            render(<PinBox key={1} number={1} rollScore={'/'} />);
            expect(screen.getByTestId('pinBox-1')).toHaveTextContent('/');
        });
    });
});