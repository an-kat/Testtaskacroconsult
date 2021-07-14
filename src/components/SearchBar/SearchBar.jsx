import React, {
  useCallback,
  useState,
  useEffect
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import './SearchBar.scss';
import { actions, selectors } from '../../store';
import { actions as weatherActions } from '../../store/weater';

const debounce = (f, delay) => {
  let timerId

  return (...args) => {
    if(timerId) {
      clearTimeout(timerId)
    };

    timerId = setTimeout(() => {
      f(...args)
    }, delay);
  };
};

export const SearchBar = () => {
  const [city, setCity] = useState('');
  const [apliedCity, setApliedCity] = useState('');
  const dispatch = useDispatch();

  const error = useSelector(selectors.getError);

  const apply = useCallback(
    debounce(setApliedCity, 1000),
    []
  );

  useEffect(() => {
    dispatch(actions.infoFromServer(apliedCity))
  }, [apliedCity]);

  return (
    <>
      <div className="search">
        <div className="search_container">
          <label htmlFor="search" className={classNames('search_label', {
            "search_label-error": error && city.length > 0,
          })}>
            {error && city.length > 0 ? (
              'This city does not exist: '
            ) : (
              'Enter the city name :'
            )}
          </label>
          <input
            type="text"
            className={classNames("search_input", {
              "search_input-error": error && city.length > 0,
            })}
            value={city}
            placeholder="Enter city name"
            onChange={(event) => {
              apply(event.target.value);
              setCity(event.target.value);
              dispatch(weatherActions.setError(false));
            }}
          />
        </div>
      </div>
    </>
  );
};
