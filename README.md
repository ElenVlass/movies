## Movie searcher

#### The SPA for searching and viewing detail information about the movies

## [DEMO](https://vlass-movie-finder.netlify.app/)

#### Home page

![Home page](https://github.com/ElenVlass/goit-react-hw-04-movies/blob/main/src/images/home-page.png)

#### Movies page for serch

![Movies page for serch](https://github.com/ElenVlass/goit-react-hw-04-movies/blob/main/src/images/movies-page-for-serch.png)

#### Movie details page with nested routes

![](https://github.com/ElenVlass/goit-react-hw-04-movies/blob/main/src/images/movie-details-page-with-nested-routes.png)

#### Cast nested route

![Cast nested route](https://github.com/ElenVlass/goit-react-hw-04-movies/blob/main/src/images/cast-nested-route.png)

---

В приложении есть следующие маршруты:

компонент HomePage, домашняя страница со списком популярных кинофильмов.

компонент `MoviesPage`, страница поиска фильмов по ключевому слову.

компонент `MovieDetailsPage`, страница с детальной информацией о кинофильме.

компонент `Cast`, информация о актерском составе. Рендерится на странице `MovieDetailsPage`.

компонент `Reviews`, информация об обзорах. Рендерится на странице `MovieDetailsPage`.

компонент `Images`, скриншоты с фильмов. Рендерится на странице `MovieDetailsPage`. Изображения открываются в _модальном окне_, их можно пролистыватью

Реализовано разделение кода _Code Splitting_

Добавлена асинхронная загрузка JS-кода для маршрутов приложения с использованием _React.lazy()_ и _Suspense_.
