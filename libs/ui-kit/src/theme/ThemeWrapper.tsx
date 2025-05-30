'use client';

import { ReactNode, useEffect } from 'react';
import { ConfigProvider } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { useTheme } from './ThemeContext';
import fa_IR from 'antd/lib/locale/fa_IR';
import en from 'antd/lib/locale/en_US';
import { changeLanguage } from '@myapp/libs/translation';
import { darkTheme, lightTheme } from './theme';

import { StyleSheetManager } from 'styled-components';
import rtlPlugin from 'stylis-plugin-rtl';

const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const { isDarkMode, language } = useTheme();
  const antdLocale = language === 'fa_IR' ? fa_IR : en;
  const antdDirection = language === 'fa_IR' ? 'rtl' : 'ltr';

  useEffect(() => {
    if (language) {
      changeLanguage(language);
      document.documentElement.dir = antdDirection;
      document.documentElement.lang = language === 'fa_IR' ? 'fa' : 'en';
    }
  }, [language, antdDirection]);

  return (
    <ConfigProvider
      locale={antdLocale}
      direction={antdDirection}
      theme={isDarkMode ? darkTheme : lightTheme}
    >
      <StyleSheetManager stylisPlugins={antdDirection === 'rtl' ? [rtlPlugin] : []}>
        <AntdRegistry>{children}</AntdRegistry>
      </StyleSheetManager>
    </ConfigProvider>
  );
};

export default ThemeWrapper;
