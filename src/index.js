import './index.css';
import {getUsers} from './api/userAPI';

// poupulate table of users via API call

getUsers().then(result => {
  let userBody = "";

  result.forEach(user => {
    usersBody += `<tr
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.Id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      </tr>`
  });

  global.document.getElementById('users').innerHTML = usersBody;
});
