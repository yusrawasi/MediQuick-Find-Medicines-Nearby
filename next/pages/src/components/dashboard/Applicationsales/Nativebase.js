import * as React from 'react';
import {LineChart, Line} from 'recharts';

const data = [
  {name: 'Page A', pv: 4400, amt: 2400},
  {name: 'Page B', pv: 2398, amt: 2210},
  {name: 'Page C', pv: 1800, amt: 2290},
  {name: 'Page D', uv: 4780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: 8890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 9390, pv: 3800, amt: 2500},
  {name: 'Page G', uv: 2490, pv: 4300, amt: 2100},
];

class NativeBase extends React.Component {
  static displayName = 'BarChart';

  render () {
    return (
      <LineChart data={data} width={79} height={47}>
        <Line type="monotone" dataKey="pv" stroke="#FD4199" strokeWidth={2} />
      </LineChart>
    );
  }
}
export default NativeBase;
