import '../index';

import { expect, fixture, html, waitUntil } from '@open-wc/testing';

import { InternalGiftCardCodesFormListItem } from './InternalGiftCardCodesFormListItem';
import { NucleonElement } from '../../NucleonElement/NucleonElement';
import { createRouter } from '../../../../server';
import { getByKey } from '../../../../testgen/getByKey';

describe('GiftCardCodesForm', () => {
  describe('InternalGiftCardCodesFormListItem', () => {
    it('extends NucleonElement', () => {
      expect(new InternalGiftCardCodesFormListItem()).to.be.instanceOf(NucleonElement);
    });

    it("doesn't have its own i18n namespace", () => {
      expect(new InternalGiftCardCodesFormListItem()).to.have.empty.property('ns');
    });

    it('is defined as foxy-internal-gift-card-codes-form-list-item', () => {
      const classInRegistry = customElements.get('foxy-internal-gift-card-codes-form-list-item');
      expect(classInRegistry).to.equal(InternalGiftCardCodesFormListItem);
    });

    it("renders nothing if resource href doesn't include code", async () => {
      const layout = html`<foxy-internal-gift-card-codes-form-list-item></foxy-internal-gift-card-codes-form-list-item>`;
      const element = await fixture<InternalGiftCardCodesFormListItem>(layout);
      expect(element.shadowRoot).to.have.text('');
    });

    it('renders code if resource href includes code', async () => {
      const layout = html`<foxy-internal-gift-card-codes-form-list-item></foxy-internal-gift-card-codes-form-list-item>`;
      const element = await fixture<InternalGiftCardCodesFormListItem>(layout);
      const router = createRouter();

      element.addEventListener('fetch', evt => router.handleEvent(evt));
      element.href = 'https://demo.api/hapi/gift_card_codes?code=FOO123';
      await element.updateComplete;

      expect(element.shadowRoot).to.include.text('FOO123');
    });

    it('renders "loading_error" label if code lookup fails', async () => {
      const layout = html`<foxy-internal-gift-card-codes-form-list-item></foxy-internal-gift-card-codes-form-list-item>`;
      const element = await fixture<InternalGiftCardCodesFormListItem>(layout);
      const router = createRouter();

      element.addEventListener('fetch', evt => router.handleEvent(evt));
      element.href = 'https://demo.api/virtual/empty?status=500';
      element.lang = 'es';
      element.ns = 'foo';

      await waitUntil(() => element.in('fail'));
      const label = await getByKey(element, 'loading_error');

      expect(label).to.exist;
      expect(label).to.have.attribute('lang', 'es');
      expect(label).to.have.attribute('ns', 'foo');
    });

    it('renders "loading_busy" label while loading code lookup results', async () => {
      const layout = html`<foxy-internal-gift-card-codes-form-list-item></foxy-internal-gift-card-codes-form-list-item>`;
      const element = await fixture<InternalGiftCardCodesFormListItem>(layout);
      const router = createRouter();

      element.addEventListener('fetch', evt => router.handleEvent(evt));
      element.href = 'https://demo.api/virtual/stall';
      element.lang = 'es';
      element.ns = 'foo';

      await waitUntil(() => element.in('busy'));
      const label = await getByKey(element, 'loading_busy');

      expect(label).to.exist;
      expect(label).to.have.attribute('lang', 'es');
      expect(label).to.have.attribute('ns', 'foo');
    });

    it('renders "unique" label if code lookup returns 0 items', async () => {
      const layout = html`<foxy-internal-gift-card-codes-form-list-item></foxy-internal-gift-card-codes-form-list-item>`;
      const element = await fixture<InternalGiftCardCodesFormListItem>(layout);
      const router = createRouter();

      element.addEventListener('fetch', evt => router.handleEvent(evt));
      element.href = 'https://demo.api/hapi/gift_card_codes?code=UNEXISTENT';
      element.lang = 'es';
      element.ns = 'foo';

      await waitUntil(() => element.in({ idle: 'snapshot' }));
      const label = await getByKey(element, 'unique');

      expect(label).to.exist;
      expect(label).to.have.attribute('lang', 'es');
      expect(label).to.have.attribute('ns', 'foo');
    });

    it('renders "duplicate" label if code lookup returns 1+ items', async () => {
      const layout = html`<foxy-internal-gift-card-codes-form-list-item></foxy-internal-gift-card-codes-form-list-item>`;
      const element = await fixture<InternalGiftCardCodesFormListItem>(layout);
      const router = createRouter();

      element.addEventListener('fetch', evt => router.handleEvent(evt));
      element.href = 'https://demo.api/hapi/gift_card_codes?code=GIFTCARD0';
      element.lang = 'es';
      element.ns = 'foo';

      await waitUntil(() => element.in({ idle: 'snapshot' }));
      const label = await getByKey(element, 'duplicate');

      expect(label).to.exist;
      expect(label).to.have.attribute('lang', 'es');
      expect(label).to.have.attribute('ns', 'foo');
    });
  });
});
