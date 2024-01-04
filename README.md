## Movie searcher

#### The SPA for searching and viewing detail information about the movies

## :shipit:[DEMO](https://vlass-movie-finder.netlify.app/)

#### Home page

![Home page](https://github.com/ElenVlass/goit-react-hw-04-movies/blob/main/src/images/home-page.png)

#### Movies page for serch

![Movies page for serch](https://github.com/ElenVlass/goit-react-hw-04-movies/blob/main/src/images/movies-page-for-serch.png)

#### Movie details page with nested routes

![](https://github.com/ElenVlass/goit-react-hw-04-movies/blob/main/src/images/movie-details-page-with-nested-routes.png)

#### Cast nested route

![Cast nested route](https://github.com/ElenVlass/goit-react-hw-04-movies/blob/main/src/images/cast-nested-route.png)

---

The application has the following routes:

`HomePage` component, a home page with a list of popular movies.

`MoviesPage` component,  a page for searching movies by keyword.

`MovieDetailsPage` component, a page with detailed information about the movie.

`Cast` component, information about the cast. Rendered on the `MovieDetailsPage`.

`Reviews` component, information about reviews. Rendered on the `MovieDetailsPage`.

`Images` component, скриншоты с фильмов. Рендерится на странице `MovieDetailsPage`. The images open in a _modal window_and can be scrolled through.

_Code Splitting_ implemented

Added asynchronous loading of JS code for application routes using _React.lazy()_ и _Suspense_.

