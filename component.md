app: state=User | General Page wrapper + Router
UserContext.Provider(

    Routes:

        Login: state= form data                             | Updates user state

        Sign Up: state= form data                           | Updates user state


    Navigation: context=User                            | Not logged in: Login, SignUp| Logged in: Companies, Jobs, Profile, LogOut

        homepage: context=User                              | Link to login and signup or (if logged in) renders greeting

        Profile: context=User state=form data               | form to update User

        JobsPage: state= jobs + form data                   | renders searchable list of job components

        JobsList: prop=jobs                             | renders job cards

             Job: prop= job  context=User               | displays job card

        search: prop=(update formData function)         |

        Companies: state= companies + form data             | renders searchable list of company card components (link to CompanyDetail page)

        companyCardComponent: prop= company             | renders company card with link to company detail page

        search: prop=(update formData function)         |

        CompanyDetail: state=company                        | renders job components

        JobsList: prop=jobs                             | renders job cards

            Job: prop=job  context=User                 | displays job card

)

// add functions 
// delete user