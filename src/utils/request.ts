import { useNavigate } from 'react-router-dom';

const parseJSON = (response: any) => {
  return response.json();
}

const catchError = (error: any) => {
  console.warn(error);
  return parseJSON(error.response)
    .then((parsedError: any) => { throw parsedError; });
}

const checkStatus = (response: any) => {
  if (response.status === 401) {
    const nav = useNavigate();
    nav('/not-found');
    return null;
  }

  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  throw new Error();
}

const request = (apiUrl: string, requestOptions={}): Promise<any> => {
  return fetch(apiUrl, requestOptions)
    .then(checkStatus)
    .then(parseJSON)
    .catch(catchError)
};

export default request;