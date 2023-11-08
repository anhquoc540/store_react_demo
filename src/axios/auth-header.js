
// const getTokenFromLocalStorage = localStorage.getItem('access_token')
//   ? JSON.parse(localStorage.getItem('access_token'))
//   : null;
console.log(JSON.parse(localStorage.getItem('access_token')));
export const config = {
  
  headers: {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem('access_token'))}`,
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    'ngrok-skip-browser-warning': '69420'

  },

};