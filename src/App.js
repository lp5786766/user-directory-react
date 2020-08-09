import React from 'react';
import Filter from './components/Filter'
import Table from './components/Table/Table';
import Container from './components/Container';
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <div className='App'>
      <Container>
        <h1>User Directory</h1>
        <Filter />
        <Table />
      </Container>
    </div>
  );
}
