import { Summary } from './Summary';

export function getMetaArgTypes(summary: Summary): Record<string, unknown> {
  const argTypes: Record<string, unknown> = {};

  if (summary.href) argTypes.href = { control: { type: 'text' } };
  if (summary.parent) argTypes.parent = { control: { type: 'text' } };

  if (summary.configurable) {
    const { sections = [], buttons = [], inputs = [] } = summary.configurable;

    const allControls = [...sections, ...buttons, ...inputs];
    const interactiveControls = [...buttons, ...inputs];

    argTypes.hiddenControls = { control: { type: 'check', options: allControls } };
    argTypes.hidden = { control: { type: 'boolean' } };
    argTypes.hiddenSelector = { control: false };

    argTypes.disabledControls = { control: { type: 'check', options: interactiveControls } };
    argTypes.disabled = { control: { type: 'boolean' } };
    argTypes.disabledSelector = { control: false };

    argTypes.readonlyControls = { control: { type: 'check', options: inputs } };
    argTypes.readonly = { control: { type: 'boolean' } };
    argTypes.readonlySelector = { control: false };

    argTypes.templates = { control: false };
    argTypes.mode = { control: false };

    allControls.forEach(control => {
      argTypes[`${control}:before`] = { type: 'string', table: { category: 'Slots' } };
      argTypes[`${control}:after`] = { type: 'string', table: { category: 'Slots' } };
    });
  }

  if (summary.translatable) {
    argTypes.lang = { control: { type: 'inline-radio', options: ['en', 'es'] } };
    argTypes.ns = { control: false, table: { category: 'properties' } };
    argTypes.t = { control: false, table: { category: 'properties' } };
  }

  if (summary.nucleon) {
    argTypes.UpdateEvent = { control: false, table: { category: 'Static' } };
    argTypes.Rumour = { control: false, table: { category: 'Static' } };
    argTypes.API = { control: false, table: { category: 'Static' } };

    argTypes.failure = { control: false };
    argTypes.errors = { control: false };
    argTypes.group = { control: false };
    argTypes.form = { control: false };
    argTypes.data = { control: false };
  }

  return argTypes;
}
