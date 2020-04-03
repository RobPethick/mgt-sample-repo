import Person from './Person';
import React from 'react';
import { render } from 'react-dom';

const element = document.createElement('div');
document.body.appendChild(element);

render(
    <Person />,
    element,
);
