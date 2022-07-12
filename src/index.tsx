import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';

const container: HTMLElement | null = document.getElementById('app-root');

const root = ReactDOM.createRoot(container as Element);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);