import React from 'react';
import TableHeader from './TableHeader';
import TableData from './TableData';


export default function Table() {
  return (
    <div className="table-responsive">
         <table className='table'>
            <TableHeader />
            <TableData />
           
      
    </table>
    </div>
   
  );
}
