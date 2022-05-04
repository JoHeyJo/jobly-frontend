app: no props or state | General Page wrapper + Router

    homepage:

    JobsPage: state= jobs + form data                   | renders searchable list of job components

        JobsList: prop=jobs                             | renders job cards

             Job: prop= job                             | displays job card

        search: prop=(update formData function)         |

    Companies: state= companies + form data             | renders searchable list of company card components (link to CompanyDetail page)

        companyCardComponent: prop= company             | renders company card with link to company detail page

        search: prop=(update formData function)         |

    CompanyDetail: state=company                        | renders job components

        JobsList: prop=jobs                             | renders job cards

            Job: prop=job                               | displays job card


// return in empty search bar for companies/jobs
// move function inside useEffect companies/jobs
