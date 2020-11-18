import { Button, Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
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

const UserSearch = () => {
  const classes = useStyles();
  const { loading, loadUser } = TwitterApi();
  const [searchValue, setSearchValue] = useState('');
  const isEnterKey = (keyCode) => keyCode === 13;

  const inputProps = {
    'data-testid': 'twitter-user-search-input',
  };

  const onChange = ({ target: { value } }) => {
    setSearchValue(value);
  };

  const searchUser = () => {
    loadUser(searchValue);
  };

  const onClick = () => {
    searchUser();
  };

  const onKeyPress = ({ keyCode }) => {
    if (isEnterKey(keyCode)) {
      searchUser();
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Input
          inputProps={inputProps}
          placeholder="Enter username..."
          onChange={onChange}
          onKeyDown={onKeyPress}
          disabled={loading}
          color="secondary"
        />
        <Button
          data-testid="twitter-user-search-button"
          variant="contained"
          color="secondary"
          disabled={loading}
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
