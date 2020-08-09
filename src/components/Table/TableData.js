import React from 'react';
import Users from '../Users.json';

export default function TableData() {
  console.log(Users);
  return (
    <tbody className='user-table'>
      {Users.map((user) => (
        <tr key={user.id}>
          <th scope='row'>{user.id}</th>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.occupation}</td>
        </tr>
      ))}
    </tbody>
  );
}
