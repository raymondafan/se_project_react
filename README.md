# WTWR (What to Wear?): Front End

### Overview

Created a dynamic and responsive React front end using HTML, CSS, and JavaScript to deliver an engaging user experience. Integrated with a weather API to fetch real-time data, filtering and displaying personalized clothing suggestions based on current weather conditions. Utilized asynchronous fetch requests to efficiently manage API interactions, ensuring fast and reliable data retrieval. Designed core functionalities for user interaction, providing accurate and context-specific clothing recommendations to enhance user engagement.

## Getting Started

**Note**
The cloud hosting for this project is currently expired, so the live demo link is temporarily unavailable. You can still run the project locally by following the instructions below.

1. Clone the Repositories
   First, clone both the front-end and back-end repositories to your local machine:

```
git clone https://github.com/raymondafan/se_project_react.git
```

```
git clone https://github.com/raymondafan/se_project_express.git
```

2. Set Up the Back End
   Navigate to the back-end repository and install the dependencies:

```
cd se_project_express
```

```
npm install
```

Start the back-end server:

```
npm run start
```

Or, for a development server with hot reload:

```
npm run dev
```

3. Set Up the Front End
   Navigate to the front-end repository and install the dependencies:

```
cd se_project_react
```

```
npm install
```

Ensure the back-end server is running, then start the front-end development server:

```
npm run start
```

4. View the Application
   Once both servers are running, you can view the application by navigating to:

http://localhost:3000

5. Configuration
   Ensure that the front end is configured to point to the back end. Check the api.js file in the front-end project to verify that the baseUrl is set correctly:

```
const baseUrl =
process.env.NODE_ENV === "production"
? "https://api.raymondafanwtwr.strangled.net"
: "http://localhost:3001";
```

**Testing**
Make sure to edit the sprint.txt file in the root of the back-end folder. The file should contain the number of the sprint you're currently working on. For example, 12.

**Links**

- [Link to the FRONTEND](https://github.com/raymondafan/se_project_react)
- [Link to the BACKEND](https://github.com/raymondafan/se_project_express)
