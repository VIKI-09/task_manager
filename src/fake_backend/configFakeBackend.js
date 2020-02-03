import { SubmissionError } from 'redux-form'

// array in local storage for registered users
let users = JSON.parse(localStorage.getItem('users')) || [];

let tasks = JSON.parse(localStorage.getItem('tasks')) || []

function generateId(){
  const id = `f${(~~(Math.random()*1e8)).toString(16)}`;
  return id
}

const getEmails = users => {
  console.log(users)
  let emails = []
  users.map(user => emails.push(user.email))
    return emails
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


                        let emails = getEmails()
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(emails))});
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


                if (url.endsWith('/tasks') && opts.method === 'POST'){
                  if(opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token'){
                      let taskData = JSON.parse(opts.body)
                      let newTask = {
                              title: taskData.title,
                              id: generateId(),
                              completed: false,
                              editMode: false,
                              ownerId: taskData.ownerId,
                              token: 'fake-jwt-token'
                            };
                            console.log(newTask)
                      tasks.push(newTask)
                      localStorage.setItem('tasks', JSON.stringify(tasks));

                    resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(newTask))});

                  } else {
                    reject('Unauthorised');
                  }

                  return;

                }



                if(url.endsWith('/tasks') && opts.method === 'GET') {
                  if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token'){
                        let userId = JSON.parse(opts.body);


                        // let urlParts = url.split('/');
                        // let id = parseInt(urlParts[urlParts.length - 1]);
                        let userTasks = tasks.filter(task => { return task.ownerId === userId; });
                        let response = userTasks[0] ? userTasks : null
                        console.log(response);
                    resolve({ok: true, text: () => Promise.resolve(JSON.stringify(response))})
                  } else {
                    reject('Unauthorised')
                  }

                  return;

                }

                  if(url.match(/\/tasks\/complete\/.+$/) && opts.method === 'PUT'){
                      if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token'){
                        let urlParts = url.split('/');
                        let id = urlParts[urlParts.length - 1];
                        let editIndex = tasks.findIndex( (task) => task.id === id)
                        tasks[editIndex].completed = !tasks[editIndex].completed;
                        localStorage.setItem('tasks', JSON.stringify(tasks));
                          resolve({ ok: true, text: () => Promise.resolve() });
                      } else {
                            reject('Unauthorised');
                      }
                      return
                  }
                  if(url.match(/\/tasks\/edit\/.+$/) && opts.method === 'PUT'){
                      if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token'){
                        let urlParts = url.split('/');
                        let id = urlParts[urlParts.length - 1];
                        let title = JSON.parse(opts.body);
                        console.log(`${title} in backend`)
                        let editIndex = tasks.findIndex( (task) => task.id === id)
                        tasks[editIndex].title = title;
                        localStorage.setItem('tasks', JSON.stringify(tasks));
                          resolve({ ok: true, text: () => Promise.resolve() });
                      } else {
                            reject('Unauthorised');
                      }
                      return
                  }


                // delete user
                if (url.match(/\/tasks\/delete\/.+$/) && opts.method === 'DELETE') {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        // find user by id in users array
                        let urlParts = url.split('/');
                        console.log(urlParts)
                        let id = urlParts[urlParts.length - 1];
                          console.log(id)
                        for (let i = 0; i < tasks.length; i++) {
                            let task = tasks[i];
                            if (task.id === id) {
                                // delete user
                                tasks.splice(i, 1);
                                localStorage.setItem('tasks', JSON.stringify(tasks));
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

            }, 300);
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
