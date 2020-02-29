import React, {Component} from 'react';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from 'react-simple-maps';
import {scaleLinear} from 'd3-scale';
import request from 'axios';

const cityScale = scaleLinear ().domain ([0, 37843000]).range ([1, 25]);

class BasicMap extends Component {
  constructor () {
    super ();
    this.state = {
      cities: [],
    };
    this.fetchCities = this.fetchCities.bind (this);
  }
  componentDidMount () {
    this.fetchCities ();
  }
  fetchCities () {
    request.get ('../../static/world-most-populous-cities.json').then (res => {
      this.setState ({
        cities: res.data,
      });
    });
  }
  render () {
    return (
      <div className="wrapperStyles">
        <ComposableMap
          projectionConfig={{scale: 205}}
          width={980}
          height={440}
          style={{
            width: '100%',
            height: '235px',
          }}
        >
          <ZoomableGroup center={[0, 20]} disablePanning>
            <Geographies geography="../../static/world-50m.json">
              {(geographies, projection) =>
                geographies.map (
                  (geography, i) =>
                    geography.id !== 'ATA' &&
                    <Geography
                      key={i}
                      geography={geography}
                      projection={projection}
                      style={{
                        default: {
                          fill: '#aaa',
                          stroke: '#fff',
                          strokeWidth: 0.75,
                          outline: 'none',
                        },
                        hover: {
                          fill: '#ECEFF1',
                          stroke: '#607D8B',
                          strokeWidth: 0.75,
                          outline: 'none',
                        },
                        pressed: {
                          fill: '#ECEFF1',
                          stroke: '#607D8B',
                          strokeWidth: 0.75,
                          outline: 'none',
                        },
                      }}
                    />
                )}
            </Geographies>
            <Markers>
              {this.state.cities.map ((city, i) => (
                <Marker key={i} marker={city}>
                  <circle
                    cx={0}
                    cy={0}
                    r={cityScale (city.population)}
                    fill="rgba(255,87,34,0.8)"
                    strokeWidth="1"
                  />
                </Marker>
              ))}
            </Markers>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    );
  }
}

export default BasicMap;
