# MyFlix App
## Project Description
This is a client-side of a movie database App called MyFlixDB which fetches data from its server-side (movie-API). It allows users to search for and save information about different movies. It allows users to search for and save information about different movies, directors, and genres. Users will also be able to register, update their personal information, and create a list of their favorite movies.

A user need to first create an account (to register ) to access the full features of the app.
## Customer Features:
### Login view
* Allows users to log in with a username and password
### Registration View
* Allows new users to register (username, password, email, birthday)
### Main view
* Returns a list of ALL movies to the user (each listed item with an image, title, and description)
* Sorting and filtering
* Ability to select a movie for more details
### Single movie view
* Returns data (description, genre, director, image) about a single movie to the user
* Allows users to add a movie to their list of favorites
### Director view
* Returns data about a director (name, bio, birth year, death year)
* Displays example movies
### Genre view
* Returns data about a genre, with a name and description
* Displays example movies
### Profile view
* Allows users to update their user info (username, password, email, date of birth)
* Allows existing users to deregister
* Displays favorite movies
* Allows users to remove a movie from their list of favorites
## Technical Features:
* The application must be a single-page application (SPA)
* The application must use state routing to navigate between views and share URLs
* The application must give users the option to filter movies
* The application must give users the option to sort movies
* The application must initially use Parcel as its build tool
* The application must be written using the React library and in ES2015+
* The application must be written with React Redux (hence respecting the Flux pattern)
* The application must use Bootstrap as a UI library for styling and responsiveness
* The application must contain a mix of class components and function components
* The application may be hosted online
## Dependencies:
* React
* React-bootstrap
* React-dom
* React-redux
* React-router-dom
* Redux
* Axios
* Prop-types
* Redux-devtools-extension