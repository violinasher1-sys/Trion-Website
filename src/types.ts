/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string | LucideIcon;
}

export interface Stat {
  id: string;
  label: string;
  target: number;
}

export interface JourneyItem {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface Industry {
  id: string;
  name: string;
  icon: string;
}
