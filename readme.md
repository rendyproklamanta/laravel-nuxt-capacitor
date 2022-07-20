This version is modified from : https://github.com/fumeapp/laranuxt

<br>

* [NUXT v3](https://v3.nuxtjs.org) front end, a progressive Vue.js framework - For Nuxt v2 visit [this branch](https://github.com/fumeapp/laranuxt/tree/nuxt2)
  * [tailvue](https://github.com/fumeapp/tailvue) a collection of components built for Nuxt.js, powered by WindiCSS|TailwindCSS
  * Authentication library to assist with user sessions and logging in/out
  * Example Authentication Middleware

* [Laravel](https://laravel.com) - for our API - `v9.7.0`
  * [Model Typer](https://github.com/fumeapp/modeltyper) - Generates Typescript interfaces from Laravel Models 
  * [MetAPI](https://github.com/acidjazz/metapi) - API helpers and utilities
  * [debugbar](https://github.com/barryvdh/laravel-debugbar) - awesome debugbar for our API
  * [ide-helper](https://github.com/barryvdh/laravel-ide-helper) - Helper files to enable help with IDE autocompletion
* CapacitorJS included for mobile deployment

<br>

### Installation

* clone from GitHub
* run `yarn` and `composer install` to install all of your deps
* copy `.env.example` to `.env` and configure it to your likings

```
php artisan key:generate
yarn seed
```


### Local Environment
```
yarn dev
yarn api
```
- http://localhost:3000 (frontend)
- http://localhost:8000 (API)

### Run capacitor on android / ios
```
npx cap add android
yarn buildcap (build capacitor)
npx cap open android
```

### Api and Authentication

* Api and auth can be accessed via the provided `$api` library

```ts
const { $api } = useNuxtApp()
console.log($api.$user.name);
```