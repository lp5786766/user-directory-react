import React from 'react';
import './App.css';
import Users from './components/Users.json';
import Table from './components/Table/Table';
import Container from './components/Container';
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <div className='App'>
      <Container>
        <h1>User Directory</h1>
        <Table />
      </Container>
    </div>
  );
}
