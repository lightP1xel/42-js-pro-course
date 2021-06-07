### Posts by users

---

Реализуйте приложение по отображению постов со следующего ендпоинта: https://jsonplaceholder.typicode.com/posts .
Используйте функциональные компоненты, `useState`, `useEffect`, `useCallback`.
В качестве компонентов можете использовать готовые решения от [react-bootstrap](https://react-bootstrap.github.io/) либо [material-ui](https://material-ui.com/)

Найти юзера - автора поста - можно по ключу поста `userId` в следующем эндпоинте: https://jsonplaceholder.typicode.com/users

Добавьте переключатель текущей темы dark/light, значение которой будет храниться в React.Context.
При смене темы, меняется оформление с тёмного на светлое и наоборот. Как именно - на ваше усмотрение.

Отображение постов:


  ![](https://user-images.githubusercontent.com/15867703/120227634-35c2d580-c252-11eb-8164-0812e29967b7.png)

При нажатии на автора поста появляется модально окно с инфо:

  ![](https://user-images.githubusercontent.com/15867703/120227648-39eef300-c252-11eb-85b5-985f52e16291.png)

При загрузке страницы постов появляется лоадинг бар (при медленном интернет соединении будет долго виден):

  ![](https://user-images.githubusercontent.com/15867703/120227651-3a878980-c252-11eb-83c3-5b56f271517a.png)
