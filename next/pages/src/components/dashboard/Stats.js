import * as React from "react";
import {Col} from "react-bootstrap";



class Stats extends React.Component {

  render() {
      const iconName = `/static/images/icon${this.props.icon}.png `;
      const iconName2 = `/static/images/icon${this.props.icon}.svg `;

      const statsbg= `${this.props.statsbg}`;
      return (
        <div className={statsbg}>
          <div className='d-flex justify-content-between p-3 align-items-center'>
          <div className="d-flex flex-column">
            <div className='stats-number mb-3'> {this.props.number}</div>
            <p className="mb-0"> {this.props.text}</p>
            </div>

            <div> <img src ={iconName} /></div>
          </div>
          </div>

      );
  }
}
export default Stats;