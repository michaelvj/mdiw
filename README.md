# MDIW - BACKUP Branch
## Remember to include developed CRUD functionality to the latest version in the development branch

	- Manipulare Database Information Workspace.
	- Utility to manipulate application configurations, run queries on multiple databases.

# MDIW - Manipulare Database Information Workspace
>Manipulare Database Information Workspace
>Utility to manipulate application configurations, run queries on multiple databases.
>Currently developing CRUD functionality


## CRUD

### Company - compconfig/list
	- Creating new company server configurations - Using bootstrap modal with preset host-user-pass-dbname based on the company name
        - Initialize a prompt with the company name desired.
        - Initialize a bootstrap modal with generated fields : host-user-pass-DBName
            - host: ip
            - User: Company name
            - pass: Password
            - DBName: {applicationname}_{Company name}.{applicationname}.nl
	- Showing company server information
	- Editing company server information
	- Deleting company server information / Selected fields of company server information
	- Executing queries on databases linked to selected company

### Database - querying
	- Confirmation of query execution
	- Executing queries on selected SQL Server database using PHP as back end language. 
	- Escaping the input before executing query

- Add proper routing functionality with named views. ```ui-router```
- Change sidebar to static top navbar.
- Update bootstrap functionality to ui-bootstrap.

Additional dependencies that are to be installed:
``` angular-modal-service ```
