import { expect, fixture, waitUntil } from '@open-wc/testing';
import { html, render } from 'lit-html';
import { spy } from 'sinon';
import { createRouter } from '../../../server/index';
import { getByTestId } from '../../../testgen/getByTestId';
import { getTestData } from '../../../testgen/getTestData';
import { FetchEvent } from '../../public/NucleonElement/FetchEvent';
import { NucleonElement } from '../../public/NucleonElement/NucleonElement';
import { InternalForm } from './index';

describe('InternalForm', () => {
  it('imports and registers foxy-internal-timestamps-control', () => {
    expect(customElements.get('foxy-internal-timestamps-control')).to.exist;
  });

  it('imports and registers foxy-internal-create-control', () => {
    expect(customElements.get('foxy-internal-create-control')).to.exist;
  });

  it('imports and registers foxy-internal-delete-control', () => {
    expect(customElements.get('foxy-internal-delete-control')).to.exist;
  });

  it('imports and registers foxy-spinner', () => {
    expect(customElements.get('foxy-spinner')).to.exist;
  });

  it('imports and registers itself as foxy-internal-form', () => {
    expect(customElements.get('foxy-internal-form')).to.equal(InternalForm);
  });

  it('extends NucleonElement', () => {
    expect(new InternalForm()).to.be.instanceOf(NucleonElement);
  });

  it('has a .renderBody() method rendering timestamps and an appropriate action control', async () => {
    const root = document.createElement('div');
    const element = await fixture<InternalForm<any>>(
      html`<foxy-internal-form></foxy-internal-form>`
    );

    render(element.renderBody(), root);

    expect(root.querySelector('foxy-internal-create-control[infer="create"]')).to.exist;
    expect(root.querySelector('foxy-internal-delete-control[infer="delete"]')).to.not.exist;
    expect(root.querySelector('foxy-internal-timestamps-control[infer="timestamps"]')).to.not.exist;

    element.data = await getTestData<any>('./hapi/customers/0');
    render(element.renderBody(), root);

    expect(root.querySelector('foxy-internal-create-control[infer="create"]')).to.not.exist;
    expect(root.querySelector('foxy-internal-delete-control[infer="delete"]')).to.exist;
    expect(root.querySelector('foxy-internal-timestamps-control[infer="timestamps"]')).to.exist;
  });

  it('calls .renderBody() while rendering the rest of the form', async () => {
    const element = await fixture<InternalForm<any>>(
      html`<foxy-internal-form></foxy-internal-form>`
    );

    const root = element.renderRoot;
    const renderBodyMethod = spy(element, 'renderBody');

    await element.requestUpdate();

    expect(renderBodyMethod).to.have.been.called;
    expect(root.querySelector('foxy-internal-create-control[infer="create"]')).to.exist;
    expect(root.querySelector('foxy-internal-delete-control[infer="delete"]')).to.not.exist;
    expect(root.querySelector('foxy-internal-timestamps-control[infer="timestamps"]')).to.not.exist;

    renderBodyMethod.resetHistory();
    element.data = await getTestData<any>('./hapi/customers/0');
    await element.updateComplete;

    expect(renderBodyMethod).to.have.been.called;
    expect(root.querySelector('foxy-internal-create-control[infer="create"]')).to.not.exist;
    expect(root.querySelector('foxy-internal-delete-control[infer="delete"]')).to.exist;
    expect(root.querySelector('foxy-internal-timestamps-control[infer="timestamps"]')).to.exist;

    renderBodyMethod.restore();
  });

  it('renders foxy-spinner in "busy" state while loading data', async () => {
    const router = createRouter();
    const layout = html`
      <foxy-internal-form
        href="https://demo.api/virtual/stall"
        @fetch=${(evt: FetchEvent) => router.handleEvent(evt)}
      >
      </foxy-internal-form>
    `;

    const element = await fixture(layout);
    const spinnerWrapper = await getByTestId(element, 'spinner');
    const spinner = spinnerWrapper!.firstElementChild;

    expect(spinnerWrapper).not.to.have.class('opacity-0');
    expect(spinner).to.have.attribute('state', 'busy');
    expect(spinner).to.have.attribute('infer', 'spinner');
  });

  it('renders foxy-spinner in "error" state if loading data fails', async () => {
    const router = createRouter();
    const layout = html`
      <foxy-internal-form
        href="https://demo.api/virtual/empty?status=404"
        @fetch=${(evt: FetchEvent) => router.handleEvent(evt)}
      >
      </foxy-internal-form>
    `;

    const element = await fixture<InternalForm<any>>(layout);
    const spinnerWrapper = await getByTestId(element, 'spinner');
    const spinner = spinnerWrapper!.firstElementChild;

    await waitUntil(() => element.in('fail'), undefined, { timeout: 5000 });

    expect(spinnerWrapper).not.to.have.class('opacity-0');
    expect(spinner).to.have.attribute('state', 'error');
    expect(spinner).to.have.attribute('infer', 'spinner');
  });

  it('hides spinner once loaded', async () => {
    const data = await getTestData<any>('./hapi/customer_addresses/0');
    const layout = html`<foxy-internal-form .data=${data}></foxy-internal-form>`;
    const element = await fixture(layout);
    const spinnerWrapper = await getByTestId(element, 'spinner');

    expect(spinnerWrapper).to.have.class('opacity-0');
  });
});
