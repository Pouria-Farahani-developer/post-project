import React from 'react';
import {
  DesktopOutlined,
  PieChartOutlined,
  SunOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import type { TFunction } from 'i18next';
import Link from 'next/link';

export type MenuItem = Required<MenuProps>['items'][number];

export const routes = {
  dashboard: '/dashboard',
  tasks: '/task-setting',
  weather: '/weather-setting',
  setting: '/user-setting',
} as const;

export const getItem = (
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

export const items = (t: TFunction): MenuItem[] => [
  getItem(
    t('sidebar_menu.dashboard'),
    'dashboard',
    <PieChartOutlined />,
    routes.dashboard
  ),
  getItem(
    t('sidebar_menu.manage_task'),
    'task-setting',
    <DesktopOutlined />,
    routes.tasks
  ),
  getItem(
    t('sidebar_menu.manage_weather'),
    'weather-setting',
    <SunOutlined />,
    routes.weather
  ),
  getItem(
    t('sidebar_menu.user_setting'),
    'user-setting',
    <UserOutlined />,
    routes.setting
  ),
];
