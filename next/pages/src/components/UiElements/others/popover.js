import * as React from 'react';
import Link from 'next/link';
import {
  Card,
  ButtonToolbar,
  OverlayTrigger,
  Tooltip,
  Button,
  Popover,
} from 'react-bootstrap';

class Popovers extends React.Component {
  render () {
    return (
      <div>
        <ButtonToolbar>
          {['top', 'right', 'bottom', 'left'].map (placement => (
            <OverlayTrigger
              trigger="click"
              key={placement}
              placement={placement}
              overlay={
                <Popover
                  id={`popover-positioned-${placement}`}
                  title={`Popover ${placement}`}
                >
                  <strong>Holy guacamole!</strong> Check this info.
                </Popover>
              }
            >
              <Button className="mr-2 mb-2">Popover on {placement}</Button>
            </OverlayTrigger>
          ))}
        </ButtonToolbar>
      </div>
    );
  }
}
export default Popovers;
