import React from 'react';
import ReactDOM from 'react-dom';
import ColorsApp from './ColorsApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ColorsApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
