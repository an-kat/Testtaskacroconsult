import React from 'react';
import { useSelector } from 'react-redux';
import ReactLoading from 'react-loading';

import './InfoBlock.scss';
import { selectors } from '../../store'
import { icon } from '../../api/api';

const kelvinToCelsia = (n) => {
  return (n - 263.25).toFixed(2)
};

export const InfoBox = () => {

  const weather = useSelector(selectors.getWeather);
  const loading = useSelector(selectors.getIsLoading);

  return (
    <>  
      {loading === true &&
        weather.name === undefined ? (
          <div className="info_loader">
            <ReactLoading type="spinningBubbles" height="100px" width="100px"/>
          </div>
      ) : (
        <div className="info">
          <div className="info_container">
            <div className="info_wrapper-first">
              <h2 className="info_title">
                {`The weather in: ${weather.name}`}
              </h2>
            </div>
            <div className="info_wrapper-second">
              <h3 className="info_tempature">
                {kelvinToCelsia(weather.main.temp)}&deg;C
              </h3>
              <div className="info_weather">
                {`${weather.weather[0].main}`}
                <p>
                  {`${weather.weather[0].description}`}
                </p>
                <div>
                  <img
                    src={icon(weather.weather[0].icon)}
                    alt="icon weather"
                    className="info_img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
