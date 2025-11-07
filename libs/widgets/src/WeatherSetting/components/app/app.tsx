import { useEffect, useState } from "react";
import { AutoComplete } from "antd";
import { CityOption } from "../../types";
import api from "../../services/api";
import { normalize } from "../../utils";




const App = () => {
  const [options, setOptions] = useState<CityOption[]>([]);
  const [allOptions, setAllOptions] = useState<CityOption[]>([]);
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState<any | null>(null);
  const [weatherLoading, setWeatherLoading] = useState(false);

  const handleGetData = async () => {
    try {
      setLoading(true);
      const res = await api.CityInfo();

      const cityOptions: CityOption[] = res.data.content.map((item: any) => ({
        value: item.city,
        country: item.country,
        lat: item.lat,
        lng: item.lng,
      }));

      setAllOptions(cityOptions);
      setOptions(cityOptions);
    } catch (error) {
      console.error("❌ خطا هنگام دریافت اطلاعات شهرها:", error);
    } finally {
      setLoading(false);
    }
  };

  const onSelect = async (value: string, option: CityOption) => {
    try {
      setWeatherLoading(true);
      setWeather(null);

      const res = await api.WeatherInfo(option.lat, option.lng);

      setWeather(res.data.current_weather);
    } catch (error) {
      console.error("❌ خطا هنگام دریافت هوا:", error);
    } finally {
      setWeatherLoading(false);
    }
  };

  const onSearch = (text: string) => {
    if (!text.trim()) {
      setOptions(allOptions);
      return;
    }

    const term = normalize(text);

    const filtered = allOptions.filter((item) => {
      const city = normalize(item.value);
      const country = normalize(item.country);
      return city.includes(term) || country.includes(term);
    });

    setOptions(filtered);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <AutoComplete
        options={options}
        style={{ width: "100%" }}
        allowClear
        onClear={() => setWeather(null)}
        onSelect={onSelect}
        onSearch={onSearch}
        placeholder="لطفا شهر خود را وارد کنید"
        notFoundContent={loading ? "در حال بارگذاری..." : "موردی یافت نشد"}
      />

      {weatherLoading && <p>در حال دریافت وضعیت هوا...</p>}

      {weather && (
        <div style={{ marginTop: 16 }}>
          <p>دما: {weather.temperature} °C</p>
          <p>سرعت باد: {weather.windspeed} km/h</p>
          <p>جهت باد: {weather.winddirection}°</p>
        </div>
      )}
    </div>
  );
};

export default App;
