function getFormattedData(data) {
  return {
    province: data.name,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    temprature: data.main.feels_like,
    wind: data.wind.speed,
    country: data.sys.country,
    isLoading: false,
  };
}

const coordinates = [
  { lat: '34.5253', lng: '69.1783' },
  { lat: '31.6200', lng: '65.7158' },
  { lat: '34.3419', lng: '62.2031' },
  { lat: '32.3436', lng: '62.1194' },
  { lat: '36.7000', lng: '67.1167' },
  { lat: '31.5831', lng: '64.3692' },
  { lat: '36.7286', lng: '68.8681' },
  { lat: '36.7167', lng: '69.5167' },
  { lat: '34.4342', lng: '70.4478' },
  { lat: '36.6650', lng: '65.7520' },
  { lat: '30.9600', lng: '61.8600' },
  { lat: '33.3331', lng: '69.9169' },
  { lat: '35.9333', lng: '64.7500' },
  { lat: '34.6683', lng: '70.2089' },
  { lat: '33.5492', lng: '68.4233' },
  { lat: '34.5833', lng: '68.9500' },
  { lat: '35.9500', lng: '68.7000' },
  { lat: '34.8250', lng: '67.8333' },
  { lat: '35.0131', lng: '69.1689' },
  { lat: '32.6267', lng: '65.8733' },
  { lat: '37.1166', lng: '70.5800' },
  { lat: '34.9867', lng: '63.1292' },
  { lat: '36.2214', lng: '65.9278' },
  { lat: '34.8742', lng: '71.1528' },
  { lat: '34.3972', lng: '68.8697' },
  { lat: '35.3128', lng: '69.5158' },
  { lat: '33.9808', lng: '69.0350' },
  { lat: '34.5225', lng: '65.2517' },
  { lat: '32.1061', lng: '66.9069' },
  { lat: '36.2653', lng: '68.0167' },
  { lat: '35.4167', lng: '70.9169' },
  { lat: '33.1757', lng: '68.7304' },
  { lat: '33.7218', lng: '66.1302' },
  { lat: '34.3000', lng: '62.2500' },
  { lat: '35.0535', lng: '69.2565' },
  { lat: '34.7467', lng: '69.1164' },
  { lat: '34.2435', lng: '70.7285' },
  { lat: '35.1183', lng: '69.2378' },
  { lat: '34.7808', lng: '69.1486' },
  { lat: '33.3066', lng: '69.6938' },
  { lat: '34.8529', lng: '69.1706' },
];

export default async function getAllInfo() {
  try {
    const arr = coordinates.map(async (pro) => {
      const base = 'https://api.openweathermap.org/data/2.5/weather?';
      const coordinate = `lat=${pro.lat}&lon=${pro.lng}`;
      const apiId = '&appid=e7e6928cc5d52c53ee37d5011f6f8f82&units=metric';

      const res = await fetch(`${base}${coordinate}${apiId}`);
      const data = await res.json();
      return getFormattedData(data);
    });

    return Promise.all(arr);
  } catch (error) {
    return error;
  }
}

export const sample = {
  coord: {
    lon: 69.4167,
    lat: 34.5,
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01n',
    },
  ],
  base: 'stations',
  main: {
    temp: 23.6,
    feels_like: 23.03,
    temp_min: 23.6,
    temp_max: 23.6,
    pressure: 1003,
    humidity: 39,
    sea_level: 1003,
    grnd_level: 809,
  },
  visibility: 10000,
  wind: {
    speed: 2.19,
    deg: 43,
    gust: 2.64,
  },
  clouds: {
    all: 5,
  },
  dt: 1690566447,
  sys: {
    country: 'AF',
    sunrise: 1690504155,
    sunset: 1690554491,
  },
  timezone: 16200,
  id: 1138957,
  name: 'Kabul',
  cod: 200,
};
