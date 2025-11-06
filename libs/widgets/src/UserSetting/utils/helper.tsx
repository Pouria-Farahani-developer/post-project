import React from 'react';
import {
  DesktopOutlined,
  PieChartOutlined,
  SunOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { MenuItem } from '../types';
import { TFunction } from 'i18next';
import Link from 'next/link';

const getItem = (
  label: React.ReactNode,
  key: string,
  icon?: React.ReactNode,
  href?: string,
  children?: MenuItem[]
): MenuItem => ({
  key,
  icon,
  children,
  label: href ? <Link href={href}>{label}</Link> : label,
});

const routes: Record<string, string> = {
  dashboard: '/dashboard',
  tasks: '/tasks',
  weather: '/weather',
  settings: '/user-setting',
};

export const items = (t: TFunction): MenuItem[] => [
  getItem(t('sidebar_menu.dashboard'), 'dashboard', <PieChartOutlined />, routes.dashboard),
  getItem(t('sidebar_menu.manage_task'), 'tasks', <DesktopOutlined />, routes.tasks),
  getItem(t('sidebar_menu.manage_weather'), 'weather', <SunOutlined />, routes.weather),
  getItem(t('sidebar_menu.user_setting'), 'settings', <UserOutlined />, routes.settings),
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
