import { useState } from 'react';

import BarChat from './BarChart';

import AreaChat from './AreaChart';

import Wrapper from 'assets/wrappers/ChartsContainer';

const ChartsContainer = ({ data }) => {
  const [barChart, setBarChart] = useState(true);

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button
        type='button'
        onClick={() => setBarChart(!barChart)}
      >
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>

      {barChart ? <BarChat data={data} /> : <AreaChat data={data} />}
    </Wrapper>
  );
};

export default ChartsContainer;
