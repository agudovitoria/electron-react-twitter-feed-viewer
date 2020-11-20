import React from 'react';
import { Grid } from '@material-ui/core';

import Loading from '../components/Loading';
import NotUser from '../components/NotUser';
import Profile from '../components/Profile';
import TweetList from '../components/TweetList';
import Error from '../components/Error';
import { useTwitterState } from '../providers/TwitterContextProvider';

/**
 * Show user tweets and messages if any error
 *
 * @component
 * @category Pages
 * @param {Object} error - Error info if has any
 * @param {Object} user - User info for profile component
 * @param {boolean} loading - Application loading state
 * @param {array} tweets - User tweets
 * @see {@link InvalidUserAccount}
 * @see {@link Loading}
 * @see {@link Profile}
 * @see {@link NotUser}
 * @see {@link TweetList}
 * @see {@link Profile}
 */
const Tweets = () => {
  const { error, user, loading, tweets } = useTwitterState();

  return (
    <Grid container>
      {(() => {
        if (error) {
          return (
            <Grid item xs={12}>
              <Error
                detail={error.detail}
                parameter={error.parameter}
                resourceType={error.resource_type}
                title={error.title}
                type={error.type}
                value={error.value}
              />
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
