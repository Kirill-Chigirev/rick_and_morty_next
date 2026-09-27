> **Обратная связь:** пожалуйста, после выполнения задания, [оставьте отзыв о проекте](https://forms.gle/enhBc1wF42vnMFgL6) (2–3 минуты). Это помогает улучшить README и задания.

# Rick and Morty React

🌐 **Live demo:** https://it-ptitsa-mentor.github.io/demos/Rick-And-Morty-React/

> Этот репозиторий — **private fork** (`it-ptitsa/rick_and_morty_react`), GitHub Pages на нём недоступен. Live-версия опубликована из публичного mirror [Rick-And-Morty-Live](https://github.com/it-ptitsa-mentor/Rick-And-Morty-Live). Чтобы включить Pages здесь: Settings → Danger Zone → **Leave fork network** → сделать repo public.

Финальный проект: каталог персонажей Rick and Morty — поиск, фильтры, избранное и несколько страниц на Next.js.

## О чём проект

Вы собираете **каталог персонажей** по [Rick and Morty API](https://rickandmortyapi.com/documentation): поиск, фильтр по статусу, постраничный вывод, избранное. Сначала чистые функции и запросы к API, потом карточки и списки, в конце — полный сценарий с загрузкой, ошибкой и пустым результатом.

К концу всех задач приложение умеет:

- писать **чистые** функции сортировки и фильтрации (без мутации массива);
- загружать персонажей через `fetch` с обработкой ошибок;
- собрать карточку и список, затем главную и **Избранное** с Redux и React Query.

## Как должно выглядеть

Ориентируйтесь на референсы в `__fixtures__` (стили могут отличаться; **тексты кнопок и подписи** — как в тестах):

![Референс 1](./__fixtures__/reference1.png)
![Референс 2](./__fixtures__/reference.jpg)

## Теория (перед практикой)

- [Buildin: React: Redux Toolkit](https://buildin.ai/cfe21cf1-2d29-4fd5-a110-46e114189b21)
- [Ламков — React курс 2025 (плейлист, 22 урока)](https://www.youtube.com/playlist?list=PL0MUAHwery4omH4GyVQ-lI2R326tOdN7A)
- [Ламков, урок 14: API: fetch и json-server](https://youtu.be/sKb3VoX9vF4)
- [Ламков, урок 19: useReducer и состояние без Redux](https://youtu.be/B72gtyI0kPI)
- [Next.js: App Router](https://nextjs.org/docs/app)
- [Rick and Morty API](https://rickandmortyapi.com/documentation)
- [React: TypeScript](https://react.dev/learn/typescript)

> **Задача 5 и React Query:** шаги 1–4 готовят утилиты, API и компоненты. На **задаче 5** подключите **TanStack Query** (хук useQuery) для загрузки персонажей — следующий уровень после «ручного» fetch из Todo/CRUD.


## Используемые инструменты

Ссылки на документацию библиотек и API из шаблона — можно подсматривать во время работы.

- [Next.js](https://nextjs.org/docs)
- [React](https://react.dev/learn)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Redux Toolkit](https://redux-toolkit.js.org/tutorials/quick-start)
- [TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview)
- [React Hook Form](https://react-hook-form.com/get-started)
- [Zod](https://zod.dev/)
- [Rick and Morty API](https://rickandmortyapi.com/documentation)

## Запуск

```bash
npm install
npm run dev          # Next.js, порт 3000
```

Откройте [http://localhost:3000](http://localhost:3000). Для отладки без Next: `npm run dev:vite` (порт 5173) — опционально.

Перед задачей 5 проверьте типы: `npm run typecheck`.

## Как сдать

1. Примите assignment в GitHub Classroom.
2. Клонируйте репозиторий и выполняйте задачи **по порядку**.
3. После каждой задачи: `npm test`.
4. Запушьте решение до дедлайна.

## Как работать с тестами

- Задачи **1–4** → `npm test -- --run --testNamePattern=step1` … `step4` (утилиты, API, компоненты).
- Задача **5** → интеграция: `npm test -- --run --testNamePattern=step5` или `npm run test:feature` (= `test:layers`).
- Перед сдачей: `npm run test:ci`. Слои отдельно: `test:unit`, `test:integration`, `test:critical-flow`, `test:error-edge`.
- Если README и автопроверка расходятся — ориентируйтесь на **тексты кнопок и подписи на экране** из блока «На экране».

## UI-библиотеки (с 8-й недели)

С **этого проекта** можно подключать готовые библиотеки стилей и компонентов. **Подписи кнопок, тексты и логика из тестов — без изменений**; меняется только внешний вид.

- [Bootstrap](https://getbootstrap.com/docs/)
- [Ant Design](https://ant.design/docs/react/introduce)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Material UI (MUI)](https://mui.com/material-ui/getting-started/)

Установка и подключение — по документации выбранной библиотеки.

## Какие файлы можно менять

- `src/utils/sort.ts`
- `src/utils/filter.ts`
- `src/utils/types.ts`
- `src/api/rickApi.ts`
- `src/components/CharacterCard.tsx`
- `src/components/CharacterList.tsx`
- `src/components/AppShell.tsx`
- `src/pages/Home.tsx`
- `src/pages/Favorites.tsx`
- `src/store/favoritesSlice.ts`
- `src/store/index.ts`
- `src/store/hooks.ts`
- `src/store/persistence.ts`
- `src/providers/AppProviders.tsx`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/favorites/page.tsx`
- `src/app/providers.tsx`
- `src/app/globals.css`
- `src/App.tsx`

Нельзя изменять:

- `src/**/__tests__/`
- `src/__tests__/`
- `__tests__/`
- `__fixtures__/`
- `package.json`
- `tsconfig.json`
- `next.config.ts`
- `.github/`

## Задание

Выполняйте задачи **по порядку** — каждая следующая опирается на предыдущую. После каждой задачи запускайте `npm test`.

---

## 1 задача

Перед UI вы напишете две чистые функции на TypeScript: они упорядочат и отфильтруют массив персонажей. Браузер и React пока не нужны — достаточно зелёной автопроверки.

**Уже готово в репозитории:**

- Тип **`Character`** уже описан в **`src/utils/types.ts`**.
- Заготовки файлов — **`src/utils/sort.ts`** и **`src/utils/filter.ts`**.

**Ваша работа:**

1. В **`src/utils/sort.ts`** реализуйте и экспортируйте **`sortCharacters(characters, criteria)`**.
2. Функция возвращает **новый** массив — исходный **не меняйте**.
3. При `criteria === "name"` — сортировка по имени в алфавитном порядке.
4. При `"status"` — сначала Alive, затем Dead, затем unknown; при равном статусе — по имени.
5. В **`src/utils/filter.ts`** реализуйте и экспортируйте **`filterCharacters(characters, filter)`**.
6. При `"all"` верните копию всего массива; при `"alive"`, `"dead"`, `"unknown"` — только персонажей с подходящим статусом (регистр не важен).

**На экране (проверяет тест):**

- на этом шаге **UI нет** — зелёная автопроверка подтверждает логику утилит.

**Примеры:**

```
const chars = [
  { id: 1, name: 'Zelda', status: 'Dead' },
  { id: 2, name: 'Morty', status: 'Alive' },
  { id: 3, name: 'Rick', status: 'Alive' },
  { id: 4, name: 'Summer', status: 'unknown' },
];

sortCharacters(chars, 'name')
// → Morty, Rick, Summer, Zelda

sortCharacters(chars, 'status')
// → Alive, Alive, Dead, unknown

filterCharacters(chars, 'alive')
// → только Rick и Morty

filterCharacters(chars, 'all')
// → все четверо (новый массив той же длины)
```

**Если застряли:**

- Сначала добейтесь зелёной автопроверки утилит, потом подключайте их в **`Home.tsx`** на финальном шаге этого проекта.

Проверка: `npm test -- --run --testNamePattern=step1`.

---

## 2 задача

Данные персонажей придут с [Rick and Morty API](https://rickandmortyapi.com/documentation). Вы напишете функции, которые собирают адрес запроса и вызывают `fetch` — пока без React-компонентов.

**Уже готово в репозитории:**

- Базовый URL: `https://rickandmortyapi.com/api/character/`.
- В автопроверке `fetch` подставлен заранее — реальный сервер для `npm test` не нужен.

**Ваша работа:**

1. В **`src/api/rickApi.ts`** реализуйте **`fetchCharacters(params?)`** с необязательными **`page`** и **`name`**.
2. Запрос идёт на `/api/character/` с query-параметрами; верните объект с полями **`info`** и **`results`**.
3. При `404` — `throw new Error('Not found')`; при другом неуспешном статусе — **`API error: <код>`**; при сетевой ошибке — **`Network error`**.
4. Реализуйте **`fetchCharactersByIds(ids)`**: пустой массив → `[]` без запроса; один id → один объект; несколько id → массив, URL вида `/character/1,2`.

**На экране (проверяет тест):**

- на этом шаге **UI нет** — зелёная автопроверка вызывает ваши функции напрямую.

**Если застряли:**

- Тексты ошибок должны быть ровно: **Not found**, **API error: <код>**, **Network error**.
- Для нескольких id адрес выглядит как `/character/1,2` — id через запятую в одном запросе.

Проверка: `npm test -- --run --testNamePattern=step2`.

---

## 3 задача

Один персонаж на экране целиком: имя, статус, вид, происхождение, фото и кнопка избранного. Запросов к API внутри карточки быть не должно — данные приходят через props.

**Уже готово в репозитории:**

- Тип **`Character`** — в **`src/utils/types.ts`**.
- Файл **`src/components/CharacterCard.tsx`** — ваша основная точка работы.

**Ваша работа:**

1. Примите props: **`character`**, необязательные **`isFavorite`** и **`onToggleFavorite(id)`**.
2. Покажите **имя**, **status**, **species**, **gender**, **origin** (если есть) и **фото** с `alt`, равным имени персонажа.
3. Если `species` или `gender` нет — выведите **Unknown**.
4. Не в избранном — кнопка **☆ Добавить**; в избранном — **★ Избранное** (подписи не меняйте).
5. По клику вызывайте **`onToggleFavorite(character.id)`**.

**На экране (проверяет тест):**

- имя, status, species, gender, origin;
- `<img alt={имя}>` с `src` персонажа;
- кнопка **☆ Добавить** или **★ Избранное**.

**Если застряли:**

- Если `image` нет — `<img>` не рендерите.

Проверка: `npm test -- --run --testNamePattern=step3`.

---

## 4 задача

Список соединяет несколько карточек: вы пробрасываете данные и обработчик избранного в каждую **`CharacterCard`**. Пустой результат — отдельная заглушка.

**Уже готово в репозитории:**

- **`CharacterCard`** уже готов (шаг выше).
- **`CharacterList.tsx`** принимает массив персонажей, массив id избранного и колбэк **`onToggleFavorite`**.

**Ваша работа:**

1. Для каждого персонажа отрисуйте **`CharacterCard`** с уникальным **`key`** (по `id`).
2. Передайте в карточку флаг избранного: `favorites.includes(character.id)`.
3. Пробросьте **`onToggleFavorite`** в каждую карточку.
4. Если массив пустой — только текст **«Нет персонажей»**, без карточек.

**На экране (проверяет тест):**

- по одной карточке на каждого персонажа из массива;
- пустой массив → **«Нет персонажей»**;
- карточки внутри контейнера с классом **`card`**.

**Если застряли:**

- Класс **`card`** на обёртке каждой карточки — так проще стилизовать список.

Проверка: `npm test -- --run --testNamePattern=step4`.

---

## 5 задача

Финальная сборка: главная с поиском, фильтром и страницами; избранное сохраняется между визитами; навигация **Главная** / **Избранное**.

**Уже готово в репозитории:**

- Утилиты, API и компоненты из предыдущих шагов готовы.
- Провайдеры — **`src/providers/AppProviders.tsx`**; шапка — **`src/components/AppShell.tsx`**; страницы — **`src/pages/Home.tsx`**, **`src/pages/Favorites.tsx`**.
- Маршруты — в **`src/app/page.tsx`** и **`src/app/favorites/page.tsx`**.

**Ваша работа:**

1. В **`favoritesSlice`** и **`persistence.ts`** храните id избранного и синхронизируйте с **`localStorage`**.
2. На **`Home.tsx`**: загрузите персонажей, добавьте поиск по имени, фильтр статуса, сортировку, пагинацию и **`CharacterList`**.
3. Перед отрисовкой примените **`filterCharacters`** и **`sortCharacters`** к данным с API.
4. Пока данные грузятся — индикатор; при ошибке — сообщение; пустой результат — текст-заглушка.
5. На **`Favorites.tsx`** загрузите сохранённых через **`fetchCharactersByIds`**; пусто — **«Нет избранных персонажей»**.
6. В **`AppShell.tsx`** — навигация **Главная** / **Избранное**; заголовок **Rick and Morty Explorer**.
7. Перед сдачей выполните **`npm run typecheck`**.

**На экране (проверяет тест):**

- заголовок **Rick and Morty Explorer** и ссылка **Избранное**;
- кнопки **☆ Добавить** / **★ Избранное** — подписи не меняйте;
- переход на **Избранное** открывает страницу с тем же заголовком.

**Если застряли:**

- Не меняйте тексты кнопок избранного — автопроверка сверяет их буква в букву.
- Загрузку списка на главной удобно оформить через React Query и **`fetchCharacters`**.
- Перед сдачей: `npm run test:ci` и `npm run typecheck`.

Проверка: `npm test -- --run --testNamePattern=step5` или `npm run test:layers`; перед сдачей — `npm run test:ci`.

---


> Не менять `__fixtures__/` (референсные скриншоты). Стили — в `src/app/globals.css`, можно дорабатывать под себя.