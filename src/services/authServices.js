const auth = async(path, body, method) => {
  const url = 'http://localhost:8888';
  
  const res = await fetch(`${url}/auth/${path}`,
    { method,
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json',
      },
    });

  const resJson = await res.json();
  
  if(resJson.error) {
    throw resJson.error;
  }
  return resJson;
};

export const logIn = (email, password) => auth(
  'login',
  { email, password },
  'POST',
);

export const signUp = (email, password, username, issues) => auth(
  'signup',
  { email, password, username, issues },
  'POST',
);
