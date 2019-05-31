import { Galc } from './../src/galc.js';

describe('Galc', function() {
  it('should create a Galc object', function ()
  {
    // TEST
    let dob = new Galc(new Date(1984, 3, 13));
    expect(typeof dob).toEqual(typeof new Galc);
  });

  it('should calculate age in years from a date', function ()
  {
    // TEST
    let dob = new Galc(new Date(1984, 3, 13));
    let age = dob.getYears();
    expect(age).toEqual(35);
  });

  it('should convert earth years to Mercury years', function ()
  {
    // TEST
    let dob = new Galc(new Date(1984, 3, 13));
    let mercAge = dob.getMercuryYears();
    expect(mercAge).toEqual('145.8')
  });


});
