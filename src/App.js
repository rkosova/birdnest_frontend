import './App.css';
import { useEffect, useState } from 'react';
import getOffenders from './services/offenders';

import OffenderTable from './components/OffenderTable'

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(
      () => getOffenders().then(data => setData(data)),
      2000);

    return () => {
      clearInterval(interval);
    };
  }, [])


  return (
    <>
      <OffenderTable offenders={ data } />
    </>
  );
}

export default App;
