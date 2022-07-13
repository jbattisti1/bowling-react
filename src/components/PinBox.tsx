import React, { FC, ReactElement } from 'react';

type PinBoxProps = {
    key: React.Key;
    number: number;
    rollScore: string;
};

const PinBox: FC<PinBoxProps> = (props): ReactElement => {
    return (
        <div data-testid={`pinBox-${props.number}`}>{props.rollScore}</div>
    );
};

export default PinBox;