# BlueHealth React Exercise

> Welcome to the programming exercise for React Frontend Developers! :)

## Your Task

Your task is to implement a simple prototype of a medication recommendation chat bot.
Please use [this Figma mockup](https://www.figma.com/file/6obDDPURVCkT8oyiO1BNkW/Blue-React-Exercise) as orientation.

Your implementation should:

- Greet the user on a welcome screen and allow them to select a medical condition
- Ask a refinement question (duration of the condition) with a number of pre-defined answers (less than 3 days, at least three days)
- Display a recommendation using the results from the JSON API based on `db.json` (start it using `yarn up:dev`, see below)
  - Use the filtering logic it provides to select the right drug:
    - `GET http://localhost:3000/drugs?duration=SHORT` returns all drugs applicable if a condition persists for less than 3 days
    - `GET http://localhost:3000/drugs?duration=LONG` returns all drugs applicable if a condition persists for at least 3 days
  - Note: As part of this exercise, only the duration of the condition has to be used for filtering since the drugs contained in the `db.json` apply to all conditions the user could select

In the process, you should:

- Develop a reusable button component, styling it using [styled-components](https://styled-components.com/)
- Implement your state management and request logic by extending the `RootStore`. Use [MobX](https://mobx.js.org) where applicable
- Assemble the screen(s) in the Figma design and bring them to live using your logic
- Optional: Use [Axios](https://axios-http.com/docs/intro) and [React Query](https://react-query.tanstack.com/) to fetch the API data
  - If you do not use Axios and React Query, pick a fitting alternative

In general, this exercise is not about developing a functionally complete solution. Our primary focus in evaluating it is the quality of your code and architecture. Your goal should be to get whatever you implement as close as possible to a production-ready state.
This could, for example, include proper internationalization, accessibility hints, etc. Feel free to implement a subset of the functions described above as long as you feel confident you can demonstrate your development skills sufficiently.

## Get Started

1. Install [node.js](https://nodejs.org/en/) and the [Yarn](https://yarnpkg.com/getting-started/install) package manager.
2. After cloning the repository, run `yarn` in its root to install all dependencies and set up the git hooks.
3. _Optional: Configure VSCode as described in "Editor Setup" below._
4. Run `yarn up:dev` to start the API server.
5. In a second terminal, start the application using `yarn start`. Happy coding!

_Note: See "Available Scripts" below for more information._

### File Structure

All files should be named in `lower-case-with-dashes.ts`. There is no exception in casing for files holding a component.<br />
TypeScript files (usually `.ts`) using React's JSX syntax should receive a `.tsx` file extension.

The contents of this repo are structured in the following way:

- `.vscode/`: [VSCode](https://code.visualstudio.com/) config
- `build/`: Build artifacts (excluded from version control)
- `public/`: Assets copied over to distribution
- `src/`: The application's source files
  - `app/`: The app's entry point
  - `components/`: Application-specific React components that do not hook into the application store
  - `i18n/`: Internationalization helpers & translations
  - `models/`: [MobX](https://mobx.js.org) models
  - `screens/`: All application screens accessible via their own route/as part of the navigation hierarchy
  - `theme/`: The UI theme

## Available Scripts

The most important scripts are outlined below. You can find all script definitions in the `package.json`.

### `yarn start`

Launches a development server that runs the application in development mode.

After running this command, navigate to [http://localhost:4200](http://localhost:4200) to view the app in your browser.<br />
The app will automatically reload if you change any of the source files.

### `yarn up:dev`

Starts the JSON API server based on the `db.json` file.

After running this command, the API will be available at [http://localhost:3000](http://localhost:3000).<br />
The API will automatically reflect changes in the `db.json`.

### `yarn format`

Runs automated code formatting on all applicable file types.

### `yarn lint`

Lints all applicable files and prints the output.

### `yarn compile`

Dry-runs the TypeScript compiler.<br />
This is especially useful to check whether any types or references broke after a big refactoring.

### `yarn test`

Runs unit tests via [Jest](https://jestjs.io).

Tests are automatically discovered from all `*.spec.{ts,tsx}` files.

### `yarn storybook`

Launches [Storybook](https://storybook.js.org/).

Stories are automatically added from all `*.stories.{ts,tsx}` files.

### `yarn build`

Builds the application.<br />
The build artifacts will be stored in the `build/` directory.

## Editor Setup

We recommend using [VSCode](https://code.visualstudio.com/).

After opening the repo in VSCode, it will ask you if you want to install recommend extensions. For a seamless development experience, we recommend accepting.
