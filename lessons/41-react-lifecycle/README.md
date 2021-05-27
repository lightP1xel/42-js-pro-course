### Emoji
---
Выша задача реализовать поиск эмоджи по следующим данным - [json](./emojiList.json)

Шаги по реализации:
- настройте рабочую директорию (вы можете использовать `create-react-app` или настроить самостоятельно с помощью `webpack` и `babel`);
- файл `index.js` должен быть входной точкой в приложение, где вы вызываете функцию `ReactDOM.render`;
- компонент `Form` должен принимать строку поиска по емэджи (искать можно как по названию - `title`, так и по ключевым словам - `keywords`);
- компонент `EmojiCOntainer` должен рендерить другой компонент - `EmojiRow`;
- компонент `EmojiRow` должен отображать иконку эмоджи и название: 

    ![](https://user-images.githubusercontent.com/15867703/119798498-dd9f7280-bee3-11eb-9bd6-1ff1a94f669e.png)
    + вы можете отображать стандартную эмоджи либо ->;
    + отображать картинку по URL [![](https://data.jsdelivr.com/v1/package/npm/emojione/badge)](https://www.jsdelivr.com/package/npm/emojione) (используйте след путь : `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`, где `codePointHex` можно получить как `symbol.codePointAt(0).toString(16)`)
- используйте лимит отображения эмоджи - напрмер не больше 15 найденных! (можно реализовать дродаун с выбором лимита строк);
---
Финальный пример:


![Final example](https://user-images.githubusercontent.com/15867703/119798506-ded09f80-bee3-11eb-997a-b0a9ddc1d23b.gif)
