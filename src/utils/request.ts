function parseJSON(response: any) {
  return response.json();
}

function catchError(error: any) {
  console.warn(error);
  return parseJSON(error.response)
    .then((parsedError: any) => { throw parsedError; });
}

const request = (apiUrl: string, requestOptions={}) => {
  return fetch(apiUrl, requestOptions)
    .then(parseJSON)
    .catch(catchError)
};

export default request;