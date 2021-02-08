![](./src/assets/readme/banner.png)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<p align="center">
  <a href="https://github.com/joanasesinando/gerador-horarios-ist/releases/" target="_blank">
    <img alt="GitHub release" src="https://img.shields.io/github/v/release/joanasesinando/gerador-horarios-ist?include_prereleases&style=flat-square">
  </a>

  <a href="https://github.com/joanasesinando/gerador-horarios-ist/commits/master" target="_blank">
    <img src="https://img.shields.io/github/last-commit/joanasesinando/gerador-horarios-ist?style=flat-square" alt="GitHub last commit">
  </a>

  </br>

<a href="https://github.com/joanasesinando/gerador-horarios-ist/issues" target="_blank">
    <img src="https://img.shields.io/github/issues/joanasesinando/gerador-horarios-ist?style=flat-square&color=red" alt="GitHub issues">
  </a>

  <a href="https://github.com/joanasesinando/gerador-horarios-ist/pulls" target="_blank">
    <img src="https://img.shields.io/github/issues-pr/joanasesinando/gerador-horarios-ist?style=flat-square&color=blue" alt="GitHub pull requests">
  </a>

  <a href="https://github.com/joanasesinando/gerador-horarios-ist#contribute" target="_blank">
    <img alt="Contributors" src="https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square">
  </a>

  <a href="https://github.com/joanasesinando/gerador-horarios-ist/blob/master/LICENSE" target="_blank">
    <img alt="LICENSE" src="https://img.shields.io/github/license/joanasesinando/gerador-horarios-ist?style=flat-square&color=yellow">
  <a/>
</p>
<hr>
<h1>Gerador Horários | IST</h1>

A schedule generator for [IST](https://tecnico.ulisboa.pt/en/ )'s students to plan their student schedule for the upcoming semester.

*This application makes use of the IST [API](https://fenixedu.org/dev/api/ ) to get information about academic terms, degrees, courses and respective timetables.*

<p align="center">
  <img alt='logo' src='./src/assets/readme/logo.png'>
</p>

<p align="center">
  <img alt="GitHub release" src="https://raw.githubusercontent.com/joanasesinando/gerador-horarios-ist/master/src/assets/readme/presentation.gif">
</p>

# Table of contents

- [Usage](#usage)
- [Development](#development)
  - [Adding to Chrome](#adding-to-chrome)
  - [Adding to Firefox](#adding-to-firefox)
- [Contribute](#contribute)

# Usage

After adding the extension to Chrome/Firefox, it will light-up everytime you load a compatable website.

When a page is loaded, the extension would hide all the images in the page and only show images that have been classified as **NOT NSFW**.

You can toggle(off/on) the extension from the ```chrome://extensions``` page in Chrome and ```about:debugging#/runtime/this-firefox``` in Firefox.

Open popup window to change NSFW Filter settings

<table>
  <tr>
    <td vlign="center">
      <img src="./demo/images/pin_popup.png" alt="Pin popup window">
    </td>
    <td vlign="center">
      <img src="./demo/images/popup.png" alt="Popup window">
    </td>
  </tr>
</table>


# Development

*This project was generated with [Angular CLI](https://cli.angular.io/) version 10.0.6.*
<hr>

### Run
Clone this repository and navigate inside the project folder and install the dependencies by running:

```sh
npm install
```

After installing the dependencies, run a dev server by executing:

```sh
ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
<hr>

### Code scaffolding
To generate a new component run:

```sh
ng generate component component-name
```

You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
<hr>

### Build
To build the project run:

```sh
ng build
```

The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
<hr>

### Test
To execute the unit tests via [Karma](https://karma-runner.github.io) run:

```sh
ng test
```
<hr>

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Contribute

# License
[MIT](https://github.com/joanasesinando/gerador-horarios-ist/edit/master/README.md)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/joanasesinando"><img src="https://avatars.githubusercontent.com/u/43472922?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Joana Sesinando</b></sub></a><br /><a href="https://github.com/joanasesinando/gerador-horarios-ist/commits?author=joanasesinando" title="Code">💻</a> <a href="#design-joanasesinando" title="Design">🎨</a> <a href="#translation-joanasesinando" title="Translation">🌍</a> <a href="https://github.com/joanasesinando/gerador-horarios-ist/commits?author=joanasesinando" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!