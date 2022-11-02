export const enum Icon {
  'lock' = 'lock',
  'mail' = 'mail',
  'visibility' = 'visibility',
  'visibilityOff' = 'visibilityOff',
}

export interface InputIconPositions {
  prependInner?: Icon;
  prependOuter?: Icon;
  appendInner?: Icon;
  appendOuter?: Icon;
}
