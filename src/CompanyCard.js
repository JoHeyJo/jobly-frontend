import React from "react";
import { Link } from "react-router-dom"

/** Creates Company card 
 * 
 * prop: company
 * 
 * Companies -> Company
*/

function CompanyCard({ company }){

  
  return (
      <Link>
      <h4>{company.name}</h4>
      <img src={company.logoUrl}></img>
      <p>{company.description}</p>
      </Link>
    )
}

export default CompanyCard;