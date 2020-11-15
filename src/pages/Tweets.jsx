import React from 'react';
import { Grid } from '@material-ui/core';

import Loading from '../components/Loading';
import NotUser from '../components/NotUser';
import InvalidUserAccount from '../components/InvalidUserAccount';
import Profile from '../components/Profile';
import TweetList from '../components/TweetList';
import { useTwitterState } from '../providers/TwitterContextProvider';

const Tweets = () => {
  const { error, user, loading, tweets } = useTwitterState();

  return (
    <Grid container>
      {(() => {
        if (error) {
          return (
            <Grid item xs={12}>
              <InvalidUserAccount />
            </Grid>
          );
        }

        if (loading) {
          return (
            <Grid item xs={12}>
              <Loading />
            </Grid>
          );
        }

        if (user && user.name) {
          return (
            <>
              <Grid item xs={12}>
                <Profile user={user} />
              </Grid>
              <Grid item xs={12}>
                <TweetList tweets={tweets} />
              </Grid>
            </>
          );
        }

        return (
          <Grid item xs={12}>
            <NotUser />
          </Grid>
        );
      })()}
    </Grid>
  );
};

export default Tweets;
