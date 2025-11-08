# Speakers Dashboard

A dashboard application for managing speakers at events and conferences.
This application provides an intuitive interface for viewing, adding, and managing speaker information.

This project is built and maintained by the Frontendistim community a group of Israeli frontend developers.
- If you're interested in contributing, that's great! Please read our Contributing Guidelines [here](https://github.com/enpitech/speakers-dashboard/blob/main/%F0%9F%93%84%20CONTRIBUTING.md).

- To join our community or learn more about us, click [here](https://enpitech.dev/community).

## Tech Stack

This project is built with the following technologies:

-   **Framework:** [TanStack Start](https://tanstack.com/start/v1)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **UI:** [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/)
-   **Routing:** [TanStack Router](https://tanstack.com/router/v1)
-   **Data Fetching:** [TanStack Query](https://tanstack.com/query/v5)
-   **Forms:** [TanStack Form](https://tanstack.com/form/v0)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Component Library:** [Storybook](https://storybook.js.org/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (check .nvmrc)
-   npm
-   Docker

### Installation
1. Fork the repository
2.  Clone the repo from your fork
    ```sh
    git clone https://github.com/your_username/speakers-dashboard.git
    ```
3. create a .env file in the root of the project and add the following variables form the .env.example file

4.  Start the database
    ```sh
    docker compose up db -d
    ```
5. generate the Prisma client
    ```sh
    npx prisma generate
    ```
6. seed the database
    ```sh
    npm run seed
    ```
7. run the development server
    ```sh
    npm run dev
    ```
8. visit http://localhost:3000 to see the application

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Please read our [Contributing Guidelines](https://github.com/enpitech/speakers-dashboard/blob/main/%F0%9F%93%84%20CONTRIBUTING.md) for more information.
