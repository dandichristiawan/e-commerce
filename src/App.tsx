import { useEffect } from 'react';
import Router from './router';
import TopBarProgress from 'react-topbar-progress-indicator';
import { RefreshAuthApi } from './features/login/libs/api';

TopBarProgress.config({
  barColors: {
    '0': '#1f88d9',
    '1.0': '#1f88d9',
  },
  shadowBlur: 5,
});

export default function App() {
  useEffect(() => {
    const fiftyFiveMinutes = 55 * 60 * 1000;
    const intervalId = setInterval(RefreshAuthApi, fiftyFiveMinutes);
    return () => clearInterval(intervalId);
  }, []);

  return <Router />;
}
