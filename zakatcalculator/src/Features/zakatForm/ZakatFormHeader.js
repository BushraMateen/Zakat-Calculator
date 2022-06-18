import React from 'react';
import ProductCategoryRow from './ZakatFormContent';

export default function ProductTable() {

  return (
    <div className='table'>
      <table>
        <thead>
          <tr>
            <th className='center-text'>Line</th>
            <th className='center-text'>Line item</th>
            <th className='center-text'>Amtval</th>
            <th className='center-text'>ZakatRate</th>
            <th className='center-text'>ZakatDue</th>
          </tr>
        </thead>
        <tbody>
          <ProductCategoryRow
          />
        </tbody>
      </table>
    </div>
  );

}