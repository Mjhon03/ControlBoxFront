import React, { useEffect, useState } from 'react';
import './Table.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Table = () => {

  const [officeData,setofficeData] = useState([])

  const url = "https://localhost:44311/api/Oficinas"

  const getOffices = () => {
    axios.get(url)
    .then(res => {
      setofficeData(res.data)
      console.log(res);
    })
  }

  useEffect(()=>{
    getOffices()
  },[''])
  

  return (
    <table>
      <thead>
        <tr>
          <th>Correspondent</th>
          <th>Office</th>
          <th>Number of Giro</th>
        </tr>
      </thead>
      <tbody>
        {officeData.map((element) => 
          <tr>
            <td>
              <Link className='rediretLink' to={`/office/${element._ofi_oficina_id}`}>{element._ofi_nombre}</Link>
            </td>
            <td>{element._cor_nombre}</td>
            <td>{element._gir_giros}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
