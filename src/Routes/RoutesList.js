import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CompanyDetail from "../Companies/CompanyDetail";
import Homepage from "../Homepage";
import JobPage from "../Jobs/JobPage";
import Companies from "../Companies/Companies";
import SignUp from "../Auth/SignUp";
import SignIn from "../Auth/SignIn";

function RoutesList({ signUp, signIn }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/companies/:handle" element={<CompanyDetail />} />
        <Route path="/signup" element={<SignUp signUp={signUp} />} />
        <Route path="/signin" element={<SignIn signIn={signIn} />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default RoutesList;
