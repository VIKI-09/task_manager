import { authHeader } from './authHeader';

const API_URL = 'http://localhost:3000'

export const userService = {
    login,
    logout,
    register,
    getTaskList,
    addTask,
    getUsersEmails,
    getUserStatus,
    getById,
    update,
    getTaskList,
    delete: _delete
};

function login({email, password}) {
  console.log(email)
  console.log(password)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch(`${API_URL}/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}


function  addTask (title) {

   let user = localStorage.getItem('user');
   let ownerId = JSON.parse(user).id
   let taskData = {
     title,
     ownerId
    }
    console.log(taskData)
   const requestOptions = {
     method: 'POST',
     headers: authHeader(),
     body: JSON.stringify(taskData)
   };
   return fetch(`${API_URL}/tasks`, requestOptions).then(handleResponse)
 }


 function setSharedTask(){

 }

function getTaskList(){
  let user = localStorage.getItem('user');
     let ownerId = JSON.parse(user).id
   const requestOptions = {
     method: 'GET',
     headers: authHeader(),
     body: JSON.stringify(ownerId)
   };

   return fetch(`${API_URL}/tasks`, requestOptions).then(handleResponse)
}

function getUserStatus(){
   return localStorage.getItem('user') ? true : false
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getUsersEmails() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${API_URL}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${API_URL}/users/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
  console.log('SERVICE REGISTERING____________________')
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${API_URL}/users/register`, requestOptions).then(handleResponse);

}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${API_URL}/users/${user.id}`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${API_URL}/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
