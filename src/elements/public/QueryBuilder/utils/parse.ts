import { Operator, ParsedValue } from '../types';

function parseGroup(search: string): ParsedValue {
  const [fullPath, value] = search.split('=').map(decodeURIComponent);

  const operators = Object.values(Operator) as Operator[];
  const operator = operators.find(operator => fullPath.endsWith(`:${operator}`)) ?? null;

  let path = fullPath.substring(0, operator ? fullPath.lastIndexOf(':') : undefined);
  let name: string | undefined = undefined;

  const nameStart = fullPath.lastIndexOf('[');

  if (path.endsWith(']') && nameStart !== -1) {
    name = path.substring(nameStart + 1, path.length - 1);
    path = path.substring(0, nameStart);
  }

  return { name, path, value, operator };
}

function parse(search: string): (ParsedValue | ParsedValue[])[] {
  return search
    .split('&')
    .filter(v => !!v)
    .map(entry => {
      const [name, value] = entry.split('=').map(decodeURIComponent);
      if (!value?.includes('|')) return parseGroup(entry);
      return `${encodeURIComponent(name)}=${value}`.split('|').map(v => parseGroup(v));
    });
}

export { parse };
