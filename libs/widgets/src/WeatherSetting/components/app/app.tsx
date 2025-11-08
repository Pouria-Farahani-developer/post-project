import WeatherCard from "../card/card";
import Filter from "../filter/filter";
import * as S from './app.style'




const App = () => {

  return (
    <S.WeatherContainer>
      <Filter />
      <WeatherCard />
    </S.WeatherContainer>
  );
};

export default App;
