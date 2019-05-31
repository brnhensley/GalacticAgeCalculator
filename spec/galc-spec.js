import { Galc } from './../src/galc.js';

  // General methods

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

  it('should turn a negative into a positive', function ()
  {
    let dob = new Galc(new Date(1900, 3, 13));
    let lifeLeft = dob.lifeLeft();
    let overTime = dob.overTime(lifeLeft)
    expect(lifeLeft).toEqual(-47.5)
    expect(overTime).toEqual(47.5)
  });

  // Mercury Tests

  it('should convert earth years to Mercury years', function ()
  {
    let dob = new Galc(new Date(1984, 3, 13));
    let mercAge = dob.getMercuryYears();
    expect(mercAge).toEqual(145.8)
  });

  it('should convert earth years left to Mercury years left', function ()
  {
    let dob = new Galc(new Date(1984, 3, 13));
    let mercYearsLeft = dob.getMercuryYearsLeft();
    expect(mercYearsLeft).toEqual(152.1)
  });

  it('should convert the number of earth years over life expectancy to Mercury years', function ()
  {
    let dob = new Galc(new Date(1947, 1, 1));
    let mercYearsLeft = dob.getMercuryYearsLeft();
    expect(mercYearsLeft).toEqual("You are 2.1 Mercurial years over expected!")
  });

  // Venus Tests

  it('should convert earth years to Venus years', function ()
  {
    let dob = new Galc(new Date(1984, 3, 13));
    let venusAge = dob.getVenusYears();
    expect(venusAge).toEqual(56.5)
  });

  it('should convert earth years left to Venus years left', function ()
  {
    let dob = new Galc(new Date(1984, 3, 13));
    let venusYearsLeft = dob.getVenusYearsLeft();
    expect(venusYearsLeft).toEqual(58.9)
  });

  it('should convert the number of earth years over life expectancy to Venus years', function ()
  {
    let dob = new Galc(new Date(1947, 1, 1));
    let venYearsLeft = dob.getVenusYearsLeft();
    expect(venYearsLeft).toEqual("You are 0.8 Venusian years over expected!")
  });

  // Mars Tests

  it('should convert earth years to Mars years', function ()
  {
    let dob = new Galc(new Date(1984, 3, 13));
    let marsAge = dob.getMarsYears();
    expect(marsAge).toEqual(18.6)
  });

  it('should convert earth years left to Mars years left', function ()
  {
    let dob = new Galc(new Date(1984, 3, 13));
    let marsYearsLeft = dob.getMarsYearsLeft();
    expect(marsYearsLeft).toEqual(19.4)
  });

  // Jupiter Tests

  it('should convert earth years to Jupiter years', function ()
  {
    let dob = new Galc(new Date(1984, 3, 13));
    let jupiterAge = dob.getJupiterYears();
    expect(jupiterAge).toEqual(2.95)
  });

  it('should convert earth years left to Jupiter years left', function ()
  {
    let dob = new Galc(new Date(1984, 3, 13));
    let jupYearsLeft = dob.getJupiterYearsLeft();
    expect(jupYearsLeft).toEqual(3.08)
  });

});
