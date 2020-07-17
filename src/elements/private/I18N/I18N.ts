import { TOptions } from 'i18next';
import { html, property, css } from 'lit-element';
import { Translatable } from '../../../mixins/translatable';
import { Skeleton } from '../Skeleton/Skeleton';

export class I18N extends Translatable {
  public static get scopedElements() {
    return {
      'x-skeleton': Skeleton,
    };
  }

  public static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: inline-block;
        }
      `,
    ];
  }

  @property({ type: String, reflect: true })
  public key = '';

  @property({ type: Object })
  public opts?: TOptions<any>;

  public get whenReady() {
    return this._whenI18nReady!.then(() => this.updateComplete);
  }

  public render() {
    if (this._isI18nReady) {
      return html`${this._t(this.key, this.opts)}<slot></slot>`;
    } else {
      return html`<x-skeleton class="block">${this.key}<slot></slot></x-skeleton>`;
    }
  }
}
