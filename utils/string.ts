import { getRandInt } from './number';

export function getRandomString(multiplier = 2 ** 32) {
  return getRandInt(multiplier).toString(16);
}
