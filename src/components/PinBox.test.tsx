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
            render(<PinBox rollScore={'1'} />);
            expect(screen.getByTestId('pinBox')).toHaveTextContent('1');
        });

        it('should show roll score of strike', () => {
            render(<PinBox rollScore={'X'} />);
            expect(screen.getByTestId('pinBox')).toHaveTextContent('X');
        });

        it('should show roll score of spare', () => {
            render(<PinBox rollScore={'/'} />);
            expect(screen.getByTestId('pinBox')).toHaveTextContent('/');
        });
    });
});