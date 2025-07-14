# BizFind - A Full-Stack Business Directory Application

<p align="center">
  <img src="https://raw.githubusercontent.com/Amandubey211/BizFind/main/frontend/public/favicon.svg" alt="BizFind Logo" width="100"/>
</p>

<h3 align="center">
  <a href="https://biz-find.vercel.app/"><strong>⭐ Live Demo ⭐</strong></a>
</h3>
<h4 align="center">
  <a href="#-about-the-project">About</a>   |   <a href="#-features">Features</a>   |   <a href="#-tech-stack">Tech Stack</a>   |   <a href="#-getting-started">Local Setup</a>
</h4>

---

## 🚀 About The Project

**BizFind** is a modern, responsive, and fully-featured business directory web application. It was developed to demonstrate proficiency in building a complete full-stack project from scratch, deploying it as a unified monorepo on a modern cloud platform. The application provides a clean and intuitive user interface for customers to discover local businesses.

This project showcases a range of modern web development skills, including state management in React, creating RESTful APIs, and implementing advanced UI features like live client-side search and fluid animations.

<br>

<p align="center">
  <img src="https://raw.githubusercontent.com/Amandubey211/BizFind/main/docs/project-screenshot.png" alt="Project Screenshot" width="800"/>
  <em>(Suggestion: Take a great screenshot of your final app, name it `project-screenshot.png`, and place it in a `docs` folder at the root of your project)</em>
</p>

<br>

## ✨ Features

- **Dynamic & Animated UI:** Built with Framer Motion for a smooth, fluid, and engaging user experience.
- **Live Client-Side Search:** Instantly search through dozens of businesses by name or category without a page reload.
- **Fully Responsive Design:** A mobile-first approach ensures a seamless experience on all devices, from phones to desktops.
- **Multi-Page Routing:** Utilizes React Router DOM for clean, client-side navigation between the Home and About pages.
- **Serverless REST API:** An efficient Node.js/Express backend serves business data via a serverless function.
- **Unified Deployment:** Frontend and Backend are deployed together from a single monorepo to Vercel.

## 🛠️ Tech Stack

The project is built using a modern, industry-standard tech stack.

| Category | Technologies |
| :--- | :--- |
| **Frontend** | ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black) ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white) ![Framer Motion](https://img.shields.io/badge/-Framer_Motion-0055FF?logo=framer&logoColor=white) |
| **Backend** | ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/-Express.js-000000?logo=express&logoColor=white) |
| **State Management** | React Hooks (`useState`, `useEffect`) |
| **Routing** | ![React Router](https://img.shields.io/badge/-React_Router-CA4245?logo=react-router&logoColor=white) |
| **Deployment** | ![Vercel](https://img.shields.io/badge/-Vercel-000000?logo=vercel&logoColor=white) (Unified Monorepo Deployment) |


## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You will need to have Node.js (version 18.x or later) and npm installed on your machine.

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Comes with Node.js)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Amandubey211/BizFind.git
    cd BizFind
    ```

2.  **Install Backend Dependencies:** (Note the new folder structure)
    ```sh
    cd api/backend
    npm install
    ```

3.  **Install Frontend Dependencies:**
    ```sh
    cd ../../frontend
    npm install
    ```

### Running the Application

You will need two separate terminals to run both the frontend and backend servers concurrently.

1.  **Run the Backend Server:**
    In a terminal at the root of the `/api/backend` directory, run:
    ```sh
    npm start
    ```
    The backend server will start on `http://localhost:3001`.

2.  **Run the Frontend Development Server:**
    In a separate terminal at the root of the `/frontend` directory, run:
    ```sh
    npm run dev
    ```
    The frontend development server will start. Open [http://localhost:5173](http://localhost:5173) (or the address provided) in your browser.

## 🔗 Live Links

- **Live Application (Vercel):** [https://biz-find.vercel.app/](https://biz-find.vercel.app/)
- **Live API Endpoint:** [`/api/businesses`](https://biz-find.vercel.app/api/businesses)

## 👤 Contact

Aman Dubey - [amandubey8833@gmail.com](mailto:amandubey8833@gmail.com)

Project Link: [https://github.com/Amandubey211/BizFind](https://github.com/Amandubey211/BizFind)
