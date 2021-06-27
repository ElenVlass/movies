import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoaderSpiner from "./components/Loader";
import Layout from "./components/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import routes from "./routes";

const HomePage = lazy(() =>
  import("./pages/HomePage.js" /* webpackChunkName: "home-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./pages/MovieDetailsPage.js" /* webpackChunkName: "movie-details-page" */
  )
);
const MoviesPage = lazy(() =>
  import("./pages/MoviesPage.js" /* webpackChunkName: "movies-page" */)
);

const App = () => (
  <Layout>
    <Suspense fallback={<LoaderSpiner />}>
      <Switch>
        <Route path={routes.home} exact component={HomePage} />
        <Route path={routes.moviesDetails} component={MovieDetailsPage} />
        <Route path={routes.movies} component={MoviesPage} />
        <Route path="/goit-react-hw-04-movies">
          <Redirect to={routes.home} />
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  </Layout>
);

export default App;
