import React, { useEffect, useState } from 'react';
import { ButtonCreate } from '../../UI/ButtonCreate/ButtonCreate';
import axios from 'axios';

export const GiroRegister = () => {

  const [officeData, setOfficeData] = useState([])
  const [giroNumber, setGiroNumber ] = useState()
  const [officeName, setofficeName ] = useState('')

  const urlGetOffice = "https://localhost:44311/Oficinas/GetAllOficinas"
  const urlCreateOffice = "https://localhost:44311/api/Giros"

  const getOffices=async () => {
    await axios.get(urlGetOffice)
    .then(res => {
      setOfficeData(res.data)
    })
    .catch(ex=>{
      console.log('ERROR '+ ex);
    })
  }

  useEffect(()=>{
    getOffices()
  },[''])
  
  const handelInput = (e) => {
    setGiroNumber(e.target.value)
    }
  
    const createGiro=async () => {
      await axios.post(urlCreateOffice, {
        "_gir_oficina_id" : officeName,
        "_gir_recibo": giroNumber,
      })
      .then(res => {
        setGiroNumber('')
        window.location.reload()
      })
      .catch(ex=>{
        console.log('ERROR '+ ex);
      })
    }


  return (
    <div className='registerContainer'>
      <p className='title'>Create giro</p>
      <div className="label-transition">
        <label>Office</label>
        <select name="office" onChange={e => setofficeName(e.target.value)}>
          <option disabled selected>Office</option>
          {officeData.map((element) => 
            <option value={element._ofi_oficina_id} >{element._ofi_nombre}</option>
          )}
        </select>
      </div>
      <div className="label-transition">
        <input type="number" autoComplete='off' name='ReceiptNumber' placeholder="‎" onChange={(e) => handelInput(e)} value={giroNumber} />
        <label>Receipt number</label>
      </div>
      <ButtonCreate name='giro' method={createGiro} />    
    </div>
  )
}