import { authHeader } from '../_helpers';
import { history } from '../_helpers';
export const userService = {
    login,
   logout,
    register,
    getuserdetails
 
};

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        credentials:'include',
        mode:'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch('http://localhost:3001/authenticate', requestOptions)
         
        .then((response) => response.json()).then((responseJson) => {
        console.log(responseJson);
    return responseJson;
});
}
function register(user) {
    const requestOptions = {
        method: 'POST',
       // credentials:'include',
       // mod:'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch('http://localhost:3001/register', requestOptions).then(handleResponse);
}

function getuserdetails()
{
    fetch('http://localhost:3001/getuserdetails').then((response) => response.json()).then((responseJson) => {
       console.log(responseJson);
       return responseJson; 
}
)
}
function logout() {
    history.push('/login');
}

function handleResponse(response) 
{
    if (!response.ok) { 
        return Promise.reject(response.statusText);
    }

    return response.json();
}