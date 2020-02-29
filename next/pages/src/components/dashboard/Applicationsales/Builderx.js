import * as React from 'react';
import {
  LineChart,
  Line
 
} from 'recharts';

const data = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

class BuilderXsales extends React.Component {
  static displayName = 'BarChart';

  render () {
    return (
      <LineChart data={data} width={79} height={47}>
        <Line type="monotone" dataKey="pv" stroke="#04A598" strokeWidth={2} />
      </LineChart>
    );
  }
}
export default BuilderXsales;
