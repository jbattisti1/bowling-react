import React, { FC, ReactElement } from 'react';
import './ScoreBox.css';

type ScoreBoxProps = {
    frameScore: string;
};

const ScoreBox: FC<ScoreBoxProps> = (props): ReactElement => {
    return (
        <div className='scoreBox' data-testid="scoreBox">{props.frameScore}</div>
    );
};

export default ScoreBox;