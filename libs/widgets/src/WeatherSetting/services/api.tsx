import Mockify from '@myapp/libs/mockify';
import { client } from '@myapp/libs/client';

const api = {
  CityInfo: () => {
    return Mockify.CityInfo();
  },

  WeatherInfo: (lat:string,long:string) => {
    return client.get('v1/forecast', {
      params: {
        latitude: lat,
        longitude: long,
        current_weather: true,
      },
    });
  },
};

export default api;
