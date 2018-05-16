import { Auth } from 'aws-amplify';

export const fetcher = async graphQLParams => {
  const session = await Auth.currentSession();
  const token = session.idToken.jwtToken;

  try {
    const response = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(graphQLParams),
    });

    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
