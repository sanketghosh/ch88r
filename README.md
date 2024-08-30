<div align="center">
<h1>Ch88r</h1>
<p>An open source & secure social app for people who loves to connect and chat !</p>
</div>

<div align="center">
  <br />
    <a href="https://github.com/sanketghosh/ch88r" target="_blank">
      <img src="https://github.com/sanketghosh/ch88r/blob/main/client/public/ch88r-demo.png" alt="Project Banner">
    </a>
  <br />
</div>

<div align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge" height="40" alt="react logo"  />
  <img width="12" />
  <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?logo=tailwindcss&logoColor=black&style=for-the-badge" height="40" alt="tailwindcss logo"  />
  <img width="12" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge" height="40" alt="typescript logo"  />
  <img width="12" />
    <img src="https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white&style=for-the-badge" height="40" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://img.shields.io/badge/Express-000000?logo=express&logoColor=white&style=for-the-badge" height="40" alt="express logo"  />
  <img width="12" />
  <img src="https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white&style=for-the-badge" height="40" alt="mysql logo"  />
  <img width="12" />
  <img src="https://img.shields.io/badge/Socket.io-010101?logo=socketdotio&logoColor=white&style=for-the-badge" height="40" alt="socketio logo"  />
  <img width="12" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white&style=for-the-badge" height="40" alt="prisma logo"  />
</div>

</div>

## Table of Contents

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)

## <a name="introduction">Introduction</a>

Ch88r is a powerful open-source chat app designed for scalability and security. It supports one-on-one and group messaging, along with a range of additional features. The front-end is created with React, and the back-end uses Node.js and Express. TypeScript adds type safety to the code, helping to prevent errors and improve reliability.

At the core of Ch88r's real-time communication is SocketIO, a powerful library that enables bidirectional and event-based communication between clients and servers. SocketIO ensures that message delivery is instantaneous and reliable. This technology supports seamless real-time interactions, whether users are engaging in private conversations or participating in group chats. For data management, Ch88r employs MySQL for its relational database needs.

## <a name="tech-stack">Tech Stack</a>

- React (No meta framework)
- Tailwind
- ShadcnUI
- TypeScript
- NodeJS
- SocketIO
- Express
- MySQL
- PrismaORM

## <a name="features">Features</a>

- `**Real-Time Messaging**: Utilizes SocketIO to provide instant, bidirectional communication for seamless one-on-one and group chats.

- **One-on-One Chat**: Enables private conversations between users with real-time message delivery and notifications.

- **Group Chat**: Supports multiple users in a single chat room, allowing for dynamic and interactive group discussions.

- **User Authentication**: Built from scratch using Express and JWT, ensuring secure user authentication and session management.

- **Type Safety**: Leveraging TypeScript to catch errors during development and provide a more reliable and maintainable codebase.

- **Data Management**: Utilizes MySQL for robust relational data storage, with Prisma ORM simplifying data modeling and manipulation.

- **Responsive Design**: Developed with Tailwind with Shadcn to supercharge the development process and deliver a smooth and adaptable user interface across various devices and screen sizes.

- **Scalability**: Engineered for high scalability to handle growing user bases and increasing chat traffic efficiently.

- **Security**: Incorporates industry-standard practices for securing user data and communications.

- **Error Handling**: Comprehensive error handling mechanisms to ensure stability and a better user experience.

- **Custom Notifications**: Supports real-time notifications and alerts for new messages and other important events.

- **User Profiles**: Allows users to create and manage profiles, including setting display names and profile pictures.

- **Search Functionality**: Includes search capabilities to easily find users and others.`

## <a name="quick-start">Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

**Cloning the Repository**

```bash
git clone https://github.com/sanketghosh/ch88r.git
cd ch88r
```

Now we will install `client` dependencies and `api` dependencies separately one by one. Let's install the **client** dependencies first and then **api**:

**Client Installation**

Install the front-end / client dependencies using `npm`:

```bash
cd client
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` inside the `client` directory and add the following content:

```env
VITE_API_BASE_URL=<set_your_api_base_url>
```

Replace the placeholder values with your actual API base URL. And in development if you are keeping your API PORT same as in this repository use `http://localhost:8000`

**Running the Client**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

Well client setup is done now it's time for our back-end or `api`

**API installation**
Install the back-end / api dependencies using `npm`:

```bash
cd api (maybe `cd ../api` if you are already inside client)
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` inside the `api` directory and add the following content:

```env
DATABASE_URL=
FRONTEND_URL=
JWT_SECRET_KEY=
PORT=
NODE_ENV=
```

Replace the placeholder values with your actual database URL and make sure to fill the others too. If you are in unix based system type `openssl rand -hex 64` to generate a random complex string for `JWT_SECRET_KEY`. For example check `.env.example` file.

**Prisma setup and schema migration**
If your prefer a data-source provider other than `MySQL` and generate a prisma schema from scratch run `npx prisma init --datasource-provider <your_datasource_provider>` change placeholder value with a data-source provider like `sqlite` `postgres` etc and run the commands below.
If you are using MySQL skip the previous step and paste the following command:

- Generate prisma client: `npx prisma generate`
- Migrate `npx prisma migrate dev --name <any_migration_name>`

You have to run this migration command with every schema changes and if there is already a `migration` folder inside prisma directory delete that before running these commands.
To run prisma studio and visualize and edit you data in an interface just run : `npx prisma studio`
Check prisma docs for more.

**Running the API**

```bash
npm run dev
```

You api is now running on `http://localhost:8000`.
