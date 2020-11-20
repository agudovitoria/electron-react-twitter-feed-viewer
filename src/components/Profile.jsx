import { Box, Card, CardContent, Grid, Typography, Icon, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Moment from 'react-moment';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  card: {
    padding: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  username: {
    padding: theme.spacing(2),
  },
}));

/**
 * Show selected user info
 *
 * @component
 * @param {Object} user - User info
 */
const Profile = ({ user }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Grid container spacing={2} direction="row" justify="flex-start" alignItems="center">
            <Grid container direction="column" justify="center" alignItems="flex-start">
              <Grid container direction="row" justify="flex-start" alignItems="center">
                <Grid container direction="column" justify="center" alignItems="flex-start">
                  <Grid container direction="row" justify="flex-start" alignItems="center">
                    <Grid item xs={2} id="avatar">
                      <Avatar
                        className={classes.avatar}
                        alt={user.username}
                        src={user.profile_image_url}
                      />
                    </Grid>
                    <Grid item xs={4} id="name-username">
                      <Grid container direction="row" justify="flex-start" alignItems="center">
                        <Grid item>
                          <Icon className="fas fa-user" color="secondary" fontSize="small" />
                        </Grid>
                        <Grid item>
                          <Typography>{user.name}</Typography>
                        </Grid>
                      </Grid>
                      <Grid container direction="row" justify="flex-start" alignItems="center">
                        <Grid item>
                          <Icon className="fab fa-twitter" color="secondary" fontSize="small" />
                        </Grid>
                        <Grid item>
                          <Typography>{`@${user.username}`}</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={6} id="location-created">
                      <Grid container direction="column" justify="center" alignItems="center">
                        <Grid container direction="row" justify="flex-start" alignItems="center">
                          <Grid item>
                            <Icon
                              className="fas fa-map-marker"
                              color="secondary"
                              fontSize="small"
                            />
                          </Grid>
                          <Grid item>
                            <Typography>{user.location}</Typography>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid container direction="row" justify="flex-start" alignItems="center">
                        <Grid item>
                          <Icon
                            className="far fa-calendar-plus"
                            color="secondary"
                            fontSize="small"
                          />
                        </Grid>
                        <Grid item>
                          <Typography>
                            <Moment format="YYYY/MM/DD">{user.created_at}</Moment>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container direction="row" justify="flex-start" alignItems="center">
                <Grid item>
                  <Typography variant="caption" color="textSecondary">
                    {user.description}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

Profile.propTypes = {
  /** User info */
  user: PropTypes.shape({
    /** User created date */
    created_at: PropTypes.string,
    /** User description */
    description: PropTypes.string,
    /** User identifier */
    id: PropTypes.string,
    /** User location */
    location: PropTypes.string,
    /** User name */
    name: PropTypes.string,
    /** User profile image url */
    profile_image_url: PropTypes.string,
    /** User username */
    username: PropTypes.string,
    /** User verified state */
    verified: PropTypes.bool,
  }).isRequired,
};

export default Profile;
