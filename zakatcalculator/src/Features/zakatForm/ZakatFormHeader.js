import React from 'react';
import ZakatFormContent from './ZakatFormContent';

export default function ZakatFormHeader() {

  return (
    <div className='table'>
      <table>
        <thead>
          <tr>
            <th className='center-text'>Line</th>
            <th className='center-text'>Line item</th>
            <th className='center-text'>Amt</th>
            <th className='center-text'>Zakat Rate</th>
            <th className='center-text'>Zakat Due</th>
          </tr>
        </thead>
        <tbody>
          <ZakatFormContent
          />
        </tbody>
      </table>
    </div>
  );

}