import * as React from 'react';
import {
  BarChart,
  Bar,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const areaData = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400, value: 600},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210, value: 300},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290, value: 500},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000, value: 400},
  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181, value: 200},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500, value: 700},
  {name: 'Page G', uv: 3490, pv: 1300, amt: 2100, value: 100},
  {name: 'Page H', uv: 3490, pv: 3300, amt: 2100, value: 200},
  {name: 'Page I', uv: 2490, pv: 2300, amt: 2100, value: 300},
  {name: 'Page J', uv: 5490, pv: 2800, amt: 2100, value: 700},
  {name: 'Page G', uv: 4490, pv: 3800, amt: 2100, value: 400},
  {name: 'Page H', uv: 2490, pv: 1300, amt: 2100, value: 300},
  {name: 'Page I', uv: 5490, pv: 4300, amt: 2100, value: 500},
  {name: 'Page J', uv: 2490, pv: 3300, amt: 2100, value: 100},
  {name: 'Page K', uv: 4490, pv: 2300, amt: 2100, value: 500},
];

class Barchart extends React.Component {
  static displayName = 'BarChart';

  render () {
    return (
      <ResponsiveContainer
        width="100%"
        height={188}
        className="weekyreport-bar"
      >
        <BarChart
          data={areaData}
          maxBarSize={18}
          barGap={10}
          margin={{
            top: 0,
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <Tooltip cursor={{fill: 'transparent'}} />

          <Bar dataKey="pv" stackId="a" className="filled-bar" radius={3} />
          <Bar dataKey="uv" stackId="a" className="empty-bar" radius={3} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
export default Barchart;
