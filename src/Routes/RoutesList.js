import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CompanyDetail from "../Companies/CompanyDetail";
import Homepage from "../Homepage/Homepage";
import JobPage from "../Jobs/JobPage";
import Companies from "../Companies/Companies";
import SignUp from "../Auth/SignUp";
import SignIn from "../Auth/SignIn";
import ProfileForm from "../Profile/ProfileForm";
import Applied from "../Applied";

/** Routes for logged in and logged out users
 *
 * props: signUp, signIn, user
 */
function RoutesList({ signUp, signIn, user, isLoading }) {
  return (
    <div>
      {!isLoading && (
        <Routes>
          {!user && (
            <>
              <Route path="/signup" element={<SignUp signUp={signUp} />} />
              <Route path="/signin" element={<SignIn signIn={signIn} />} />
            </>
          )}
          <Route path="/" element={<Homepage />} />
          {user && (
            <>
              <Route path="/companies" element={<Companies />} />
              <Route path="/jobs" element={<JobPage />} />
              <Route path="/companies/:handle" element={<CompanyDetail />} />
              <Route path="/profileform" element={<ProfileForm />} />
              <Route path="/appliedjobs" element={<Applied />} />
            </>
          )}

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </div>
  );
}

export default RoutesList;
