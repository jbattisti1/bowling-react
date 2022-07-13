/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ScoreBox from './ScoreBox';

describe('<ScoreBox />', () => {
    describe('props', () => {
        it('should show score of 1', () => {
            render(<ScoreBox frameScore={'1'} />);
            expect(screen.getByTestId('scoreBox')).toHaveTextContent('1');
        });
        it('should show score of 300', () => {
            render(<ScoreBox frameScore={'300'} />);
            expect(screen.getByTestId('scoreBox')).toHaveTextContent('300');
        });
    });
});