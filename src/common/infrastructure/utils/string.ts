export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const getPokemonOrder = (order: number) =>
  order < 10 ? `00${order}` : order < 100 ? `0${order}` : order;
