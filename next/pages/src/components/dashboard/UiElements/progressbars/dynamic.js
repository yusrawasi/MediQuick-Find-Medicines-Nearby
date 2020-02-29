import * as React from 'react';
import Link from 'next/link';
import {Card, Table, Hr, ProgressBar, Button} from 'react-bootstrap';

class Dynamic extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      value2: 81,
      color1: 'danger',
      message1: 'Danger !!! Watch out !!!',
      value1: 20,
      value3: 17,
      value4: 24,
      value5: 11,
      color2: 'info',
      color3: 'danger',
      color4: 'warning',
    };
    this.randomizeValues = this.randomizeValues.bind (this);
    this.randomStackValues = this.randomStackValues.bind (this);
  }
  randomizeValues () {
    this.setState ({value1: Math.floor (Math.random () * 200)});
    this.setState ({value2: Math.floor (Math.random () * 100)});
    if (this.state.value2 < 30) {
      this.setState ({color1: 'success'});
      this.setState ({message1: 'success'});
    } else if (this.state.value2 < 50) {
      this.setState ({color1: 'info'});
      this.setState ({message1: 'info'});
    } else if (this.state.value2 < 70) {
      this.setState ({color1: 'warning'});
      this.setState ({message1: 'Warning !!! Watch out !!!'});
    } else {
      this.setState ({color1: 'danger'});
      this.setState ({message1: 'Danger !!! Watch out !!!'});
    }
  }
  randomStackValues () {
    this.setState ({value3: Math.floor (Math.random () * 30)});
    this.setState ({value4: Math.floor (Math.random () * 30)});
    this.setState ({value5: Math.floor (Math.random () * 40)});
    if (this.state.value3 < 15) {
      this.setState ({color2: 'info'});
    } else {
      this.setState ({color2: 'success'});
    }
    if (this.state.value3 < 15) {
      this.setState ({color2: 'primary'});
    } else {
      this.setState ({color2: 'warning'});
    }

    if (this.state.value3 < 15) {
      this.setState ({color2: 'success'});
    } else {
      this.setState ({color2: 'danger'});
    }
  }
  render () {
    return (
      <div>
        <div>
          <p><strong>Stacked</strong></p>
          <ProgressBar>
            <ProgressBar striped variant="success" now={35} key={1} />
            <ProgressBar variant="warning" now={20} key={2} />
            <ProgressBar striped variant="danger" now={10} key={3} />
          </ProgressBar>
        </div>
        <hr />
        <p className="d-inline-block mb-3"><strong>Dynamic</strong></p>
        <Button
          bsSize="small"
          onClick={this.randomStackValues}
          className="ml-2 mb-3"
        >
          Randomize
        </Button>
        <ProgressBar
          variant="success"
          now={25}
          className="mb-3"
          now={this.state.value3}
          label={`${this.state.value3}%`}
        />
        <ProgressBar
          variant="info"
          className="mb-3"
          bsStyle={this.state.color3}
          now={this.state.value4}
          label={`${this.state.value4}%`}
        />
        <ProgressBar
          animated
          variant="warning"
          className="mb-3"
          bsStyle={this.state.color4}
          now={this.state.value5}
          label={`${this.state.value5}%`}
        />
      </div>
    );
  }
}
export default Dynamic;
