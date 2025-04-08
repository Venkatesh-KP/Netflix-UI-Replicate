# Netflix Clone

This is a Netflix clone application built using React. The application mimics the user interface and functionality of Netflix, allowing users to browse through a collection of movies and shows.

## Project Structure

The project is organized as follows:

```
netflix-clone
├── public
│   └── index.html          # Main HTML file for the application
├── src
│   ├── components          # Contains reusable components
│   │   ├── Navbar.jsx      # Navigation bar component
│   │   ├── Banner.jsx      # Promotional banner component
│   │   └── Row.jsx         # Row of movie/show thumbnails component
│   ├── pages               # Contains page components
│   │   └── Home.jsx        # Main page component
│   ├── App.jsx             # Main application component
│   ├── index.jsx           # Entry point for the React application
│   ├── api                 # Contains API request functions
│   │   └── requests.js     # API request handling
│   └── styles              # Contains CSS styles
│       ├── App.css         # Styles for the main application
│       ├── Banner.css      # Styles for the Banner component
│       ├── Navbar.css      # Styles for the Navbar component
│       └── Row.css         # Styles for the Row component
├── package.json            # npm configuration file
└── README.md               # Project documentation
```

## Getting Started

To get started with the Netflix clone application, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   ```

2. **Navigate to the project directory:**
   ```
   cd netflix-clone
   ```

3. **Install dependencies:**
   ```
   npm install
   ```

4. **Run the application:**
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Features

- Browse through a collection of movies and shows.
- Responsive design that works on various screen sizes.
- Promotional banners for featured content.
- Navigation bar for easy access to different sections.

## Technologies Used

- React
- Vite
- CSS

## License

This project is licensed under the MIT License.