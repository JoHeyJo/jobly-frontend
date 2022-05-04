import { useState } from "react";
import React from "react";
import "./search.css"

/** Search function, returns company or job
 *
 *props: search (parent function)
 *
 * state: search term
 *
 * { Companies, JobPage } -> Search
 */
function Search({ changeSearchTerm, searchTerm }) {
  /** set searchTerm state */

  /** submits search term, calls parent function */
  function handleChange(evt) {
    changeSearchTerm(evt.target.value);
  }
  return (
    <form className="Search">
      <label forhtml="searchTerm">Search: </label>
      <input
        name="searchTerm"
        value={searchTerm}
        onChange={handleChange}
      ></input>

      <span style={{ padding: "5px" }} />
    </form>
  );
}

export default Search;
