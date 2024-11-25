# MLSA-UETP-Official Website

## This repository contains the source code for the official website of Microsoft Learn Student Ambassadors (MLSA) at UET Peshawar. The project is built using modern frontend technologies and follows a modular structure to ensure scalability and maintainability.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Authentication**: Login and registration system to manage user access.
- **Responsive Design**: Fully responsive layout optimized for mobile and desktop devices.
- **Dynamic Components**: Modular and reusable UI components like Navbar, Footer, and Buttons.
- **TailwindCSS Integration**: Styled with modern utility-first CSS for fast and clean design.
- **Program Highlights**: Dedicated sections for "Our Program," "Team," and "Blogs."

---

## Technologies Used

- **Framework**: React (with Vite for faster development)
- **Styling**: TailwindCSS
- **Configuration**: ESLint and PostCSS for code linting and CSS processing
- **State Management**: React Hooks

---

## Project Structure

The project follows a modular file structure:

src/ ├── assets/ │ └── react.svg # Static assets used in the project ├── components/ │ └── Button.jsx # Reusable button component ├── features/auth/ │ ├── Login.jsx # Login page logic and UI │ └── Register.jsx # Registration page logic and UI ├── hooks/ # Custom hooks (if any) ├── utils/ # Utility functions and helpers ├── views/ # Main views for the website │ ├── AboutUs.jsx # About Us page │ ├── Blogs.jsx # Blog listing page │ ├── Footer.jsx # Footer component │ ├── Home.jsx # Homepage │ ├── Navbar.jsx # Navigation bar │ ├── OurProgram.jsx # Program details │ ├── Team.jsx # Team members │ └── App.jsx # Main app entry point ├── index.css # Global CSS ├── main.jsx # ReactDOM entry point


Root-level files include configuration files for various tools and the main `index.html`.

---

## Getting Started

To set up the project locally, follow these steps:

### Prerequisites
- Node.js and npm/yarn installed on your machine.

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/your-repo/mlsa-uetp-website.git
   cd mlsa-uetp-website
   ```
2. Install dependencies:
    ```
    npm install
    ```
3. Start the development server:
    ```
    npm run dev
    ```
4. Open the website in your browser:
    ```
    http://localhost:5173
    ```

### Contributing
- We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch for your feature:
    ``` git checkout -b feature-name
3. Commit your changes and push the branch:
    ```bash 
    git commit -m "Description of feature"
    git push origin feature-name
    ```
4. Open a pull request.

### License
- This project is licensed under the MIT License.