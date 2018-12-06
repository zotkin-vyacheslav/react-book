import React, {Children} from 'react';

const Display = ({ifTruthy = true, children}) =>
    (ifTruthy) ? Children.only(children) : null;
const age = null;

render (
  <Display ifTruthy={age >= 21}>
      <h1>You can enter</h1>
  </Display>
);
