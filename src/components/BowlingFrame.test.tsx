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

const expectToContainScoreBox = (expectedFrameScore: string) => {
    const bowlingFrame = screen.getByTestId('bowlingFrame');
    const scoreBox = screen.getByTestId(`scoreBox`);
    expect(bowlingFrame).toContainElement(scoreBox);
    expect(scoreBox).toHaveTextContent(expectedFrameScore);
};

describe('<BowlingFrame />', () => {
    describe('props', () => {
        it('should show 2 pinBoxes with rollScore and frameScore', () => {
            const expectedBowlingFrameProps: BowlingFrameProps = {
                pinBoxValues: [{ pinBoxNumber: 1, pinBoxRollScore: '2' }, { pinBoxNumber: 2, pinBoxRollScore: '7' }],
                frameScore: '5'
            };
            renderBowlingFrame(expectedBowlingFrameProps);
            expectToContainAllPinboxWithRollScore(expectedBowlingFrameProps.pinBoxValues);
            expectToContainScoreBox(expectedBowlingFrameProps.frameScore);
        });

        it('should show 3 pinBoxes with rollScore and frameScore', () => {
            const expectedBowlingFrameProps: BowlingFrameProps = {
                pinBoxValues: [{ pinBoxNumber: 1, pinBoxRollScore: '2' }, { pinBoxNumber: 2, pinBoxRollScore: '7' }, { pinBoxNumber: 3, pinBoxRollScore: '1' }],
                frameScore: '7'
            };
            renderBowlingFrame(expectedBowlingFrameProps);
            expectToContainAllPinboxWithRollScore(expectedBowlingFrameProps.pinBoxValues);
            expectToContainScoreBox(expectedBowlingFrameProps.frameScore);
        });

        it('should show 2 pinBoxes if rollScore is strike and frameScore', () => {
            const expectedBowlingFrameProps: BowlingFrameProps = {
                pinBoxValues: [{ pinBoxNumber: 1, pinBoxRollScore: 'X' }, { pinBoxNumber: 2, pinBoxRollScore: '' }],
                frameScore: '10'
            };
            renderBowlingFrame(expectedBowlingFrameProps);
            expectToContainAllPinboxWithRollScore(expectedBowlingFrameProps.pinBoxValues);
            expectToContainScoreBox(expectedBowlingFrameProps.frameScore);
        });

    });
});