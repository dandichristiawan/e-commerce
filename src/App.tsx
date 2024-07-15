import Router from './router';
import TopBarProgress from 'react-topbar-progress-indicator';

TopBarProgress.config({
  barColors: {
    '0': '#fff',
    '1.0': '#fff',
  },
  shadowBlur: 5,
});

export default function App() {
  return <Router />;
}
