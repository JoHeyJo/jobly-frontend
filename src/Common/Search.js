import { useState } from "react";
import React from "react";

/** Search function, returns company or job 
 * 
 *props: search (parent function)
 *
 * state: search term
 * 
 * { Companies, JobPage } -> Search
*/
function Search({ search }){

  const [searchTerm, setSearchTerm] = useState("")

  /** set searchTerm state */
  function handleChange(evt){
    setSearchTerm(evt.target.value)
  }

  /** submits search term, calls parent function */
 function handleSubmit(evt){
    evt.preventDefault();
    search(searchTerm);
  }


  return (

    <form onSubmit={handleSubmit}>
      <input name="searchTerm" value={searchTerm} onChange={handleChange}></input>
      <button>Search</button>
      <span style={{ padding: "5px" }} />
    </form>
  )
}


export default Search;