import * as React from 'react';

class Index extends React.Component {
  render () {
    const circleColor = `${this.props.circleColor}`;

    return (
      <li className={circleColor}>
        <div className="time">{this.props.time}</div>
        <small>{this.props.date}</small>
        <p>{this.props.description}</p>
      </li>
    );
  }
}
export default Index;
