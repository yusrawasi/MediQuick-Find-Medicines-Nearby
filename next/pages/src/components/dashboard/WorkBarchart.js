import React, {PureComponent} from 'react';
import {BarChart, Bar, Tooltip, ResponsiveContainer} from 'recharts';

const data = [
  {name: 'Page A', uv: 2000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 4000, pv: 9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: 5890, pv: 4800, amt: 2181},
];

class Workchart extends React.Component {
  static displayName = 'BarChart';

  render () {
    return (
      <ResponsiveContainer width={50} height={30} className="work-progress">
        <BarChart width={30} height={40} data={data}>
          <Tooltip cursor={{fill: 'transparent'}} />
          <Bar dataKey="uv" fill="#04AEE6" />

        </BarChart>
      </ResponsiveContainer>
    );
  }
}
export default Workchart;
