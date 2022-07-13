/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BowlingFrame from './BowlingFrame';
import { range } from '../Utils';

const renderBowlingFrame = (expectedNumberOfPinBox: number) => {
    render(<BowlingFrame numberOfPinBox={expectedNumberOfPinBox} />);
};

const expectToContainAllPinbox = (expectedNumberOfPinBox: number) => {
    const bowlingFrame = screen.getByTestId('bowlingFrame');
    range(1, expectedNumberOfPinBox).map(number => {
        expect(bowlingFrame).toContainElement(screen.getByTestId(`pinBox-${number.toString()}`));
    });
};

describe('<BowlingFrame />', () => {
    describe('props', () => {
        it('should show 2 pinBoxes if numberOfPinBox is 2', () => {
            const expectedNumberOfPinBox = 2;
            renderBowlingFrame(expectedNumberOfPinBox);
            expectToContainAllPinbox(expectedNumberOfPinBox);
        });

        it('should show 3 pinBoxes if numberOfPinBox is 3', () => {
            const expectedNumberOfPinBox = 3;
            renderBowlingFrame(expectedNumberOfPinBox);
            expectToContainAllPinbox(expectedNumberOfPinBox);
        });

    });
});