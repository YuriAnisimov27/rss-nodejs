const decode = require('./decode');

describe('Decode function testing', () => {
  test('should returns correct string for positive shift', () => {
    expect(decode('Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!', 7)).toBe(
      'This is secret. Message about "_" symbol!'
    );
  });

  test('should returns correct string for negative shift', () => {
    expect(decode('Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!', -1)).toBe(
      'This is secret. Message about "_" symbol!'
    );
  });
});
