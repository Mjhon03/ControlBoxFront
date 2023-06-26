import React, { useEffect, useState } from 'react';
import { ButtonCreate } from '../../UI/ButtonCreate/ButtonCreate';
import axios from 'axios';

export const OfficeRegister = () => {

  const [correspondentData, setCorrespondentData] = useState([])
  const [officeName, setOfficeName ] = useState('')
  const [correspondentName, setCorrespondentName ] = useState('')

  const urlGetCorrespondent = "https://localhost:44311/api/Corresponsal"
  const urlCreateOffice = "https://localhost:44311/api/Oficinas"

  const getCorrespondents=async () => {
    await axios.get(urlGetCorrespondent)
    .then(res => {
      setCorrespondentData(res.data)
    })
    .catch(ex=>{
      console.log('ERROR '+ ex);
    })
  }

  useEffect(()=>{
    getCorrespondents()
  },[''])
  
  const handelInput = (e) => {
    setOfficeName(e.target.value)
    }
  
    const createOffice=async () => {
      await axios.post(urlCreateOffice, {
        "_ofi_corresponsal_id" : correspondentName,
        "_ofi_nombre": officeName,
      })
      .then(res => {
        setOfficeName('')
        window.location.reload()
      })
      .catch(ex=>{
        console.log('ERROR '+ ex);
      })
    }

  return (
    <div className='registerContainer'>
      <p className='title'>Create office</p>
      <div className="label-transition">
        <label>Correspondent</label>
        <select value={correspondentName} onChange={e => setCorrespondentName(e.target.value)}>
          <option selected>Correspondent</option>
          {correspondentData.map((element) => 
            <option value={element._cor_corresponsal_id}>{element._cor_nombre}</option>
          )}
        </select>
      </div>
      <div className="label-transition">
        <input type="text" autoComplete='off' name='officeName' placeholder="‎" onChange={(e) => handelInput(e)} value={officeName}/>
        <label>Office name</label>
      </div>
      <ButtonCreate name='office' method={createOffice}/>    
    </div>
  )
}
