import { Auth } from 'aws-amplify';

export const fetcher = async graphQLParams => {
  const session = await Auth.currentSession();
  const token = session.idToken.jwtToken;
  try {
    const response = await fetch(
      'https://m69ve4bl41.execute-api.us-east-1.amazonaws.com/dev/graphql',
      {
        method: 'post',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(graphQLParams),
      },
    );
    const body = await response.json();
    return body;
  } catch (err) {
    console.error(err);
  }
};
