import React from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  SunOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { MenuItem } from '../types';
import { TFunction } from 'i18next';

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
};

export const items = (t: TFunction): MenuItem[] => [
  getItem(t('sidebar_menu.dashboard'), '1', <PieChartOutlined />),
  getItem(t('sidebar_menu.manage_task'), '2', <DesktopOutlined />),
  getItem(t('sidebar_menu.manage_weather'), '3', <SunOutlined />),
  getItem(t('sidebar_menu.user_setting'), '4', <UserOutlined />),
];



export const stepItems = (t:TFunction) => [
  {
    title: t('content.start_creation'),
  },
  {
    title: t('content.in_progress'),
  },
  {
    title: t('content.completed'),
  },
];

export const breadcrumbItems = [{ title: 'کاربران' }, { title: 'سنا' }];
