import axios from "axios";
import React, { useEffect, useState } from "react";
import JoblyApi from "./api";
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

function Companies(){
  const [companies, setCompanies] =useState([]);

  useEffect(function getInitialCompanies() {
    async function getAllCompanies() {
      let companies = await JoblyApi.getCompanies();
      // console.log(companies);
      setCompanies(companies)
    }
    getAllCompanies()
  }, []);

  // console.log(companies);

  return (
    <div>
      {companies.map(company =>
        <Companies key={company.handle} company={company}/>
        )}
    </div>
  )

}

export default Companies;