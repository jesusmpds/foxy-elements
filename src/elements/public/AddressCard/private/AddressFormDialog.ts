import { TemplateResult, html } from 'lit-html';

import { AddressFormElement } from '../../AddressForm';
import { HypermediaResourceDialog } from '../../../private/Dialog/HypermediaResourceDialog';
import { ScopedElementsMap } from '@open-wc/scoped-elements';
import { UpdateEvent } from '../../../private/HypermediaResource/HypermediaResource';

export class AddressFormDialog extends HypermediaResourceDialog {
  static get scopedElements(): ScopedElementsMap {
    return {
      ...super.scopedElements,
      'foxy-address-form': customElements.get(AddressFormElement.defaultNodeName),
    };
  }

  render(): TemplateResult {
    return super.render(() => {
      return html`
        <foxy-address-form
          lang=${this.lang}
          href=${this.href ?? ''}
          id="form"
          @update=${this.__handleUpdate}
        >
        </foxy-address-form>
      `;
    });
  }

  async save(): Promise<void> {
    this.__getForm().submit();
  }

  private __handleUpdate(evt: UpdateEvent) {
    this.editable = evt.detail.state.includes('idle.snapshot.modified.valid');
    this.closable = !evt.detail.state.includes('busy');
  }

  private __getForm() {
    return this.renderRoot.querySelector('#form') as AddressFormElement;
  }
}
