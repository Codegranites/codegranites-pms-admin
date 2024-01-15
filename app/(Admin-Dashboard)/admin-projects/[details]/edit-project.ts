import { ProjectCardProps } from '../../../../libs/projects';

type SelectProps = {
  id?: number;
  symbol: string;
  value: 'USD' | 'EUR' | 'GBP' | 'NGN';
};
export const selectCurrencies: SelectProps[] = [
  {
    id: 0,

    symbol: '$',
    value: 'USD'
  },
  {
    id: 1,

    symbol: '₦',
    value: 'NGN'
  },
  {
    id: 2,

    symbol: '£',
    value: 'GBP'
  },
  {
    id: 3,

    symbol: '€',
    value: 'EUR'
  }
];

export const selectStatus: { id?: number; value: string }[] = [
  {
    id: 1,
    value: 'completed'
  },
  {
    id: 2,
    value: 'in-progress'
  },
  {
    id: 3,
    value: 'pending'
  }
];
