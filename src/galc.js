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
    let mercYears = (years / .24).toFixed(1);
    return mercYears;
  }

  getVenusYears()
  {
    let years = this.getYears();
    let venusYears = (years / .62).toFixed(1);
    return venusYears;
  }

  getMarsYears()
  {
    let years = this.getYears();
    let marsYears = (years / 1.88).toFixed(1);
    return marsYears;
  }

  getJupiterYears()
  {
    let years = this.getYears();
    let jupiterYears = (years / 11.86).toFixed(2);
    return jupiterYears;
  }
}
