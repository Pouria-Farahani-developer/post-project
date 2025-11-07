import { useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useTheme } from 'libs/ui-kit/src/theme/ThemeContext';
import { DIGIT, EN, FA, FA_IR } from '../../utils';

import * as S from './app.style';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { name } = useTheme();
  const [messageTime, setMessageTime] = useState<string>('');
  
  useEffect(() => {
    const currentHour = new Date().getHours();
    setMessageTime(
      currentHour >= 5 && currentHour < 12
        ? 'message.good_morning'
        : currentHour >= 12 && currentHour < 18
          ? 'message.good_afternoon'
          : 'message.good_night'
    );
  }, []);

  const formattedTime: string = useMemo(() => {
    const language = i18n.language === FA_IR ? FA : EN;
    const timeFormatter = new Intl.DateTimeFormat(language, {
      hour: DIGIT,
      minute: DIGIT,
      hour12: language === EN,
    });

    return timeFormatter.format(new Date());
  }, [i18n.language]);

  const displayUserName = (): string => {
    if (name) {
      return name;
    }
    return '';
  };

  return (
    <S.Container>
      <p>{formattedTime}</p>
      <p>{`${t(messageTime)} ${displayUserName()}`}</p>
    </S.Container>
  );
};

export default App;
