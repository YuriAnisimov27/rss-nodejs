const encode = require('./encode');

describe('Encode function testing', () => {
  test('should returns correct string for positive shift', () => {
    expect(encode('This is secret. Message about "_" symbol!', 7)).toBe(
      'Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!'
    );
  });

  test('should returns correct string for negative shift', () => {
    expect(encode('This is secret. Message about "_" symbol!', -1)).toBe(
      'Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!'
    );
  });
});
