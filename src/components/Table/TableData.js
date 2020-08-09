import React from 'react';
import Users from '../Users.json';

export default function TableData() {
  return (
    <tbody id="user-table">
      {/* generate for every user */}
      <tr>
        <th scope='row'>1</th>
        <td>Luba Pecheneva</td>
        <td>lp</td>
        <td>lp5786766@gmail.com</td>
        <td>Tech Support Specialist</td>
      </tr>
      <tr>
        <th scope='row'>2</th>
        <td>Anna Pecheneva</td>
        <td>ap</td>
        <td>ap@gmail.com</td>
        <td>Sous Chef</td>
      </tr>
    </tbody>
  );
}
