# vue

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates.

However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can run `Volar: Switch TS Plugin on/off` from VS Code command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

```
full-version-pure
├─ .editorconfig
├─ .eslintrc-auto-import.json
├─ .eslintrc.cjs
├─ .gitignore
├─ .npmrc
├─ .nvmrc
├─ .stylelintrc.json
├─ auto-imports.d.ts
├─ components.d.ts
├─ index.html
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ pnpm-lock.yaml
├─ public
│  ├─ favicon.ico
│  ├─ images
│  │  └─ avatars
│  │     ├─ avatar-1.png
│  │     └─ avatar-2.png
│  └─ loader.css
├─ README.md
├─ src
│  ├─ @core
│  │  ├─ components
│  │  │  ├─ app-form-elements
│  │  │  │  ├─ AppAutocomplete.vue
│  │  │  │  ├─ AppCombobox.vue
│  │  │  │  ├─ AppDateTimePicker.vue
│  │  │  │  ├─ AppSelect.vue
│  │  │  │  ├─ AppTextarea.vue
│  │  │  │  ├─ AppTextField.vue
│  │  │  │  ├─ CustomCheckboxes.vue
│  │  │  │  ├─ CustomCheckboxesWithIcon.vue
│  │  │  │  ├─ CustomCheckboxesWithImage.vue
│  │  │  │  ├─ CustomRadios.vue
│  │  │  │  ├─ CustomRadiosWithIcon.vue
│  │  │  │  └─ CustomRadiosWithImage.vue
│  │  │  ├─ AppBarSearch.vue
│  │  │  ├─ AppDrawerHeaderSection.vue
│  │  │  ├─ AppStepper.vue
│  │  │  ├─ BuyNow.vue
│  │  │  ├─ cards
│  │  │  │  ├─ AppCardActions.vue
│  │  │  │  ├─ AppCardCode.vue
│  │  │  │  ├─ CardStatisticsHorizontal.vue
│  │  │  │  └─ CardStatisticsVertical.vue
│  │  │  ├─ CardStatisticsVerticalSimple.vue
│  │  │  ├─ CustomizerSection.vue
│  │  │  ├─ DialogCloseBtn.vue
│  │  │  ├─ I18n.vue
│  │  │  ├─ MoreBtn.vue
│  │  │  ├─ Notifications.vue
│  │  │  ├─ ScrollToTop.vue
│  │  │  ├─ Shortcuts.vue
│  │  │  ├─ TheCustomizer.vue
│  │  │  ├─ ThemeSwitcher.vue
│  │  │  └─ TiptapEditor.vue
│  │  ├─ composable
│  │  │  ├─ createUrl.js
│  │  │  ├─ useCookie.js
│  │  │  ├─ useGenerateImageVariant.js
│  │  │  ├─ useResponsiveSidebar.js
│  │  │  └─ useSkins.js
│  │  ├─ enums.js
│  │  ├─ index.js
│  │  ├─ initCore.js
│  │  ├─ libs
│  │  │  ├─ apex-chart
│  │  │  │  └─ apexCharConfig.js
│  │  │  └─ chartjs
│  │  │     ├─ chartjsConfig.js
│  │  │     └─ components
│  │  │        ├─ BarChart.js
│  │  │        ├─ BubbleChart.js
│  │  │        ├─ DoughnutChart.js
│  │  │        ├─ LineChart.js
│  │  │        ├─ PolarAreaChart.js
│  │  │        ├─ RadarChart.js
│  │  │        └─ ScatterChart.js
│  │  ├─ scss
│  │  │  ├─ base
│  │  │  │  ├─ libs
│  │  │  │  │  ├─ vuetify
│  │  │  │  │  │  ├─ _index.scss
│  │  │  │  │  │  ├─ _overrides.scss
│  │  │  │  │  │  └─ _variables.scss
│  │  │  │  │  └─ _perfect-scrollbar.scss
│  │  │  │  ├─ placeholders
│  │  │  │  │  ├─ _default-layout-horizontal-nav.scss
│  │  │  │  │  ├─ _default-layout-vertical-nav.scss
│  │  │  │  │  ├─ _default-layout.scss
│  │  │  │  │  ├─ _horizontal-nav.scss
│  │  │  │  │  ├─ _index.scss
│  │  │  │  │  ├─ _misc.scss
│  │  │  │  │  ├─ _nav.scss
│  │  │  │  │  └─ _vertical-nav.scss
│  │  │  │  ├─ skins
│  │  │  │  │  ├─ _bordered.scss
│  │  │  │  │  └─ _index.scss
│  │  │  │  ├─ _components.scss
│  │  │  │  ├─ _dark.scss
│  │  │  │  ├─ _default-layout-w-horizontal-nav.scss
│  │  │  │  ├─ _default-layout-w-vertical-nav.scss
│  │  │  │  ├─ _default-layout.scss
│  │  │  │  ├─ _horizontal-nav.scss
│  │  │  │  ├─ _index.scss
│  │  │  │  ├─ _layouts.scss
│  │  │  │  ├─ _misc.scss
│  │  │  │  ├─ _mixins.scss
│  │  │  │  ├─ _route-transitions.scss
│  │  │  │  ├─ _utilities.scss
│  │  │  │  ├─ _utils.scss
│  │  │  │  ├─ _variables.scss
│  │  │  │  └─ _vertical-nav.scss
│  │  │  └─ template
│  │  │     ├─ index.scss
│  │  │     ├─ libs
│  │  │     │  ├─ apex-chart.scss
│  │  │     │  ├─ full-calendar.scss
│  │  │     │  ├─ shepherd.scss
│  │  │     │  ├─ swiper.scss
│  │  │     │  └─ vuetify
│  │  │     │     ├─ index.scss
│  │  │     │     ├─ overrides.scss
│  │  │     │     └─ _variables.scss
│  │  │     ├─ pages
│  │  │     │  ├─ misc.scss
│  │  │     │  └─ page-auth.scss
│  │  │     ├─ placeholders
│  │  │     │  ├─ _default-layout-horizontal-nav.scss
│  │  │     │  ├─ _default-layout-vertical-nav.scss
│  │  │     │  ├─ _horizontal-nav.scss
│  │  │     │  ├─ _index.scss
│  │  │     │  ├─ _nav.scss
│  │  │     │  └─ _vertical-nav.scss
│  │  │     ├─ skins
│  │  │     │  ├─ _bordered.scss
│  │  │     │  └─ _index.scss
│  │  │     ├─ _components.scss
│  │  │     ├─ _default-layout-w-horizontal-nav.scss
│  │  │     ├─ _default-layout-w-vertical-nav.scss
│  │  │     ├─ _horizontal-nav.scss
│  │  │     ├─ _utilities.scss
│  │  │     ├─ _variables.scss
│  │  │     └─ _vertical-nav.scss
│  │  ├─ stores
│  │  │  └─ config.js
│  │  ├─ types.js
│  │  └─ utils
│  │     ├─ formatters.js
│  │     ├─ helpers.js
│  │     ├─ plugins.js
│  │     ├─ validators.js
│  │     └─ vuetify.js
│  ├─ @fake-db
│  ├─ @layouts
│  │  ├─ components
│  │  │  ├─ HorizontalNav.vue
│  │  │  ├─ HorizontalNavGroup.vue
│  │  │  ├─ HorizontalNavLayout.vue
│  │  │  ├─ HorizontalNavLink.vue
│  │  │  ├─ HorizontalNavPopper.vue
│  │  │  ├─ TransitionExpand.vue
│  │  │  ├─ VerticalNav.vue
│  │  │  ├─ VerticalNavGroup.vue
│  │  │  ├─ VerticalNavLayout.vue
│  │  │  ├─ VerticalNavLink.vue
│  │  │  ├─ VerticalNavSectionTitle.vue
│  │  │  └─ VNodeRenderer.jsx
│  │  ├─ components.js
│  │  ├─ config.js
│  │  ├─ enums.js
│  │  ├─ index.js
│  │  ├─ plugins
│  │  │  └─ casl.js
│  │  ├─ stores
│  │  │  └─ config.js
│  │  ├─ styles
│  │  │  ├─ index.scss
│  │  │  ├─ _classes.scss
│  │  │  ├─ _default-layout.scss
│  │  │  ├─ _global.scss
│  │  │  ├─ _mixins.scss
│  │  │  ├─ _placeholders.scss
│  │  │  ├─ _rtl.scss
│  │  │  └─ _variables.scss
│  │  ├─ symbols.js
│  │  ├─ types.js
│  │  └─ utils.js
│  ├─ App.vue
│  ├─ assets
│  │  ├─ icons
│  │  └─ styles
│  │     ├─ styles.scss
│  │     └─ variables
│  │        ├─ _template.scss
│  │        └─ _vuetify.scss
│  ├─ components
│  │  ├─ AppLoadingIndicator.vue
│  │  ├─ AppPricing.vue
│  │  ├─ AppSearchHeader.vue
│  │  └─ ErrorHeader.vue
│  ├─ composables
│  │  └─ useApi.js
│  ├─ layouts
│  │  ├─ blank.vue
│  │  ├─ components
│  │  │  ├─ DefaultLayoutWithHorizontalNav.vue
│  │  │  ├─ DefaultLayoutWithVerticalNav.vue
│  │  │  ├─ Footer.vue
│  │  │  ├─ NavBarNotifications.vue
│  │  │  ├─ NavbarShortcuts.vue
│  │  │  ├─ NavbarThemeSwitcher.vue
│  │  │  ├─ NavSearchBar.vue
│  │  │  └─ UserProfile.vue
│  │  └─ default.vue
│  ├─ main.js
│  ├─ navigation
│  │  ├─ horizontal
│  │  │  ├─ apps.js
│  │  │  ├─ charts.js
│  │  │  ├─ dashboard.js
│  │  │  ├─ forms.js
│  │  │  ├─ index.js
│  │  │  ├─ misc.js
│  │  │  ├─ pages.js
│  │  │  ├─ tables.js
│  │  │  └─ ui-elements.js
│  │  └─ vertical
│  │     ├─ apps-and-pages.js
│  │     ├─ charts.js
│  │     ├─ dashboard.js
│  │     ├─ forms.js
│  │     ├─ index.js
│  │     ├─ others.js
│  │     └─ ui-elements.js
│  ├─ pages
│  │  ├─ access-control.vue
│  │  ├─ apps
│  │  │  ├─ academy
│  │  │  │  ├─ course-details.vue
│  │  │  │  ├─ dashboard.vue
│  │  │  │  └─ my-course.vue
│  │  │  ├─ calendar.vue
│  │  │  ├─ chat.vue
│  │  │  ├─ ecommerce
│  │  │  │  ├─ customer
│  │  │  │  │  ├─ details
│  │  │  │  │  │  └─ [id].vue
│  │  │  │  │  └─ list
│  │  │  │  │     └─ index.vue
│  │  │  │  ├─ manage-review.vue
│  │  │  │  ├─ order
│  │  │  │  │  ├─ details
│  │  │  │  │  │  └─ [id].vue
│  │  │  │  │  └─ list
│  │  │  │  │     └─ index.vue
│  │  │  │  ├─ product
│  │  │  │  │  ├─ add
│  │  │  │  │  │  └─ index.vue
│  │  │  │  │  ├─ category-list.vue
│  │  │  │  │  └─ list
│  │  │  │  │     └─ index.vue
│  │  │  │  ├─ referrals.vue
│  │  │  │  └─ settings.vue
│  │  │  ├─ email
│  │  │  │  └─ index.vue
│  │  │  ├─ invoice
│  │  │  │  ├─ add
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ edit
│  │  │  │  │  └─ [id].vue
│  │  │  │  ├─ list
│  │  │  │  │  └─ index.vue
│  │  │  │  └─ preview
│  │  │  │     └─ [id].vue
│  │  │  ├─ logistics
│  │  │  │  ├─ dashboard.vue
│  │  │  │  └─ fleet.vue
│  │  │  ├─ permissions
│  │  │  │  └─ index.vue
│  │  │  ├─ roles
│  │  │  │  └─ index.vue
│  │  │  └─ user
│  │  │     ├─ list
│  │  │     │  └─ index.vue
│  │  │     └─ view
│  │  │        └─ [id].vue
│  │  ├─ charts
│  │  │  ├─ apex-chart.vue
│  │  │  └─ chartjs.vue
│  │  ├─ components
│  │  │  ├─ alert.vue
│  │  │  ├─ avatar.vue
│  │  │  ├─ badge.vue
│  │  │  ├─ button.vue
│  │  │  ├─ chip.vue
│  │  │  ├─ dialog.vue
│  │  │  ├─ expansion-panel.vue
│  │  │  ├─ list.vue
│  │  │  ├─ menu.vue
│  │  │  ├─ pagination.vue
│  │  │  ├─ progress-circular.vue
│  │  │  ├─ progress-linear.vue
│  │  │  ├─ snackbar.vue
│  │  │  ├─ tabs.vue
│  │  │  ├─ timeline.vue
│  │  │  └─ tooltip.vue
│  │  ├─ dashboards
│  │  │  ├─ analytics.vue
│  │  │  ├─ crm.vue
│  │  │  └─ ecommerce.vue
│  │  ├─ extensions
│  │  │  ├─ swiper.vue
│  │  │  └─ tour.vue
│  │  ├─ forgot-password.vue
│  │  ├─ forms
│  │  │  ├─ autocomplete.vue
│  │  │  ├─ checkbox.vue
│  │  │  ├─ combobox.vue
│  │  │  ├─ custom-input.vue
│  │  │  ├─ date-time-picker.vue
│  │  │  ├─ editors.vue
│  │  │  ├─ file-input.vue
│  │  │  ├─ form-layouts.vue
│  │  │  ├─ form-validation.vue
│  │  │  ├─ form-wizard-icons.vue
│  │  │  ├─ form-wizard-numbered.vue
│  │  │  ├─ radio.vue
│  │  │  ├─ range-slider.vue
│  │  │  ├─ rating.vue
│  │  │  ├─ select.vue
│  │  │  ├─ slider.vue
│  │  │  ├─ switch.vue
│  │  │  ├─ textarea.vue
│  │  │  └─ textfield.vue
│  │  ├─ front-pages
│  │  │  ├─ checkout.vue
│  │  │  ├─ help-center
│  │  │  │  ├─ article
│  │  │  │  │  └─ [title].vue
│  │  │  │  └─ index.vue
│  │  │  ├─ landing-page
│  │  │  │  └─ index.vue
│  │  │  ├─ payment.vue
│  │  │  └─ pricing.vue
│  │  ├─ login.vue
│  │  ├─ not-authorized.vue
│  │  ├─ pages
│  │  │  ├─ account-settings
│  │  │  │  └─ [tab].vue
│  │  │  ├─ authentication
│  │  │  │  ├─ forgot-password-v1.vue
│  │  │  │  ├─ forgot-password-v2.vue
│  │  │  │  ├─ login-v1.vue
│  │  │  │  ├─ login-v2.vue
│  │  │  │  ├─ register-multi-steps.vue
│  │  │  │  ├─ register-v1.vue
│  │  │  │  ├─ register-v2.vue
│  │  │  │  ├─ reset-password-v1.vue
│  │  │  │  ├─ reset-password-v2.vue
│  │  │  │  ├─ two-steps-v1.vue
│  │  │  │  ├─ two-steps-v2.vue
│  │  │  │  ├─ verify-email-v1.vue
│  │  │  │  └─ verify-email-v2.vue
│  │  │  ├─ cards
│  │  │  │  ├─ card-actions.vue
│  │  │  │  ├─ card-advance.vue
│  │  │  │  ├─ card-basic.vue
│  │  │  │  ├─ card-statistics.vue
│  │  │  │  └─ card-widgets.vue
│  │  │  ├─ dialog-examples
│  │  │  │  └─ index.vue
│  │  │  ├─ faq.vue
│  │  │  ├─ icons.vue
│  │  │  ├─ misc
│  │  │  │  ├─ coming-soon.vue
│  │  │  │  └─ under-maintenance.vue
│  │  │  ├─ pricing.vue
│  │  │  ├─ typography.vue
│  │  │  └─ user-profile
│  │  │     └─ [tab].vue
│  │  ├─ register.vue
│  │  ├─ tables
│  │  │  ├─ data-table.vue
│  │  │  ├─ simple-table copy.vue
│  │  │  └─ simple-table.vue
│  │  ├─ wizard-examples
│  │  │  ├─ checkout.vue
│  │  │  ├─ create-deal.vue
│  │  │  └─ property-listing.vue
│  │  └─ [...error].vue
│  ├─ plugins
│  │  ├─ 1.router
│  │  │  ├─ additional-routes.js
│  │  │  ├─ guards.js
│  │  │  └─ index.js
│  │  ├─ 2.pinia.js
│  │  ├─ casl
│  │  │  ├─ ability.js
│  │  │  ├─ composables
│  │  │  │  └─ useAbility.js
│  │  │  └─ index.js
│  │  ├─ fake-api
│  │  │  ├─ handlers
│  │  │  │  ├─ app-bar-search
│  │  │  │  │  ├─ db.js
│  │  │  │  │  ├─ index.js
│  │  │  │  │  └─ types.js
│  │  │  │  ├─ apps
│  │  │  │  │  ├─ academy
│  │  │  │  │  │  ├─ db.js
│  │  │  │  │  │  ├─ index.js
│  │  │  │  │  │  └─ types.js
│  │  │  │  │  ├─ calendar
│  │  │  │  │  │  ├─ db.js
│  │  │  │  │  │  ├─ index.js
│  │  │  │  │  │  └─ types.js
│  │  │  │  │  ├─ chat
│  │  │  │  │  │  ├─ db.js
│  │  │  │  │  │  ├─ index.js
│  │  │  │  │  │  └─ types.js
│  │  │  │  │  ├─ ecommerce
│  │  │  │  │  │  ├─ db.js
│  │  │  │  │  │  ├─ index.js
│  │  │  │  │  │  └─ types.js
│  │  │  │  │  ├─ email
│  │  │  │  │  │  ├─ db.js
│  │  │  │  │  │  ├─ index.js
│  │  │  │  │  │  └─ types.js
│  │  │  │  │  ├─ invoice
│  │  │  │  │  │  ├─ db.js
│  │  │  │  │  │  ├─ index.js
│  │  │  │  │  │  └─ types.js
│  │  │  │  │  ├─ logistics
│  │  │  │  │  │  ├─ db.js
│  │  │  │  │  │  ├─ index.js
│  │  │  │  │  │  └─ types.js
│  │  │  │  │  ├─ permission
│  │  │  │  │  │  ├─ db.js
│  │  │  │  │  │  ├─ index.js
│  │  │  │  │  │  └─ types.js
│  │  │  │  │  └─ users
│  │  │  │  │     ├─ db.js
│  │  │  │  │     ├─ index.js
│  │  │  │  │     └─ types.js
│  │  │  │  ├─ auth
│  │  │  │  │  ├─ db.js
│  │  │  │  │  ├─ index.js
│  │  │  │  │  └─ types.js
│  │  │  │  ├─ dashboard
│  │  │  │  │  ├─ db.js
│  │  │  │  │  ├─ index.js
│  │  │  │  │  └─ type.js
│  │  │  │  └─ pages
│  │  │  │     ├─ datatable
│  │  │  │     │  ├─ db.js
│  │  │  │     │  ├─ index.js
│  │  │  │     │  └─ types.js
│  │  │  │     ├─ faq
│  │  │  │     │  ├─ db.js
│  │  │  │     │  ├─ index.js
│  │  │  │     │  └─ types.js
│  │  │  │     ├─ help-center
│  │  │  │     │  ├─ db.js
│  │  │  │     │  ├─ index.js
│  │  │  │     │  └─ types.js
│  │  │  │     └─ profile
│  │  │  │        ├─ db.js
│  │  │  │        ├─ index.js
│  │  │  │        └─ types.js
│  │  │  ├─ index.js
│  │  │  └─ utils
│  │  │     ├─ genId.js
│  │  │     ├─ paginateArray.js
│  │  │     └─ paginationMeta.js
│  │  ├─ i18n
│  │  │  ├─ index.js
│  │  │  └─ locales
│  │  │     ├─ ar.json
│  │  │     ├─ en.json
│  │  │     └─ fr.json
│  │  ├─ iconify
│  │  │  ├─ build-icons.js
│  │  │  ├─ index.js
│  │  │  └─ package.json
│  │  ├─ layouts.js
│  │  ├─ vuetify
│  │  │  ├─ defaults.js
│  │  │  ├─ icons.js
│  │  │  ├─ index.js
│  │  │  └─ theme.js
│  │  └─ webfontloader.js
│  ├─ utils
│  │  ├─ api.js
│  │  └─ constants.js
│  └─ views
│     ├─ apps
│     │  ├─ academy
│     │  │  ├─ AcademyAssignmentProgress.vue
│     │  │  ├─ AcademyCardPopularInstructors.vue
│     │  │  ├─ AcademyCardTopCourses.vue
│     │  │  ├─ AcademyCourseTable.vue
│     │  │  ├─ AcademyMyCourses.vue
│     │  │  └─ AcademyUpcomingWebinar.vue
│     │  ├─ calendar
│     │  │  ├─ CalendarEventHandler.vue
│     │  │  ├─ types.js
│     │  │  ├─ useCalendar.js
│     │  │  └─ useCalendarStore.js
│     │  ├─ chat
│     │  │  ├─ ChatActiveChatUserProfileSidebarContent.vue
│     │  │  ├─ ChatContact.vue
│     │  │  ├─ ChatLeftSidebarContent.vue
│     │  │  ├─ ChatLog.vue
│     │  │  ├─ ChatUserProfileSidebarContent.vue
│     │  │  ├─ useChat.js
│     │  │  └─ useChatStore.js
│     │  ├─ ecommerce
│     │  │  ├─ customer
│     │  │  │  └─ view
│     │  │  │     ├─ CustomerBioPanel.vue
│     │  │  │     ├─ CustomerOrderTable.vue
│     │  │  │     ├─ CustomerTabAddressAndBilling.vue
│     │  │  │     ├─ CustomerTabNotification.vue
│     │  │  │     ├─ CustomerTabOverview.vue
│     │  │  │     └─ CustomerTabSecurity.vue
│     │  │  ├─ EcommerceAddCategoryDrawer.vue
│     │  │  ├─ ECommerceAddCustomerDrawer.vue
│     │  │  ├─ settings
│     │  │  │  ├─ SettingsCheckout.vue
│     │  │  │  ├─ SettingsLocations.vue
│     │  │  │  ├─ SettingsNotifications.vue
│     │  │  │  ├─ SettingsPayment.vue
│     │  │  │  ├─ SettingsShippingAndDelivery.vue
│     │  │  │  └─ SettingsStoreDetails.vue
│     │  │  └─ types.js
│     │  ├─ email
│     │  │  ├─ ComposeDialog.vue
│     │  │  ├─ EmailLeftSidebarContent.vue
│     │  │  ├─ EmailView.vue
│     │  │  └─ useEmail.js
│     │  ├─ invoice
│     │  │  ├─ InvoiceAddPaymentDrawer.vue
│     │  │  ├─ InvoiceEditable.vue
│     │  │  ├─ InvoiceProductEdit.vue
│     │  │  ├─ InvoiceSendInvoiceDrawer.vue
│     │  │  └─ types.js
│     │  ├─ logistics
│     │  │  ├─ LogisticsCardStatistics.vue
│     │  │  ├─ LogisticsDeliveryExpectations.vue
│     │  │  ├─ LogisticsDeliveryPerformance.vue
│     │  │  ├─ LogisticsOrderByCountries.vue
│     │  │  ├─ LogisticsOverviewTable.vue
│     │  │  ├─ LogisticsShipmentStatistics.vue
│     │  │  └─ LogisticsVehicleOverview.vue
│     │  ├─ roles
│     │  │  ├─ RoleCards.vue
│     │  │  └─ UserList.vue
│     │  └─ user
│     │     ├─ list
│     │     │  └─ AddNewUserDrawer.vue
│     │     ├─ types.js
│     │     └─ view
│     │        ├─ UserBioPanel.vue
│     │        ├─ UserInvoiceTable.vue
│     │        ├─ UserTabAccount.vue
│     │        ├─ UserTabBillingsPlans.vue
│     │        ├─ UserTabConnections.vue
│     │        ├─ UserTabNotifications.vue
│     │        └─ UserTabSecurity.vue
│     ├─ charts
│     │  ├─ apex-chart
│     │  │  ├─ ApexChartAreaChart.vue
│     │  │  ├─ ApexChartBalance.vue
│     │  │  ├─ ApexChartDailySalesStates.vue
│     │  │  ├─ ApexChartDataScience.vue
│     │  │  ├─ ApexChartExpenseRatio.vue
│     │  │  ├─ ApexChartHorizontalBar.vue
│     │  │  ├─ ApexChartMobileComparison.vue
│     │  │  ├─ ApexChartNewTechnologiesData.vue
│     │  │  ├─ ApexChartStatistics.vue
│     │  │  └─ ApexChartStocksPrices.vue
│     │  └─ chartjs
│     │     ├─ ChartJsBarChart.vue
│     │     ├─ ChartJsBubbleChart.vue
│     │     ├─ ChartJsHorizontalBarChart.vue
│     │     ├─ ChartJsLineAreaChart.vue
│     │     ├─ ChartJsLineChart.vue
│     │     ├─ ChartJsPolarAreaChart.vue
│     │     ├─ ChartJsRadarChart.vue
│     │     ├─ ChartJsScatterChart.vue
│     │     └─ types.js
│     ├─ dashboards
│     │  ├─ analytics
│     │  │  ├─ AnalyticsEarningReportsWeeklyOverview.vue
│     │  │  ├─ AnalyticsMonthlyCampaignState.vue
│     │  │  ├─ AnalyticsProjectTable.vue
│     │  │  ├─ AnalyticsSalesByCountries.vue
│     │  │  ├─ AnalyticsSalesOverview.vue
│     │  │  ├─ AnalyticsSourceVisits.vue
│     │  │  ├─ AnalyticsSupportTracker.vue
│     │  │  ├─ AnalyticsTotalEarning.vue
│     │  │  └─ AnalyticsWebsiteAnalytics.vue
│     │  ├─ crm
│     │  │  ├─ CrmActiveProject.vue
│     │  │  ├─ CrmActivityTimeline.vue
│     │  │  ├─ CrmAnalyticsSales.vue
│     │  │  ├─ CrmBrowserStates.vue
│     │  │  ├─ CrmEarningReportsYearlyOverview.vue
│     │  │  ├─ CrmProjectStatus.vue
│     │  │  ├─ CrmRecentTransactions.vue
│     │  │  ├─ CrmRevenueGrowth.vue
│     │  │  ├─ CrmSalesAreaCharts.vue
│     │  │  └─ CrmSessionsBarWithGapCharts.vue
│     │  └─ ecommerce
│     │     ├─ EcommerceCongratulationsJohn.vue
│     │     ├─ EcommerceEarningReports.vue
│     │     ├─ EcommerceExpensesRadialBarCharts.vue
│     │     ├─ EcommerceGeneratedLeads.vue
│     │     ├─ EcommerceInvoiceTable.vue
│     │     ├─ EcommerceOrder.vue
│     │     ├─ EcommercePopularProducts.vue
│     │     ├─ EcommerceRevenueReport.vue
│     │     ├─ EcommerceStatistics.vue
│     │     ├─ EcommerceTotalProfitLineCharts.vue
│     │     └─ EcommerceTransactions.vue
│     ├─ demos
│     │  ├─ components
│     │  │  ├─ alert
│     │  │  │  ├─ DemoAlertBasic.vue
│     │  │  │  ├─ DemoAlertBorder.vue
│     │  │  │  ├─ DemoAlertClosable.vue
│     │  │  │  ├─ DemoAlertColoredBorder.vue
│     │  │  │  ├─ DemoAlertColors.vue
│     │  │  │  ├─ DemoAlertDensity.vue
│     │  │  │  ├─ DemoAlertElevation.vue
│     │  │  │  ├─ DemoAlertIcons.vue
│     │  │  │  ├─ DemoAlertOutlined.vue
│     │  │  │  ├─ DemoAlertProminent.vue
│     │  │  │  ├─ DemoAlertTonal.vue
│     │  │  │  ├─ DemoAlertType.vue
│     │  │  │  ├─ DemoAlertVModelSupport.vue
│     │  │  │  └─ demoCodeAlert.js
│     │  │  ├─ avatar
│     │  │  │  ├─ DemoAvatarColors.vue
│     │  │  │  ├─ DemoAvatarGroup.vue
│     │  │  │  ├─ DemoAvatarIcons.vue
│     │  │  │  ├─ DemoAvatarImages.vue
│     │  │  │  ├─ DemoAvatarRounded.vue
│     │  │  │  ├─ DemoAvatarSizes.vue
│     │  │  │  ├─ DemoAvatarTonal.vue
│     │  │  │  └─ demoCodeAvatar.js
│     │  │  ├─ badge
│     │  │  │  ├─ DemoBadgeAvatarStatus.vue
│     │  │  │  ├─ DemoBadgeColor.vue
│     │  │  │  ├─ DemoBadgeDynamicNotifications.vue
│     │  │  │  ├─ DemoBadgeIcon.vue
│     │  │  │  ├─ DemoBadgeMaximumValue.vue
│     │  │  │  ├─ DemoBadgePosition.vue
│     │  │  │  ├─ DemoBadgeShowOnHover.vue
│     │  │  │  ├─ DemoBadgeStyle.vue
│     │  │  │  ├─ DemoBadgeTabs.vue
│     │  │  │  └─ demoCodeBadge.js
│     │  │  ├─ button
│     │  │  │  ├─ DemoButtonBlock.vue
│     │  │  │  ├─ DemoButtonColors.vue
│     │  │  │  ├─ DemoButtonFlat.vue
│     │  │  │  ├─ DemoButtonGroup.vue
│     │  │  │  ├─ DemoButtonIcon.vue
│     │  │  │  ├─ DemoButtonIconOnly.vue
│     │  │  │  ├─ DemoButtonLink.vue
│     │  │  │  ├─ DemoButtonLoaders.vue
│     │  │  │  ├─ DemoButtonOutlined.vue
│     │  │  │  ├─ DemoButtonPlain.vue
│     │  │  │  ├─ DemoButtonRounded.vue
│     │  │  │  ├─ DemoButtonRouter.vue
│     │  │  │  ├─ DemoButtonSizing.vue
│     │  │  │  ├─ DemoButtonText.vue
│     │  │  │  ├─ DemoButtonTonal.vue
│     │  │  │  └─ demoCodeButton.js
│     │  │  ├─ chip
│     │  │  │  ├─ DemoChipClosable.vue
│     │  │  │  ├─ DemoChipColor.vue
│     │  │  │  ├─ DemoChipElevated.vue
│     │  │  │  ├─ DemoChipExpandable.vue
│     │  │  │  ├─ DemoChipInSelects.vue
│     │  │  │  ├─ DemoChipLabel.vue
│     │  │  │  ├─ DemoChipOutlined.vue
│     │  │  │  ├─ DemoChipSizes.vue
│     │  │  │  ├─ DemoChipWithAvatar.vue
│     │  │  │  ├─ DemoChipWithIcon.vue
│     │  │  │  └─ demoCodeChip.js
│     │  │  ├─ dialog
│     │  │  │  ├─ demoCodeDialog.js
│     │  │  │  ├─ DemoDialogBasic.vue
│     │  │  │  ├─ DemoDialogForm.vue
│     │  │  │  ├─ DemoDialogFullscreen.vue
│     │  │  │  ├─ DemoDialogLoader.vue
│     │  │  │  ├─ DemoDialogNesting.vue
│     │  │  │  ├─ DemoDialogOverflowed.vue
│     │  │  │  ├─ DemoDialogPersistent.vue
│     │  │  │  └─ DemoDialogScrollable.vue
│     │  │  ├─ expansion-panel
│     │  │  │  ├─ demoCodeExpansionPanel.js
│     │  │  │  ├─ DemoExpansionPanelAccordion.vue
│     │  │  │  ├─ DemoExpansionPanelBasic.vue
│     │  │  │  ├─ DemoExpansionPanelCustomIcon.vue
│     │  │  │  ├─ DemoExpansionPanelInset.vue
│     │  │  │  ├─ DemoExpansionPanelModel.vue
│     │  │  │  ├─ DemoExpansionPanelPopout.vue
│     │  │  │  └─ DemoExpansionPanelWithBorder.vue
│     │  │  ├─ list
│     │  │  │  ├─ demoCodeList.js
│     │  │  │  ├─ DemoListActionAndItemGroup.vue
│     │  │  │  ├─ DemoListBasic.vue
│     │  │  │  ├─ DemoListDensity.vue
│     │  │  │  ├─ DemoListNav.vue
│     │  │  │  ├─ DemoListProgressList.vue
│     │  │  │  ├─ DemoListRounded.vue
│     │  │  │  ├─ DemoListShaped.vue
│     │  │  │  ├─ DemoListSubGroup.vue
│     │  │  │  ├─ DemoListThreeLine.vue
│     │  │  │  ├─ DemoListTwoLinesAndSubheader.vue
│     │  │  │  └─ DemoListUserList.vue
│     │  │  ├─ menu
│     │  │  │  ├─ demoCodeMenu.js
│     │  │  │  ├─ DemoMenuActivatorAndTooltip.vue
│     │  │  │  ├─ DemoMenuBasic.vue
│     │  │  │  ├─ DemoMenuCustomTransitions.vue
│     │  │  │  ├─ DemoMenuLocation.vue
│     │  │  │  ├─ DemoMenuOpenOnHover.vue
│     │  │  │  └─ DemoMenuPopover.vue
│     │  │  ├─ pagination
│     │  │  │  ├─ demoCodePagination.js
│     │  │  │  ├─ DemoPaginationBasic.vue
│     │  │  │  ├─ DemoPaginationCircle.vue
│     │  │  │  ├─ DemoPaginationColor.vue
│     │  │  │  ├─ DemoPaginationDisabled.vue
│     │  │  │  ├─ DemoPaginationIcons.vue
│     │  │  │  ├─ DemoPaginationLength.vue
│     │  │  │  ├─ DemoPaginationOutline.vue
│     │  │  │  ├─ DemoPaginationOutlineCircle.vue
│     │  │  │  ├─ DemoPaginationSize.vue
│     │  │  │  └─ DemoPaginationTotalVisible.vue
│     │  │  ├─ progress-circular
│     │  │  │  ├─ demoCodeProgressCircular.js
│     │  │  │  ├─ DemoProgressCircularColor.vue
│     │  │  │  ├─ DemoProgressCircularIndeterminate.vue
│     │  │  │  ├─ DemoProgressCircularRotate.vue
│     │  │  │  └─ DemoProgressCircularSize.vue
│     │  │  ├─ progress-linear
│     │  │  │  ├─ demoCodeProgressLinear.js
│     │  │  │  ├─ DemoProgressLinearBuffering.vue
│     │  │  │  ├─ DemoProgressLinearColor.vue
│     │  │  │  ├─ DemoProgressLinearIndeterminate.vue
│     │  │  │  ├─ DemoProgressLinearReversed.vue
│     │  │  │  ├─ DemoProgressLinearRounded.vue
│     │  │  │  ├─ DemoProgressLinearSlots.vue
│     │  │  │  └─ DemoProgressLinearStriped.vue
│     │  │  ├─ snackbar
│     │  │  │  ├─ demoCodeSnackbar.js
│     │  │  │  ├─ DemoSnackbarBasic.vue
│     │  │  │  ├─ DemoSnackbarMultiLine.vue
│     │  │  │  ├─ DemoSnackbarPosition.vue
│     │  │  │  ├─ DemoSnackbarTimeout.vue
│     │  │  │  ├─ DemoSnackbarTransition.vue
│     │  │  │  ├─ DemoSnackbarVariants.vue
│     │  │  │  ├─ DemoSnackbarVertical.vue
│     │  │  │  └─ DemoSnackbarWithAction.vue
│     │  │  ├─ swiper
│     │  │  │  ├─ demoCodeSwiper.js
│     │  │  │  ├─ DemoSwiperAutoplay.vue
│     │  │  │  ├─ DemoSwiperBasic.vue
│     │  │  │  ├─ DemoSwiperCenteredSlidesOption1.vue
│     │  │  │  ├─ DemoSwiperCenteredSlidesOption2.vue
│     │  │  │  ├─ DemoSwiperCoverflowEffect.vue
│     │  │  │  ├─ DemoSwiperCubeEffect.vue
│     │  │  │  ├─ DemoSwiperFade.vue
│     │  │  │  ├─ DemoSwiperGallery.vue
│     │  │  │  ├─ DemoSwiperGrid.vue
│     │  │  │  ├─ DemoSwiperLazyLoading.vue
│     │  │  │  ├─ DemoSwiperMultipleSlidesPerView.vue
│     │  │  │  ├─ DemoSwiperNavigation.vue
│     │  │  │  ├─ DemoSwiperPagination.vue
│     │  │  │  ├─ DemoSwiperProgress.vue
│     │  │  │  ├─ DemoSwiperResponsiveBreakpoints.vue
│     │  │  │  └─ DemoSwiperVirtualSlides.vue
│     │  │  ├─ tabs
│     │  │  │  ├─ demoCodeTabs.js
│     │  │  │  ├─ DemoTabsAlignment.vue
│     │  │  │  ├─ DemoTabsBasic.vue
│     │  │  │  ├─ DemoTabsBasicPill.vue
│     │  │  │  ├─ DemoTabsCustomIcons.vue
│     │  │  │  ├─ DemoTabsDynamic.vue
│     │  │  │  ├─ DemoTabsFixed.vue
│     │  │  │  ├─ DemoTabsGrow.vue
│     │  │  │  ├─ DemoTabsPagination.vue
│     │  │  │  ├─ DemoTabsProgrammaticNavigation.vue
│     │  │  │  ├─ DemoTabsStacked.vue
│     │  │  │  ├─ DemoTabsVertical.vue
│     │  │  │  └─ DemoTabsVerticalPill.vue
│     │  │  ├─ timeline
│     │  │  │  ├─ TimelineBasic.vue
│     │  │  │  ├─ TimelineCard.vue
│     │  │  │  └─ TimelineWithIcons.vue
│     │  │  └─ tooltip
│     │  │     ├─ demoCodeTooltip.js
│     │  │     ├─ DemoTooltipDelayOnHover.vue
│     │  │     ├─ DemoTooltipEvents.vue
│     │  │     ├─ DemoTooltipLocation.vue
│     │  │     ├─ DemoTooltipTooltipOnVariousElements.vue
│     │  │     ├─ DemoTooltipTransition.vue
│     │  │     └─ DemoTooltipVModelSupport.vue
│     │  └─ forms
│     │     ├─ form-elements
│     │     │  ├─ autocomplete
│     │     │  │  ├─ DemoAutocompleteAsyncItems.vue
│     │     │  │  ├─ DemoAutocompleteBasic.vue
│     │     │  │  ├─ DemoAutocompleteChips.vue
│     │     │  │  ├─ DemoAutocompleteClearable.vue
│     │     │  │  ├─ DemoAutocompleteCustomFilter.vue
│     │     │  │  ├─ DemoAutocompleteDensity.vue
│     │     │  │  ├─ DemoAutocompleteMultiple.vue
│     │     │  │  ├─ DemoAutocompleteSlots.vue
│     │     │  │  ├─ DemoAutocompleteStateSelector.vue
│     │     │  │  ├─ DemoAutocompleteValidation.vue
│     │     │  │  ├─ DemoAutocompleteVariant.vue
│     │     │  │  └─ demoCodeAutocomplete.js
│     │     │  ├─ checkbox
│     │     │  │  ├─ DemoCheckboxBasic.vue
│     │     │  │  ├─ DemoCheckboxCheckboxValue.vue
│     │     │  │  ├─ DemoCheckboxColors.vue
│     │     │  │  ├─ DemoCheckboxDensity.vue
│     │     │  │  ├─ DemoCheckboxIcon.vue
│     │     │  │  ├─ DemoCheckboxInlineTextField.vue
│     │     │  │  ├─ DemoCheckboxLabelSlot.vue
│     │     │  │  ├─ DemoCheckboxModelAsArray.vue
│     │     │  │  ├─ DemoCheckboxStates.vue
│     │     │  │  └─ demoCodeCheckbox.js
│     │     │  ├─ combobox
│     │     │  │  ├─ demoCodeCombobox.js
│     │     │  │  ├─ DemoComboboxBasic.vue
│     │     │  │  ├─ DemoComboboxClearable.vue
│     │     │  │  ├─ DemoComboboxDensity.vue
│     │     │  │  ├─ DemoComboboxMultiple.vue
│     │     │  │  ├─ DemoComboboxNoDataWithChips.vue
│     │     │  │  └─ DemoComboboxVariant.vue
│     │     │  ├─ custom-input
│     │     │  │  ├─ demoCodeCustomInput.js
│     │     │  │  ├─ DemoCustomInputCustomCheckboxes.vue
│     │     │  │  ├─ DemoCustomInputCustomCheckboxesWithIcon.vue
│     │     │  │  ├─ DemoCustomInputCustomCheckboxesWithImage.vue
│     │     │  │  ├─ DemoCustomInputCustomRadios.vue
│     │     │  │  ├─ DemoCustomInputCustomRadiosWithIcon.vue
│     │     │  │  └─ DemoCustomInputCustomRadiosWithImage.vue
│     │     │  ├─ date-time-picker
│     │     │  │  ├─ demoCodeDateTimePicker.js
│     │     │  │  ├─ DemoDateTimePickerBasic.vue
│     │     │  │  ├─ DemoDateTimePickerDateAndTime.vue
│     │     │  │  ├─ DemoDateTimePickerDisabledRange.vue
│     │     │  │  ├─ DemoDateTimePickerHumanFriendly.vue
│     │     │  │  ├─ DemoDateTimePickerInline.vue
│     │     │  │  ├─ DemoDateTimePickerMultipleDates.vue
│     │     │  │  ├─ DemoDateTimePickerRange.vue
│     │     │  │  └─ DemoDateTimePickerTimePicker.vue
│     │     │  ├─ editor
│     │     │  │  ├─ demoCodeEditor.js
│     │     │  │  ├─ DemoEditorBasicEditor.vue
│     │     │  │  └─ DemoEditorCustomEditor.vue
│     │     │  ├─ file-input
│     │     │  │  ├─ demoCodeFileInput.js
│     │     │  │  ├─ DemoFileInputAccept.vue
│     │     │  │  ├─ DemoFileInputBasic.vue
│     │     │  │  ├─ DemoFileInputChips.vue
│     │     │  │  ├─ DemoFileInputCounter.vue
│     │     │  │  ├─ DemoFileInputDensity.vue
│     │     │  │  ├─ DemoFileInputLoading.vue
│     │     │  │  ├─ DemoFileInputMultiple.vue
│     │     │  │  ├─ DemoFileInputPrependIcon.vue
│     │     │  │  ├─ DemoFileInputSelectionSlot.vue
│     │     │  │  ├─ DemoFileInputShowSize.vue
│     │     │  │  ├─ DemoFileInputValidation.vue
│     │     │  │  └─ DemoFileInputVariant.vue
│     │     │  ├─ otp-input
│     │     │  │  ├─ demoCodeOtpInput.js
│     │     │  │  ├─ DemoOtpInputBasic.vue
│     │     │  │  ├─ DemoOtpInputFinish.vue
│     │     │  │  └─ DemoOtpInputHidden.vue
│     │     │  ├─ radio
│     │     │  │  ├─ demoCodeRadio.js
│     │     │  │  ├─ DemoRadioBasic.vue
│     │     │  │  ├─ DemoRadioColors.vue
│     │     │  │  ├─ DemoRadioDensity.vue
│     │     │  │  ├─ DemoRadioIcon.vue
│     │     │  │  ├─ DemoRadioInline.vue
│     │     │  │  ├─ DemoRadioLabelSlot.vue
│     │     │  │  └─ DemoRadioValidation.vue
│     │     │  ├─ range-slider
│     │     │  │  ├─ demoCodeRangeSlider.js
│     │     │  │  ├─ DemoRangeSliderBasic.vue
│     │     │  │  ├─ DemoRangeSliderColor.vue
│     │     │  │  ├─ DemoRangeSliderDisabled.vue
│     │     │  │  ├─ DemoRangeSliderStep.vue
│     │     │  │  ├─ DemoRangeSliderThumbLabel.vue
│     │     │  │  └─ DemoRangeSliderVertical.vue
│     │     │  ├─ rating
│     │     │  │  ├─ demoCodeRating.js
│     │     │  │  ├─ DemoRatingBasic.vue
│     │     │  │  ├─ DemoRatingClearable.vue
│     │     │  │  ├─ DemoRatingColors.vue
│     │     │  │  ├─ DemoRatingDensity.vue
│     │     │  │  ├─ DemoRatingHover.vue
│     │     │  │  ├─ DemoRatingIncremented.vue
│     │     │  │  ├─ DemoRatingItemSlot.vue
│     │     │  │  ├─ DemoRatingLength.vue
│     │     │  │  ├─ DemoRatingReadonly.vue
│     │     │  │  └─ DemoRatingSize.vue
│     │     │  ├─ select
│     │     │  │  ├─ demoCodeSelect.js
│     │     │  │  ├─ DemoSelectBasic.vue
│     │     │  │  ├─ DemoSelectChips.vue
│     │     │  │  ├─ DemoSelectCustomTextAndValue.vue
│     │     │  │  ├─ DemoSelectDensity.vue
│     │     │  │  ├─ DemoSelectIcons.vue
│     │     │  │  ├─ DemoSelectMenuProps.vue
│     │     │  │  ├─ DemoSelectMultiple.vue
│     │     │  │  ├─ DemoSelectSelectionSlot.vue
│     │     │  │  └─ DemoSelectVariant.vue
│     │     │  ├─ slider
│     │     │  │  ├─ demoCodeSlider.js
│     │     │  │  ├─ DemoSliderAppendAndPrepend.vue
│     │     │  │  ├─ DemoSliderAppendTextField.vue
│     │     │  │  ├─ DemoSliderBasic.vue
│     │     │  │  ├─ DemoSliderColors.vue
│     │     │  │  ├─ DemoSliderDisabledAndReadonly.vue
│     │     │  │  ├─ DemoSliderIcons.vue
│     │     │  │  ├─ DemoSliderMinAndMax.vue
│     │     │  │  ├─ DemoSliderSize.vue
│     │     │  │  ├─ DemoSliderStep.vue
│     │     │  │  ├─ DemoSliderThumb.vue
│     │     │  │  ├─ DemoSliderTicks.vue
│     │     │  │  ├─ DemoSliderValidation.vue
│     │     │  │  └─ DemoSliderVertical.vue
│     │     │  ├─ switch
│     │     │  │  ├─ demoCodeSwitch.js
│     │     │  │  ├─ DemoSwitchBasic.vue
│     │     │  │  ├─ DemoSwitchColors.vue
│     │     │  │  ├─ DemoSwitchInset.vue
│     │     │  │  ├─ DemoSwitchLabelSlot.vue
│     │     │  │  ├─ DemoSwitchModelAsArray.vue
│     │     │  │  ├─ DemoSwitchStates.vue
│     │     │  │  └─ DemoSwitchTrueAndFalseValue.vue
│     │     │  ├─ textarea
│     │     │  │  ├─ demoCodeTextarea.js
│     │     │  │  ├─ DemoTextareaAutoGrow.vue
│     │     │  │  ├─ DemoTextareaBasic.vue
│     │     │  │  ├─ DemoTextareaBrowserAutocomplete.vue
│     │     │  │  ├─ DemoTextareaClearable.vue
│     │     │  │  ├─ DemoTextareaCounter.vue
│     │     │  │  ├─ DemoTextareaIcons.vue
│     │     │  │  ├─ DemoTextareaNoResize.vue
│     │     │  │  ├─ DemoTextareaRows.vue
│     │     │  │  ├─ DemoTextareaStates.vue
│     │     │  │  ├─ DemoTextareaValidation.vue
│     │     │  │  └─ DemoTextareaVariant.vue
│     │     │  └─ textfield
│     │     │     ├─ demoCodeTextfield.js
│     │     │     ├─ DemoTextfieldBasic.vue
│     │     │     ├─ DemoTextfieldClearable.vue
│     │     │     ├─ DemoTextfieldCounter.vue
│     │     │     ├─ DemoTextfieldCustomColors.vue
│     │     │     ├─ DemoTextfieldDensity.vue
│     │     │     ├─ DemoTextfieldIconEvents.vue
│     │     │     ├─ DemoTextfieldIcons.vue
│     │     │     ├─ DemoTextfieldIconSlots.vue
│     │     │     ├─ DemoTextfieldLabelSlot.vue
│     │     │     ├─ DemoTextfieldPasswordInput.vue
│     │     │     ├─ DemoTextfieldPrefixesAndSuffixes.vue
│     │     │     ├─ DemoTextfieldSingleLine.vue
│     │     │     ├─ DemoTextfieldState.vue
│     │     │     ├─ DemoTextfieldValidation.vue
│     │     │     └─ DemoTextfieldVariant.vue
│     │     ├─ form-layout
│     │     │  ├─ demoCodeFormLayout.js
│     │     │  ├─ DemoFormLayoutCollapsible.vue
│     │     │  ├─ DemoFormLayoutFormHint.vue
│     │     │  ├─ DemoFormLayoutFormSticky.vue
│     │     │  ├─ DemoFormLayoutFormValidation.vue
│     │     │  ├─ DemoFormLayoutFormWithTabs.vue
│     │     │  ├─ DemoFormLayoutHorizontalForm.vue
│     │     │  ├─ DemoFormLayoutHorizontalFormWithIcons.vue
│     │     │  ├─ DemoFormLayoutMultipleColumn.vue
│     │     │  ├─ DemoFormLayoutSticky.vue
│     │     │  ├─ DemoFormLayoutVerticalForm.vue
│     │     │  └─ DemoFormLayoutVerticalFormWithIcons.vue
│     │     ├─ form-validation
│     │     │  ├─ demoCodeFormValidation.js
│     │     │  ├─ DemoFormValidationSimpleFormValidation.vue
│     │     │  ├─ DemoFormValidationValidatingMultipleRules.vue
│     │     │  └─ DemoFormValidationValidationTypes.vue
│     │     ├─ form-wizard
│     │     │  ├─ form-wizard-icons
│     │     │  │  ├─ demoCodeFormWizardIcons.js
│     │     │  │  ├─ DemoFormWizardIconsBasic.vue
│     │     │  │  ├─ DemoFormWizardIconsModernBasic.vue
│     │     │  │  ├─ DemoFormWizardIconsModernVertical.vue
│     │     │  │  ├─ DemoFormWizardIconsValidation.vue
│     │     │  │  └─ DemoFormWizardIconsVertical.vue
│     │     │  └─ form-wizard-numbered
│     │     │     ├─ demoCodeFormWizardNumbered.js
│     │     │     ├─ DemoFormWizardNumberdModernBasic.vue
│     │     │     ├─ DemoFormWizardNumberedBasic.vue
│     │     │     ├─ DemoFormWizardNumberedModernVertical.vue
│     │     │     ├─ DemoFormWizardNumberedValidation.vue
│     │     │     └─ DemoFormWizardNumberedVertical.vue
│     │     └─ tables
│     │        ├─ data-table
│     │        │  ├─ datatable.js
│     │        │  ├─ demoCodeDataTable.js
│     │        │  ├─ DemoDataTableBasic.vue
│     │        │  ├─ DemoDataTableCellSlot.vue
│     │        │  ├─ DemoDataTableDense.vue
│     │        │  ├─ DemoDataTableExpandableRows.vue
│     │        │  ├─ DemoDataTableExternalPagination.vue
│     │        │  ├─ DemoDataTableFixedHeader.vue
│     │        │  ├─ DemoDataTableGroupingRows.vue
│     │        │  ├─ DemoDataTableKitchenSink.vue
│     │        │  ├─ DemoDataTableRowEditingViaDialog.vue
│     │        │  └─ DemoDataTableRowSelection.vue
│     │        └─ simple-table
│     │           ├─ demoCodeSimpleTable.js
│     │           ├─ DemoSimpleTableBasic.vue
│     │           ├─ DemoSimpleTableDensity.vue
│     │           ├─ DemoSimpleTableFixedHeader.vue
│     │           ├─ DemoSimpleTableHeight.vue
│     │           └─ DemoSimpleTableTheme.vue
│     ├─ front-pages
│     │  ├─ front-page-footer.vue
│     │  ├─ front-page-navbar.vue
│     │  └─ landing-page
│     │     ├─ banner.vue
│     │     ├─ contact-us.vue
│     │     ├─ customers-review.vue
│     │     ├─ faq-section.vue
│     │     ├─ features.vue
│     │     ├─ hero-section.vue
│     │     ├─ our-team.vue
│     │     ├─ pricing-plans.vue
│     │     └─ product-stats.vue
│     ├─ pages
│     │  ├─ account-settings
│     │  │  ├─ AccountSettingsAccount.vue
│     │  │  ├─ AccountSettingsBillingAndPlans.vue
│     │  │  ├─ AccountSettingsConnections.vue
│     │  │  ├─ AccountSettingsNotification.vue
│     │  │  ├─ AccountSettingsSecurity.vue
│     │  │  └─ BillingHistoryTable.vue
│     │  ├─ authentication
│     │  │  └─ AuthProvider.vue
│     │  ├─ cards
│     │  │  ├─ card-advance
│     │  │  │  ├─ CardAdvanceActiveProject.vue
│     │  │  │  ├─ CardAdvanceActivityTimeline.vue
│     │  │  │  ├─ CardAdvanceAssignmentProgress.vue
│     │  │  │  ├─ CardAdvanceBrowserStates.vue
│     │  │  │  ├─ CardAdvanceCongratulationsJohn.vue
│     │  │  │  ├─ CardAdvanceDeliveryPerformance.vue
│     │  │  │  ├─ CardAdvanceEarningReports.vue
│     │  │  │  ├─ CardAdvanceLastTransaction.vue
│     │  │  │  ├─ CardAdvanceMonthlyCampaignState.vue
│     │  │  │  ├─ CardAdvanceOrder.vue
│     │  │  │  ├─ CardAdvancePopularInstructor.vue
│     │  │  │  ├─ CardAdvancePopularProducts.vue
│     │  │  │  ├─ CardAdvanceSalesByCountries.vue
│     │  │  │  ├─ CardAdvanceSourceVisits.vue
│     │  │  │  ├─ CardAdvanceTopCourses.vue
│     │  │  │  ├─ CardAdvanceTransactions.vue
│     │  │  │  ├─ CardAdvanceUpcomingWebinar.vue
│     │  │  │  ├─ CardAdvanceVehicleCondition.vue
│     │  │  │  └─ CardAdvanceWebsiteAnalytics.vue
│     │  │  ├─ card-basic
│     │  │  │  ├─ CardBasic.vue
│     │  │  │  ├─ CardNavigation.vue
│     │  │  │  └─ CardSolid.vue
│     │  │  ├─ card-statistics
│     │  │  │  ├─ CardStatistics.vue
│     │  │  │  ├─ CardStatisticsAverageDailySales.vue
│     │  │  │  ├─ CardStatisticsDailyTraffic.vue
│     │  │  │  ├─ CardStatisticsExpensesRadialBarCharts.vue
│     │  │  │  ├─ CardStatisticsGeneratedLeads.vue
│     │  │  │  ├─ CardStatisticsImpressionLineCharts.vue
│     │  │  │  ├─ CardStatisticsOrderBarCharts.vue
│     │  │  │  ├─ CardStatisticsRevenueGrowth.vue
│     │  │  │  ├─ CardStatisticsSalesAreaCharts.vue
│     │  │  │  ├─ CardStatisticsSalesOverview.vue
│     │  │  │  ├─ CardStatisticsSessionsBarWithGapCharts.vue
│     │  │  │  ├─ CardStatisticsTotalGrowthAreaCharts.vue
│     │  │  │  ├─ CardStatisticsTotalProfitLineCharts.vue
│     │  │  │  ├─ CardStatisticsTransactions.vue
│     │  │  │  └─ CardStatisticsVehicleCharts.vue
│     │  │  └─ card-widgets
│     │  │     ├─ CardWidgetsCarrierPerformace.vue
│     │  │     ├─ CardWidgetsDeliveryExpectations.vue
│     │  │     ├─ CardWidgetsEarningReportsWeeklyOverview.vue
│     │  │     ├─ CardWidgetsEarningReportsYearlyOverview.vue
│     │  │     ├─ CardWidgetsProjectStatus.vue
│     │  │     ├─ CardWidgetsRevenueReport.vue
│     │  │     ├─ CardWidgetsSales.vue
│     │  │     ├─ CardWidgetsSupportTracker.vue
│     │  │     ├─ CardWidgetsTopicsInterested.vue
│     │  │     ├─ CardWidgetsTotalEarning.vue
│     │  │     └─ CardWidgetVechicleOverview.vue
│     │  ├─ help-center
│     │  │  ├─ HelpCenterLandingArticlesOverview.vue
│     │  │  ├─ HelpCenterLandingFooter.vue
│     │  │  └─ HelpCenterLandingKnowledgeBase.vue
│     │  ├─ typography
│     │  │  ├─ TypographyHeadlines.vue
│     │  │  └─ TypographyTexts.vue
│     │  └─ user-profile
│     │     ├─ connections
│     │     │  └─ index.vue
│     │     ├─ profile
│     │     │  ├─ About.vue
│     │     │  ├─ ActivityTimeline.vue
│     │     │  ├─ Connection.vue
│     │     │  ├─ index.vue
│     │     │  ├─ ProjectList.vue
│     │     │  └─ Teams.vue
│     │     ├─ projects
│     │     │  └─ index.vue
│     │     ├─ team
│     │     │  └─ index.vue
│     │     └─ UserProfileHeader.vue
│     └─ wizard-examples
│        ├─ checkout
│        │  ├─ Address.vue
│        │  ├─ Cart.vue
│        │  ├─ Confirmation.vue
│        │  ├─ Payment.vue
│        │  └─ types.js
│        ├─ create-deal
│        │  ├─ DealDetails.vue
│        │  ├─ DealReviewComplete.vue
│        │  ├─ DealType.vue
│        │  ├─ DealUsage.vue
│        │  └─ types.js
│        └─ property-listing
│           ├─ PersonalDetails.vue
│           ├─ PriceDetails.vue
│           ├─ PropertyArea.vue
│           ├─ PropertyDetails.vue
│           ├─ PropertyFeatures.vue
│           └─ types.js
├─ themeConfig.js
├─ typed-router.d.ts
└─ vite.config.js

```
