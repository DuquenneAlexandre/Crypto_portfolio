import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const Create_portfolio = (props) => {
  const { createparams } = props;
  const name = createparams.get('name');
  const description = createparams.get('description');
  const create_data = {"name":name, "description":description}

function check_string(str) {
  if (str != null && str.length != 0 && str != " ")
    return true
  else
    return false
}

if (check_string(create_data["name"]) === true && check_string(create_data["description"]) === true){
  useEffect(() => {
    axios.post('http://localhost:3000/api/v1/portfolios/new', create_data).then(res => {
         console.log(res.data)
    })
    }, []);
}

  return (
    <div></div>
  )
}

export default Create_portfolio
