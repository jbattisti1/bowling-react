import React, { FC, ReactElement } from 'react';

type ScoreBoxProps = {
    frameScore: string;
};

const ScoreBox: FC<ScoreBoxProps> = (props): ReactElement => {
    return (
        <div data-testid="scoreBox">{props.frameScore}</div>
    );
};

export default ScoreBox;