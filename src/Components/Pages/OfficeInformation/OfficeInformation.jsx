import './OfficeInformation.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function OfficeInformation() {



  const [giroData,setgiroData] = useState([])
  let { giroId } = useParams()
  const url = `https://localhost:44311/api/Giros?_gir_oficina_id=`
  const urlDeleteGiro = `https://localhost:44311/api/Giros?_gir_giro_id=`
console.log(giroId);

  const getOffices = () => {
    axios.get(url + giroId)
    .then(res => {
      setgiroData(res.data)
      console.log(res.data);
    })
    .catch(ex=>{
      console.log('ERROR '+ ex);
    })
  }

  useEffect(()=>{
    getOffices()
  },[''])

  const deleteGiro = (giroId) => {
    console.log(giroId);
    axios.delete(urlDeleteGiro + giroId)
    .then(res => {
      window.location.reload()
    })
    .catch(ex=>{
      console.log('ERROR '+ ex);
    })
  }

  return (
    <main>
      <div>
        <Link to="/" className='redirect'>Volver</Link>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Office</th>
              <th>Giro ID</th>
              <th>Bill ID</th>
              <th>Sum of the digits of the field Giro ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {giroData.map((element) => 
            <tr>
              <td>{element._oficinas}</td>
              <td>{element._gir_giro_id}</td>
              <td>{element._gir_recibo}</td>
              <td>{element._suma_giro_id}</td>
              <td>
                <button type='submit' className='deleteOption' onClick={(e => deleteGiro(element._gir_giro_id) )}>Delete</button>
              </td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
  </main>
  )
}

