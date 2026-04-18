/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Settings, 
  Droplets, 
  Zap, 
  Battery, 
  Construction, 
  Palette, 
  Package, 
  Wrench,
  CheckCircle2,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';
import { Service, Stat, JourneyItem } from './types.ts';

export const SERVICES: Service[] = [
  {
    id: 'valve',
    title: 'Valve Servicing',
    description: 'SS & MS valve repairs, refurbishment, and manifold fabrication to API standards.',
    icon: Settings
  },
  {
    id: 'hydraulic',
    title: 'Hydraulic Works',
    description: 'Custom hydraulic system design, cylinder repair, and high-pressure testing.',
    icon: Droplets
  },
  {
    id: 'electrical',
    title: 'Electrical Works',
    description: 'Industrial electrical installations and troubleshooting for oilfield environments.',
    icon: Zap
  },
  {
    id: 'generator',
    title: 'Generator Services',
    description: 'Load bank testing, preventative maintenance, and OEM generator overhauls.',
    icon: Battery
  },
  {
    id: 'fabrication',
    title: 'Metal Fabrication',
    description: 'Custom manufacturing of precision parts and large-scale structural components.',
    icon: Construction
  },
  {
    id: 'painting',
    title: 'Industrial Painting',
    description: 'NACE-compliant sandblasting and protective coating for marine durability.',
    icon: Palette
  },
  {
    id: 'oem',
    title: 'OEM Solutions',
    description: 'Global sourcing and manufacturing of specific product designs for your operations.',
    icon: Package
  },
  {
    id: 'mro',
    title: 'MRO Services',
    description: 'Strategic Maintenance, Repair, and Procurement to minimize downtime.',
    icon: Wrench
  }
];

export const STATS: Stat[] = [
  { id: 'exp', label: 'Years Experience', target: 7 },
  { id: 'loc', label: 'GCC Locations', target: 2 },
  { id: 'clients', label: 'Industrial Clients', target: 50 },
  { id: 'approvals', label: 'Major Approvals', target: 2 }
];

export const JOURNEY: JourneyItem[] = [
  {
    id: '2017',
    year: '2017',
    title: 'Inception',
    description: 'Founded in Abu Dhabi by two friends aiming to redefine industrial sourcing.'
  },
  {
    id: '2018',
    year: '2018',
    title: 'ADNOC Approval',
    description: 'Achieved prestigious ADNOC Vendor registration, opening key infrastructure doors.'
  },
  {
    id: '2019',
    year: '2019',
    title: 'KSA Expansion',
    description: 'Opened Dammam office to serve the growing Saudi Arabian industrial market.'
  },
  {
    id: '2020',
    year: '2020',
    title: 'Resilience',
    description: 'Successfully navigated COVID-19 disruptions, expanding our fabrication team.'
  },
  {
    id: '2021',
    year: '2021',
    title: 'Aramco Certified',
    description: 'Became an approved vendor for Saudi Aramco, cementing our status in the GCC.'
  },
  {
    id: '2023',
    year: '2023+',
    title: 'OEM Leadership',
    description: 'Pivoting to full-scale custom fabrication and precision OEM sourcing for global clients.'
  }
];

export const INDUSTRIES = [
  { name: 'Oil & Gas', icon: '🛢️' },
  { name: 'Marine Engineering', icon: '⚓' },
  { name: 'Mechanical Contracting', icon: '🔧' },
  { name: 'Petrochemicals', icon: '🧪' },
  { name: 'Offshore Operations', icon: '🌊' },
  { name: 'Construction', icon: '🏗️' }
];

export const WHY_CHOOSE = [
  {
    title: 'ADNOC & Aramco Approved',
    description: 'Fully certified vendor for the largest energy providers in the UAE and KSA.',
    icon: CheckCircle2
  },
  {
    title: 'DNV Compliant',
    description: 'Our engineering processes strictly follow international marine and offshore standards.',
    icon: CheckCircle2
  },
  {
    title: 'GCC Presence',
    description: 'Strategic offices in Abu Dhabi and Dammam for rapid regional response.',
    icon: CheckCircle2
  },
  {
    title: 'End-to-End OEM',
    description: 'We don\'t just supply parts; we design and manufacture complete engineering solutions.',
    icon: CheckCircle2
  }
];

export const CONTACT_INFO = [
  {
    icon: MapPin,
    title: 'Abu Dhabi Headquarters',
    content: 'Mussafah Industrial Area, UAE'
  },
  {
    icon: MapPin,
    title: 'Dammam Branch',
    content: 'Al Khobar Highway, KSA'
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: 'info@triontechnical.com'
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+971 2 XXX XXXX (UAE) | +966 13 XXX XXXX (KSA)'
  }
];
