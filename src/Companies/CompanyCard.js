import React from "react";
import { Link } from "react-router-dom";

/** Creates Company card
 *
 * prop: company
 *
 * Companies -> Company
 */

function CompanyCard({ company }) {
  console.log(company);
  return (
    <Link to={`/companies/${company.handle}`}>
      <h4>{company.name}</h4>
      <img src={company.logoUrl} alt=""></img>
      <p>{company.description}</p>
      <span style={{ padding: "5px" }} />
    </Link>
  );
}

export default CompanyCard;
