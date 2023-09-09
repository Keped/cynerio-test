# Ziv's Test for Cynerio
## Running
Run `npm run start` after `npm i` inside both `/backend` and `/frontend` (in that order).
## Solution overview
The frontend is implemented in React.js using functional components, hooks and Redux Toolkit for the search and users list.
The backend is a barebones NestJS app, both are written in typescript. 
## TODOs - what I didn't have time for
* The GUI does not look as nice as the spec.
* (Almost) no tests were written. Ideally api calls should have been covered with nock. all interactions should have been covered by tests.
* The search function memoization should have been extracted to a hook and should not happen inside the component itself, for better performance.
* Data refreshing after adding user should have been extracted to a thunk and not implemented inside the modal component.
* Api calls should include input validation before the call and error handling after it.
