import React, { useState } from 'react';
import { ButtonCreate } from '../../UI/ButtonCreate/ButtonCreate';
import axios from 'axios';

export const CorrespondentRegister = () => {

  const [correspondentName, setCorrespondentName ] = useState('')

  const url = "https://localhost:44311/api/Corresponsal"

  const handelInput = (e) => {
  setCorrespondentName(e.target.value)
  }

  const createCorrespondent=async () => {
    await axios.post(url, {
      "_cor_nombre" : correspondentName
    })
    .then(res => {
      window.location.reload()
    })
    .catch(ex=>{
      console.log('ERROR '+ ex);
    })
  }

  return (
    <div className='registerContainer'>
      <p className='title'>Create correspondent</p>
      <div className="label-transition">
        <input type="text" autoComplete='off' name='correspondentName' placeholder="‎" onChange={(e) => handelInput(e)}/>
        <label>Correspondent name</label>
      </div>
      <ButtonCreate name='correspondent' method={createCorrespondent}/>    
    </div>
  )
}
