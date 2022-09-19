export default class Weather {
  precip: number;
  temp: number;
  wind: number;
  gust: number;
  windDir: number;
  humidity: number;
  days: number;

  get weatherName() {
    const isCold = this.temp < 32;

    // clear/sunny <> cloudy/rainy
    if (this.humidity > 0.5) {
      // cloudy or rainy
      if (this.precip > 0.4) {
        if (this.wind > 43) return isCold ? "Blizzard" : "Hurricane";
        else if (this.wind > 25) return isCold ? "Snowstorm" : "Storm";
        return isCold ? "Snow" : "Rain";
      } else if (this.precip > 0.25) return isCold ? "Sleep" : "Drizzle";

      if (this.humidity > 0.8 || this.precip > 0.5) return "Overcast";
      if (this.humidity > 0.65 || this.precip > 0.3) return "Cloudy";
      return "Partly Cloudy";
    } else {
      if (this.precip > 0.4)
        return isCold ? "Snow" : "Rain"
      //TODO
    }
  }

  constructor(precip, temp, wind, gust, windDir, humidity, days = 2) {
    this.precip = precip;
    this.temp = temp;
    this.wind = wind;
    this.gust = gust;
    this.windDir = windDir;
    this.humidity = humidity;
    this.days = days;
  }
}
