import type { TemplateResult } from 'lit-html';
import type { Data } from './types';

import { TranslatableMixin } from '../../../mixins/translatable';
import { TwoLineCard } from '../CustomFieldCard/TwoLineCard';
import { html } from 'lit-html';

const NS = 'email-template-card';
const Base = TranslatableMixin(TwoLineCard, NS);

/**
 * Card element displaying an email template (`fx:email_template`).
 *
 * @slot title:before
 * @slot title:after
 *
 * @slot subtitle:before
 * @slot subtitle:after
 *
 * @element foxy-email-template-card
 * @since 1.21.0
 */
export class EmailTemplateCard extends Base<Data> {
  render(): TemplateResult {
    return super.render({
      title: data => html`${data.description}`,
      subtitle: data => html`<foxy-i18n infer="" key=${this.__getType(data)}></foxy-i18n>`,
    });
  }

  private __getType(data: Data) {
    const { content_html_url: htmlUrl, content_text_url: textUrl } = data;
    const { content_html: html, content_text: text } = data;

    if (text && !textUrl && !html && !htmlUrl) return 'type_custom_text';
    if (html && !htmlUrl && !text && !textUrl) return 'type_custom_html';
    if (htmlUrl && !textUrl && !html && !text) return 'type_custom_html_url';
    if (textUrl && !htmlUrl && !text && !html) return 'type_custom_text_url';
    if (html || htmlUrl || text || textUrl) return 'type_mixed';

    return 'type_default';
  }
}
