import React from 'react';
import { OfficeRegister } from '../../Layout/OfficeRegister/OfficeRegister';
import { CorrespondentRegister } from '../../Layout/CorrespondentRegister/CorrespondentRegister';
import { GiroRegister } from '../../Layout/GiroRegister/GiroRegister';
import { Table } from '../../Layout/Table/Table';
import './Home.css';

export default function Home() {
  return (
    <div className='principalContainer'>
      <div className='secondContainer'>
        <CorrespondentRegister/>
        <OfficeRegister/>
        <GiroRegister/>
      </div>
      <Table/>
    </div>
  )
}
