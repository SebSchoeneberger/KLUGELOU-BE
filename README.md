<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">

# Klugelou Gemstone Seller Webpage - Backend Repo


<em>This is the backend repository for the Gemstone Seller Webpage, a full-stack MERN application enabling dynamic gemstone management and exploration. The backend provides APIs, manages data persistence, and handles admin functionalities, including storing images in an AWS S3 bucket for scalable and secure file storage.

</em>

<!-- BADGES -->
<img src="https://img.shields.io/github/last-commit/SebSchoeneberger/KLUGELOU-BE?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/SebSchoeneberger/KLUGELOU-BE?style=flat&color=0080ff" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/SebSchoeneberger/KLUGELOU-BE?style=flat&color=0080ff" alt="repo-language-count">

<em>Built with the tools and technologies:</em>

<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/Mongoose-F04D35.svg?style=flat&logo=Mongoose&logoColor=white" alt="Mongoose">
<img src="https://img.shields.io/badge/.ENV-ECD53F.svg?style=flat&logo=dotenv&logoColor=black" alt=".ENV">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/MongoDB-47A248.svg?style=flat&logo=MongoDB&logoColor=white" alt="MongoDB">
<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">

</div>
<br>

---

## 📄 Table of Contents

- [Overview](#-overview)
- [Getting Started](#-getting-started)
    - [Prerequisites](#-prerequisites)
    - [Installation](#-installation)
    - [Usage](#-usage)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Links](#-Links)

---

## ✨ Overview

KLUGELOU-BE is a powerful backend service designed to streamline the management of stone-related data while ensuring robust security and reliability.

**Why KLUGELOU-BE?**

This project provides a comprehensive solution for developers looking to build secure and efficient applications. The core features include:

- **🔒 Secure Authentication:** Implements JWT verification and password hashing for enhanced security.
- **📦 AWS S3 Integration:** Facilitates efficient image uploads and storage solutions using AWS services.
- **✅ Data Validation:** Utilizes JOI schemas to ensure data integrity and consistency across the application.
- **⚙️ Robust API:** Integrates essential middleware and routing for seamless client-server communication.
- **🛠️ Error Handling:** Comprehensive error management middleware to enhance user experience and application reliability.
- **👨‍💼 Admin Management:** Provides secure endpoints for managing administrative functionalities and user roles.

---

## 📌 Features

|      | Component       | Details                              |
| :--- | :-------------- | :----------------------------------- |
| ⚙️  | **Architecture**  | <ul><li>Node.js backend</li><li>RESTful API design</li><li>Express.js framework</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>Consistent coding style</li><li>Use of ESLint for linting</li><li>Prettier for code formatting</li></ul> |
| 📄 | **Documentation** | <ul><li>Basic README file</li><li>API endpoint descriptions needed</li><li>Inline comments in code</li></ul> |
| 🔌 | **Integrations**  | <ul><li>MongoDB for database management</li><li>AWS S3 for file storage</li><li>JWT for authentication</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Modular route handling</li><li>Separation of concerns in controllers and services</li></ul>
| ⚡️  | **Performance**   | <ul><li>Asynchronous operations with Promises</li><li>Efficient data retrieval from MongoDB</li></ul> |
| 🛡️ | **Security**      | <ul><li>Use of bcryptjs for password hashing</li><li>Environment variables for sensitive data</li><li>JWT for secure user sessions</li></ul> |
| 📦 | **Dependencies**  | <ul><li>Express, Mongoose, Axios, CORS</li><li>JWT, Bcryptjs, Joi for validation</li><li>dotenv for environment management</li></ul> |
| 🚀 | **Scalability**   | <ul><li>Stateless API design</li><li>MongoDB for horizontal scaling</li><li>Potential for microservices architecture</li></ul> |


### Explanation of the Table Components:

- **Architecture**: The project is built using Node.js and follows a RESTful API design, leveraging the Express.js framework for routing and middleware.
- **Code Quality**: The code adheres to a consistent style, utilizing ESLint for linting and Prettier for formatting, which helps maintain readability and quality.
- **Integrations**: The project integrates with MongoDB for data storage and AWS S3 for file management, along with JWT for secure authentication.
- **Modularity**: The code is organized into modules, with clear separation of routes, controllers, and services, promoting maintainability.
- **Performance**: The use of asynchronous programming patterns allows for efficient handling of I/O operations, particularly with MongoDB.

---

## 📁 Project Structure

```sh
└── KLUGELOU-BE/
    ├── DB
    │   └── index.js
    ├── JOI
    │   └── schemas.js
    ├── README.md
    ├── controllers
    │   ├── admin.js
    │   └── stones.js
    ├── index.js
    ├── middlewares
    │   ├── errorHandler.js
    │   ├── imgUploadMiddlerware.js
    │   ├── validateJOI.js
    │   └── verifyToken.js
    ├── models
    │   ├── Admin.js
    │   └── Stones.js
    ├── package-lock.json
    ├── package.json
    ├── routes
    │   ├── adminRouter.js
    │   ├── mailerLiteRouter.js
    │   └── stonesRouter.js
    └── utils
        ├── asyncHandler.js
        ├── awsS3Utils.js
        └── errorResponse.js
```

---

## 🚀 Getting Started

### 📋 Prerequisites

This project requires the following dependencies:

- **Programming Language:** JavaScript
- **Package Manager:** Npm

### ⚙️ Installation

Build KLUGELOU-BE from the source and intsall dependencies:

1. **Clone the repository:**

    ```sh
    ❯ git clone https://github.com/SebSchoeneberger/KLUGELOU-BE
    ```

2. **Navigate to the project directory:**

    ```sh
    ❯ cd KLUGELOU-BE
    ```

3. **Install the dependencies:**

**Using [npm](https://www.npmjs.com/):**

```sh
❯ npm install
```

### 💻 Usage

Run the project with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm start
```

---
## Links  
- **Live Page:** [edelstein-bibliothek.de](https://edelstein-bibliothek.de/)  
- **Frontend Repository:** [KLUGELOU-FE](https://github.com/SebSchoeneberger/KLUGELOU-FE)  

<div align="left"><a href="#top">⬆ Return</a></div>

---
 
