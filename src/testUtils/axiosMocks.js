import axios from 'axios';

const mockAxiosGetResolve = (response) => {
  axios.create = jest.fn().mockReturnValue({
    get: jest.fn().mockImplementationOnce(() => Promise.resolve(response)),
  });

  axios.get.mockImplementationOnce(() => Promise.resolve(response));
};

export default { mockAxiosGetResolve };
