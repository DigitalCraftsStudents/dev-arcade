
# Dev Arcade - Class Project

> NOTE: You must complete this project in accordance with the requirements laid out
  below in order to fulfill state requirements for credit for the course. If
  you have any questions or concerns about the requirements, please see an
  instructor.

[DigitalCrafts]:https://www.digitalcrafts.com/
[React.js]:https://reactjs.org/
[Redux]:https://redux.js.org/

## Project Description

Description: A web-based "arcade" with a series of games for killing time between dev tasks. 
A small back-end api to submit scores and retrieve leaderboards for each game will be provided.

## Project Requirements

This project will be run as a class-level sprint, and students will be expected to participate in Sprint Ceremonies including:

- Sprint Kickoff/Backlog Grooming
- Daily standup
- Code Review
- QA

The Sprint will end on 6/29 and a code-freeze will be implemented at the end of class. A Sprint Demo will take place on July 1 and each
team will be expected to present their game and explain the code behind it.

- Class will form into groups of 3 and select from the following games:
  - Memory
  - Chess
  - Tetris
  - Rock, Paper, Scissors
  - Tic Tac Toe
  - Simon
  - Snake
  - Minesweeper
  - Guess Who
- Each game will live in a separate directory inside of a larger React application. Teams will
be responsible for managing their code within their games designated directory.
- You must use [React.js] and [Redux] in order to manage the state of your game
  - using [react-redux] is highly recommended, but not a hard requirement
- Organize components into separate files and `import` / `export` using es6 modules
  - Your game will have a designated space in the project repository
  - In general it should be "one component per file"
  - There can be exceptions to this; use your best judgement on code organization
- At least one component must use local `state` and not participate in the Redux state management
  - Tip: pick a small component with some trivial, ephemeral state for this
  - When in doubt, store things in your Redux store
- At least one component must use a [lifecycle method](https://reactjs.org/docs/react-component.html#componentdidmount) like `componentDidMount`, `componentWillUnmount`, etc

## Bonus 

> NOTE: These are not required for the project, but advised for better understanding / comprehension of the topic.

- Use a component from an external library, loaded via `npm`
  - Example: [bulma-react-components](https://www.npmjs.com/package/react-bulma-components), [react-bootstrap](https://react-bootstrap.github.io/), etc
- Persist your Redux store somewhere like `localStorage` or an external database
  - When the user refreshes your page you should be able to load exactly the same state they were in when they left the page
- While the back-end API is provided, you are free to revise and add to it, provided you communicate your changes to the class and get at least one code review & QA from another group

## Final Tips

- Remember to keep your `render` methods small.
  - Compose your application using re-usable components, not copy/paste JSX.
  - Less than 20 lines of JSX is a good rule of thumb.
- Good luck and have fun with this one :) We are in the home stretch!

[react-redux]:https://react-redux.js.org/

--------------------------------------------------------------------------------

This requirements document is licensed as [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/):

> You can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission.

