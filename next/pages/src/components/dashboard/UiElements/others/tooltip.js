import * as React from 'react';
import Link from 'next/link';
import {
  Card,
  ButtonToolbar,
  OverlayTrigger,
  Tooltip,
  Button,
} from 'react-bootstrap';

class Tooltips extends React.Component {
  render () {
    return (
      <div>

        <ButtonToolbar>
          {['top', 'right', 'bottom', 'left'].map (placement => (
            <OverlayTrigger
              key={placement}
              placement={placement}
              overlay={
                <Tooltip id={`tooltip-${placement}`}>
                  Tooltip on <strong>{placement}</strong>.
                </Tooltip>
              }
            >
              <Button className="mr-2 mb-2">Tooltip on {placement}</Button>
            </OverlayTrigger>
          ))}
        </ButtonToolbar>

      </div>
    );
  }
}
export default Tooltips;
