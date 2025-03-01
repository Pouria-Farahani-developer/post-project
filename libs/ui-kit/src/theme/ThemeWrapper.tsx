'use client';

import { ReactNode, useEffect } from 'react';
import { ConfigProvider } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { useTheme } from './ThemeContext';
import fa_IR from 'antd/lib/locale/fa_IR';
import en from 'antd/lib/locale/en_US';
import { changeLanguage } from '@myapp/libs/translation';
import { darkTheme, lightTheme } from './theme';


const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const { isDarkMode, language } = useTheme();
  const antdLocale = language === 'fa_IR' ? fa_IR : en;
  const antdDirections = language === 'fa_IR' ? 'rtl' : 'ltr';

  useEffect(() => {
    if (language) {
      changeLanguage(language);
    }
  }, [language]);


  return (
    <ConfigProvider
      locale={antdLocale}
      direction={antdDirections}
      theme={isDarkMode ? darkTheme : lightTheme}
    >
      <AntdRegistry>{children}</AntdRegistry>
    </ConfigProvider>
  );
};

export default ThemeWrapper;
