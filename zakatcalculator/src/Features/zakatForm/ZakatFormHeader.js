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
            <th className='center-text'>Amtval</th>
            <th className='center-text'>ZakatRate</th>
            <th className='center-text'>ZakatDue</th>
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