import React from 'react';

export default function TableHeader() {
  return (
    <thead className="TableHeader">
      <tr>

      <th scope="col">ID</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Occupation</th>

      </tr>
    </thead>
  );
}