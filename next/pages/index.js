import React from 'react';
import FormDemo from '../components/multi-input';
import SelectSearch from 'react-select-search';
import "../css/style.css";

class Index extends React.Component {

  render() {
    const options = [
      {name: 'Swedish', value: 'sv'},
      {name: 'English', value: 'en'},
      {
          type: 'group',
          name: 'Group name',
          items: [
              {name: 'Spanish', value: 'es'},
          ]
      },
  ];
    return (
      <div>
      {/* <FormDemo /> */}

      <SelectSearch options={options} value="sv" name="language" placeholder="Choose your language" />
      </div>
    );
  }
}

export default Index;