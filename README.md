# To-Do

To-Do is a simple todo app built with the [Next.js](https://nextjs.org/). It provides a minimalistic and user-friendly interface to manage your tasks efficiently.

## Features

- Add new tasks with a title.
- Mark tasks as completed.
- Delete tasks.
- Basic authentication.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://vitest.dev/)
- [MUI](https://mui.com/)
- [TypeORM](https://typeorm.io/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

To run mini-do locally, follow these steps:

*1*. Clone the repository:

```bash
git clone https://github.com/Tannheuser/to-do/
```

*2*. Install the dependencies:

```bash
npm install
```

*3*. Set up the environment variables:
Copy the .env.example file and rename it to .env. Update the values in the file with your own configuration.

*4*. Start the development server:

```bash
npm run dev
```

*5*. Open your browser and visit <http://localhost:3000> to access To-Do.

*6*. Run tests:

```bash
npm run test
```

## Usage

- You will be redirected to the main todo list page.

- To add a new task, enter the task title in the input field and press Enter or click the "Add" button.
- To mark a task as completed, click the task title or the checkbox next to it.

- To delete a task, click the delete icon next to the task.
- To flag a task, click the flag icon next to the task.

## Constraints

- There is no login page. The user is automatically 'logged in' with the credentials provided in the .env file. These credentials will be used for the Basic Authentication header.
- The user can only add tasks. Although there is a "Edit" button, it is not functional.
- Only unit tests for task service are implemented.

## Future improvements

- Add possibility to edit tasks.
- Put deadlines on tasks and group them on FE (Overdue, Today, Tomorrow, Future).
- Implement more secure authentication using OAuth ([Auth0](https://auth0.com) as an example).
- Consider using a state management library like [Redux](https://redux.js.org/) or [Zustand](https://github.com/pmndrs/zustand) to avoid passing props to components.
- Use server components to prefetch the data and avoid unnecessary network calls.
- In case of using client components, use [SWR](https://swr.vercel.app/) or [react-query](https://tanstack.com/query/v3/) to cache the data and avoid unnecessary network calls.
- Wrap API calls in custom hooks to avoid code repetition (`useGetTasks`, `useAddTask` e.t.c).
- Add more unit tests and integration tests.
- Add logging and metrics.

## Choices

Due to the time constraints, some choices were made to simplify the development process:

- Next.js was chosen because it is a framework that provides a lot of features out of the box. Specifically needed for this project: routing, API routes (instead of setting up a separate BE project), TypeScript support.
- Vitest was chosen because it is a lightweight test runner that supports TypeScript and React out of the box.
- MUI was chosen because it is a popular UI library that provides a lot of components out of the box.
- TypeORM was chosen because it is a popular ORM that supports TypeScript out of the box and allows to use both Data Mapper and Active Record patterns.
- Tailwind CSS was chosen because it allows to quickly build a responsive UI without writing custom CSS.
- Repository pattern was chosen because it allows to separate the business logic from the data access logic and makes the code more testable. It also allows to easily switch between different ORMs or other data providers using Dependency Injection and IoC pattern.
