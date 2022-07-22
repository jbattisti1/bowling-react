import React, { FC, ReactElement } from 'react';
import './PinBox.css';

type PinBoxProps = {
    number: number;
    rollScore: string;
};

const PinBox: FC<PinBoxProps> = (props): ReactElement => {
    return (
        <div className="pinBox" data-testid={`pinBox-${props.number}`}>{props.rollScore}</div>
    );
};

export default PinBox;