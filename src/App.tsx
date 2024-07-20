import { useEffect } from 'react';
import Router from './router';
import TopBarProgress from 'react-topbar-progress-indicator';
import { CurrentUserApi, RefreshAuthApi } from './features/login/libs/api';
import Cookies from 'js-cookie';
TopBarProgress.config({
  barColors: {
    '0': '#fff',
    '1.0': '#fff',
  },
  shadowBlur: 5,
});

export default function App() {
  const token = Cookies.get('token');
  useEffect(() => {
    
    if (token) {
      CurrentUserApi();
    }

    const fiftyFiveMinutes = 55 * 60 * 1000;
    const intervalId = setInterval(RefreshAuthApi, fiftyFiveMinutes);
    return () => clearInterval(intervalId);
  }, []);

  return <Router />;
}
