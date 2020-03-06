let token;
export const post = (url, body) => request(url, 'POST', body);
export const get = url => request(url, 'GET');


export const request = (url, method, body) => {
  fetch(url, {
    method,
    headers: { 
      'content-type': 'application/json',
      'authorization': `Bearer ${token}`,
    },
    body: body ? JSON.stringify(body) : null,
  })
    .then(res => {
      if(res.status !== 200) throw res.error;
      res.json();
    });
  
};
