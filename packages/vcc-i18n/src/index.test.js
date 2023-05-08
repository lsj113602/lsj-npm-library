const getI18n = require('../dist/vcc-i18n.umd');

test('adds 1 + 2 to equal 3', () => {
  expect(getI18n(1, 2)).toBe(3);
});