import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
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
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  </Layout>
);

export default App;
