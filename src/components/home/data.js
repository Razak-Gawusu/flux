import lock from '../../assets/icons/lock.svg';
import money from '../../assets/icons/money.svg';
import percentage from '../../assets/icons/percentage.svg';
import stock from '../../assets/icons/stock-market.svg';

export const analyticsData = [
  { id: 1, label: 'Total Fees', value: 2554123, src: money },
  {
    id: 2,
    label: 'Total Trading Volume',
    value: 1223443556,
    src: stock,
  },
  {
    id: 3,
    label: 'Total Value Locked',
    value: 20099445,
    src: lock,
  },
  { id: 4, label: 'Open Interest', value: 3445556, src: percentage },
];

export const featuesData = [
  {
    id: 1,
    rate: '100X',
    label: 'Trade Perpetuals',
    rateLabel: 'Leverage up to',
    details: 'BTC, ETH, FTM, OP, BNB, LINK & SNX',
    variant: 'first',
  },
  {
    id: 2,
    rate: '#1',
    label: 'Derivative Protocol',
    details: 'on Fantom and Zksync',
    variant: 'second',
  },
  {
    id: 3,
    rate: '15%',
    label: 'Earn up to',
    details: 'rebates with Referral',
    variant: 'third',
  },
];
