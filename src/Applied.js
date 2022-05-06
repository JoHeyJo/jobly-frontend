import React, { useEffect, useState, useContext } from "react";
import UserContext from "./Auth/UserContext";
import JobsList from "./Jobs/JobsList";
import JoblyApi from "./api";


/** list of applied to jobs
 * 
 * state: jobs, isLoading
 * 
 * context: currentUser
 */
function Applied(){

  const [jobs, setJobs] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser } = useContext(UserContext);

  /** get jobs from db, filter out jobs that match currentUser job ids */
  useEffect(
    function getJobs() {
      async function getJobsAxios() {
        try {
          const jobs = await JoblyApi.getJobs();
          const appliedJobs = jobs.filter(job => 
            currentUser.applications.includes(job.id)
            )
          setJobs(appliedJobs);
          setIsLoading(false);
        } catch (err) {
        }
      }
      getJobsAxios();
    },
    []
  );

  if(isLoading) return <h1>loading...</h1>

  return(
    <div style={{marginTop:"1rem"}}>
      <JobsList jobs={jobs}/>
    </div>
  )
}

export default Applied;