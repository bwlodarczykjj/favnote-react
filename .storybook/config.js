import { configure } from '@storybook/react';

//Ustawienie w metodzie context() ścieżki, z której Storybook ma pobierać komponenty z rozszerzeniem .js

function loadStories() {
  const req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
