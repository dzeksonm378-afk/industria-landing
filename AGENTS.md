# ИнДустрия Landing — Agent Instructions

## Project type

Это статический маркетинговый сайт на Next.js App Router для компании “ИнДустрия”.

Проект сейчас не должен иметь backend, API routes, базу данных, авторизацию, платежи или настоящую отправку форм без отдельной явной задачи.

Stage 5.0 explicitly allows one server-side API route, `/api/estimate`, only for the AI estimate MVP foundation. It must stay limited to validated multipart input, temporary rule-based pricing, no file storage, no database, no Telegram send, and no real Gemini call until a later explicit stage.

Stage 5.1 explicitly allows server-side Gemini REST calls only from `src/server/estimate/gemini-estimate.ts`. Gemini may analyze visible photo features, but it must not calculate the final price. Pricing stays in `src/server/estimate/estimate-rules.ts`, photos must not be stored, and name/contact must not be sent to Gemini.

## Existing global cybersecurity skills

На машине доступны глобальные cybersecurity skills:

`C:\Users\Утка\.agents\skills`

В этой папке находится большая коллекция `SKILL.md` файлов.

Перед задачами, которые касаются безопасности, нужно выбрать и прочитать релевантные skills из этой папки.

Security-sensitive задачи включают:

* API routes;
* forms;
* user input;
* validation;
* auth;
* sessions;
* cookies;
* secrets;
* env variables;
* deployment;
* headers;
* XSS;
* CSRF;
* SSRF;
* redirects;
* file upload;
* external integrations;
* Telegram/CRM/backend;
* database;
* payment;
* admin panels.

Не нужно читать все 754 skills каждый раз. Нужно выбирать релевантные по теме задачи.

## Main development rules

* Не переписывать проект с нуля.
* Перед изменениями смотреть существующую структуру.
* Работать маленькими stage-изменениями.
* Не ломать уже работающие секции.
* Не менять несвязанные части проекта.
* Не добавлять новые зависимости без явной необходимости.
* Не добавлять backend/API/forms без явной задачи.
* `/api/estimate` is the only currently approved API route, and only for the Stage 5 estimate MVP.

## Security rules

Запрещено без явной задачи:

* backend;
* API routes;
* database;
* auth;
* payments;
* real form submit;
* external scripts;
* new dependencies.

Запрещено всегда:

* `eval`;
* `dangerouslySetInnerHTML`;
* secrets/keys/tokens/passwords in repo;
* offensive tooling;
* phishing/malware/C2/exploit automation;
* unsafe user-data handling.

## Frontend safety

* CTA должны быть обычными ссылками на Telegram/tel или якоря.
* Не использовать настоящие `<form>` submit без явной задачи.
* Не добавлять `fetch`/`process.env` в `src` без явной задачи.
* Если задача явно требует env variables, читать их только server-side и не использовать `NEXT_PUBLIC_` для секретов.
* `GEMINI_API_KEY` must stay server-side only. Never expose it through `NEXT_PUBLIC_`, client components, returned JSON, logs, or docs.
* External `fetch` is allowed only server-side for the approved Gemini estimate integration. Client-side `fetch` should stay limited to `/api/estimate`.
* Не добавлять API/backend случайно.
* Не хранить реальные секреты, токены, пароли или приватные данные в репозитории.

## Required checks before final report

Перед финальным отчётом выполнять, если возможно:

* `npm run lint`
* `npm run build`

Также делать security pass по `src`:

* нет `eval`;
* нет `dangerouslySetInnerHTML`;
* нет `console.log`;
* нет `fetch`;
* нет `process.env` без явной задачи и server-side ограничения;
* нет API routes;
* нет настоящих form submit/onSubmit;
* нет секретов.

UI string pass:

В публичном UI не должно быть:

* `WhatsApp`;
* `Instagram`;
* `TG / WA`;
* `+7 (__)__-__`;
* `Стройкид`;
* `Строй Кид`;
* `подключ`.

## Reporting format

Финальный отчёт всегда давать структурой:

1. Что создано
2. Что изменено
3. Какие cybersecurity skills были проверены, если задача security-sensitive
4. Какие проверки выполнены
5. Что НЕ было сделано
6. Следующий шаг
