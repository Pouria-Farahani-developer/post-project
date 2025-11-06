'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t, i18n } = useTranslation();
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();
    setGreeting(
      currentHour >= 5 && currentHour < 12
        ? 'message.good_morning'
        : currentHour >= 12 && currentHour < 18 
        ? 'message.good_afternoon'
        : 'message.good_night'
    );
  }, []); 

  const formattedTime = useMemo(() => {
    const language = i18n.language === 'fa_IR' ? 'fa' : 'en';
    const timeFormatter = new Intl.DateTimeFormat(language, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: language === 'en',
    });
    return timeFormatter.format(new Date());
  }, [i18n.language]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <p>{formattedTime}</p> 
      <p>{t(greeting)}</p>   
    </div>
  );
};

export default App;
