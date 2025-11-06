'use client';
import {  loadTr } from '@myapp/libs/translation';

import fa from './locale/fa';
import en from './locale/en';
import App from './components/app/app';
import { AppProvider } from './context';

const HomeWidget: React.FC = () => {
  loadTr({ en, fa });

  return (
    <AppProvider>
      <App />
    </AppProvider>
  )
};

export default HomeWidget;
