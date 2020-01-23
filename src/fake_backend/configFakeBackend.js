import { SubmissionError } from 'redux-form'

// array in local storage for registered users
let users = JSON.parse(localStorage.getItem('users')) || [];
function generateId(){
  const id = `f${(~~(Math.random()*1e8)).toString(16)}`;
  return id
}


export function configureFakeBackend() {
  console.log('CONFIG________BACKEND')
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {

                // authenticate
                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    // get parameters from post request
                    let params = JSON.parse(opts.body);

                    // find if any user matches login credentials
                    let filteredUsers = users.filter(user => {
                        return user.email === params.email
                         // && user.password === params.password;
                    });

                    if (filteredUsers.length) {
                        // if login details are valid return user details and fake jwt token
                        let user = filteredUsers[0];
                        if(user.password === params.password){
                          let responseJson = {
                              id: user.id,
                              email: user.email,
                              firstName: user.firstName,
                              lastName: user.lastName,
                              taskList: user.taskList,
                              token: 'fake-jwt-token'
                          };
                          resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                        } else{
                          reject(new SubmissionError({password:'Wrong password',  _error:'Sign in failed!'}));
                        }

                    } else {
                        reject(new SubmissionError({email:'User does not exist',  _error:'Sign in failed!'}));
                    }

                    return;
                }

                // get users
                if (url.endsWith('/users') && opts.method === 'GET') {
                    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(users))});
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                }

                // get user by id
                if (url.match(/\/users\/\d+$/) && opts.method === 'GET') {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        // find user by id in users array
                        let urlParts = url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        let matchedUsers = users.filter(user => { return user.id === id; });
                        let user = matchedUsers.length ? matchedUsers[0] : null;

                        // respond 200 OK with user
                        resolve({ ok: true, text: () => JSON.stringify(user)});
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                }

                // register user
                if (url.endsWith('/users/register') && opts.method === 'POST') {

                  console.log('-----------------ADDING----NEW-----USER')
                    // get new user object from post body
                    let newUser = JSON.parse(opts.body);

                    // validation
                    let duplicateUser = users.filter(user => { return user.email === newUser.email; }).length;
                    if (duplicateUser) {
                        reject(new SubmissionError({email:'User email "' + newUser.email + '" is already taken', _error:'sign up failed'}));
                        return;
                    }

                    // save new user
                    newUser.id = generateId();
                    newUser.taskList = [];
                    users.push(newUser);
                    localStorage.setItem('users', JSON.stringify(users));

                    // respond 200 OK
                    resolve({ ok: true, text: () => Promise.resolve() });

                    return;
                }

                // delete user
                if (url.match(/\/users\/\d+$/) && opts.method === 'DELETE') {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        // find user by id in users array
                        let urlParts = url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        for (let i = 0; i < users.length; i++) {
                            let user = users[i];
                            if (user.id === id) {
                                // delete user
                                users.splice(i, 1);
                                localStorage.setItem('users', JSON.stringify(users));
                                break;
                            }
                        }

                        // respond 200 OK
                        resolve({ ok: true, text: () => Promise.resolve() });
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}


// if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
//     // get parameters from post request
//     let params = JSON.parse(opts.body);
//
//     // find if any user matches login credentials
//     let filteredUsers = users.filter(user => {
//         return user.email === params.email && user.password === params.password;
//     });
//
//     if (filteredUsers.length) {
//         // if login details are valid return user details and fake jwt token
//         let user = filteredUsers[0];
//         let responseJson = {
//             id: user.id,
//             email: user.email,
//             firstName: user.firstName,
//             lastName: user.lastName,
//             taskList: user.taskList,
//             token: 'fake-jwt-token'
//         };
//         resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
//     } else {
//         // else return error
//         reject(new SubmissionError({email:'Username or password is incorrect', password: 'Username or password is incorrect', _error:'sign up failed'}));
//     }
//
//     return;
// }
