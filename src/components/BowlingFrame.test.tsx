/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BowlingFrame, { BowlingFrameProps, PinBoxValue } from './BowlingFrame';


const renderBowlingFrame = (expectedBowlingFrameProps: BowlingFrameProps) => {
    render(<BowlingFrame pinBoxValues={expectedBowlingFrameProps.pinBoxValues} frameScore={expectedBowlingFrameProps.frameScore} />);
};

const expectToContainAllPinboxWithRollScore = (expectedPinBoxValues: Array<PinBoxValue>) => {
    const bowlingFrame = screen.getByTestId('bowlingFrame');
    expectedPinBoxValues.map(pinBoxValue => {
        const pinBox = screen.getByTestId(`pinBox-${pinBoxValue.pinBoxNumber.toString()}`);
        expect(bowlingFrame).toContainElement(pinBox);
        expect(pinBox).toHaveTextContent(pinBoxValue.pinBoxRollScore);
    });
};

describe('<BowlingFrame />', () => {
    describe('props', () => {
        it('should show 2 pinBoxes if numberOfPinBox is 2 with rollScore', () => {
            const expectedBowlingFrameProps: BowlingFrameProps = {
                pinBoxValues: [{ pinBoxNumber: 1, pinBoxRollScore: '2' }, { pinBoxNumber: 2, pinBoxRollScore: '7' }],
                frameScore: '5'
            };
            renderBowlingFrame(expectedBowlingFrameProps);
            expectToContainAllPinboxWithRollScore(expectedBowlingFrameProps.pinBoxValues);
        });

        it('should show 3 pinBoxes if numberOfPinBox is 3 with rollScore', () => {
            const expectedBowlingFrameProps: BowlingFrameProps = {
                pinBoxValues: [{ pinBoxNumber: 1, pinBoxRollScore: '2' }, { pinBoxNumber: 2, pinBoxRollScore: '7' }, { pinBoxNumber: 3, pinBoxRollScore: '1' }],
                frameScore: '7'
            };
            renderBowlingFrame(expectedBowlingFrameProps);
            expectToContainAllPinboxWithRollScore(expectedBowlingFrameProps.pinBoxValues);
        });

        it('should show 2 pinBoxes if rollScore is strike', () => {
            const expectedBowlingFrameProps: BowlingFrameProps = {
                pinBoxValues: [{ pinBoxNumber: 1, pinBoxRollScore: 'X' }, { pinBoxNumber: 2, pinBoxRollScore: '' }],
                frameScore: '10'
            };
            renderBowlingFrame(expectedBowlingFrameProps);
            expectToContainAllPinboxWithRollScore(expectedBowlingFrameProps.pinBoxValues);
        });

    });
});