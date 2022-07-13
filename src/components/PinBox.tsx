import React, { FC, ReactElement } from 'react';

type PinBoxProps = {
    rollScore: string;
};

const PinBox: FC<PinBoxProps> = (props): ReactElement => {
    return (
        <div data-testid="pinBox">{props.rollScore}</div>
    );
};

export default PinBox;