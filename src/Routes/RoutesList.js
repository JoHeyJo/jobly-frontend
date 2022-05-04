import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CompanyDetail from "../Companies/CompanyDetail";
import Homepage from "../Homepage";
import JobPage from "../Jobs/JobPage";
import Companies from "../Companies/Companies";

function RoutesList() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/companies/:handle" element={<CompanyDetail />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default RoutesList;
