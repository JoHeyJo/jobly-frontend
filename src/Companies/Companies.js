import React, { useEffect, useState } from "react";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";

/** Shows list of companies
 *
 * state: [{companies}] , formData
 *
 * props: company, search
 *
 *
 * Companies ->  {CompanyCard, Search}
 */

function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(function getInitialCompanies() {
    async function getAllCompanies() {
      let companies = await JoblyApi.getCompanies();
      setCompanies(companies);
    }
    getAllCompanies();
  }, []);

  console.log(companies);

  return (
    <div>
      {companies.length ? (
        companies.map((company) => (
          <CompanyCard key={company.handle} company={company} />
        ))
      ) : (
        <p>No companies</p>
      )}
    </div>
  );
}

export default Companies;
