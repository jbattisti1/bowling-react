/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from '../components/App';

describe('<App />', () => {
    test('should show score of 300', () => {
        render(<App />);
        fireEvent.change(screen.getByTestId('sequenceInput'), { target: { value: 'X X X X X X X X X X X X' } });
        expect(screen.getByTestId('totalScore')).toHaveTextContent('300');
    });

    test('should show score of 90', () => {
        render(<App />);
        fireEvent.change(screen.getByTestId('sequenceInput'), { target: { value: '9- 9- 9- 9- 9- 9- 9- 9- 9- 9-' } });
        expect(screen.getByTestId('totalScor')).toHaveTextContent('300');
    });

    test('should show score of 150', () => {
        render(<App />);
        fireEvent.change(screen.getByTestId('sequenceInput'), { target: { value: '5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5' } });
        expect(screen.getByTestId('totalScor')).toHaveTextContent('150');
    });
});