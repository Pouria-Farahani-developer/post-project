'use client';

import React, { useState } from 'react';
import 'antd/dist/reset.css';
import '@ant-design/v5-patch-for-react-19';
import './global.css';
import { Layout, Menu, Breadcrumb, Switch, theme } from 'antd';
import { useTr } from '@myapp/libs/translation';
import { breadcrumbItems, items } from '../../libs/widgets/src/Home/utils/helper';
import { useTheme } from '@myapp/libs/ui-kit';
import { Header } from 'antd/es/layout/layout';

const { Content, Footer, Sider } = Layout;

const MainLayoutChildren = ({ children }: React.PropsWithChildren) => {
  const [t] = useTr();
  const [collapsed, setCollapsed] = useState(true);
  const { isDarkMode, toggleTheme, toggleLanguage, language } = useTheme();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          textAlign: 'center',
          padding: 0,
        }}
      >

        <div className='left' style={{ padding: '1rem' }}>
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
            defaultSelectedKeys={['1']}
            mode="inline"
            items={items(t)}
          />
        </Sider>
        <Layout>
          <Breadcrumb style={{ margin: '16px' }} items={breadcrumbItems} />

          <Content style={{ margin: '0 16px' }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
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
