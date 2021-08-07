import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import axios from 'axios'

const Create_proftolio_form = () => {
  const [portname, setPortname] = useState();
  const [portdescription, setDescription] = useState();
  const customData = require('../../../my.json');

  function handleChangeName(e) {
    setPortname(e.target.value)
    }

   function handleChangeDescription(e) {
     setDescription(e.target.value)
      }

  const submit = e => {
    e.preventDefault();
    const create_data = {"name": portname, "description": portdescription}
    axios({
      url: 'http://localhost:3000/api/v1/portfolios/new',
      method: 'post',
      data: create_data,
      headers: {
        'ApiKey': customData["ApiKey"],
        'ApiSecret': customData["ApiSecret"]
      }
   }).then(res => {
            window.location.reload(false);
       })
   }

  return (
    <div>
      <form className="PortfolioCreatorForm">
        <div>
          <input className="PortfolioCreatorForm_name" type="text" name="name" required maxLength="25" onChange={handleChangeName} placeholder="Name"/>
        </div>
        <div>
          <input className="PortfolioCreatorForm_description" type="text" name="description" required maxLength="100" onChange={handleChangeDescription} placeholder="Description"/>
        </div>
        <div><button type="submit" className="SubPortfolioButton" onClick={submit}>Add</button></div>
      </form>
    </div>
  )
}

export default Create_proftolio_form
