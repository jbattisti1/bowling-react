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

const BowlingFrame: FC<BowlingFrameProps> = (props): ReactElement => {
    const pinBoxes = props.pinBoxValues.map(pinBoxValue =>
        <PinBox key={pinBoxValue.pinBoxNumber} number={pinBoxValue.pinBoxNumber} rollScore={pinBoxValue.pinBoxRollScore} />
    );

    return (
        <div className='bowlingFrame' data-testid="bowlingFrame">
            {pinBoxes}
            <div className='break'></div>
            <ScoreBox frameScore={props.frameScore} />
        </div>
    );
};

export default BowlingFrame;