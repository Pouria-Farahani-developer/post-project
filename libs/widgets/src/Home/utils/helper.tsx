import React from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
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
  getItem(t('navigation.dashboard'), '1', <PieChartOutlined />),
  getItem(t('navigation.admin_access'), '2', <DesktopOutlined />),
  getItem(t('navigation.users'), 'sub1', <UserOutlined />, [
    getItem('حمیدرضا', '3'),
    getItem('سنا', '4'),
    getItem('شکوفه', '5'),
  ]),
  getItem(t('navigation.teams'), 'sub2', <TeamOutlined />, [
    getItem('تیم اول', '6'),
    getItem('تیم دوم', '8'),
  ]),
  getItem(t('navigation.files'), '9', <FileOutlined />),
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
