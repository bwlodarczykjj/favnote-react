import React from 'react';
import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import Sidebar from './Sidebar';

storiesOf('Organisms/Sidebar', module)
    .addDecorator(StoryRouter())
    .add('Normal', () => <Sidebar />);

/* Żeby stworzyć folder w Storybooku za pomocą medoty storiesOf trzeba podać sciezke jka w cmd: Organisms/Sidebar */
