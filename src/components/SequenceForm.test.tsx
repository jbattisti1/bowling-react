/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SequenceForm from './SequenceForm';

describe('<SequenceForm />', () => {
    let onSubmit: jest.Mock;

    beforeEach(() => {
        onSubmit = jest.fn();
        render(<SequenceForm onSubmit={onSubmit} />);
    });

    describe('on click', () => {
        it('should fire submit with input', () => {
            fireEvent.change(screen.getByTestId('sequenceFormInput'), { target: { value: 'X X X X X X X X X X X X' } });
            fireEvent.click(screen.getByTestId('sequenceFormButton'));
            expect(onSubmit).toBeCalledWith('X X X X X X X X X X X X');
        });

        it('should not fire submit with empty input', () => {
            fireEvent.change(screen.getByTestId('sequenceFormInput'), { target: { value: '' } });
            fireEvent.click(screen.getByTestId('sequenceFormButton'));
            expect(onSubmit).not.toBeCalledWith('');
        });
    });
});