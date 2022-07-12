/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';
import '@testing-library/jest-dom';

describe('<App />', () => {
    test('should show score ', () => {
        render(<App />);
        expect(screen.getByTestId('testing')).toHaveTextContent('Hello React!');
    });
});