# Тестовое задание на позицию React-разработчика
## iLink

(Прототип)[https://www.figma.com/file/99tZjh2X3Ymb5cma7aRVuG/demo?node-id=0%3A1]

### Основное флоу:
Пользователю отображается фраза на русском языке.
Он должен составить перевод фразы из предоставленного (облака) набора слов с помощью drag and drop.
При заполнении варианта перевода предоставить возможность проверить его корректность.
При успешном прохождении проверки, уведомить пользователя об этом и с помощью text to speech воспроизвести фразу, составленную пользователем.
При не прошедшей проверке также уведомить пользователя об ошибке (без воспроизведения фразы).
Менять последовательность слов облака ответа, т.е. если есть область, в которую мы перетаскиваем слова, должна быть возможность беспроблемно поменять в нём слова местами.

### В приложении должно быть предусмотрено:
Сортировка слов внутри (облака) набора вариантов фраз. Слово при перетаскивании его обратно в набор должно сначала встать в любое свободное место в наборе. А после этого с анимацией вернуться на то место, где оно было изначально (см. прототип).

### Обязательные требования:
TypeScript.
Использовать git.
Дедлайнов нет, но надо обязательно трекать время, потраченное на тестовое задание.
Для стилей использовать подход “css in js”(styled-components, linario, Emotion и т.д.)



### Плюсом будет:
Соблюдение git-flow.
Использование Atomic Design.
Минимизация размера бандла приложения.
Вы также можете получить набор фраз из нашего api https://academtest.ilink.dev/graphql 

Для выполнения тестового можно использовать все, что угодно (самое главное соблюдать пункты указанные выше).

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
