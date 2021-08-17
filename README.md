## Movie searcher

#### The SPA for searching and viewing detail information about the movies

[DEMO](https://vlass-movie-finder.netlify.app/)
![Home page]()

---

![Movies page for serch]()

![Movie details page with nested routes]()

---

![cast-nested-route.png]()

---

В приложении есть следующие маршруты:

компонент HomePage, домашняя страница со списком популярных кинофильмов.

компонент MoviesPage, страница поиска фильмов по ключевому слову.

компонент MovieDetailsPage, страница с детальной информацией о кинофильме.

компонент Cast, информация о актерском составе. Рендерится на странице MovieDetailsPage.

компонент Reviews, информация об обзорах. Рендерится на странице MovieDetailsPage.

Code Splitting (разделение кода)

Добавлена асинхронная загрузка JS-кода для маршрутов приложения с использованием React.lazy() и Suspense.
