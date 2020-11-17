import { Input, Button, CircularProgress } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { orange } from '@material-ui/core/colors';
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
  buttonProgress: {
    color: orange[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

const UserSearch = () => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState('');
  const { loading, loadUser } = TwitterApi();
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
          color="secondary"
        />
        <Button
          data-testid="twitter-user-search-button"
          variant="contained"
          color="secondary"
          disabled={loading}
          className={classes.button}
          startIcon={<SearchIcon />}
          onClick={searchUser}
        >
          Search
        </Button>
        {loading && (
          <CircularProgress
            data-testid="twitter-user-search-cirtular-progress"
            size={24}
            className={classes.buttonProgress}
          />
        )}
      </div>
    </div>
  );
};

export default UserSearch;
