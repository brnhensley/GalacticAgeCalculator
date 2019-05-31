import { Galc } from './../src/galc.js';

describe('Galc', function() {
  it('should create a Galc object', function ()
  {
    let dob = new Galc(new Date(1984, 3, 13));
    expect(typeof dob).toEqual(typeof new Galc);
  });

  it('should calculate age in years from a date', function ()
  {
    let dob = new Galc(new Date(1984, 3, 13));
    let age = dob.getYears();
    expect(age).toEqual(35);
  });

  it('should subtract an age from average life expectancy', function ()
  {
    let dob = new Galc(new Date(1984, 3, 13));
    let lifeLeft = dob.lifeLeft();
    expect(lifeLeft).toEqual(36.5)
  });

  it('should convert earth years to Mercury years', function ()
  {
    let dob = new Galc(new Date(1984, 3, 13));
    let mercAge = dob.getMercuryYears();
    expect(mercAge).toEqual(145.8)
  });

  it('should convert earth years to Venus years', function ()
  {
    let dob = new Galc(new Date(1984, 3, 13));
    let venusAge = dob.getVenusYears();
    expect(venusAge).toEqual(56.5)
  });

  it('should convert earth years to Mars years', function ()
  {
    let dob = new Galc(new Date(1984, 3, 13));
    let marsAge = dob.getMarsYears();
    expect(marsAge).toEqual(18.6)
  });

  it('should convert earth years to Jupiter years', function ()
  {
    let dob = new Galc(new Date(1984, 3, 13));
    let jupiterAge = dob.getJupiterYears();
    expect(jupiterAge).toEqual(2.95)
  });

  it('should convert earth years left to Mercury years left', function ()
  {
    let dob = new Galc(new Date(1984, 3, 13));
    let mercYearsLeft = dob.getMercuryYearsLeft();
    expect(mercYearsLeft).toEqual(152.1)
  });

});
