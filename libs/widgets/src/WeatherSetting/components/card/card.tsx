import { useTr } from '@myapp/libs/translation';

import { useAppState } from "../../context";

import * as S from './card.style'

const WeatherCard = () => {
  const [t] = useTr()
  const { table : {submit : {weatherJson , weatherLoading}} } = useAppState();


  if (!weatherLoading && !weatherJson) {
    return null;
  }



  return (
    <S.Card title={t('weather_condition')}>
      {weatherLoading && <p>{t('fetching_weather')}</p>}

      {!weatherLoading && weatherJson && (
        <>
          <S.Row>
            <span>{t('temperature')}</span>
            <span>{weatherJson.temperature ?? "-"} °C</span>
          </S.Row>

          <S.Row>
            <span>{t('wind_speed')}</span>
            <span>{weatherJson.windspeed ?? "-"} km/h</span>
          </S.Row>

          <S.Row>
            <span>{t('wind_direction')}</span>
            <span>{weatherJson.winddirection ?? "-"}°</span>
          </S.Row>
        </>
      )}
    </S.Card>
  );
};

export default WeatherCard;
