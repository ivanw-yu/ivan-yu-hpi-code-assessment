
export function setAuthUser(user){
  console.log('setAuthUser', user)
  localStorage.setItem('user', JSON.stringify({...user}));
}

export function getAuthUser(){
  const user = localStorage.getItem('user');
  if(!user)
    return null;
  return JSON.parse(user);
}

export function setToken(token){
  localStorage.setItem('token', token);
};

export function getToken(){
  const user = getAuthUser();
  return user && user.token;
}

export function getAuthHeaders(){
  const token = getToken();
  return {token, "Content-Type":"application/json"};
}
