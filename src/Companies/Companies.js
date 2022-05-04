import React, { useEffect, useState } from "react";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";
import Search from "../Common/Search";

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
  const [isLoading, setIsLoading] = useState(true);

  /** gets initial companies on mount */
  useEffect(function getInitialCompanies() {
  getAllCompanies();
  setIsLoading(false)
}, []);


/** gets company from api */
async function getAllCompanies(name) {
  let companies = await JoblyApi.getCompanies(name);
  setCompanies(companies);
}
  if(isLoading) return <h1>loading...</h1>

  return (
    <div>
      < Search search={getAllCompanies} />
        {companies.map((company) => 
          <CompanyCard key={company.handle} company={company} />
          )
        }
    </div>
  );
}

export default Companies;
