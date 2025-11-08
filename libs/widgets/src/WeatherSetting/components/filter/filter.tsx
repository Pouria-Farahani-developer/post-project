import { useEffect, useState } from "react";
import { AutoComplete } from "antd";
import { updateSubmitAction, useAppDispatch } from "../../context";

import { useTr } from '@myapp/libs/translation';

import { CityOption } from "../../types";
import api from "../../services/api";
import { normalize } from "../../utils";

import * as S from './filter.style'




const Filter = () => {
    const [t] = useTr();
    const [options, setOptions] = useState<CityOption[]>([]);
    const [allOptions, setAllOptions] = useState<CityOption[]>([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch()





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
            console.error("errors", error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        handleGetData();
    }, []);

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


      const onSelect = async (value: string, option: CityOption) => {
        try {
          updateSubmitAction(dispatch,{weatherLoading:true});

          const res = await api.WeatherInfo(option.lat, option.lng);

          updateSubmitAction(dispatch,{weatherJson:res.data.current_weather});
        } catch (error) {
          console.error("errors", error);
        } finally {
          updateSubmitAction(dispatch,{weatherLoading:false});
        }
      };


      const handleClear = () => {
        updateSubmitAction(dispatch,{weatherJson:null});
      }



    return (
      <S.FilterContainer>
            <AutoComplete
                options={options}
                style={{ width: "100%" }}
                allowClear
                onSelect={onSelect}
                onClear={handleClear}
                onSearch={onSearch}
                placeholder={t('select_city')}
                notFoundContent={loading ? t('loading') : t('no_content')}
            />
      </S.FilterContainer>
    );
};

export default Filter;
