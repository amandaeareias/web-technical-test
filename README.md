# Technical Test

App that fetches data from the [Magic the Gathering API](https://docs.magicthegathering.io/).

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Code structure](#code-structure)
- [CSS](#css)
- [3rd Party Libraries](#3rd-party-libraries)

---

## Getting Started

Follow the next instructions to get a copy of the project up and running in your local machine.

### Prerequisites

- Install [Node](https://nodejs.org/).

### Installation

Run the following commands:
```
git clone https://github.com/21Buttons/web-technical-test
npm install
```

### Development

Run the following command:
```
npm run dev
```

### Code Structure

This is the folder structure:

```
|
|-- pages/                      Next.js pages
|-- src                         Source code
|   |-- apis/                   APIs (magic)
|   |-- assets/                 Assets (images, fonts, etc...)
|   |-- components/             Dumb components
|   |-- containers/             Containers AKA smart components
|   |-- hoc/                    High order components
|   |-- scss/                   SCSS files using ITCSS
|   |-- store/                  Global store using Redux
|   `-- utils/                  Util libs
|-- .gitignore                  Files that GIT will ignore
|-- next.config.js              Next.js configuration file
|-- package.json                npm configuration and dependencies
|-- package-lock.json           npm fixed version dependencies
|-- README.md                   Your are looking at it
|-- webpack.junk.js             Fake webpack config for IDE settings
```

## CSS

Our CSS architecture is using [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/).
We are also using [BEM Methodology](https://css-tricks.com/bem-101/) for components.

## 3rd Party Libraries

In this project, we used three 3rd party libraries ([axios](https://github.com/axios/axios),
[normalizr](https://github.com/paularmstrong/normalizr) and [swiper](https://github.com/nolimits4web/swiper)).

- [axios](https://github.com/axios/axios): To fetch the data from the API.
- [normalizr](https://github.com/paularmstrong/normalizr): It normalizes the data coming from the API.
- [swiper](https://github.com/nolimits4web/swiper): To show the item list in a mobile friendly way.

