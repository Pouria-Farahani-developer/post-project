'use client';

import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Layout, Menu, Switch, theme } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { usePathname } from 'next/navigation';
import 'antd/dist/reset.css';
import '@ant-design/v5-patch-for-react-19';

import { useTr } from '@myapp/libs/translation';
import { items } from '@myapp/utils';
import { useTheme } from '@myapp/libs/ui-kit';

import "../global.css"


const MainLayoutChildren = ({ children }: React.PropsWithChildren) => {
  const [t] = useTr();
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(true);
  const { isDarkMode, toggleTheme, toggleLanguage, language, isFirstLogin, setFirstLogin } = useTheme();
  const { Content, Footer, Sider } = Layout;

  const selectedKeys = pathname?.replace(/^\/+/, '');

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    if (isFirstLogin) {
      toast(t('message.config_username'),{type:"warning"});
      setFirstLogin(false);
    }
  }, [isFirstLogin, setFirstLogin, t]);


  return (
    <Layout style={{ minHeight: '100vh' }}>
      <ToastContainer
        position="top-left"
        pauseOnFocusLoss
        rtl={true}
        autoClose={5000}
        style={{ fontFamily: "IRANSans", fontWeight: '500' }}
      />

      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          textAlign: 'center',
          padding: 0,
        }}
      >
        <div className="left" style={{ padding: '1rem' }}>
          <Switch
            checked={language !== 'fa_IR'}
            onChange={() => {
              toggleLanguage();
            }}
            style={{ margin: '2rem' }}
            checkedChildren={'fa'}
            unCheckedChildren={'en'}
          />

          <Switch
            checked={isDarkMode}
            onChange={toggleTheme}
            checkedChildren="☀️"
            unCheckedChildren="🌙"
          />
        </div>
      </Header>
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[selectedKeys]}
            items={items(t)}
          />
        </Sider>
        <Layout style={{ display: 'flex', flexDirection: 'column' }}>
          <Content style={{ margin: '24px', flexGrow: 1, display: 'flex' }}>
            <div
              style={{
                padding: 24,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                minHeight: "16rem",
                flexGrow: 1,
              }}
            >
              {children}
            </div>
          </Content>

          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayoutChildren;
