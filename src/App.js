import './App.css';
import { useEffect, useState } from 'react';
import getOffenders from './services/offenders';

import OffenderRow from './components/OffenderRow'

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getOffenders().then(data => setData(data));
  }, [])


  return (
    <>
      <table className='offenderTable'>
        <thead>
          <tr>
            <th></th>
            <th>Snapshot</th>
            <th>Distance</th>
            <th>Pilot ID</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>  
        </thead>
        <tbody>
          { data.map((drone, i) => {
            return (
              <OffenderRow 
                offender={ drone } 
                index = { i } 
                key={ drone.id }
              />
            );
          }) }
        </tbody>
      </table>
    </>
  );
}

export default App;
