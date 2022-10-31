export function getRandInt(multiplier = 2 ** 32) {
  return Math.ceil(Math.random() * multiplier);
}
