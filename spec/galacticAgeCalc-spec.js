import { Galc } from './../src/galacticAgeCalc.js';

desribe('Galc', function()
{
  it('should calculate age in years from a date', function ()
  {
    // TEST
    let dob = new Galc(new Date(1984, 3, 13));
    let age = dob.getYears();
    expect(age).toEqual(35);
  });

  // it('should convert earth years to Mercury years', function ()
  // {
  //   // TEST
  //   let age = new Galc(new Date(1970, 1, 1));
  //
  //
  // });


});
