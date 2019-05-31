export class Galc
{
  constructor(date)
  {
    this.date = new Date(date);
  }

  getYears()
  {
    // ageDiff gets number of millisecs from a date until now
    let ageDiff = new Date() - this.date.getTime();
    // ageFromStart = finds a year with those millisecs counting from 1970
    let ageFromStart = new Date(ageDiff);
    return Math.abs(ageFromStart.getUTCFullYear() - 1970);
  }

  lifeLeft()
  {
    let years = this.getYears();
    let lifeLeft = 71.5 - years;
    return lifeLeft;
  }

  getMercuryYears()
  {
    let years = this.getYears();
    let mercYears = parseFloat((years / .24).toFixed(1));
    return mercYears;
  }

  getMercuryYearsLeft()
  {
    let yearsLeft = this.lifeLeft();
    let mercYearsLeft = parseFloat((yearsLeft / .24).toFixed(1));
    return mercYearsLeft;
  }

  getVenusYears()
  {
    let years = this.getYears();
    let venusYears = parseFloat((years / .62).toFixed(1));
    return venusYears;
  }

  getVenusYearsLeft()
  {
    let yearsLeft = this.lifeLeft();
    let venYearsLeft = parseFloat((yearsLeft / .62).toFixed(1));
    return venYearsLeft;
  }

  getMarsYears()
  {
    let years = this.getYears();
    let marsYears = parseFloat((years / 1.88).toFixed(1));
    return marsYears;
  }

  getMarsYearsLeft()
  {
    let yearsLeft = this.lifeLeft();
    let marsYearsLeft = parseFloat((yearsLeft / 1.88).toFixed(1));
    return marsYearsLeft;
  }

  getJupiterYears()
  {
    let years = this.getYears();
    let jupiterYears = parseFloat((years / 11.86).toFixed(2));
    return jupiterYears;
  }

  getJupiterYearsLeft()
  {
    let yearsLeft = this.lifeLeft();
    let jupYearsLeft = parseFloat((yearsLeft / 11.86).toFixed(2));
    return jupYearsLeft;
  }
}
