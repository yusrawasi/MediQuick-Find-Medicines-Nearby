import * as React from "react";


import * as styles from "../../styles/global.scss";
class Index extends React.Component {

  render() {
    const value =`${this.props.value}`;
    const valueclass= `progress-circle p${value}`;

      return (
      <div className= {valueclass}>
       <span>{value}%</span>
        <div className="left-half-clipper">
          <div className="first50-bar"></div>
          <div className="value-bar"></div>
        </div>
      </div>
      );
  }
}
export default Index;