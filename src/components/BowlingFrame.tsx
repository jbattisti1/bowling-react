import React, { FC, ReactElement } from 'react';
import PinBox from './PinBox';
import ScoreBox from './ScoreBox';
import './BowlingFrame.css';

export type PinBoxValue = {
    pinBoxNumber: number;
    pinBoxRollScore: string;
};

export type BowlingFrameProps = {
    pinBoxValues: Array<PinBoxValue>;
    frameScore: string;
};

const BowlingFrame: FC<BowlingFrameProps> = ({ pinBoxValues, frameScore }): ReactElement => {
    const pinBoxes = pinBoxValues.map(({ pinBoxNumber, pinBoxRollScore }) =>
        <PinBox key={pinBoxNumber} number={pinBoxNumber} rollScore={pinBoxRollScore} />
    );

    return (
        <div className='bowlingFrame' data-testid="bowlingFrame">
            {pinBoxes}
            <div className='break'></div>
            <ScoreBox frameScore={frameScore} />
        </div>
    );
};

export default BowlingFrame;