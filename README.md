## Калькулятор

### 1. Task

Задание доступно по ссылке: [Ссылка на документ с заданием]<Innowise Lab Internship* Level 0* Custom calculator.pdf>

---

### 2. How to run the app

Установка и запуск приложения:

```bash
# Установить зависимости
npm install

# Собрать приложение
npm run build

# Запустить локальный сервер (если требуется)
npm run start
```

> Сборка производится с помощью Webpack. Результат находится в папке `dist/`.

---

### 3. Структура проекта

```
project/
├── .husky/                      # Husky хуки
|   ├── commit-msg
│   └── pre-commit                      
├── node_modules/                # Зависимости
├── src/                         # Исходный код
│   ├── command/                 # Паттерн Command
│   │   ├── AdvancedMathCommand.js
│   │   ├── ClearCommand.js
│   │   ├── Command.js
│   │   ├── EqualsCommand.js
│   │   ├── InputDigitCommand.js
│   │   ├── MemoryCommands.js
│   │   ├── OperatorCommand.js
│   │   ├── PercentCommand.js
│   │   └── ToggleSignCommand.js
│   │   
│   │
│   ├── core/                    # Расширения ядра
|   |    └── CommandInvoker.js  
│   ├── math/                    # Математические операции
│   │   └── calculate.js
│   ├── test/                    # Тесты (Jest)
│   │   └── math.test.js
│   ├── ui/                      # Работа с DOM и отображением
│   │   └── display.js
│   ├── index.html               # HTML-файл
│   ├── main.js                  # Главный файл, связывающий UI и логику
│   ├── state.js                 # Хранилище состояния
│   ├── style.css                # Стили
│   └── theme.js                 # Переключение темы (тёмная/светлая)
│
├── .babelrc                     # Babel-конфиг
├── .gitignore                   # Игнорирование файлов для Git  
├── .prettierignore              # Игнорирование файлов для Prettier
├── .prettierrc                 # Настройки Prettier
├── commitlint.config.js        # Настройки commitlint
├── eslint.config.mjs           # Настройки ESLint
├── package.json
├── README.md                    # Документация проекта (этот файл)
├── webpack.config.js           # Конфигурация Webpack
└── Innowise Lab Internship_...pdf # PDF с заданием
```

---

### 4. Дополнительно

- Реализация **Command Pattern** с поддержкой `undo`
- Поддержка операций:
     Сложение, вычитание, умножение, деление
     Возведение в степень, корень, факториал и др.
- Память (MC, MR, M+, M-)
- Поддержка светлой и тёмной темы

---

### Тестирование

Для запуска unit-тестов используется Jest:

```bash
npm run test
```

> Настроено окружение `jsdom`, преобразование через `babel-jest`.

---

### Качество кода

Инструменты:

- **ESLint** — анализ кода
- **Prettier** — форматирование
- **Husky + lint-staged** — pre-commit хуки
- **Commitlint** — проверка conventional commits

```bash
# Проверка линтинга
npm run lint

# Форматирование файлов
npm run format
```

---
