# TASKS

## Stage 0 — Foundation / Docs

- [x] Зафиксировать цель demo-сайта.
- [x] Описать позиционирование демонтажной компании.
- [x] Зафиксировать структуру главной страницы.
- [x] Описать визуальное направление.
- [x] Описать ограничения первого этапа.
- [x] Зафиксировать security-notes.
- [x] Указать placeholder-данные.
- [x] Отметить, что `500+ объектов` — редактируемая цифра в data-файле.

## Stage 1 — Next.js Skeleton

- [x] Создать базовый App Router skeleton.
- [x] Добавить TypeScript configuration.
- [x] Добавить Tailwind CSS configuration.
- [x] Создать `src/app/layout.tsx`.
- [x] Создать `src/app/page.tsx`.
- [x] Создать `src/app/globals.css`.
- [x] Создать `src/data/siteContent.ts`.
- [x] Создать базовые секции главной страницы.
- [x] Создать `ButtonLink` и `Section`.
- [x] Добавить SEO metadata.
- [x] Оставить формы frontend-заглушками.

## Проверки в текущей среде

- [x] Выполнена попытка `npm run lint`.
- [x] Выполнена попытка `npm run build`.
- [x] Установлены зависимости, создан `package-lock.json`.
- [x] Повторить `npm run lint`.
- [x] Повторить `npm run build`.

## Stage 2 — Контент и секции

- [x] Расширить тексты секций.
- [x] Вынести основной контент в `src/data/siteContent.ts`.
- [x] Собрать Header с desktop и mobile navigation.
- [x] Собрать HeroSection с frontend-only form block.
- [x] Собрать TrustStatsSection.
- [x] Добавить более подробные service-cards.
- [x] Собрать CalculatorSection как безопасную frontend-заглушку.
- [x] Собрать MaterialsSection.
- [x] Собрать полноценную PortfolioSection с demo-кейсами.
- [x] Добавить подписи, чтобы demo-кейсы не выглядели как реальные.
- [x] Собрать ProcessSection с numbered cards.
- [x] Уточнить pricing placeholders.
- [x] Собрать AboutSection.
- [x] Уточнить FAQ.
- [x] Собрать FinalCtaSection.
- [x] Собрать Footer.
- [x] Обновить README.md.
- [x] Обновить TASKS.md.

## Stage 3 — Visual Premium Polish

- [x] Усилить global styles и темный premium background.
- [x] Доработать focus-visible, selection и input states.
- [x] Усилить header: glass/dark panel, nav, CTA, mobile nav.
- [x] Усилить hero-блок: крупный заголовок, золотой акцент, industrial panel, форма.
- [x] Довести карточки доверия до более солидного вида.
- [x] Довести service cards до премиального industrial-стиля.
- [x] Сделать CalculatorSection визуально похожим на рабочий дорогой блок.
- [x] Улучшить MaterialsSection как compact industrial chips.
- [x] Усилить portfolio-секцию как главный продающий блок.
- [x] Улучшить ProcessSection как numbered cards.
- [x] Улучшить PricingSection с аккуратными placeholder-ценами.
- [x] Усилить AboutSection как solid company block.
- [x] Улучшить FAQ cards.
- [x] Усилить FinalCtaSection.
- [x] Улучшить Footer.
- [x] Добавить аккуратные hover/focus states.
- [x] Оставить реальные фото и финальные изображения на следующий этап.
- [x] Запустить dev-server для browser-проверки.
- [x] Проверить HTTP-ответ локальной страницы.
- [ ] Проверить интерфейс в браузере после установки Chrome/доступного browser runtime.

## Stage 4 — Адаптив, SEO, финальная демка

- [x] Проверить mobile/tablet/desktop responsive classes.
- [x] Проверить 360px mobile risks и поправить header/hero/portfolio.
- [x] Проверить large desktop grid risks.
- [x] Зафиксировать, что визуальная browser-проверка требует доступный Chrome.
- [x] Попробовать Playwright/Chrome DevTools и зафиксировать, что Chrome executable отсутствует.
- [x] Проверить alt/aria-label и placeholder image descriptions.
- [x] Проверить контраст и focus-visible states.
- [x] Проверить отсутствие настоящих form submit.
- [x] Улучшить SEO metadata.
- [x] Проверить placeholder/demo data.
- [x] Запустить `npm run lint`.
- [x] Запустить `npm run build`.
- [x] Выполнить финальный client demo pass в пределах доступной среды.

## Stage 4.5 — Client Demo Cleanup

- [x] Убрать CalculatorSection с главной страницы.
- [x] Убрать поля hero-формы и публичную отправку данных.
- [x] Заменить hero-форму на premium contact card для расчета по фото.
- [x] Вынести placeholder-ссылки WhatsApp, Telegram и телефона в `src/data/siteContent.ts`.
- [x] Обновить CTA в hero, header, services, pricing и final CTA.
- [x] Сократить mobile header navigation до ключевых ссылок без burger-логики.
- [x] Сделать portfolio wording клиентским и безопасным для демо.
- [x] Обновить README.md и security notes под Stage 4.5.
- [ ] Заменить placeholder-ссылки на реальные контакты перед запуском.

## Stage 4.6 — Black / Graphite / Metallic / Gold Redesign

- [x] Проанализировать текущую структуру проекта перед изменениями.
- [x] Адаптировать global styles и Tailwind tokens под black / graphite / metallic / gold direction.
- [x] Убрать синий цвет из доминирующей палитры.
- [x] Усилить header в premium black/metal style.
- [x] Усилить hero: крупнее типографика, gold divider, metallic accents.
- [x] Сделать contact card визуально похожей на premium service/process card.
- [x] Добавить Instagram placeholder в `src/data/siteContent.ts`.
- [x] Привести trust, services, portfolio, process, pricing, FAQ, final CTA и footer к единому graphite/metal/gold стилю.
- [x] Сохранить действующий на тот момент текстовый бренд без переноса чужого бренда из style reference.
- [x] Не добавлять backend, API routes, реальные формы, внешние скрипты или новые dependencies.
- [ ] Обновить client-preview screenshots после финальной визуальной browser-проверки.

## Stage 4.8 — Brand Rename + Logo Integration

- [x] Проанализировать текущую структуру проекта перед изменениями.
- [x] Вынести `brandName`, `brandSlogan`, `brandRegion` и `logoPath` в `src/data/siteContent.ts`.
- [x] Заменить публичный бренд на "ИнДустрия".
- [x] Добавить слоган "Освобождаем место для нового".
- [x] Подготовить `public/brand/industria-logo.jpg`.
- [x] Интегрировать логотип в Header.
- [x] Усилить Hero новым брендом, слоганом и brand-card.
- [x] Добавить логотип, бренд, слоган и описание в Footer.
- [x] Обновить metadata, Open Graph и Twitter metadata.
- [x] Обновить README.md, TASKS.md, docs и client-preview README.
- [x] Не добавлять backend, API routes, базу данных, авторизацию, новые dependencies или реальные отправки форм.
- [x] Проверить отсутствие старого публичного бренда в UI/metadata.

## Stage 4.10 — Client Feedback Round 1

- [x] Проанализировать текущую структуру проекта перед изменениями.
- [x] Убрать повтор региона из Header.
- [x] Поставить слоган "Освобождаем место для нового" рядом с логотипом в Header.
- [x] Очистить Hero от перегруженного повторения бренда и региона.
- [x] Обновить Hero под помещения, здания и сооружения под ключ.
- [x] Расширить услуги в `src/data/siteContent.ts`.
- [x] Добавить "Демонтаж зданий и сооружений".
- [x] Добавить "Расчистка участка".
- [x] Обновить MaterialsSection под любые материалы и типы демонтажа.
- [x] Уточнить процесс оценки: по фото предварительно, финально после осмотра объекта.
- [x] Обновить CTA wording под предварительный расчет по фото.
- [x] Обновить About под квартиры, коммерческие помещения, здания, сооружения и участки.
- [x] Убрать технические placeholder-формулировки из публичного footer/header/hero copy.
- [x] Обновить README.md и TASKS.md.
- [x] Не добавлять backend, API routes, базу данных, авторизацию, новые dependencies или реальные отправки форм.

## Stage 4.11 — Brand Wordmark Typography Polish

- [x] Создать reusable wordmark-компонент для "ИнДустрия".
- [x] Разделить wordmark визуально на metallic silver "Ин" и gold/bronze "Дустрия".
- [x] Добавить CSS-классы `.brand-wordmark`, `.brand-wordmark-silver`, `.brand-wordmark-gold` и `.brand-slogan`.
- [x] Применить wordmark в Header.
- [x] Применить wordmark в Hero visual brand area.
- [x] Применить wordmark в Footer.
- [x] Сохранить логотип, бренд, дизайн-систему, frontend-only CTA и отсутствие backend/API/forms.

## Stage 4.12 — Logo PNG + Service Wording Cleanup

- [x] Проанализировать текущую структуру проекта перед изменениями.
- [x] Добавить `logoPath` для `public/brand/industria-logo.png`.
- [x] Добавить `fallbackLogoPath` для `public/brand/industria-logo.jpg`.
- [x] Подготовить `BrandLogoMark` к безопасному PNG/JPG fallback без client-side onError.
- [x] Обновить metadata image под тот же logo fallback.
- [x] Заменить публичную квартирную формулировку на "Демонтажные работы в квартирах".
- [x] Обновить hero title на "Демонтаж помещений, зданий и сооружений под ключ".
- [x] Убрать дублирующую Telegram-кнопку из hero CTA.
- [x] Оставить WhatsApp, Telegram, Instagram и телефон в contact-card.
- [x] Сохранить баланс услуг: квартиры, коммерция, здания, сооружения, участки и вывоз мусора.
- [x] Обновить README.md и TASKS.md.
- [x] Не добавлять backend, API routes, базу данных, авторизацию, новые dependencies или реальные отправки форм.

## Stage 4.13 — Apply Final PNG Logo + Visual QA

- [x] Проанализировать текущую структуру проекта перед изменениями.
- [x] Проверить наличие `public/brand/industria-logo.png`.
- [x] Создать корректно названный `public/brand/industria-logo.png` из предоставленного PNG-ассета с двойным расширением.
- [x] Оставить `public/brand/industria-logo.jpg` как fallback.
- [x] Проверить, что `BrandLogoMark` использует `object-contain` и не растягивает изображение.
- [x] Проверить размеры логотипа в Header, Hero и Footer без изменения layout секций.
- [x] Зафиксировать, что текущий PNG содержит нарисованную шахматку вместо настоящей alpha-прозрачности.
- [x] Не исправлять проблему прозрачности кодом: нужен новый PNG с настоящей прозрачностью.
- [x] Обновить README.md и TASKS.md.
- [x] Не добавлять backend, API routes, базу данных, авторизацию, новые dependencies или реальные отправки форм.

## Stage 4.14 — Logo Usage Cleanup

- [x] Проанализировать текущую структуру проекта перед изменениями.
- [x] Добавить `logoMarkPath` для `public/brand/industria-mark.png`.
- [x] Создать корректно названный `public/brand/industria-mark.png` из предоставленного mark-ассета с двойным расширением.
- [x] Разделить использование full logo и compact mark.
- [x] Убрать full logo с текстом и слоганом из маленьких мест Header/Hero/Footer.
- [x] Сохранить premium wordmark "ИнДустрия" рядом со знаком без визуального дублирования названия.
- [x] Добавить CSS fallback mark для случая, когда transparent mark недоступен.
- [x] Проверить, что текущие PNG logo/mark не имеют alpha-прозрачности и содержат нарисованный checkerboard-фон.
- [x] Не исправлять прозрачность CSS-кодом: нужны новые PNG-ассеты с настоящей прозрачностью.
- [x] Обновить README.md и TASKS.md.
- [x] Не добавлять backend, API routes, базу данных, авторизацию, новые dependencies или реальные отправки форм.

## Stage 4.15 — Hero Logo Simplification + Mobile QA

- [x] Проанализировать текущую структуру проекта перед изменениями.
- [x] Упростить правый hero visual block.
- [x] Поместить существующий полный логотип `public/brand/industria-logo.png` в отдельную темную centered logo-panel.
- [x] Использовать основной полный логотип с шестеренкой, шаром, кирпичной стеной, надписью "ИнДустрия" и слоганом, а не compact mark.
- [x] Не создавать новый логотип и не менять файл логотипа.
- [x] Оставить Header компактным: mark, wordmark и слоган без большой logo-panel.
- [x] Сократить supporting copy в правой hero-card.
- [x] Проверить mobile layout на 390px на уровне responsive code review: Header, Hero, logo-panel, contact-card, services, materials, process и final CTA.
- [x] Зафиксировать, что mobile screenshots hero, services и final CTA нужно сделать вручную локально: Playwright и Chrome DevTools не нашли установленный Google Chrome.
- [x] Запустить `npm run lint`.
- [x] Запустить `npm run build`.
- [x] Запустить `npm run dev` и проверить `/` 200.
- [x] Выполнить security pass по `src`.
- [x] Не добавлять backend, API routes, базу данных, авторизацию, новые dependencies или реальные отправки форм.

## Stage 4.16 — Use Main Full Logo in Hero Panel

- [x] Проанализировать текущую структуру проекта перед изменениями.
- [x] Проверить существующие logo-файлы в `public/brand`.
- [x] Подготовить resolver для hero full logo: сначала `public/brand/industria-full-logo.png`, затем `public/brand/industria-full-logo.jpg`.
- [x] Использовать существующий основной full logo fallback `public/brand/industria-logo.jpg`, если `industria-full-logo.*` отсутствует.
- [x] Вставить основной полный логотип в hero logo panel как центральный visual element.
- [x] Сохранить dark / graphite background panel с `object-contain`, без растягивания и обрезания логотипа.
- [x] Упростить текст рядом с hero logo panel до одного badge и короткой подписи.
- [x] Оставить Header компактным: mark, wordmark и слоган без full logo.
- [x] Проверить mobile layout на 390px на уровне responsive code review.
- [x] Зафиксировать, что автоматический browser screenshot недоступен: Chrome executable не найден в текущей среде.
- [x] Запустить `npm run lint`.
- [x] Запустить `npm run build`.
- [x] Запустить `npm run dev` и проверить `/` 200.
- [x] Выполнить security pass по `src`.
- [x] Не создавать новый логотип и не менять файл логотипа.
- [x] Не добавлять backend, API routes, базу данных, авторизацию, новые dependencies или реальные отправки форм.

## Stage 4.17 — Hero Logo Panel Blend Fix

- [x] Проанализировать текущую структуру проекта перед изменениями.
- [x] Найти внутренний контейнер hero logo panel.
- [x] Убрать заметную светлую/серую рамку внутреннего logo panel.
- [x] Убрать светлый inset/edge highlight у внутреннего logo panel.
- [x] Сделать фон внутренней logo panel deep black / near-black.
- [x] Добавить мягкое затемнение краев full logo image, чтобы JPG сливался с черной panel без изменения файла.
- [x] Сохранить основной full logo и не менять Header.
- [x] Проверить mobile layout на 390px на уровне responsive code review.
- [x] Зафиксировать, что автоматический browser screenshot недоступен: Chrome executable не найден в текущей среде.
- [x] Запустить `npm run lint`.
- [x] Запустить `npm run build`.
- [x] Запустить `npm run dev` и проверить `/` 200.
- [x] Выполнить security pass по `src`.
- [x] Не добавлять backend, API routes, базу данных, авторизацию, новые dependencies или реальные отправки форм.

## Stage 4.18 — Real Portfolio Photos Integration + Contacts Polish

- [x] Проанализировать текущую структуру проекта перед изменениями.
- [x] Найти 10 реальных portfolio-фото в `public/images/portfolio`.
- [x] Заменить demo / placeholder portfolio-кейсы на реальные универсальные кейсы.
- [x] Вынести пути реальных portfolio-фото в `src/data/siteContent.ts`.
- [x] Обновить portfolio intro: убрать demo wording и описать реальные выполненные работы.
- [x] Переделать `PortfolioSection` на реальные изображения через `next/image`.
- [x] Добавить dark overlay на фото для читаемости текста.
- [x] Сохранить premium black / graphite / gold styling карточек.
- [x] Использовать все 10 фото без добавления новых ассетов.
- [x] Централизовать contact placeholders для phone, phone href, WhatsApp, Telegram и Instagram.
- [x] Проверить Header, contact card, final CTA и footer на использование централизованных contact values.
- [x] Оставить текущий logo state без глобальных изменений.
- [x] Проверить mobile layout portfolio на 390px на уровне responsive code review.
- [x] Зафиксировать, что автоматический browser screenshot недоступен: Chrome executable не найден в текущей среде.
- [x] Запустить `npm run lint`.
- [x] Запустить `npm run build`.
- [x] Запустить `npm run dev` и проверить `/` 200.
- [x] Выполнить security pass по `src`.
- [x] Не добавлять backend, API routes, базу данных, авторизацию, новые dependencies или реальные отправки форм.

## Stage 4.20 — Final Hero Cleanup + 6 Portfolio Cases + Real Contacts

- [x] Проанализировать текущую структуру проекта перед изменениями.
- [x] Убрать большой full-logo image и черную logo-panel из верхнего hero visual card.
- [x] Восстановить правый hero visual card как информационный брендовый блок: compact mark, wordmark, слоган, badge и короткие chips.
- [x] Оставить Header в текущем компактном виде: mark, wordmark и слоган.
- [x] Добавить реальные контакты Ильи и Вадима в `src/data/siteContent.ts`.
- [x] Показать телефон Ильи в Header.
- [x] Заменить кнопку "TG / WA" на контактную ссылку к `#photo-estimate`.
- [x] Убрать WhatsApp и Instagram из публичного UI.
- [x] Обновить photo estimate card: две компактные карточки Ильи и Вадима с Telegram и телефоном.
- [x] Обновить final CTA и Footer под оба контакта.
- [x] Скопировать 6 финальных изображений в `public/images/portfolio/industria-case-01.jpg` ... `industria-case-06.jpg`.
- [x] Оставить в portfolio ровно 6 финальных кейсов с согласованными заголовками, описаниями и tags.
- [x] Сохранить portfolio layout: desktop 3x2, tablet 2 columns, mobile 1 column.
- [x] Проверить mobile layout на 390px на уровне responsive code review.
- [x] Запустить `npm run lint`.
- [x] Запустить `npm run build`.
- [x] Запустить `npm run dev` и проверить `/` 200.
- [x] Выполнить security pass по `src`.
- [x] Зафиксировать, что автоматические mobile screenshots недоступны: Chrome executable не найден в текущей среде.
- [x] Не добавлять backend, API routes, базу данных, авторизацию, новые dependencies или реальные отправки форм.

## Stage 4.21 — Header Logo Mark Image Fix

- [x] Проанализировать текущую структуру проекта перед изменениями.
- [x] Найти компонент маленького logo mark в Header.
- [x] Не менять Hero, правую hero-card, portfolio, contacts, services, process и footer.
- [x] Добавить header-only режим для `BrandLogoMark`, чтобы Hero/Footer остались на прежнем поведении.
- [x] Заменить маленький Header mark на `public/brand/industria-full-logo-black.jpg`.
- [x] Сохранить рядом wordmark "ИнДустрия" и слоган "Освобождаем место для нового".
- [x] Затемнить контейнер Header mark до black background без светлой/серой подложки.
- [x] Настроить изображение в Header mark без растягивания, с аккуратным centered crop.
- [x] Проверить mobile 390px на уровне responsive code review.
- [x] Запустить `npm run lint`.
- [x] Запустить `npm run build`.
- [x] Запустить `npm run dev` и проверить `/` 200.
- [x] Проверить `/brand/industria-full-logo-black.jpg` 200.
- [x] Выполнить security pass по `src`.
- [x] Зафиксировать, что автоматическая mobile browser-проверка недоступна: Chrome executable не найден в текущей среде.
- [x] Не добавлять backend, API routes, базу данных, авторизацию, новые dependencies или реальные отправки форм.

## Stage 4.24 — Mobile Optimization + Sticky Mobile Header + Vercel Deploy Prep

- [x] Проанализировать текущую структуру проекта перед изменениями.
- [x] Сделать mobile Header fixed/sticky сверху с `top: 0`, высоким z-index, темным translucent background, backdrop blur и нижней border line.
- [x] Уплотнить mobile Header top row: compact logo mark, wordmark и короткая CTA-кнопка.
- [x] Расширить mobile nav до всех ключевых ссылок: услуги, цены, работы, этапы, о компании и контакты.
- [x] Сделать mobile nav горизонтальной scroll row внутри Header без горизонтального скролла всей страницы.
- [x] Добавить spacer под fixed mobile Header, чтобы hero не уходил под шапку.
- [x] Добавить anchor offset через global scroll-padding / scroll-margin для `#services`, `#pricing`, `#portfolio`, `#process`, `#about`, `#photo-estimate` и `#contacts`.
- [x] Проверить mobile 390px на уровне responsive code review: Header, Hero, Services, Materials, Portfolio, Process, About, FAQ, Final CTA и Footer.
- [x] Проверить desktop regression на уровне code review: Header, Hero, portfolio 3x2, contacts и premium style.
- [x] Проверить Vercel deploy prep: git status, env files, secrets, API routes/backend/forms submit, public image paths и technical artifacts.
- [x] Запустить `npm run lint`.
- [x] Запустить `npm run build`.
- [x] Запустить `npm run dev` и проверить `/` 200.
- [x] Выполнить security pass по `src`.
- [x] Выполнить UI string pass по `src`.
- [x] Добавить `client-preview/` в `.gitignore`, чтобы технические preview-артефакты не попадали в будущий deploy.
- [x] Зафиксировать, что `git status` в текущей папке не выполняется: директория не распознается как git repository.
- [x] Зафиксировать, что автоматическая mobile browser-проверка недоступна: Chrome executable не найден в текущей среде.
- [x] Не добавлять backend, API routes, базу данных, авторизацию, новые dependencies или реальные отправки форм.

## Stage 4.26 — Telegram Contact Buttons Clarity Fix

- [x] Проанализировать текущую структуру проекта перед изменениями.
- [x] Оставить контакты централизованными в `src/data/siteContent.ts`.
- [x] Добавить понятные Telegram/phone labels и aria labels для Ильи и Вадима.
- [x] Обновить contact-card "Предварительный расчет по фото": Telegram-кнопки показывают действие, handle, TG badge и внешний переход.
- [x] Обновить phone-кнопки в contact-card: действие "Позвонить" и номер мелким текстом.
- [x] Обновить final CTA: "Отправить фото в Telegram" и "Уточнить стоимость в Telegram" ведут на реальную Telegram-ссылку Ильи.
- [x] Добавить `target="_blank"` и `rel="noopener noreferrer"` для внешних Telegram-ссылок.
- [x] Проверить mobile 390px на уровне responsive code review: кнопки не сжимаются, не вылезают и остаются удобными для нажатия.
- [x] Проверить desktop regression на уровне code review: contact-card и final CTA сохранили premium black/gold стиль.
- [x] Запустить `npm run lint`.
- [x] Запустить `npm run build`.
- [x] Запустить `npm run dev` и проверить `/` 200.
- [x] Выполнить security pass по `src`.
- [x] Выполнить UI string pass по `src`.
- [x] Не менять глобальный дизайн, Hero layout, portfolio, логотип, backend/API/dependencies/forms.
- [x] Не возвращать WhatsApp/Instagram.

## Stage 5 — GitHub/Vercel prep

- [ ] Уточнить README перед публикацией.
- [ ] Добавить production checklist.
- [ ] Подготовить Vercel deployment notes.
- [ ] Проверить, что секреты и env-файлы не попадают в репозиторий.
- [ ] Выполнить визуальную browser-проверку на машине с установленным Chrome.
- [ ] Заменить PNG logo/mark на версии с настоящей прозрачностью без нарисованного checkerboard-фона.
- [ ] Заменить реальные контакты, соцсети, цены, фото, политику и юридические данные перед запуском.
