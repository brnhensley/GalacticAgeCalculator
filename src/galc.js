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

  getMercuryYears()
  {
    let years = this.getYears();
    let mercYears = (years / .24).toFixed(1);
    console.log(mercYears);
    return mercYears;
  }


}
