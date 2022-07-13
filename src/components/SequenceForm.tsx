import React, { FC, ReactElement, useState } from 'react';

type SequenceFormProps = {
    onSubmit: (value: string) => void;
};

const SequenceForm: FC<SequenceFormProps> = (props): ReactElement => {
    const [sequence, setSequence] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.onSubmit(sequence);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={sequence} onChange={event => setSequence(event.target.value)} required data-testid="sequenceFormInput"></input>
            <button data-testid="sequenceFormButton">Calculate total</button>
        </form>
    );
};

export default SequenceForm;