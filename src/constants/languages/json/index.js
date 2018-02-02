import reserved from 'constants/source/attributes/reserved';

export default {
  property: {
    pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/i,
    inside: {
      reserved: new RegExp(`"(${reserved.join('|')})*"`),
    },
  },
  string: {
    pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    greedy: true,
  },
  number: /\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee][+-]?\d+)?)\b/,
  punctuation: /[);,]/,
  bracket: /[{}]/,
  array: /[[\]]/,
  operator: /:/g,
  boolean: /\b(?:true|false)\b/i,
  null: /\bnull\b/i,
};
