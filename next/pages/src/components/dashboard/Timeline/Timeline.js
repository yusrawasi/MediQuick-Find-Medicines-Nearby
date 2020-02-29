import * as React from 'react';

import TimelineCom from './TimelineCom';

class Index extends React.Component {
  render () {
    return (
      <ul className="timeline mb-0">
        <TimelineCom
          description="Lorem ipsum dolor sit amet  "
          date="12 June | Sunday"
          time="10:00"
          circleColor="pink"
        />
        <TimelineCom
          description=""
          date="Heading here"
          time="11:00"
          circleColor="darkgreen"
        />
        <TimelineCom
          description="Lorem ipsum dolor sit amet "
          date="Heading here"
          time="11:10"
          circleColor="skyblue"
        />
        <TimelineCom
          description="Lorem ipsum dolor sit amet  "
          date="Heading here"
          time="12:15"
          circleColor="yellow"
        />
        <TimelineCom
          description="Lorem ipsum dolor sit amet consiq "
          date="Heading here"
          time="01:18"
          circleColor="yellow"
        />
        <TimelineCom
          description="Lorem ipsum dolor sit amet consiq"
          date="Heading here"
          time="01:45"
          circleColor="pink"
        />
        <TimelineCom
          description=""
          date="Heading here"
          time="02:00"
          circleColor="darkgreen"
        />
        <TimelineCom
          description="Lorem ipsum dolor sit amet "
          date="Heading here"
          time="02:10"
          circleColor="skyblue"
        />
      </ul>
    );
  }
}
export default Index;
