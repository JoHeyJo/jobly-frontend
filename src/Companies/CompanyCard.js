import React from "react";
import { Link } from "react-router-dom";
import "./companyCard.css";

/** Creates Company card
 *
 * prop: company
 *
 * Companies -> Company
 */

function CompanyCard({ company }) {
  console.log(company);
  return (
    <Link className="link" to={`/companies/${company.handle}`}>
      <div className="CompanyCard">
        <h4 className="link">{company.name}</h4>
        <img src={company.logoUrl} alt=""></img>
        <p className="link">{company.description}</p>
        <span style={{ padding: "5px" }} />
      </div>
    </Link>
  );
}

export default CompanyCard;
