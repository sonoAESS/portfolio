const raw = import.meta.env.BASE_URL;

export const basePrefix = raw.endsWith('/') ? raw.slice(0, -1) : raw;

export function asset(path: string): string {
  return `${basePrefix}${path}`;
}
