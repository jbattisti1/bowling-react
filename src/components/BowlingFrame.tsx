import React, { FC, ReactElement } from 'react';
import PinBox from './PinBox';

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
        <div data-testid="bowlingFrame">
            {pinBoxes}
        </div>
    );
};

export default BowlingFrame;