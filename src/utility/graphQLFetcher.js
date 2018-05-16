import { Auth } from 'aws-amplify';

export default async function fetch(graphQLParams) {
  // const session = await Auth.currentSession();
  // const token = session.idToken.jwtToken;

  console.log('fetch!');

  return fetch(
    'https://m69ve4bl41.execute-api.us-east-1.amazonaws.com/dev/graphql',
    {
      method: 'post',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer eyJraWQiOiJUbnRcL3FhSHhKZzhPazhpRUwrWDlodVNxbUpvMkkxVE5rVWdkXC9HSE1yZWM9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI5NTFlNjFkYy0xYTQ3LTQ1NmMtOTg1YS04Y2JjNGZjYzc4NDEiLCJhdWQiOiI1bGhkNXZzYmQ2azluZ2NzcTZnYWdidHI2YyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjBkMmFlMjA4LTU5MmItMTFlOC05ZDY2LTBkMmQ3N2ZmOGQxNyIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTI2NDkwMjA3LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9xUkVOSXNRTzQiLCJjb2duaXRvOnVzZXJuYW1lIjoiYXR3b29kanciLCJleHAiOjE1MjY0OTM4MDcsImxvY2FsZSI6ImVuX1VTIiwiaWF0IjoxNTI2NDkwMjA3LCJlbWFpbCI6ImplcmVtaWFoLmF0d29vZEByYWl6bGFicy5jb20ifQ.nDjxsZNennRehabnGtJTkQFZZXs-7DoVRCsVNUD2QigmXuneh0Yix65pqGjbUb_YY07v1GyUCC94pMzaWUrCF937s2wclbISwfAtd47FL1fwHPODMM8shDFZ1H2mAP7DRu2fVOd4kTYX2pegSTPNjnEDCcyHRfYepyI0xCQQVSOYkub6gQWzEttAqXcJUsrpxnh3wmInBLZPT1nWOAUD90r4qu43x_jaOYP9eJ9nRreQgaaoDS4FlGBxAlopNT3jhw2if8U1-AoQhPlZ7iXb_Mb2QSB1wLbyLDoviOUxl7GG6ecs8E0caKZSTW7JgTjmabZHUza9N7ysd4FhVdhqWA`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(graphQLParams),
    },
  )
    .then(function(response) {
      return response.text();
    })
    .then(function(responseBody) {
      try {
        return JSON.parse(responseBody);
      } catch (error) {
        return responseBody;
      }
    });
}
