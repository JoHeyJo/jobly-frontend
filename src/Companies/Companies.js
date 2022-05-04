import React, { useEffect, useState } from "react";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";
import Search from "../Common/Search";
import "./companyCard.css"

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
  const [searchTerm, setSearchTerm] = useState("");

  /** gets initial companies on mount */
  useEffect(
    function getInitialCompanies() {
      async function getAllCompanies(searchTerm) {
        let companies = await JoblyApi.getCompanies(searchTerm || undefined);
        setCompanies(companies);
      }
      getAllCompanies(searchTerm);
      setIsLoading(false);
    },
    [searchTerm]
  );

  function changeSearchTerm(term) {
    setSearchTerm(term);
  }
  /** gets company from api */

  if (isLoading) return <h1>loading...</h1>;

  return (
    <div>
      <Search changeSearchTerm={changeSearchTerm} searchTerm={searchTerm} />
      {companies.map((company) => (
        <div key={company.handle} className="CompanyList">
          <CompanyCard key={company.handle} company={company} />
        </div>
      ))}
    </div>
  );
}

export default Companies;
