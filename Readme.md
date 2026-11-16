Steps:

1. run deployment.ps1
2. Enter into the database & add data.
    1. kubectl exec -it database-0 -- psql -U postgres
    2. \c toartistdb
    3. add example data / tables via:
"
CREATE TABLE Projects (
    projectDeadline DATE,
    projectName VARCHAR(100) PRIMARY KEY
);

CREATE TABLE Users (
    Passwrd VARCHAR(100) NOT NULL,
    Username VARCHAR(100) PRIMARY KEY
);

INSERT INTO Projects (projectDeadline, projectName) VALUES ('2026-01-03', 'testProject3');

INSERT INTO Users (Passwrd, Username) VALUES ('password', 'username');
"
3. feel free to try out the application, though be ware of the several bugs present.


