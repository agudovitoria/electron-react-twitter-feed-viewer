import { render } from '@testing-library/react';
import React from 'react';
import {
  getProfileAvatar,
  getProfileCreatedDate,
  getProfileLocation,
  getProfileName,
  getProfileUserName,
} from '../../testUtils/selectors';
import Profile from '../Profile';

describe('It should render profile component', () => {
  test('with valid avatar', () => {
    const user = {
      created_at: new Date().toISOString(),
      description: 'Fake user description',
      id: 'f-a-k-e-u-s-e-r-i-d',
      location: 'Fake location',
      name: 'Fake Name',
      profile_image_url: 'http://fakeImageUrl.com',
      username: 'FakeUserName',
      verified: false,
    };

    render(<Profile user={user} />);

    const element = getProfileAvatar(user.username);
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('src', user.profile_image_url);

    expect(getProfileName(user.name)).toBeInTheDocument();
    expect(getProfileUserName(user.username)).toBeInTheDocument();
    expect(getProfileLocation(user.location)).toBeInTheDocument();
    expect(getProfileCreatedDate(user.created_at)).toBeInTheDocument();
  });
});
