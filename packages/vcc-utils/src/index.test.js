const {reduce} = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(reduce(5, 2)).toBe(3);
});