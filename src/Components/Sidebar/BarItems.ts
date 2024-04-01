import { Paths } from '../App/Routing/Providers/types/Paths';
import {
  IconHome2,
  IconUser,
  IconSettings,
} from '@tabler/icons-react';

// Определение элементов сайдбара
export const BarItems = [
  { icon: IconHome2, label: 'Главная', href: Paths.Home },
  { icon: IconUser, label: 'Аккаунт', href: Paths.Account },
  { icon: IconSettings, label: 'Настройки', href: Paths.Settings },
];
