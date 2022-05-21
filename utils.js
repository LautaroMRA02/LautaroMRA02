export const parseRequestUrl = () => {
    const url = document.location.hash.toLowerCase();
    const request = url.split('/');
    // eslint-disable-next-line no-console
    console.log(request);
    return {
      resource: request[1],
      id: request[2],
      action: request[3],
    };
  };