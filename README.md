# Interview Scheduler

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
<!-- v16
delete babel
delete sass
install 
add .env = true
install sass
add env.test = true-->

<!-- Solved. Needed to create a role.
Step 1: Log into psql normally by running psql in terminal
Step 2: create a new user called development
create role development with login password 'development';
 Step 2.5: Check user development exists with \du Step 3: Create database table with owner development
CREATE DATABASE scheduler_development with owner development;
 Step 3.5: Confirm database has owner development with \l (<-lower L as in list) (edited)  -->

<!-- Tab 1: run test scheduler-api with NODE_ENV=test npm start
Tab2: log into terminal normally with psql
CREATE DATABASE scheduler_test with owner development;
enter database
\c scheduler_test
Tab3: curl http://localhost:8001/api/debug/reset.
  database reset
Tab 2: check tables are populated
\dt
SELECT * FROM days JOIN appointments ON appointments.day_id = days.id LEFT JOIN interviews ON interviews.appointment_id = appointments.id ORDER BY appointments.id;
Tab 3: npm start scheduler --> 