import { post, get } from './request';

const url = 'http://localhost:8888';

export const incrementScore = (candidate, issue) => {
  return post(`${url}/api/v1/scores`, { candidate, issue })
    .catch(console.error)
};

export const getUserScores = userId => {
  return get(`${url}/api/v1/scores/${userId}`)
    .catch(console.error)
};
