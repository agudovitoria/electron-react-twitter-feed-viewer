import { Button, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TwitterApi from '../api/TwitterApi';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

/**
 * Show user search input & button
 *
 * @component
 */
const UserSearch = () => {
  const classes = useStyles();
  const { loading, user, loadUser, checkSavedUser } = TwitterApi();
  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState(false);
  /** Returns if pressed key is 'Enter' */
  const isEnterKey = (keyCode) => keyCode === 13;
  /** Returns if input value is too long for Twitter username field */
  const inputCriteriaIsTooLong = (value) => value.length > 15;

  /**
   * Check if exists any saved user in local storage after reloads
   */
  useEffect(() => {
    checkSavedUser();
  }, []);

  /**
   * Set username in input value if exists in local storage after reloads
   */
  useEffect(() => {
    if (!!user && !!user.username) {
      setSearchValue(user.username);
    }
  }, [user]);

  /**
   * Input identifier for test purposes
   *
   * @type {{'data-testid': string}}
   */
  const inputProps = {
    'data-testid': 'twitter-user-search-input',
  };

  /**
   *Function executed when input value changes
   *
   * @param value - Text entered on input
   */
  const onChange = ({ target: { value } }) => {
    setError(inputCriteriaIsTooLong(value));

    setSearchValue(value);
  };

  /**
   * Call to TwitterApi facade when load user info
   */
  const searchUser = () => {
    loadUser(searchValue);
  };

  /**
   * Search user when button is clicked
   */
  const onClick = () => {
    searchUser();
  };

  /**
   * Executed when every key is pressed on text input.
   * If key is 'Enter' search user like if button were clicked
   * @param keyCode - Pressed key code. (Filters for only use enter key)
   */
  const onKeyPress = ({ keyCode }) => {
    if (isEnterKey(keyCode)) {
      searchUser();
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <TextField
          id="filled-error"
          color="secondary"
          error={error}
          inputProps={inputProps}
          onChange={onChange}
          onKeyDown={onKeyPress}
          disabled={loading}
          value={searchValue}
          label=""
          placeholder="Enter username..."
          helperText={error && 'Invalid username'}
        />
        <Button
          data-testid="twitter-user-search-button"
          variant="contained"
          color="secondary"
          disabled={loading || error || !searchValue}
          className={classes.button}
          startIcon={<SearchIcon />}
          onClick={onClick}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default UserSearch;
