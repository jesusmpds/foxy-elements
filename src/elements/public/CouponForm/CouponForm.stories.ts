import './index';

import { Summary } from '../../../storygen/Summary';
import { getMeta } from '../../../storygen/getMeta';
import { getStory } from '../../../storygen/getStory';

const summary: Summary = {
  href: 'https://demo.api/hapi/coupons/0',
  parent: 'https://demo.api/hapi/coupons',
  nucleon: true,
  localName: 'foxy-coupon-form',
  translatable: true,
  configurable: {
    inputs: [
      'name',
      'rules',
      'codes',
      'usage',
      'product-restrictions',
      'category-restrictions',
      'options',
    ],
    sections: ['timestamps'],
    buttons: ['create', 'delete'],
  },
};

export default getMeta(summary);

export const Playground = getStory({ ...summary, code: true });
export const Empty = getStory(summary);
export const Error = getStory(summary);
export const Busy = getStory(summary);

Empty.args.href = '';
Error.args.href = 'https://demo.api/virtual/empty?status=404';
Busy.args.href = 'https://demo.api/virtual/stall';
