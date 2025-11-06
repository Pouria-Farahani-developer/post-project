import React from 'react';
import 'antd/dist/reset.css';
import '@ant-design/v5-patch-for-react-19';
import './global.css';
import { ThemeProvider, ThemeWrapper } from '@myapp/libs/ui-kit';
import MainLayoutChildren from './RootLayout';

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="fa">
      <body>
        <ThemeProvider>
          <ThemeWrapper>
            <MainLayoutChildren>
              {children}
            </MainLayoutChildren>
          </ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
