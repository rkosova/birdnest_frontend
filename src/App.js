import './App.css';
import { useEffect, useState } from 'react';
import getOffenders from './services/offenders';

import OffenderTable from './components/OffenderTable';
import { VictoryChart, VictoryAxis, VictoryScatter, VictoryTheme } from 'victory';

const App = () => {
  const [data, setData] = useState([]);
  const [posData, setPosData] = useState([])


  const getPosData = (data) => {
    const newPos = [
      {
        x: 250,
        y: 250
      }];

    data.map(datum => {
      newPos.push(
        {
          x: datum.x / 1000,
          y: datum.y / 1000
        }
      )
    });

    setPosData(newPos);
  }

  useEffect(() => {
    const interval = setInterval(
      () => getOffenders().then(res => {
        setData(res);
        getPosData(res);
      }),
      2000);

    return () => {
      clearInterval(interval);
    };
  }, [])


  return (
    <div className='main'>
      
      <div className='graph'>

        <VictoryChart
        theme={VictoryTheme.material}
        domain={{
          x: [150, 350],
          y: [150, 350] 
        }}>
          <VictoryAxis 
              dependentAxis
              style={{
                grid: { stroke: "none" },
                axis: {stroke: "transparent"}, 
                ticks: {stroke: "transparent"},
                tickLabels: { fill:"transparent"} 
              }}
            />
            <VictoryAxis 
              independentAxis
              style={{
                grid: { stroke: "none" },
                axis: {stroke: "transparent"}, 
                ticks: {stroke: "transparent"},
                tickLabels: { fill:"transparent"} 
              }}
            />
          <VictoryScatter
            style={ {
              data: { fill: ({datum}) => datum.x === 250 && datum.y === 250 ? "#dea176" : "#f22d54" },
              grid: { stroke: "none" }
              } }
            size={ 4 }
            data={ posData }
          />

        </VictoryChart>

      </div>

      <div className='tableContainer'>
        <OffenderTable offenders={ data } />
      </div>
    </div>
  );
}

export default App;
