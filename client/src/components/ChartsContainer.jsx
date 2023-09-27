import { useState } from 'react';

import BarChat from './BarChart';

import AreaChat from './AreaChart';

import Wrapper from 'assets/wrappers/ChartsContainer';

const ChartsContainer = ({ data }) => {
  const [barChart, setBarChart] = useState(true);

    return <Wrapper>
        <h4>Monthly Applications</h4>
        
  </Wrapper>;
};

export default ChartsContainer;
