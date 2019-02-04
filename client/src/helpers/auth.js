export function setToken(token){
  localStorage.setItem('token', token);
};

export function getToken(token){
  return localStorage.getItem(token);
}

export function setAuthUser(user){
  localStorage.setItem('user', JSON.stringify(user));
}

export function getAuthUser(){
  return localStorage.getItem('user');
}
