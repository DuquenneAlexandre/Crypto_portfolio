import React, { useState, useEffect } from 'react'
import Create_portfolio from './Create_portfolio'
import { useLocation, Link } from 'react-router-dom'
import Navigation from './Navigation'
import Get_all_portfolios from './Get_all_portfolios'


const Create_proftolio_form = () => {
  var url = new URL(window.location.href);
  var params = new URLSearchParams(url.search);

  return (
    <div>
      <Navigation />
    <form >
        <label>
          name:
          <input type="text" name="name" required maxLength="25" />
        </label>
        <label>
          description:
          <input type="text" name="description" required maxLength="100"/>
        </label>
        <button type="submit">Create</button>
      </form>
      <Create_portfolio createparams={params}/>
    </div>
  )
}

export default Create_proftolio_form
