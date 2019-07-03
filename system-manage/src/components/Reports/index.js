import React, { Suspense } from 'react';
import numeral from 'numeral';


const getComponent = Component => props => (
  <Suspense fallback="...">
    <Component {...props} />
  </Suspense>
);

const Donut = getComponent(React.lazy(() => import('./Donut')));




const Charts = {

  Donut,
};

export {
  Charts as default,
  Donut,
};
