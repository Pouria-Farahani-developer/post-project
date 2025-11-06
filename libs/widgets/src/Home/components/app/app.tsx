import React from 'react';
import { Steps } from 'antd';
import { useTr } from '@myapp/libs/translation';
import { stepItems } from '../../utils';

const App: React.FC = () => {
  const [t] = useTr();

  return (
    <div>
      <Steps direction="horizontal" current={2} items={stepItems(t)} />
    </div>
  );
};

export default App;
