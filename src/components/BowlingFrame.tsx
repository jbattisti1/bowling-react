import React, { FC, ReactElement } from 'react';
import { range } from '../Utils';
import PinBox from './PinBox';

type BowlingFrameProps = {
    numberOfPinBox: number;
};

const BowlingFrame: FC<BowlingFrameProps> = (props): ReactElement => {
    return (
        <div data-testid="bowlingFrame">
            {range(1, props.numberOfPinBox).map(number =>
                <PinBox key={number} number={number} rollScore={'2'} />
            )}
        </div>
    );
};

export default BowlingFrame;