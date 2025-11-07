import { Card } from "antd";
import { useAppState } from "../../context";

const WeatherCard = () => {
  const { table : {submit : {weatherJson , weatherLoading}} } = useAppState();
  

  if (!weatherLoading && !weatherJson) {
    return null;
  }

  return (
    <Card style={{ margin: "2.4rem" }} title="وضعیت آب و هوا">
      {weatherLoading && <p>در حال دریافت وضعیت هوا...</p>}

      {!weatherLoading && weatherJson && (
        <>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span>دما</span>
            <span>{weatherJson.temperature ?? "-"} °C</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span>سرعت باد</span>
            <span>{weatherJson.windspeed ?? "-"} km/h</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>جهت باد</span>
            <span>{weatherJson.winddirection ?? "-"}°</span>
          </div>
        </>
      )}
    </Card>
  );
};

export default WeatherCard;
