import React, { useEffect, useState } from "react";
import JobsList from "../Jobs/JobsList";
import JoblyApi from "../api";
import { useParams } from "react-router-dom";

/**
 * Gets company details and list of jobs from company
 * 
 * state: Company Details + Jobslist
 */
function CompanyDetail() {
  const [company, setCompany] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  const { handle } = useParams();

  useEffect(
    function getCompany() {
      async function getCompanyAxios() {
        const company = await JoblyApi.getCompany(handle);
        setCompany(company);
        setIsLoading(false)
      }
      getCompanyAxios();
    },
    [handle]
  );
  console.log(company);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h3>{company.name}</h3>
      <h3>{company.description}</h3>
      <JobsList jobs={company.jobs} />
    </div>
  );
}

export default CompanyDetail;