# ИнДустрия — демо-сайт

Демо-сайт для компании "ИнДустрия", которая выполняет демонтажные работы в Санкт-Петербурге и Ленобласти. Цель проекта — подготовить сильную frontend-демку для показа клиенту: премиальную, строгую, инженерную и удобную для дальнейшего наполнения реальными материалами.

## Текущий этап

Выполнены Stage 0, Stage 1, Stage 2, Stage 3, Stage 4, Stage 4.5, Stage 4.6, Stage 4.8, Stage 4.10, Stage 4.11, Stage 4.12, Stage 4.13, Stage 4.14, Stage 4.15, Stage 4.16, Stage 4.17, Stage 4.18, Stage 4.20, Stage 4.21, Stage 4.24, Stage 4.26, Stage 4.27.1, Stage 4.27, Stage 4.28 и Stage 4.29:

- зафиксированы проектные документы в `docs/`;
- создан базовый Next.js App Router skeleton;
- добавлена Tailwind CSS конфигурация;
- создана структура компонентов главной страницы;
- основной контент главной страницы вынесен в `src/data/siteContent.ts`;
- собраны все основные секции: header, hero, trust, services, materials, portfolio, process, pricing, about, FAQ, CTA и footer;
- добавлена адаптивная навигация без client-side burger-логики;
- расширены services, portfolio, process, pricing и FAQ data;
- выполнена визуальная премиальная полировка Stage 3;
- усилены global styles, header, hero, карточки услуг, квиз, портфолио, этапы, цены, about, FAQ, final CTA и footer;
- добавлены CSS-only industrial/blueprint placeholders под будущие фото;
- улучшены hover/focus states и темная premium-палитра;
- выполнен Stage 4 QA pass: адаптивные правки, SEO metadata, accessibility/security checks;
- уточнены mobile/header/hero/portfolio переносы для малых экранов;
- расширены Open Graph и Twitter metadata;
- выполнен Stage 4.5 client demo cleanup: блок калькулятора убран с главной страницы;
- hero-форма заменена на контактную карточку "Расчет по фото за 10-15 минут";
- CTA ведут на placeholder-ссылки WhatsApp, Telegram и телефон из `src/data/siteContent.ts`;
- на главной странице нет настоящих форм и отправки данных;
- выполнен Stage 4.6 visual redesign: сайт адаптирован под black / graphite / metallic / gold style reference;
- синий цвет убран из доминирующей палитры, основной визуальный язык стал графитовым, металлическим и золотым;
- портфолио использует demo-данные и не выдается за реальные кейсы;
- выполнен Stage 4.8 brand rename: публичный бренд заменен на "ИнДустрия";
- добавлен слоган "Освобождаем место для нового";
- логотип интегрирован из `public/brand/industria-logo.jpg`;
- старое название убрано из публичного интерфейса и metadata;
- выполнен Stage 4.10 client feedback pass;
- header/hero очищены от повторов региона, слоган перенесен рядом с логотипом в шапке;
- hero обновлен под оффер для помещений, зданий и сооружений под ключ;
- услуги расширены: добавлены демонтаж зданий/сооружений и расчистка участка;
- материалы описаны шире: любые материалы, смешанные конструкции и строительный мусор;
- процесс оценки уточнен: по фото дается предварительный ориентир, финальная стоимость фиксируется после осмотра объекта.
- выполнен Stage 4.11 brand wordmark polish: название "ИнДустрия" оформлено как metallic/gold wordmark;
- выполнен Stage 4.12 logo + wording cleanup;
- подготовлена поддержка PNG-логотипа `public/brand/industria-logo.png` с fallback на `public/brand/industria-logo.jpg`;
- квартирная услуга переименована в "Демонтажные работы в квартирах" / "Подготовка квартиры под ремонт";
- из hero убрана дублирующая Telegram-кнопка, связь оставлена в contact-card.
- выполнен Stage 4.13 final PNG logo QA;
- корректно названный PNG-логотип `public/brand/industria-logo.png` подключен как основной ассет через существующий resolver;
- JPG `public/brand/industria-logo.jpg` оставлен как fallback;
- зафиксировано, что текущий PNG содержит нарисованную шахматку вместо настоящей alpha-прозрачности, поэтому перед финальным запуском нужен новый прозрачный PNG.
- выполнен Stage 4.14 logo usage cleanup;
- добавлен `logoMarkPath` для отдельного compact mark `public/brand/industria-mark.png`;
- Header, Hero brand area и Footer больше не сжимают полный logo.png с текстом и слоганом до маленькой иконки;
- если прозрачный mark недоступен, используется компактный CSS mark рядом с premium wordmark "ИнДустрия";
- зафиксировано, что текущие PNG logo/mark остаются временными ассетами, потому что оба файла имеют нарисованный checkerboard-фон без alpha-прозрачности.
- выполнен Stage 4.15 hero logo simplification + mobile QA;
- правый hero visual block упрощен до отдельной темной logo-panel с центрированным полным логотипом `public/brand/industria-logo.png`;
- существующий полный PNG-логотип с шестеренкой, шаром, кирпичной стеной, надписью "ИнДустрия" и слоганом используется в hero panel без изменения файла;
- Header оставлен компактным: mark / wordmark / слоган без большой logo-panel;
- mobile QA на 390px выполнен на уровне responsive code review для Header, Hero, hero logo panel, contact-card, services, materials, process и final CTA;
- автоматические mobile screenshots не созданы: Playwright и Chrome DevTools не нашли установленный Google Chrome в текущей среде.
- выполнен Stage 4.16 use main full logo in hero panel;
- hero logo panel использует основной полный логотип компании как центральный visual element;
- resolver для hero full logo сначала ищет `public/brand/industria-full-logo.png`, затем `public/brand/industria-full-logo.jpg`, а в текущей папке использует существующий основной `public/brand/industria-logo.jpg` без изменения файла;
- full logo применяется только в hero visual block, Header оставлен компактным.
- выполнен Stage 4.17 hero logo panel blend fix;
- внутренний hero logo panel переведен в deep black без светлой рамки и серого inset-ореола;
- у full logo image добавлено мягкое затемнение краев, чтобы JPG визуально сливался с черной panel без изменения файла логотипа.
- выполнен Stage 4.18 real portfolio photos integration + contacts polish;
- demo portfolio заменен на 10 реальных фото работ из `public/images/portfolio/`;
- portfolio section использует реальные изображения с dark overlay, единым premium card styling и аккуратными case-подписями;
- контактные placeholder-поля централизованы в `src/data/siteContent.ts`: phone, phone href, WhatsApp, Telegram и Instagram;
- глобальный логотипный стейт намеренно не менялся на этом этапе.
- выполнен Stage 4.20 final hero cleanup + 6 portfolio cases + real contacts;
- правый hero visual card восстановлен как информационная brand-card с compact mark, wordmark, слоганом, badge и короткими chips;
- большой full-logo image и черная logo-panel убраны из верхнего hero visual card;
- portfolio сокращено до 6 финальных реальных кейсов с изображениями `public/images/portfolio/industria-case-01.jpg` ... `industria-case-06.jpg`;
- в Header, photo estimate card, final CTA и Footer интегрированы реальные контакты Ильи и Вадима;
- публичные UI-ссылки WhatsApp, Instagram и формулировка "TG / WA" убраны, оставлены Telegram и телефон;
- backend, API routes, база данных, зависимости и настоящие формы не добавлялись.
- выполнен Stage 4.21 header logo mark image fix;
- маленький квадратный logo mark в левом верхнем углу Header заменен на `public/brand/industria-full-logo-black.jpg`;
- контейнер Header mark затемнен до black background, без светлой/серой подложки и яркой рамки;
- рядом с Header mark сохранены wordmark "ИнДустрия" и слоган "Освобождаем место для нового";
- Hero, portfolio, контакты, services, process и footer на этом этапе не менялись.
- выполнен Stage 4.24 mobile optimization + sticky mobile header + Vercel deploy prep;
- mobile Header сделан fixed/sticky сверху с темным translucent background, blur, высоким z-index и тонкой border line;
- mobile nav расширена до всех ключевых якорей: услуги, цены, работы, этапы, о компании и контакты;
- добавлен global anchor offset для `section[id]` и `#photo-estimate`, чтобы заголовки не уходили под sticky Header;
- mobile QA выполнен на уровне responsive code review для Header, Hero, Services, Materials, Portfolio, Process, About, FAQ, Final CTA и Footer;
- проект проверен перед GitHub/Vercel deploy: build/lint/security pass, API routes/backend/forms submit не добавлялись.
- выполнен Stage 4.26 Telegram contact buttons clarity fix;
- Telegram-ссылки в contact-card и CTA визуально уточнены: показывают действие, слово Telegram, handle и внешний переход;
- phone CTA уточнены: кнопки показывают действие "Позвонить" и номер мелким текстом;
- final CTA обновлен на "Отправить фото в Telegram" и "Уточнить стоимость в Telegram";
- WhatsApp/Instagram не возвращались, backend/API/forms/dependencies не добавлялись.
- выполнен Stage 4.27.1 case photos folder structure;
- создана структура `public/images/cases/` для будущего объектного portfolio: один объект = отдельная папка;
- добавлены папки `object-01-building-demolition`, `object-02-industrial-height`, `object-03-village-houses` с `.gitkeep`;
- добавлена инструкция `public/images/cases/README_SORT_PHOTOS.md` для ручной сортировки фотографий объектов;
- текущий portfolio UI, компоненты, тексты и контакты не менялись.
- выполнен Stage 4.27 object portfolio auto sort + case pages;
- все прикрепленные фото сгруппированы в 3 объектные папки: комплексный демонтаж здания, высотные/промышленные работы, частные дома и строения;
- создан `src/data/caseStudies.ts` с 3 объектными кейсами, cover image, галереями, tags, work scope и результатом;
- portfolio на главной теперь показывает 3 объектные карточки, каждая ведет на отдельную страницу объекта;
- добавлены статические страницы `/works/building-demolition`, `/works/industrial-height-demolition`, `/works/private-houses-demolition`;
- страницы объектов используют `generateStaticParams`, metadata, `notFound()` и галерею на `next/image`;
- backend, API routes, database, dependencies и реальные формы не добавлялись.
- выполнен Stage 4.28 portfolio cards alignment + case gallery layout fix;
- portfolio cards на главной выровнены по высоте, CTA `Смотреть объект` прижат вниз внутри каждой карточки;
- case galleries на страницах объектов разделены на крупное первое фото и ровную responsive-сетку остальных фотографий;
- gallery tiles используют `object-cover`, чтобы вертикальные фото не создавали большие черные пустые поля;
- backend, API routes, database, dependencies и реальные формы не добавлялись.
- выполнен Stage 4.29 production portfolio regression fix;
- старый массив из 6 одиночных portfolio photo cards удален из `siteContent.portfolio`;
- публичный portfolio render окончательно использует только `src/data/caseStudies.ts` с 3 object case cards;
- страницы `/works/building-demolition`, `/works/industrial-height-demolition`, `/works/private-houses-demolition` сохранены как статические case pages;
- regression fix подготовлен к commit/push в `main` для Vercel auto-deploy.

## Стек

- Next.js App Router
- TypeScript
- Tailwind CSS
- React

Backend, база данных, авторизация, платежи и внешние скрипты на первом этапе не добавляются.

## Как запустить

```bash
npm install
npm run dev
```

После запуска сайт будет доступен на:

```text
http://localhost:3000
```

## Проверки

```bash
npm run lint
npm run build
```

Если зависимости еще не установлены, сначала выполните `npm install`.

В текущей среде зависимости уже установлены, `package-lock.json` создан.

Stage 4.29 checks: `npm run lint` проходит, `npm run build` проходит после запуска вне sandbox из-за `spawn EPERM` на Next worker-процессах, свежий `npm run dev -- -p 3001` поднят на `http://localhost:3001`, главная и страницы `/works/building-demolition`, `/works/industrial-height-demolition`, `/works/private-houses-demolition` отвечают HTTP 200.

Vercel deploy prep: `.env*` файлы в корне не найдены, API routes/backend/forms submit не добавлены, `client-preview/` добавлен в `.gitignore` как технический артефакт вне runtime сайта. `git status` в текущей папке не выполняется, потому что директория не распознается как git repository.

Browser screenshots в текущей среде ограничены: Playwright и Chrome DevTools не смогли стартовать из-за отсутствия установленного Google Chrome. Mobile screenshots hero, services и final CTA нужно выполнить вручную локально на машине с доступным Chrome.

## Где редактировать контент

Основной редактируемый контент находится в:

```text
src/data/siteContent.ts
```

Цифра доверия `500+ объектов` хранится как редактируемое значение в `siteContent.company.editableStats.completedObjects`. Если заказчик не подтвердит точную цифру, ее можно заменить на "сотни выполненных объектов" в одном data-файле.

В `siteContent.ts` также лежат:

- brandName, brandSlogan, brandRegion, fullLogoPath, fullLogoFallbackPath, logoPath, fallbackLogoPath и logoMarkPath;
- централизованные контакты Ильи и Вадима: phone, phone href, Telegram label и Telegram url;
- navigation;
- hero;
- trust stats;
- services;
- materials;
- portfolio cases;
- process steps;
- pricing placeholders;
- about;
- FAQ;
- final CTA;
- footer;
- contacts.

## Placeholder-данные

На текущем этапе placeholder-данными являются:

- цены;
- политика конфиденциальности;
- юридическая информация;
- подтверждение цифры `500+ объектов`.

Публичных форм отправки данных на главной странице нет. Контактные CTA ведут на реальные телефонные и Telegram-ссылки Ильи и Вадима.

Расчет по фото на текущем этапе описан как предварительная оценка. Финальную стоимость нужно подтверждать после живого осмотра объекта.

## Следующий этап

GitHub / Vercel redeploy:

- подготовить GitHub/Vercel handoff;
- сделать commit с объектным portfolio;
- запушить изменения в GitHub для автоматического redeploy на Vercel;
- заменить или подтвердить placeholder-данные перед реальным запуском;
- заменить текущий PNG-логотип на версию с настоящей прозрачностью без нарисованного checkerboard-фона;
- выполнить финальную визуальную browser-проверку на машине с доступным Chrome перед публикацией.

## Документы

- `docs/PROJECT_BRIEF.md` — цель, позиционирование и структура сайта;
- `docs/DESIGN_DIRECTION.md` — визуальное направление;
- `docs/SECURITY_NOTES.md` — ограничения и security-notes текущих frontend-этапов;
- `TASKS.md` — план стадий и текущий статус.
